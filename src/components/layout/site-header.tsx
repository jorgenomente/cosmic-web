"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070a12]/88 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold text-white"
          onClick={closeMenu}
        >
          {siteConfig.name}
        </Link>
        <nav
          aria-label="Principal"
          className="hidden items-center justify-end gap-5 md:flex"
        >
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-cyan-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:border-cyan-200/50 hover:text-cyan-100 md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          </span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-px rounded-full bg-current transition ${
                isMenuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-px rounded-full bg-current transition ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px rounded-full bg-current transition ${
                isMenuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Principal móvil"
        className={`absolute inset-x-0 top-full border-t border-white/10 bg-[#070a12]/96 px-6 pb-4 shadow-[0_18px_36px_rgba(0,0,0,0.24)] backdrop-blur-xl md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 pt-3">
          {siteConfig.navigation.map((item) => {
            const isActive = item.href === pathname;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-cyan-200/10 text-cyan-100"
                    : "text-zinc-300 hover:bg-white/[0.06] hover:text-cyan-100"
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
