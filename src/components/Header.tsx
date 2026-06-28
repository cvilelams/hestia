"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-hearth/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={40}
            height={40}
            className="h-10 w-10 shrink-0"
            priority
            unoptimized
          />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-semibold tracking-tight text-depth transition-colors group-hover:text-gold">
              {siteConfig.name}
            </span>
            <span className="text-xs tracking-widest uppercase text-ink-faint">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-depth text-hearth"
                    : "text-ink-muted hover:bg-hearth-deep hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-ink-muted lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm ${
                      active
                        ? "bg-depth text-hearth"
                        : "text-ink-muted hover:bg-hearth-deep"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
