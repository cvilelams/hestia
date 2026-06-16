import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppLink } from "@/components/MandalaBackground";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contatos",
  description: "Entre em contato com o Centro Héstia.",
};

type Props = {
  searchParams: Promise<{ inscricao?: string }>;
};

export default async function ContatosPage({ searchParams }: Props) {
  const { inscricao } = await searchParams;
  const isEnrollment = Boolean(inscricao);

  return (
    <>
      <PageHero
        title={isEnrollment ? "Inscrição" : "Contatos"}
        subtitle={
          isEnrollment
            ? `Solicite sua inscrição em: ${decodeURIComponent(inscricao ?? "")}`
            : "Estamos aqui para ouvir. Envie uma mensagem ou fale conosco pelo WhatsApp."
        }
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl font-semibold text-depth">
              {isEnrollment ? "Formulário de inscrição" : "Envie uma mensagem"}
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Responderemos em até 2 dias úteis.
            </p>
            <div className="mt-8">
              <ContactForm
                variant={isEnrollment ? "enrollment" : "contact"}
                courseTitle={inscricao ? decodeURIComponent(inscricao) : undefined}
              />
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-serif text-lg font-semibold text-depth">
                Outras formas de contato
              </h3>
              <ul className="mt-4 space-y-4 text-sm text-ink-muted">
                <li>
                  <span className="block text-xs uppercase tracking-wider text-ink-faint">
                    E-mail
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-depth"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-ink-faint">
                    WhatsApp
                  </span>
                  <WhatsAppLink className="transition-colors hover:text-sage">
                    Enviar mensagem →
                  </WhatsAppLink>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-ink-faint">
                    Localização
                  </span>
                  {siteConfig.address}
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-hearth-deep/50 p-6">
              <p className="font-serif text-lg text-depth">
                &ldquo;Quem olha para fora, sonha; quem olha para dentro, desperta.&rdquo;
              </p>
              <p className="mt-2 text-sm text-ink-faint">— Carl Gustav Jung</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
