import type { Metadata } from "next";
import { ArticleCard } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/lib/data/articles";

export const metadata: Metadata = {
  title: "Artigos",
  description:
    "Artigos sobre psicologia analítica, conceitos junguianos e simbolismo — escritos pela equipe do Héstia.",
};

export default function ArtigosPage() {
  return (
    <>
      <PageHero
        title="Artigos"
        subtitle="Reflexões sobre psicologia analítica, acessíveis e fundamentadas."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <p className="mt-12 rounded-xl border border-dashed border-border bg-surface/50 p-6 text-center text-sm text-ink-muted">
          CMS em preparação — em breve você poderá publicar artigos diretamente pelo painel admin.
        </p>
      </section>
    </>
  );
}
