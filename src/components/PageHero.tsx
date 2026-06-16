import { MandalaBackground } from "@/components/MandalaBackground";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function PageHero({ title, subtitle, centered = true }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-surface px-5 py-16 md:py-20">
      <MandalaBackground variant="hero" />
      <div
        className={`relative mx-auto max-w-3xl ${centered ? "text-center" : ""}`}
      >
        <h1 className="font-serif text-4xl font-semibold leading-tight text-depth md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg leading-relaxed text-ink-muted md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="font-serif text-3xl font-semibold text-depth md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-ink-muted md:text-lg mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
