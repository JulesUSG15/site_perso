"use server";

import { headers } from "next/headers";
import { contactSchema, type ContactInput, type ContactState } from "@/lib/contact-schema";
import { checkRateLimit } from "@/lib/rate-limit";
import { getMailerConfig, sendContactEmail } from "@/lib/mailer";
import { personal } from "@/content/personal";

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    organisation: String(formData.get("organisation") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
  };
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key as keyof ContactInput]) {
        fieldErrors[key as keyof ContactInput] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Merci de corriger les champs indiqués.",
      fieldErrors,
    };
  }
  const data = parsed.data;

  if (!getMailerConfig()) {
    return {
      status: "error",
      message: `L'envoi automatique n'est pas configuré sur ce déploiement. Merci d'écrire directement à ${personal.email}.`,
    };
  }

  const requestHeaders = await headers();
  const forwarded = requestHeaders.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || requestHeaders.get("x-real-ip") || "unknown";
  const rate = checkRateLimit(`contact:${ip}`);
  if (!rate.ok) {
    return {
      status: "error",
      message: `Trop de tentatives, réessayez dans ${rate.retryAfterSec}s.`,
    };
  }

  try {
    await sendContactEmail({
      name: data.name,
      email: data.email,
      organisation: data.organisation || undefined,
      message: data.message,
    });
    return { status: "success" };
  } catch (err) {
    if (err instanceof Error && err.message === "MAILER_NOT_CONFIGURED") {
      return {
        status: "error",
        message: `L'envoi automatique n'est pas configuré. Écrivez directement à ${personal.email}.`,
      };
    }
    console.error("[contact] send error", err);
    return {
      status: "error",
      message: `Impossible d'envoyer le message pour le moment. Vous pouvez écrire directement à ${personal.email}.`,
    };
  }
}
