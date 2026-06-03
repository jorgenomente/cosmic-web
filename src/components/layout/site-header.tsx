"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen ? (
        <button
          type="button"
          aria-label="Cerrar menú"
          className="fixed inset-0 z-40 bg-[#03050d]/76 backdrop-blur-[10px] md:hidden"
          onClick={closeMenu}
        />
      ) : null}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#070a12]/84 shadow-[0_10px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition hover:border-cyan-200/40 hover:bg-cyan-200/10 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12] md:hidden"
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
          className={`absolute inset-x-4 top-[calc(100%+0.35rem)] z-50 rounded-[1.35rem] border border-white/12 bg-[#070a12]/92 px-2.5 pb-2.5 shadow-[0_22px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1.5 pt-2.5">
            {siteConfig.navigation.map((item) => {
              const isActive = item.href === pathname;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12] ${
                    isActive
                      ? "border border-cyan-200/15 bg-cyan-200/10 text-cyan-100"
                      : "border border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-cyan-100"
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
    </>
  );
}
