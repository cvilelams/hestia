import Link from "next/link";
import { MandalaDivider, WhatsAppLink } from "@/components/MandalaBackground";
import { navItems, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-auto bg-depth text-hearth">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <MandalaDivider />

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-semibold text-hearth">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-hearth/80">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-hearth/60">
              Navegação
            </p>
            <ul className="mt-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-hearth/80 transition-colors hover:text-hearth"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-hearth/60">
              Contato
            </p>
            <ul className="mt-3 space-y-2 text-sm text-hearth/80">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-hearth"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
              <li>
                <WhatsAppLink className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-light">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.855L0 24l6.335-1.662A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.358-.213-3.755.986 1.002-3.658-.233-.375A9.818 9.818 0 1112 21.818z" />
                  </svg>
                  WhatsApp
                </WhatsAppLink>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-hearth/50">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
