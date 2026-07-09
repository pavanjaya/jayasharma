import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import Reveal from "./motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "./motion/RevealStagger";

export default function InsightsPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Legal Insights
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
            From the Desk of Advocate Jaya Sharma
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            General legal information and explainers on topics clients ask
            about most.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-3">
          {posts.map((post) => (
            <RevealStaggerItem key={post.slug} className="h-full">
              <Link
                href={`/insights/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="w-fit rounded-full bg-[var(--color-navy)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                  {post.category}
                </span>
                <h3 className="mt-5 font-serif-display text-lg font-semibold leading-snug text-[var(--color-navy)]">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)]">
                  Read More
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </RevealStaggerItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.1} className="mt-12 text-center">
          <Link
            href="/insights"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-navy)] transition-colors duration-300 hover:border-[var(--color-navy)]"
          >
            View All Insights
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
