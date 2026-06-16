import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Cursos de formação, supervisão clínica, grupos de estudo e eventos do Centro Héstia.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        title="Serviços"
        subtitle="Formação, acompanhamento e encontros para diferentes momentos da sua jornada com a psicologia analítica."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center md:p-12">
          <h2 className="font-serif text-2xl font-semibold text-depth">
            Não sabe por onde começar?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-ink-muted">
            Entre em contato e ajudamos a encontrar o caminho mais adequado para você —
            seja um curso introdutório, um grupo de estudo ou supervisão clínica.
          </p>
          <Link
            href="/contatos"
            className="mt-6 inline-flex rounded-full bg-depth px-8 py-3 text-sm font-medium text-hearth transition-colors hover:bg-depth-light"
          >
            Fale conosco
          </Link>
        </div>
      </section>
    </>
  );
}
