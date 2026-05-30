import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070a12]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
          reservados.
        </p>
        <div className="flex items-center gap-4">
          {siteConfig.socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium transition hover:text-cyan-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
