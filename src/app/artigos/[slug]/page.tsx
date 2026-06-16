import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MandalaDivider } from "@/components/MandalaBackground";
import { articles, getArticleBySlug } from "@/lib/data/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Artigo não encontrado" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const date = new Date(article.publishedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <Link
        href="/artigos"
        className="text-sm text-ink-faint transition-colors hover:text-depth"
      >
        ← Voltar aos artigos
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-ink-faint">
          <span>{article.category}</span>
          <span>·</span>
          <span>{date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-depth md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-ink-muted">{article.excerpt}</p>
        <p className="mt-4 text-sm text-gold">Por {article.author}</p>
      </header>

      <MandalaDivider />

      <div className="prose-hestia mt-8">
        {article.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
