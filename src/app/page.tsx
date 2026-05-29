import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/content/site";
import { formatPostDate, sortPostsByDate } from "@/lib/blog";

const featuredBlocks = [
  {
    title: "Estrategia web",
    description:
      "Una base clara para presentar servicios, contenidos y llamados a la accion.",
  },
  {
    title: "Contenido local",
    description:
      "Publicaciones versionadas dentro del proyecto, sin depender todavia de un CMS.",
  },
  {
    title: "Escalabilidad",
    description:
      "Carpetas y componentes preparados para crecer sin mezclar responsabilidades.",
  },
];

export default function Home() {
  const recentPosts = sortPostsByDate(blogPosts).slice(0, 3);

  return (
    <SiteShell>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Base inicial
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              {siteConfig.description} Una estructura sobria para empezar a
              publicar, organizar contenido y evolucionar el sitio con criterio.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/blog">Ver articulos</ButtonLink>
              <ButtonLink href={`mailto:${siteConfig.contactEmail}`} variant="secondary">
                Contactar
              </ButtonLink>
            </div>
          </div>
          <div className="border border-zinc-200 bg-white p-6">
            <p className="text-sm font-semibold text-zinc-500">
              Preparado para
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-zinc-700">
              <li>Next.js App Router y TypeScript.</li>
              <li>Contenido local para blog.</li>
              <li>Despliegue futuro en Vercel.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="Presentacion"
          title="Una base simple para construir el sitio"
          description="El proyecto queda organizado en capas claras: layout, secciones, UI reutilizable, utilidades y contenido."
        />
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Bloques"
            title="Areas iniciales"
            description="Estos bloques pueden convertirse luego en servicios, productos, casos o diferenciales del sitio."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredBlocks.map((block) => (
              <article key={block.title} className="border border-zinc-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-zinc-950">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {block.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Blog"
            title="Articulos recientes"
            description="Primeras publicaciones locales para validar la estructura del blog."
          />
          <ButtonLink href="/blog" variant="secondary">
            Ver blog
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border border-zinc-200 p-6 transition hover:border-zinc-950"
            >
              <p className="text-sm text-zinc-500">
                {post.category} · {formatPostDate(post.date)}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-zinc-950">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Listo para el siguiente paso
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-300">
              La base queda preparada para sumar contenido real, ajustar identidad
              visual y conectar un flujo editorial cuando sea necesario.
            </p>
          </div>
          <ButtonLink
            href={`mailto:${siteConfig.contactEmail}`}
            className="bg-white text-zinc-950 hover:bg-zinc-200"
          >
            Iniciar contacto
          </ButtonLink>
        </div>
      </section>
    </SiteShell>
  );
}
