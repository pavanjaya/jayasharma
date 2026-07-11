"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import type { Service } from "@/data/content";
import ServiceIcon from "./ServiceIcon";
import Reveal from "./motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "./motion/RevealStagger";

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

export default function InsightsPreview() {
  const posts = BLOG_POSTS.slice(0, 6);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const gap = 24;
    const amount = card ? card.offsetWidth + gap : 320;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section className="bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
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
          </div>
          <Link
            href="/insights"
            className="group inline-flex flex-none items-center gap-2 border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-colors duration-300 hover:border-[var(--color-navy)]"
          >
            View All Insights
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <RevealStagger
          ref={scrollerRef}
          className="scrollbar-hide mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {posts.map((post) => (
            <RevealStaggerItem
              key={post.slug}
              className="w-[260px] flex-none snap-start sm:w-[300px] lg:w-[23%]"
            >
              <Link href={`/insights/${post.slug}`} className="group block">
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
            </RevealStaggerItem>
          ))}
        </RevealStagger>

        <div className="mt-8 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous insights"
            className="flex h-11 w-11 items-center justify-center border border-neutral-300 text-[var(--color-navy)] transition-colors duration-300 hover:border-[var(--color-navy)]"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next insights"
            className="flex h-11 w-11 items-center justify-center border border-neutral-300 text-[var(--color-navy)] transition-colors duration-300 hover:border-[var(--color-navy)]"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
