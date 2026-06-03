import Link from "next/link";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/layout/site-shell";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/content/site";
import { formatPostDate, sortPostsByDate } from "@/lib/blog";

type IconName =
  | "arrow"
  | "automation"
  | "campaign"
  | "catalog"
  | "clarity"
  | "content"
  | "design"
  | "develop"
  | "disconnect"
  | "manual"
  | "nodux"
  | "order"
  | "resource"
  | "sustain"
  | "system";

function LineIcon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const commonProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h13" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    automation: (
      <>
        <path d="M7 8h10" />
        <path d="M7 16h10" />
        <circle cx="7" cy="8" r="2" />
        <circle cx="17" cy="16" r="2" />
      </>
    ),
    campaign: (
      <>
        <path d="M5 13v4a2 2 0 0 0 2 2h1" />
        <path d="M8 13 18 6v12L8 13Z" />
        <path d="M18 10h2" />
      </>
    ),
    catalog: (
      <>
        <path d="M6 5h9a3 3 0 0 1 3 3v11H9a3 3 0 0 0-3 3V5Z" />
        <path d="M9 9h7" />
        <path d="M9 13h5" />
      </>
    ),
    clarity: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
        <path d="M9 11h4" />
      </>
    ),
    content: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="m8 15 3-3 2 2 3-4 2 5" />
        <circle cx="9" cy="9" r="1" />
      </>
    ),
    design: (
      <>
        <path d="M5 18c4-1 7-4 8-8" />
        <path d="m12 4 8 8-5 5-8-8 5-5Z" />
        <path d="m14 6-8 8" />
      </>
    ),
    develop: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m13 5-2 14" />
      </>
    ),
    disconnect: (
      <>
        <path d="M5 7h5" />
        <path d="M14 7h5" />
        <path d="M8 7v4" />
        <path d="M16 7v4" />
        <path d="M8 17h8" />
        <path d="M12 11v6" />
      </>
    ),
    manual: (
      <>
        <path d="M7 4v10" />
        <path d="M11 4v10" />
        <path d="M15 6v8" />
        <path d="M19 9v5a6 6 0 0 1-12 0" />
      </>
    ),
    nodux: (
      <>
        <path d="M6 7h12v10H6z" />
        <path d="M9 10h6" />
        <path d="M9 14h3" />
        <path d="M12 3v4" />
        <path d="M12 17v4" />
      </>
    ),
    order: (
      <>
        <path d="M6 7h12" />
        <path d="M6 12h12" />
        <path d="M6 17h12" />
        <circle cx="6" cy="7" r="1.5" />
        <circle cx="6" cy="12" r="1.5" />
        <circle cx="6" cy="17" r="1.5" />
      </>
    ),
    resource: (
      <>
        <path d="M7 4h10a2 2 0 0 1 2 2v16l-7-3-7 3V6a2 2 0 0 1 2-2Z" />
        <path d="M9 8h6" />
        <path d="M9 12h4" />
      </>
    ),
    sustain: (
      <>
        <path d="M5 12a7 7 0 0 1 12-5" />
        <path d="M17 7V3h4" />
        <path d="M19 12a7 7 0 0 1-12 5" />
        <path d="M7 17v4H3" />
      </>
    ),
    system: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="7" r="2" />
        <circle cx="19" cy="7" r="2" />
        <circle cx="12" cy="20" r="2" />
        <path d="m7 8 6 3" />
        <path d="m17 8-4 3" />
        <path d="m12 15v3" />
      </>
    ),
  };

  return <svg {...commonProps}>{paths[name]}</svg>;
}

const painPoints = [
  {
    text: "Todo está repartido entre WhatsApp, Instagram, planillas y notas.",
    icon: "disconnect",
  },
  {
    text: "La web no refleja lo que haces ni ayuda a vender.",
    icon: "clarity",
  },
  {
    text: "Los procesos manuales te quitan tiempo.",
    icon: "manual",
  },
  {
    text: "No tienes claridad sobre pedidos, productos o gestión.",
    icon: "system",
  },
] satisfies { text: string; icon: IconName }[];

