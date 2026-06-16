import type { Metadata } from "next";
import { MandalaDivider } from "@/components/MandalaBackground";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Quem somos",
  description:
    "Conheça o Centro Héstia — nossa missão, visão e compromisso com o estudo da psicologia analítica.",
};

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        title="Quem somos"
        subtitle="Um espaço dedicado ao estudo vivo da psicologia analítica de Carl Gustav Jung."
      />

      <section className="mx-auto max-w-3xl px-5 py-16 prose-hestia">
        <h2 className="font-serif text-2xl font-semibold text-depth">Nossa missão</h2>
        <p>
          O Centro Héstia nasceu do desejo de criar um lugar onde a psicologia analítica
          pudesse ser estudada com profundidade e acolhimento. Acreditamos que o conhecimento
          junguiano não pertence apenas aos consultórios — ele ilumina a vida de qualquer
          pessoa disposta a escutar o que a alma tem a dizer.
        </p>
        <p>
          Nosso nome evoca Hestia, deusa grega do lar e do fogo central — imagem do centro
          interior que Jung chamou de Self. Como o fogo que aquece a casa, buscamos manter
          viva a chama do estudo, da reflexão e do encontro humano.
        </p>

        <MandalaDivider />

        <h2 className="font-serif text-2xl font-semibold text-depth">O que nos guia</h2>
        <ul className="mt-4 space-y-3 text-ink-muted">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span>
              <strong className="text-ink">Rigor teórico</strong> — baseado na obra de Jung
              e na tradição junguiana internacional.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span>
              <strong className="text-ink">Linguagem acessível</strong> — conceitos profundos
              explicados com clareza, sem jargão desnecessário.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span>
              <strong className="text-ink">Respeito ao processo</strong> — cada caminho de
              individuação é único e não pode ser apressado.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span>
              <strong className="text-ink">Comunidade</strong> — o estudo compartilhado
              enriquece a compreensão e cria vínculos significativos.
            </span>
          </li>
        </ul>

        <MandalaDivider />

        <h2 className="font-serif text-2xl font-semibold text-depth">Para quem é o Héstia</h2>
        <p>
          Atendemos pessoas em diferentes momentos da jornada: quem descobre Jung pela
          primeira vez, psicólogos em formação ou prática, profissionais da saúde mental
          interessados na abordagem analítica, e qualquer pessoa curiosa sobre sonhos,
          símbolos e o funcionamento do inconsciente.
        </p>
        <p>
          Você não precisa ser especialista para começar. Precisa apenas de disposição
          para olhar para dentro — com honestidade e abertura.
        </p>
      </section>
    </>
  );
}
