import { siteConfig } from "@/lib/site-config";

type MandalaBackgroundProps = {
  variant?: "hero" | "subtle" | "section";
  className?: string;
};

export function MandalaBackground({
  variant = "subtle",
  className = "",
}: MandalaBackgroundProps) {
  const opacity =
    variant === "hero" ? "opacity-[0.12]" : variant === "section" ? "opacity-[0.08]" : "opacity-[0.05]";
  const size =
    variant === "hero" ? "w-[min(90vw,720px)]" : "w-[min(70vw,480px)]";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 400 400"
        className={`${size} ${opacity} mandala-spin-slow text-depth`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="30" stroke="currentColor" strokeWidth="0.75" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 200 + 30 * Math.cos(angle);
          const y1 = 200 + 30 * Math.sin(angle);
          const x2 = 200 + 190 * Math.cos(angle);
          const y2 = 200 + 190 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          );
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const cx = 200 + 150 * Math.cos(angle);
          const cy = 200 + 150 * Math.sin(angle);
          return (
            <circle
              key={`petal-${i}`}
              cx={cx}
              cy={cy}
              r="18"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          );
        })}
      </svg>
    </div>
  );
}

export function MandalaDivider() {
  return (
    <div aria-hidden className="flex items-center justify-center gap-3 py-2">
      <span className="h-px w-16 bg-border" />
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="h-px w-16 bg-border" />
    </div>
  );
}

export function WhatsAppLink({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { number, message } = siteConfig.whatsapp;
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
