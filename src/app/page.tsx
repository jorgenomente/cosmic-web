import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/content/site";
import { formatPostDate, sortPostsByDate } from "@/lib/blog";

const painPoints = [
  "Todo está repartido entre WhatsApp, Instagram, planillas y notas.",
  "La web no refleja lo que haces ni ayuda a vender.",
  "Los procesos manuales te quitan tiempo.",
  "No tienes claridad sobre pedidos, productos o gestión.",
];

const solutions = [
  {
    title: "Vender online",
    detail: "Tienda online · Catálogo digital · Pedidos · Web comercial",
    accent: "border-cyan-100 bg-white",
    description:
      "Creamos tiendas, catálogos y flujos de pedido para que tus productos se entiendan, se vean bien y se puedan comprar con menos fricción.",
  },
  {
    title: "Ordenar tu operación",
    detail: "Sistemas de gestión · Automatización · Dashboards · IA aplicada",
    accent: "border-sky-100 bg-white",
    description:
      "Diseñamos sistemas, automatizaciones y herramientas internas para centralizar información, reducir tareas manuales y gestionar mejor.",
  },
  {
    title: "Mostrar mejor tus productos",
    detail: "Imagen producto · Video IA · Escenas comerciales · Catálogo",
    accent: "border-violet-100 bg-white",
    description:
      "Creamos imágenes y videos de producto con IA para tiendas, catálogos, anuncios y campañas, manteniendo una estética coherente con tu marca.",
  },
  {
    title: "Atraer más clientes",
    detail: "Meta Ads · Google Ads · SEO · Pauta · Medición",
    accent: "border-emerald-100 bg-white",
    description:
      "Creamos y gestionamos campañas digitales con estrategia, piezas visuales, pruebas y medición para generar oportunidades comerciales.",
  },
];

const method = [
  {
    step: "Ordenar",
    description:
      "Entendemos el negocio, sus procesos y lo que hoy está disperso.",
  },
  {
    step: "Diseñar",
    description:
      "Convertimos necesidades en estructura, flujos, pantallas y prioridades.",
  },
  {
    step: "Desarrollar",
    description:
      "Construimos la solución con una base técnica clara y sostenible.",
  },
  {
    step: "Sostener",
    description:
      "Acompañamos la evolución para que el sistema siga respondiendo al negocio.",
  },
];

