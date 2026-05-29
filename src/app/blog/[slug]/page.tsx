import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { blogPosts } from "@/content/blog";
import { formatPostDate } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Articulo no encontrado",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/blog"
          className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
        >
          Volver al blog
        </Link>
        <header className="mt-8 border-b border-zinc-200 pb-10">
          <p className="text-sm text-zinc-500">
            {post.category} · {formatPostDate(post.date)} · {post.readingTime}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">{post.excerpt}</p>
        </header>
        <div className="mt-10 space-y-6 text-base leading-8 text-zinc-700">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </SiteShell>
  );
}
