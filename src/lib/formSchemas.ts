import { z } from "zod";

export const emailSchema = z
  .string()
  .trim()
  .min(1, { message: "Email obrigatório" })
  .email({ message: "Email inválido" })
  .max(255, { message: "Email demasiado longo" });

export const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Nome demasiado curto" }).max(120, { message: "Máx. 120 caracteres" }),
  email: emailSchema,
  subject: z.string().trim().min(2, { message: "Assunto demasiado curto" }).max(150, { message: "Máx. 150 caracteres" }),
  message: z.string().trim().min(10, { message: "Mensagem demasiado curta" }).max(2000, { message: "Máx. 2000 caracteres" }),
});

export const partnerSchema = z.object({
  company: z.string().trim().min(2, { message: "Nome da empresa demasiado curto" }).max(150, { message: "Máx. 150 caracteres" }),
  name: z.string().trim().min(2, { message: "Nome demasiado curto" }).max(120, { message: "Máx. 120 caracteres" }),
  email: emailSchema,
  type: z.string().trim().max(100, { message: "Máx. 100 caracteres" }).optional().or(z.literal("")),
  message: z.string().trim().min(10, { message: "Mensagem demasiado curta" }).max(2000, { message: "Máx. 2000 caracteres" }),
});

/** Devolve a primeira mensagem de erro de um safeParse falhado. */
export function firstError(error: z.ZodError): string {
  return error.issues[0]?.message ?? "Dados inválidos";
}
