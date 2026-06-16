import type { Metadata } from "next";
import { ProfessorCard } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { professors } from "@/lib/data/professors";

export const metadata: Metadata = {
  title: "Professores",
  description:
    "Conheça a equipe de professores e orientadores do Centro Héstia.",
};

export default function ProfessoresPage() {
  return (
    <>
      <PageHero
        title="Professores"
        subtitle="Psicólogos analíticos e junguianos dedicados ao ensino, supervisão e pesquisa."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {professors.map((professor) => (
            <ProfessorCard key={professor.id} professor={professor} />
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-ink-faint">
          {/* Placeholder — substitua pelos dados reais dos professores */}
          Professores convidados e colaboradores serão adicionados em breve.
        </p>
      </section>
    </>
  );
}
