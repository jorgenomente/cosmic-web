import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/content/site";
import { formatPostDate, sortPostsByDate } from "@/lib/blog";

const cockpitSignals = [
  { label: "Operación digital", value: "Sistema activo" },
  { label: "Procesos", value: "En orden" },
  { label: "Gestión", value: "Visible" },
  { label: "IA aplicada", value: "Con propósito" },
  { label: "Experiencia", value: "Más simple" },
];

const painPoints = [
  "Todo está repartido entre WhatsApp, Instagram, planillas y notas.",
  "La web no refleja lo que haces ni ayuda a vender.",
  "Los procesos manuales te quitan tiempo.",
  "No tienes claridad sobre pedidos, productos o gestión.",
];

const solutions = [
  {
    title: "Webs comerciales",
    description:
      "Sitios claros que explican tu propuesta, ordenan la información y convierten visitas en conversaciones.",
  },
  {
    title: "Tiendas online",
    description:
      "Experiencias de compra pensadas para vender mejor, mostrar productos y facilitar pedidos.",
  },
  {
    title: "Sistemas de gestión",
    description:
      "Herramientas internas para centralizar datos, reducir tareas manuales y mejorar la operación diaria.",
  },
  {
    title: "Productos digitales personalizados",
    description:
      "Plataformas, portales y flujos hechos a medida cuando una plantilla ya no alcanza.",
  },
  {
    title: "IA aplicada y automatización",
    description:
      "Integramos IA en flujos, herramientas y sistemas cuando ayuda a reducir tareas manuales, ordenar información o mejorar la operación.",
  },
  {
    title: "UX/UI y estrategia digital",
    description:
      "Diseño de experiencia con mirada de negocio para que cada pantalla tenga una función clara.",
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
      <section className="relative overflow-hidden border-b border-white/10 bg-[#070a12]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.18),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(168,85,247,0.12),transparent_24%),linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:auto,auto,56px_56px,56px_56px]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-24">
          <div>
            <p className="mb-4 inline-flex border border-cyan-200/25 bg-cyan-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100">
              Estado del sistema: claridad operativa
            </p>
            <div className="mb-5 inline-flex border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-medium text-zinc-200">
              IA aplicada a sistemas digitales
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Diseñamos soluciones digitales para que tu negocio opere mejor.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Convertimos procesos dispersos, ideas y necesidades operativas en
              webs, tiendas online, sistemas y herramientas digitales claras,
              funcionales y sostenibles.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`mailto:${siteConfig.contactEmail}`}>
                Hablemos de tu proyecto
              </ButtonLink>
              <ButtonLink href="#soluciones" variant="ghost">
                Ver soluciones
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-cyan-200/10" />
            <div className="relative border border-white/15 bg-white/[0.06] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-zinc-400">
                    Cabina Cosmic Studio
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-white">
                    Mapa operativo
                  </h2>
                </div>
                <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              </div>
              <div className="mt-5 grid gap-3">
                {cockpitSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="grid grid-cols-[1fr_auto] gap-4 border border-white/10 bg-[#0d1320]/80 p-4"
                  >
                    <span className="text-sm text-zinc-300">
                      {signal.label}
                    </span>
                    <span className="text-sm font-semibold text-cyan-100">
                      {signal.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 border border-cyan-200/20 bg-cyan-200/10 p-4">
                <p className="text-xs uppercase tracking-wide text-cyan-100">
                  Flujo principal
                </p>
                <div className="mt-4 h-2 bg-white/10">
                  <div className="h-full w-4/5 bg-cyan-300" />
                </div>
                <p className="mt-3 text-sm text-zinc-300">
                  Ideas → estructura → solución digital → operación sostenible
                </p>
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
                className="border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-zinc-300"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="soluciones" className="bg-zinc-50 px-6 py-16 text-zinc-950">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Soluciones"
            title="Diseñamos piezas digitales que trabajan conectadas"
            description="No partimos de una pantalla bonita. Partimos de lo que tu negocio necesita ordenar, vender, gestionar o automatizar."
          />
          <div className="mt-8 border border-cyan-200 bg-[#07131c] p-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
              IA con propósito
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">
              Diseñamos soluciones digitales que pueden incorporar IA de forma
              útil, clara y sostenible: menos tareas repetidas, más claridad
              operativa.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="border border-zinc-200 bg-white p-6 transition hover:border-zinc-900"
              >
                <p className="mb-5 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Módulo digital
                </p>
                <h3 className="text-xl font-semibold text-zinc-950">
                  {solution.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-zinc-950">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          <div className="border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Antes
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Procesos dispersos, tareas manuales, poca visibilidad,
              herramientas desconectadas.
            </h2>
          </div>
          <div className="border border-cyan-200 bg-[#07131c] p-6 text-white">
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
                className="border border-white/10 bg-white/[0.04] p-5"
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
          <div className="border border-cyan-200/20 bg-cyan-200/10 p-6">
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
              <ButtonLink href={`mailto:${siteConfig.contactEmail}`} variant="ghost">
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

      <section className="bg-white px-6 py-16 text-zinc-950">
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
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#070a12] px-6 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(103,232,249,0.16),transparent_32%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 border border-white/10 bg-white/[0.04] p-6 md:flex-row md:items-center md:justify-between md:p-8">
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
            Hablemos de tu proyecto
          </ButtonLink>
        </div>
      </section>
    </SiteShell>
  );
}
