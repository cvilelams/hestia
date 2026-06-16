import Link from "next/link";
import type { Article } from "@/lib/data/articles";
import type { Course } from "@/lib/data/courses";
import type { Professor } from "@/lib/data/professors";
import type { Service } from "@/lib/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-md hover:shadow-depth/5">
      <h3 className="font-serif text-xl font-semibold text-depth">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.description}</p>
      <ul className="mt-4 space-y-1.5">
        {service.details.map((d) => (
          <li key={d} className="flex items-start gap-2 text-sm text-ink-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {d}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ProfessorCard({ professor }: { professor: Professor }) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-hearth-deep">
        <span className="font-serif text-2xl text-gold">
          {professor.name.split(" ").slice(-1)[0]?.[0]}
        </span>
      </div>
      <h3 className="font-serif text-xl font-semibold text-depth">{professor.name}</h3>
      <p className="mt-1 text-sm text-gold">{professor.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{professor.bio}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {professor.specialties.map((s) => (
          <span
            key={s}
            className="rounded-full bg-hearth-deep px-3 py-1 text-xs text-ink-muted"
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

export function CourseCard({ course }: { course: Course }) {
  const typeLabel = course.type === "curso" ? "Curso" : "Evento";

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-surface p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-depth px-3 py-1 text-xs font-medium text-hearth">
          {typeLabel}
        </span>
        <span className="rounded-full bg-hearth-deep px-3 py-1 text-xs text-ink-muted">
          {course.format}
        </span>
      </div>
      <h3 className="mt-4 font-serif text-xl font-semibold text-depth">{course.title}</h3>
      <p className="mt-2 text-sm text-gold">
        {course.date} · {course.duration}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {course.description}
      </p>
      {course.openForEnrollment ? (
        <Link
          href={`/contatos?inscricao=${encodeURIComponent(course.title)}`}
          className="mt-5 inline-flex items-center justify-center rounded-full border border-depth px-5 py-2.5 text-sm font-medium text-depth transition-colors hover:bg-depth hover:text-hearth"
        >
          Inscrever-se
        </Link>
      ) : (
        <span className="mt-5 inline-flex items-center justify-center rounded-full bg-hearth-deep px-5 py-2.5 text-sm text-ink-faint">
          Inscrições encerradas
        </span>
      )}
    </article>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-md hover:shadow-depth/5">
      <div className="flex flex-wrap items-center gap-2 text-xs text-ink-faint">
        <span>{article.category}</span>
        <span>·</span>
        <span>{article.readTime}</span>
      </div>
      <h3 className="mt-3 font-serif text-xl font-semibold text-depth group-hover:text-gold transition-colors">
        <Link href={`/artigos/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{article.excerpt}</p>
      <Link
        href={`/artigos/${article.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-depth transition-colors hover:text-gold"
      >
        Ler artigo
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