const solutions = [
  {
    title: "Vender online",
    detail: "Tienda online · Catálogo digital · Pedidos · Web comercial",
    icon: "catalog",
    accent: "border-cyan-100 bg-white",
    description:
      "Creamos tiendas, catálogos y flujos de pedido para que tus productos se entiendan, se vean bien y se puedan comprar con menos fricción.",
  },
  {
    title: "Ordenar tu operación",
    detail: "Sistemas de gestión · Automatización · Dashboards · IA aplicada",
    icon: "automation",
    accent: "border-sky-100 bg-white",
    description:
      "Diseñamos sistemas, automatizaciones y herramientas internas para centralizar información, reducir tareas manuales y gestionar mejor.",
  },
  {
    title: "Mostrar mejor tus productos",
    detail: "Imagen producto · Video IA · Escenas comerciales · Catálogo",
    icon: "content",
    accent: "border-violet-100 bg-white",
    description:
      "Creamos imágenes y videos de producto con IA para tiendas, catálogos, anuncios y campañas, manteniendo una estética coherente con tu marca.",
  },
  {
    title: "Atraer más clientes",
    detail: "Meta Ads · Google Ads · SEO · Pauta · Medición",
    icon: "campaign",
    accent: "border-emerald-100 bg-white",
    description:
      "Creamos y gestionamos campañas digitales con estrategia, piezas visuales, pruebas y medición para generar oportunidades comerciales.",
  },
] satisfies {
  title: string;
  detail: string;
  icon: IconName;
  accent: string;
  description: string;
}[];

