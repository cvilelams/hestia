"use client";

import { useState } from "react";

type ContactFormProps = {
  variant?: "contact" | "enrollment";
  courseTitle?: string;
};

export function ContactForm({
  variant = "contact",
  courseTitle,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: variant, courseTitle }),
      });

      if (!res.ok) throw new Error("Erro ao enviar");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-hearth px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-depth focus:ring-2 focus:ring-depth/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {variant === "enrollment" && courseTitle && (
        <input type="hidden" name="course" value={courseTitle} />
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Nome
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="seu@email.com"
          />
        </div>
      </div>

      {variant === "contact" && (
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">
            Assunto
          </label>
          <input id="subject" name="subject" className={inputClass} placeholder="Como podemos ajudar?" />
        </div>
      )}

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          {variant === "enrollment" ? "Mensagem (opcional)" : "Mensagem"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required={variant === "contact"}
          className={`${inputClass} resize-y`}
          placeholder={
            variant === "enrollment"
              ? "Conte um pouco sobre seu interesse no curso..."
              : "Escreva sua mensagem..."
          }
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-inst-bg transition-colors hover:bg-primary-light disabled:opacity-60"
      >
        {status === "loading"
          ? "Enviando..."
          : variant === "enrollment"
            ? "Solicitar inscrição"
            : "Enviar mensagem"}
      </button>

      {status === "success" && (
        <p className="text-sm text-sage">
          Mensagem recebida! Entraremos em contato em breve.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700">
          Não foi possível enviar. Tente novamente ou use o WhatsApp.
        </p>
      )}
    </form>
  );
}
