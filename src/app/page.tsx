import Link from "next/link";
import { ArticleCard, CourseCard } from "@/components/Cards";
import { MandalaBackground, MandalaDivider } from "@/components/MandalaBackground";
import { SectionHeading } from "@/components/PageHero";
import { articles } from "@/lib/data/articles";
import { courses } from "@/lib/data/courses";

export default function HomePage() {
  const featuredCourses = courses.filter((c) => c.openForEnrollment).slice(0, 3);
  const featuredArticles = articles.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-20 md:py-28">
        <MandalaBackground variant="hero" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold">
            Psicologia analítica · Estudo · Transformação
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-depth md:text-6xl">
            Um centro para o encontro com a alma
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            No Héstia, estudamos a obra de Carl Gustav Jung em profundidade — com
            acolhimento, rigor e respeito pelo caminho único de cada pessoa.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/cursos-e-eventos"
              className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-inst-bg transition-colors hover:bg-primary-light"
            >
              Ver cursos e eventos
            </Link>
            <Link
              href="/quem-somos"
              className="rounded-full border border-sage px-8 py-3 text-sm font-medium text-depth transition-colors hover:bg-hearth-deep"
            >
              Conheça o centro
            </Link>
          </div>
        </div>
      </section>

      <MandalaDivider />

      {/* Essência */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="O fogo no centro"
            subtitle="Como Hestia guardava o lar sagrado, acreditamos que cada pessoa carrega um centro interior — o Self junguiano — que orienta o caminho de individuação."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Profundidade com clareza",
                text: "Conceitos complexos explicados de forma acessível, sem perder o rigor da psicologia analítica.",
              },
              {
                title: "Comunidade de estudo",
                text: "Grupos, cursos e eventos para quem busca compreender o inconsciente — sozinha ou em companhia.",
              },
              {
                title: "Prática viva",
                text: "Sonhos, símbolos, sombra e arquétipos não são só teoria: são experiências a serem vividas.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-depth">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="border-y border-border/60 bg-surface px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Próximos cursos e eventos"
            subtitle="Formação, encontros e conferências abertas à comunidade."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/cursos-e-eventos"
              className="text-sm font-medium text-depth transition-colors hover:text-gold"
            >
              Ver todos os cursos →
            </Link>
          </div>
        </div>
      </section>

      {/* Artigos */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Do nosso jornal"
            subtitle="Artigos sobre conceitos junguianos, escritos por nossos professores."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/artigos"
              className="text-sm font-medium text-depth transition-colors hover:text-gold"
            >
              Ler todos os artigos →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/60 bg-depth px-5 py-16 text-hearth md:py-20">
        <MandalaBackground variant="section" className="opacity-30 [&_svg]:text-hearth" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">
            Comece sua jornada
          </h2>
          <p className="mt-4 text-hearth/80">
            Entre em contato para saber mais sobre cursos, supervisão ou grupos de estudo.
          </p>
          <Link
            href="/contatos"
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-medium text-inst-bg transition-colors hover:bg-primary-light"
          >
            Fale conosco
          </Link>
        </div>
      </section>
    </>
  );
}