const method = [
  {
    step: "Ordenar",
    icon: "order",
    description:
      "Entendemos el negocio, sus procesos y lo que hoy está disperso.",
  },
  {
    step: "Diseñar",
    icon: "design",
    description:
      "Convertimos necesidades en estructura, flujos, pantallas y prioridades.",
  },
  {
    step: "Desarrollar",
    icon: "develop",
    description:
      "Construimos la solución con una base técnica clara y sostenible.",
  },
  {
    step: "Sostener",
    icon: "sustain",
    description:
      "Acompañamos la evolución para que el sistema siga respondiendo al negocio.",
  },
] satisfies { step: string; icon: IconName; description: string }[];

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
                    className="gap-2 self-center"
                  >
                    <span>Hablemos de tu operación</span>
                    <LineIcon name="arrow" className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink
                    href="#soluciones"
                    variant="ghost"
                    className="gap-2 self-center"
                  >
                    <span>Ver soluciones</span>
                    <LineIcon name="system" className="h-4 w-4 text-cyan-100/80" />
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

      <section className="relative overflow-hidden bg-[#0a0f1c] px-5 py-11 md:px-6 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(103,232,249,0.12),transparent_30%),linear-gradient(180deg,rgba(3,5,13,0.18),transparent_38%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-cyan-200/90 md:text-sm">
              Problema central
            </p>
            <h2 className="mt-3 max-w-2xl text-[1.55rem] font-semibold leading-[1.12] tracking-tight text-white md:max-w-3xl md:text-5xl md:leading-tight">
              Tu negocio no necesita más herramientas sueltas. Necesita una
              estructura digital pensada como sistema.
            </h2>
          </div>
          <div className="mt-6 grid gap-2.5 md:mt-10 md:grid-cols-2 md:gap-4">
            {painPoints.map((point) => (
              <div
                key={point.text}
                className="flex gap-3 rounded-[1.1rem] border border-white/[0.08] bg-white/[0.035] p-3.5 text-sm leading-6 text-zinc-300 shadow-[0_12px_36px_rgba(0,0,0,0.12)] md:rounded-2xl md:p-5"
              >
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-cyan-200/12 bg-cyan-200/[0.06] text-cyan-100/80">
                  <LineIcon name={point.icon} className="h-4 w-4" />
                </span>
                <span>{point.text}</span>
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
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
                    {solution.title}
                  </h3>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-700">
                    <LineIcon name={solution.icon} className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  {solution.description}
                </p>
                <p className="mt-auto border-t border-zinc-200/70 pt-5 text-sm font-medium leading-6 text-zinc-500">
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

      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_72%,#eef8fb_100%)] px-5 py-9 text-zinc-950 md:px-6 md:py-14">
        <div className="mx-auto grid max-w-6xl items-stretch gap-3 md:grid-cols-[1fr_auto_1fr] md:gap-4">
          <div className="rounded-[1.15rem] border border-zinc-200/80 bg-white/80 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)] md:rounded-2xl md:p-6">
            <div className="flex items-center gap-2 text-zinc-500">
              <LineIcon name="disconnect" className="h-4 w-4" />
              <p className="text-[0.68rem] font-semibold uppercase tracking-wide md:text-sm">
                Antes
              </p>
            </div>
            <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight md:mt-4 md:text-2xl">
              Todo está disperso: WhatsApp, planillas, pedidos y tareas
              manuales.
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-cyan-200/70 bg-white text-lg font-semibold text-cyan-600 shadow-[0_10px_24px_rgba(8,145,178,0.12)] md:h-9 md:w-9 md:border-cyan-200/30 md:bg-[#07131c] md:text-cyan-200">
              →
            </span>
          </div>
          <div className="rounded-[1.15rem] border border-cyan-200/55 bg-[#07131c] p-4 text-white shadow-[0_18px_44px_rgba(8,145,178,0.16)] md:rounded-2xl md:p-6">
            <div className="flex items-center gap-2 text-cyan-200">
              <LineIcon name="system" className="h-4 w-4" />
              <p className="text-[0.68rem] font-semibold uppercase tracking-wide md:text-sm">
                Después
              </p>
            </div>
            <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight md:mt-4 md:text-2xl">
              Tu operación tiene estructura: flujos claros, gestión ordenada y
              una experiencia más simple.
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#07101d_0%,#070a12_18%)] px-6 py-12 md:py-16">
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
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-cyan-200">
                    0{index + 1}
                  </p>
                  <span className="grid h-9 w-9 place-items-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.06] text-cyan-100/85">
                    <LineIcon name={item.icon} className="h-[1.125rem] w-[1.125rem]" />
                  </span>
                </div>
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
            <div className="flex items-center gap-2 text-cyan-100">
              <LineIcon name="nodux" className="h-4 w-4" />
              <p className="text-sm font-semibold uppercase tracking-wide">
                Producto propio
              </p>
            </div>
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
            <ButtonLink href="/blog" variant="secondary" className="gap-2">
              <span>Ver blog</span>
              <LineIcon name="arrow" className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-zinc-200 p-6 transition hover:border-zinc-950"
              >
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <LineIcon name="resource" className="h-4 w-4 text-cyan-700/70" />
                  <p>
                    {post.category} · {formatPostDate(post.date)}
                  </p>
                </div>
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
            <div className="flex items-center gap-2 text-cyan-200">
              <LineIcon name="arrow" className="h-4 w-4" />
              <p className="text-sm font-semibold uppercase tracking-wide">
                Próxima órbita
              </p>
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Cuéntanos qué necesita ordenar tu negocio.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-300">
              Podemos ayudarte a pensar, diseñar y construir la solución digital
              adecuada para tu próxima etapa.
            </p>
          </div>
          <ButtonLink href={`mailto:${siteConfig.contactEmail}`} className="gap-2">
            <span>Hablemos de tu solución</span>
            <LineIcon name="arrow" className="h-4 w-4" />
          </ButtonLink>
        </div>
      </section>
    </SiteShell>
  );
}
