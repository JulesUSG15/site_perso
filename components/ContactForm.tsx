"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";
import type { ContactState } from "@/lib/contact-schema";
import { personal } from "@/content/personal";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-brand-night placeholder:text-muted/70 shadow-sm transition-colors focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);
  const fieldErrors = state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form action={action} className="grid gap-5" noValidate>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-brand-night">
          Votre nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={80}
          className={inputClass}
          aria-invalid={fieldErrors.name ? "true" : undefined}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
        />
        {fieldErrors.name ? (
          <p id="name-error" className="mt-1 text-xs text-red-600">
            {fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-brand-night">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={160}
            className={inputClass}
            aria-invalid={fieldErrors.email ? "true" : undefined}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email ? (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="organisation"
            className="text-sm font-medium text-brand-night"
          >
            Structure <span className="text-muted">(optionnel)</span>
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            maxLength={120}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-brand-night">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={20}
          maxLength={4000}
          className={`${inputClass} resize-y`}
          placeholder="En quelques lignes : contexte, objectif, échéance envisagée."
          aria-invalid={fieldErrors.message ? "true" : undefined}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        {fieldErrors.message ? (
          <p id="message-error" className="mt-1 text-xs text-red-600">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot antispam : reste invisible pour les humains */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Vos informations restent confidentielles et servent uniquement à
          répondre à votre message.
        </p>
        <button
          type="submit"
          className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-70"
          disabled={pending}
          aria-busy={pending || undefined}
        >
          {pending ? "Envoi…" : "Envoyer le message"}
        </button>
      </div>

      <div role="status" aria-live="polite" className="min-h-[1.5rem] text-sm">
        {state.status === "success" ? (
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800">
            Message envoyé. Je vous réponds sous 24&nbsp;h ouvrées.
          </p>
        ) : null}
        {state.status === "error" ? (
          <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-800">
            {state.message}{" "}
            <a
              href={`mailto:${personal.email}`}
              className="font-medium underline"
            >
              Envoyer directement un email
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
