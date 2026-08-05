import { supabase } from "@/integrations/supabase/client";
import { FunctionsHttpError } from "@supabase/supabase-js";

export interface FormEmailPayload {
  formType: string;
  subject: string;
  name: string;
  email: string;
  fields?: Record<string, string>;
}

/** Envia qualquer formulário do site para o email institucional AfroSonora. */
export async function sendFormEmail(payload: FormEmailPayload): Promise<void> {
  const { error } = await supabase.functions.invoke("send-form-email", {
    body: { ...payload, fields: payload.fields ?? {} },
  });

  if (error) {
    const details =
      error instanceof FunctionsHttpError ? await error.context.text() : error.message;
    console.error("send-form-email falhou:", details);
    throw new Error("Não foi possível enviar a mensagem. Tente novamente.");
  }
}
