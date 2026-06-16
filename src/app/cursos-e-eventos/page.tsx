import type { Metadata } from "next";
import { CourseCard } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { courses } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Cursos e eventos",
  description:
    "Programas de formação, workshops e eventos abertos do Centro Héstia.",
};

export default function CursosEventosPage() {
  const cursos = courses.filter((c) => c.type === "curso");
  const eventos = courses.filter((c) => c.type === "evento");

  return (
    <>
      <PageHero
        title="Cursos e eventos"
        subtitle="Programas de formação contínua, workshops e encontros abertos à comunidade."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-serif text-2xl font-semibold text-depth">Cursos</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cursos.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <h2 className="mt-16 font-serif text-2xl font-semibold text-depth">Eventos</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventos.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </>
  );
}
