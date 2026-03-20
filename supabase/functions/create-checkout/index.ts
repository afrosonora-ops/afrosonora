import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      throw new Error("Stripe não configurado. Contacte o administrador.");
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("Utilizador não autenticado.");
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError || !user) {
      throw new Error("Utilizador não autenticado.");
    }

    const { planSlug, billingPeriod } = await req.json();

    const plans: Record<string, { name: string; monthlyPrice: number; annualPrice: number }> = {
      essencial: { name: "Cartão de Membro AFROSONORA", monthlyPrice: 400, annualPrice: 4000 },
      premium: { name: "Premium", monthlyPrice: 900, annualPrice: 9000 },
      pro: { name: "Pro", monthlyPrice: 2500, annualPrice: 25000 },
    };

    const plan = plans[planSlug];
    if (!plan) {
      throw new Error("Plano inválido.");
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    // Find or create Stripe customer
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId: string;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    } else {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { supabase_user_id: user.id },
      });
      customerId = customer.id;
    }

    const isAnnual = billingPeriod === "annual";
    const unitAmount = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    const interval = isAnnual ? "year" : "month";

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `AFROSONORA ${plan.name} (${isAnnual ? "Anual" : "Mensal"})`,
            },
            unit_amount: unitAmount,
            recurring: { interval },
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get("origin")}/painel?checkout=success`,
      cancel_url: `${req.headers.get("origin")}/planos?checkout=cancelled`,
      metadata: {
        supabase_user_id: user.id,
        plan_slug: planSlug,
        billing_period: billingPeriod,
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
