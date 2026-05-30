import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { SectionHeading } from "@/components/sections/section-heading";
import { blogPosts } from "@/content/blog";
import { formatPostDate, sortPostsByDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre soluciones digitales, operación, UX, automatización y sistemas para negocios.",
};

export default function BlogPage() {
  const posts = sortPostsByDate(blogPosts);

  return (
    <SiteShell>
      <div className="bg-white text-zinc-950">
        <section className="border-b border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionHeading
              eyebrow="Recursos"
              title="Artículos"
              description="Ideas, guías y análisis sobre soluciones digitales, operación, UX, automatización y sistemas para negocios."
            />
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-zinc-200 p-6 transition hover:border-zinc-950"
              >
                <p className="text-sm text-zinc-500">
                  {post.category} · {formatPostDate(post.date)} ·{" "}
                  {post.readingTime}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
