import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Merci d'indiquer votre nom (au moins 2 caractères).")
    .max(80, "Votre nom est trop long (80 caractères maximum)."),
  email: z
    .string()
    .trim()
    .email("L'adresse email semble invalide.")
    .max(160, "L'adresse email est trop longue."),
  organisation: z
    .string()
    .trim()
    .max(120, "Le nom de la structure est trop long.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Merci de détailler un peu plus votre message (20 caractères minimum).")
    .max(4000, "Le message est trop long (4000 caractères maximum)."),
  // Honeypot : doit rester vide. Rempli => spam.
  website: z
    .string()
    .max(0, "Champ réservé.")
    .optional()
    .or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<keyof ContactInput, string>>;
    };
