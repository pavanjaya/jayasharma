"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Circle } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import type { Service } from "@/data/content";
import { EASE_OUT } from "@/lib/motion-variants";
import ServiceIcon from "./ServiceIcon";
import Reveal from "./motion/Reveal";

const CATEGORY_ICON: Record<string, Service["icon"]> = {
  "Banking & Recovery": "banking",
  "Criminal Defense": "criminal",
  "Property Law": "property",
  "Family Law": "family",
  "Legal Documentation": "documentation",
};

function formatDate(dateStr: string) {
  return new Date(dateStr)
    .toLocaleDateString("en-IN", { year: "numeric", month: "short" })
    .toUpperCase();
}

const PAGE_SIZE = 3;

export default function InsightsPreview() {
  const posts = BLOG_POSTS.slice(0, 6);
  const pageCount = Math.ceil(posts.length / PAGE_SIZE);
  const [page, setPage] = useState(0);
  const visible = posts.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Legal Insights
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
            Legal Insights &amp; Explainers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            General legal information and explainers on topics clients ask
            about most.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-14 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: EASE_OUT }}
              className="grid gap-10 sm:grid-cols-3"
            >
              {visible.map((post) => (
                <Link key={post.slug} href={`/insights/${post.slug}`} className="group block">
                  <div className="flex aspect-[16/9] items-center justify-center bg-[var(--color-navy)]/5 transition-colors duration-300 group-hover:bg-[var(--color-navy)]/10">
                    <ServiceIcon
                      icon={CATEGORY_ICON[post.category] ?? "civil"}
                      size={32}
                      className="text-[var(--color-navy)]"
                    />
                  </div>
                  <h3 className="mt-5 font-serif-display text-lg font-semibold leading-snug text-[var(--color-navy)]">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {post.category}
                    <span className="mx-2 text-neutral-300">·</span>
                    {formatDate(post.date)}
                  </p>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </Reveal>

        {pageCount > 1 && (
          <div className="mt-10 flex items-center justify-center gap-3">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setPage(i)}
                className="p-1"
              >
                <Circle
                  size={8}
                  className={
                    i === page
                      ? "fill-[var(--color-navy)] text-[var(--color-navy)]"
                      : "fill-neutral-300 text-neutral-300"
                  }
                />
              </button>
            ))}
          </div>
        )}

        <Reveal delay={0.15} className="mt-12 text-center">
          <Link
            href="/insights"
            className="group inline-flex items-center justify-center gap-2 border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-navy)] transition-colors duration-300 hover:border-[var(--color-navy)]"
          >
            View All Insights
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
