import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#070a12]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-base font-semibold text-white">
          {siteConfig.name}
        </Link>
        <nav
          aria-label="Principal"
          className="flex flex-wrap items-center justify-end gap-4"
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
      </div>
    </header>
  );
}
