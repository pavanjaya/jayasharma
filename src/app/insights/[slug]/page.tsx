import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";
import { BLOG_POSTS } from "@/data/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Advocate Jaya Sharma & Associates`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden bg-background pt-36 pb-16 lg:pt-44 lg:pb-20">
        <Reveal className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-[var(--color-navy)]"
          >
            <ArrowLeft size={15} />
            Back to Insights
          </Link>

          <span className="mt-6 inline-block w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
            {post.category}
          </span>
          <h1 className="mt-4 font-serif-display text-3xl font-semibold leading-tight text-[var(--color-navy)] sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="relative aspect-[16/9] w-full overflow-hidden bg-surface">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 48rem, 90vw"
          />
        </Reveal>
      </div>

      <article className="mx-auto max-w-3xl px-6 pb-20 pt-10 lg:px-8">
        <Reveal className="space-y-8">
          {post.content.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="mb-3 font-serif-display text-xl font-semibold text-[var(--color-navy)]">
                  {block.heading}
                </h2>
              )}
              {block.paragraphs.map((p, j) => (
                <p key={j} className="mt-3 text-base leading-relaxed text-neutral-600 first:mt-0">
                  {p}
                </p>
              ))}
              {block.bullets && (
                <ul className="mt-4 space-y-2">
                  {block.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-gold)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-12 rounded-xl border border-neutral-200 bg-surface px-6 py-5">
          <p className="text-xs leading-relaxed text-neutral-500">
            This article is for general informational purposes only and does
            not constitute legal advice. Every matter has its own facts —
            please consult directly for guidance specific to your situation.
          </p>
        </Reveal>

        {related.length > 0 && (
          <div className="mt-14 border-t border-neutral-200 pt-10">
            <p className="text-sm font-semibold text-[var(--color-navy)]">
              Related Reading
            </p>
            <RevealStagger className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <RevealStaggerItem key={r.slug}>
                  <Link
                    href={`/insights/${r.slug}`}
                    className="block rounded-xl border border-neutral-200 bg-white p-5 transition-colors duration-300 hover:border-[var(--color-navy)]/30"
                  >
                    <p className="font-medium text-[var(--color-navy)]">{r.title}</p>
                    <p className="mt-1.5 text-sm text-neutral-500">{r.excerpt}</p>
                  </Link>
                </RevealStaggerItem>
              ))}
            </RevealStagger>
          </div>
        )}
      </article>

      <CTASection />
    </>
  );
}
