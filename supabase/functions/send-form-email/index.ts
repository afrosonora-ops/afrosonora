import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3.23.8';

const DESTINATION = 'afrosonora@gmail.com';

const BodySchema = z.object({
  formType: z.string().trim().min(1).max(80),
  subject: z.string().trim().min(1).max(200),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  fields: z.record(z.string().max(5000)).default({}),
});

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// --- Controlo de origem ---
const ALLOWED_HOST_SUFFIXES = ['afrosonora.com', 'lovable.app', 'lovableproject.com', 'localhost'];

const isAllowedOrigin = (origin: string | null) => {
  if (!origin) return false;
  try {
    const host = new URL(origin).hostname;
    return ALLOWED_HOST_SUFFIXES.some((s) => host === s || host.endsWith(`.${s}`));
  } catch {
    return false;
  }
};

// --- Rate limiting em memória (por IP): 5 pedidos / 10 min ---
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return false;
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método não permitido' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  if (!isAllowedOrigin(req.headers.get('origin'))) {
    return new Response(JSON.stringify({ error: 'Origem não autorizada' }), {
      status: 403,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('cf-connecting-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: 'Demasiados pedidos. Tente novamente mais tarde.' }), {
      status: 429,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }


  try {
    const apiKey = Deno.env.get('RESEND_API_KEY');
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'RESEND_API_KEY não configurada' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { formType, subject, name, email, fields } = parsed.data;

    const rows = Object.entries({ Nome: name, Email: email, ...fields })
      .filter(([, v]) => v && String(v).trim().length > 0)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;vertical-align:top;">${escapeHtml(
            k,
          )}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-wrap;">${escapeHtml(
            String(v),
          )}</td></tr>`,
      )
      .join('');

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#121212;">
        <h2 style="margin:0 0 4px;">Novo formulário: ${escapeHtml(formType)}</h2>
        <p style="margin:0 0 16px;color:#666;">Enviado através do site AfroSonora</p>
        <table style="border-collapse:collapse;width:100%;max-width:640px;">${rows}</table>
      </div>`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AfroSonora <onboarding@resend.dev>',
        to: [DESTINATION],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const details = await res.text();
      console.error(`Resend falhou [${res.status}]: ${details}`);
      return new Response(JSON.stringify({ error: 'Falha no envio', status: res.status, details }), {
        status: res.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-form-email error:', err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
