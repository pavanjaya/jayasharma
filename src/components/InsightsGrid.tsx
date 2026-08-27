"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { RevealStagger, RevealStaggerItem } from "./motion/RevealStagger";
import type { BlogPost } from "@/data/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsGrid({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))).sort(),
    [posts]
  );
  const [active, setActive] = useState<string | null>(null);

  const visiblePosts = active ? posts.filter((p) => p.category === active) : posts;

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
            active === null
              ? "bg-[var(--color-navy)] text-white"
              : "border border-[var(--color-navy)]/25 text-[var(--color-navy)] hover:border-[var(--color-navy)]"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
              active === category
                ? "bg-[var(--color-navy)] text-white"
                : "border border-[var(--color-navy)]/25 text-[var(--color-navy)] hover:border-[var(--color-navy)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {visiblePosts.length === 0 ? (
        <p className="mt-16 text-center text-sm text-[#3d0b3d]">
          No insights in this category yet.
        </p>
      ) : (
        <RevealStagger
          key={active ?? "all"}
          className="mt-14 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visiblePosts.map((post) => (
            <RevealStaggerItem key={post.slug} className="h-full">
              <Link href={`/insights/${post.slug}`} className="group flex h-full flex-col">
                <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-navy)]/5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 30vw, 90vw"
                  />
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                    {post.category}
                  </span>
                  <h2 className="mt-3 font-serif-display text-xl font-semibold leading-snug text-[var(--color-navy)]">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#3d0b3d]">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-xs text-[#3d0b3d]">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)]">
                    Read More
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      )}
    </>
  );
}