export default function Home() {
  const recentPosts = sortPostsByDate(blogPosts).slice(0, 3);

  return (
    <SiteShell>
      <section className="cosmic-space-scene relative overflow-hidden bg-[#03050d]">
        <div className="cosmic-space-asset absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,5,13,0.86)_0%,rgba(3,5,13,0.64)_34%,rgba(3,5,13,0.22)_62%,rgba(3,5,13,0.08)_100%),linear-gradient(180deg,rgba(3,5,13,0.24)_0%,rgba(3,5,13,0.08)_48%,rgba(3,5,13,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#03050d] via-[#03050d]/68 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-16">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-black/5 shadow-2xl shadow-cyan-950/20 md:min-h-[580px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,5,13,0.76),rgba(3,5,13,0.42)_34%,transparent_68%),linear-gradient(180deg,rgba(3,5,13,0.18),transparent_44%,rgba(3,5,13,0.24))]" />
            <div className="pointer-events-none absolute inset-x-10 top-5 hidden h-px bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent md:block" />
            <div className="pointer-events-none absolute inset-x-10 bottom-5 hidden h-px bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent md:block" />
            <div className="relative z-10 mx-auto flex min-h-[500px] max-w-3xl flex-col items-center justify-center px-5 py-7 text-center md:min-h-[560px] md:px-8">
              <div className="mb-5 flex flex-wrap items-center justify-center gap-2 text-[0.66rem] font-medium uppercase tracking-wide text-zinc-300">
                <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-2.5 py-1 text-cyan-100">
                  Observatorio operativo
                </span>
                <span className="rounded-full border border-white/10 bg-black/15 px-2.5 py-1">
                  IA aplicada
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/15 px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                  Sistema activo
                </span>
              </div>
              <div className="relative max-w-3xl rounded-[1.5rem] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3),rgba(0,0,0,0.14)_58%,transparent_100%)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-[1.5px] md:p-6">
                <div className="pointer-events-none absolute inset-x-12 -top-6 h-12 bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent blur-xl" />
                <h1 className="mx-auto max-w-2xl text-center text-4xl font-semibold leading-[1.04] tracking-tight text-white drop-shadow-[0_2px_22px_rgba(0,0,0,0.55)] md:text-5xl lg:text-[3.1rem]">
                  Soluciones digitales para{" "}
                  <span className="text-cyan-100 drop-shadow-[0_0_18px_rgba(103,232,249,0.32)]">
                    operar mejor.
                  </span>
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-center text-base leading-7 text-zinc-200 drop-shadow-[0_1px_16px_rgba(0,0,0,0.48)] md:text-lg md:leading-8">
                  Diseñamos webs, tiendas online, sistemas de gestión e IA
                  aplicada para ordenar procesos, mejorar la experiencia y
                  sostener mejor tu operación.
                </p>
                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <ButtonLink
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="self-center"
                  >
                    Hablemos de tu operación
                  </ButtonLink>
                  <ButtonLink
                    href="#soluciones"
                    variant="ghost"
                    className="self-center"
                  >
                    Ver soluciones
                  </ButtonLink>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-zinc-300/80 md:flex">
              <span>Explorar</span>
              <div className="flex h-9 w-5 justify-center rounded-full border border-white/25 bg-black/10 p-1 backdrop-blur">
                <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0f1c] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
              Problema central
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Tu negocio no necesita más herramientas sueltas. Necesita una
              estructura digital pensada como sistema.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-zinc-300"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="soluciones"
        className="relative overflow-hidden bg-[#f6f8fb] px-6 py-16 text-zinc-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(103,232,249,0.18),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(124,58,237,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Soluciones"
            title="¿Qué necesita resolver tu negocio?"
            description="Diseñamos soluciones digitales para vender mejor, ordenar procesos, crear contenido visual y atraer clientes con más claridad."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className={`flex min-h-[250px] flex-col rounded-3xl border p-6 shadow-sm shadow-cyan-950/5 transition hover:-translate-y-0.5 hover:border-zinc-900 hover:shadow-xl hover:shadow-cyan-950/10 md:p-7 ${solution.accent}`}
              >
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  {solution.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  {solution.description}
                </p>
                <p className="mt-auto pt-6 text-sm font-medium leading-6 text-zinc-500">
                  {solution.detail}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-cyan-200/30 bg-[#07131c] p-6 text-white shadow-2xl shadow-cyan-950/10 md:p-7">
            <p className="max-w-4xl text-sm leading-6 text-zinc-300 md:text-base md:leading-7">
              Si necesitas algo más específico, también podemos diseñar
              productos digitales, dashboards, automatizaciones, integraciones y
              mejoras UX/UI según la etapa de tu negocio.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-zinc-950">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Antes
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Procesos dispersos, tareas manuales, poca visibilidad,
              herramientas desconectadas.
            </h2>
          </div>
          <div className="rounded-2xl border border-cyan-200 bg-[#07131c] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
              Después
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Flujos claros, gestión ordenada, experiencia más simple,
              operación sostenible.
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-[#070a12] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tone="dark"
            eyebrow="Método Cosmic Studio"
            title="De la necesidad dispersa al sistema funcionando"
            description="Trabajamos con una secuencia simple para que cada decisión tenga sentido operativo, visual y técnico."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {method.map((item, index) => (
              <article
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-sm font-semibold text-cyan-200">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.step}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nodux" className="bg-[#0a0f1c] px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="rounded-2xl border border-cyan-200/20 bg-cyan-200/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-100">
              Producto propio
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              NODUX
            </h2>
            <p className="mt-4 text-sm leading-6 text-zinc-300">
              Laboratorio real de estrategia, experiencia, desarrollo y operación
              digital aplicada de Cosmic Studio.
            </p>
          </div>
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Prueba real"
              title="Un sistema construido desde la operación"
              description="NODUX es una solución propia de Cosmic Studio y una prueba real de cómo diseñamos sistemas digitales para resolver problemas de operación comercial."
            />
            <div className="mt-8">
              <ButtonLink
                href={`mailto:${siteConfig.contactEmail}`}
                variant="ghost"
              >
                Ver caso
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-16 text-zinc-950">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Equipo / cabina
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Un estudio para pensar, diseñar y construir con mirada de sistema.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-600">
              Cosmic Studio trabaja con criterio estratégico, diseño de
              experiencia, desarrollo y mirada sistémica para convertir
              necesidades operativas en soluciones digitales concretas.
            </p>
          </div>
        </div>
      </section>

      <section id="blog" className="bg-white px-6 py-16 text-zinc-950">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Recursos"
              title="Artículos recientes"
              description="Artículos sobre soluciones digitales, operación, UX, automatización y sistemas para negocios."
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
                className="rounded-2xl border border-zinc-200 p-6 transition hover:border-zinc-950"
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
        </div>
      </section>

      <section
        id="contacto"
        className="relative overflow-hidden bg-[#070a12] px-6 py-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(103,232,249,0.16),transparent_32%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
              Próxima órbita
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Cuéntanos qué necesita ordenar tu negocio.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-300">
              Podemos ayudarte a pensar, diseñar y construir la solución digital
              adecuada para tu próxima etapa.
            </p>
          </div>
          <ButtonLink href={`mailto:${siteConfig.contactEmail}`}>
            Hablemos de tu solución
          </ButtonLink>
        </div>
      </section>
    </SiteShell>
  );
}
