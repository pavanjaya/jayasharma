"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { EASE_OUT } from "@/lib/motion-variants";
import Button from "./Button";
import Reveal from "./motion/Reveal";

function formatDate(dateStr: string) {
  return new Date(dateStr)
    .toLocaleDateString("en-IN", { year: "numeric", month: "short" })
    .toUpperCase();
}

const PAGE_SIZE = 3;
const AUTO_ADVANCE_MS = 5000;

export default function InsightsPreview() {
  const posts = BLOG_POSTS.slice(0, 6);
  const pageCount = Math.ceil(posts.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (pageCount <= 1) return;
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [page, pageCount]);

  return (
    <section className="bg-[#FBF8F0] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Legal Insights
          </p>
          <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            Legal Insights &amp; Explainers
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#3d0b3d]">
            General legal information and explainers on topics clients ask
            about most.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${page * (100 / pageCount)}%` }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            style={{ width: `${pageCount * 100}%` }}
          >
            {Array.from({ length: pageCount }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="grid flex-none gap-10 sm:grid-cols-3"
                style={{ width: `${100 / pageCount}%` }}
              >
                {posts
                  .slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE)
                  .map((post) => (
                    <Link key={post.slug} href={`/insights/${post.slug}`} className="group block">
                      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-navy)]/5">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 30vw, 90vw"
                        />
                      </div>
                      <h3 className="mt-5 font-serif-display text-lg font-semibold leading-snug text-[var(--color-navy)]">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#3d0b3d]">
                        {post.excerpt}
                      </p>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#3d0b3d]">
                        {post.category}
                        <span className="mx-2 text-[#3d0b3d]">·</span>
                        {formatDate(post.date)}
                      </p>
                    </Link>
                  ))}
              </div>
            ))}
          </motion.div>
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
                  size={i === page ? 12 : 8}
                  className={
                    i === page
                      ? "fill-[var(--color-navy)] text-[var(--color-navy)] transition-all duration-300"
                      : "fill-neutral-300 text-[#3d0b3d] transition-all duration-300"
                  }
                />
              </button>
            ))}
          </div>
        )}

        <Reveal delay={0.15} className="mt-12 text-center">
          <Button href="/insights" variant="outline">
            View All Insights
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
