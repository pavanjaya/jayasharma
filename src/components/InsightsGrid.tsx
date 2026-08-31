"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { RevealStagger, RevealStaggerItem } from "./motion/RevealStagger";
import type { BlogPost } from "@/data/blog";

const POSTS_PER_PAGE = 12;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsGrid({ posts }: { posts: BlogPost[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))).sort(),
    [posts]
  );

  const active = searchParams.get("category");
  const visiblePosts = active ? posts.filter((p) => p.category === active) : posts;

  const totalPages = Math.max(1, Math.ceil(visiblePosts.length / POSTS_PER_PAGE));
  const requestedPage = Number(searchParams.get("page")) || 1;
  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);

  const pagePosts = visiblePosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  function buildHref(next: { category?: string | null; page?: number }) {
    const params = new URLSearchParams(searchParams.toString());

    if ("category" in next) {
      if (next.category) params.set("category", next.category);
      else params.delete("category");
      params.delete("page");
    }

    if (next.page !== undefined) {
      if (next.page > 1) params.set("page", String(next.page));
      else params.delete("page");
    }

    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  }

  function goTo(href: string) {
    router.push(href, { scroll: false });
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => goTo(buildHref({ category: null }))}
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
            onClick={() => goTo(buildHref({ category }))}
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

      {pagePosts.length === 0 ? (
        <p className="mt-16 text-center text-sm text-[#3d0b3d]">
          No insights in this category yet.
        </p>
      ) : (
        <RevealStagger
          key={`${active ?? "all"}-${currentPage}`}
          className="mt-14 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pagePosts.map((post) => (
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

      {totalPages > 1 && (
        <nav
          aria-label="Insights pagination"
          className="mt-16 flex items-center justify-center gap-2"
        >
          <button
            type="button"
            onClick={() => goTo(buildHref({ page: currentPage - 1 }))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="flex h-9 w-9 items-center justify-center border border-[var(--color-navy)]/25 text-[var(--color-navy)] transition-colors duration-300 hover:border-[var(--color-navy)] disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => goTo(buildHref({ page }))}
              aria-current={page === currentPage ? "page" : undefined}
              className={`flex h-9 w-9 items-center justify-center text-sm font-semibold transition-colors duration-300 ${
                page === currentPage
                  ? "bg-[var(--color-navy)] text-white"
                  : "border border-[var(--color-navy)]/25 text-[var(--color-navy)] hover:border-[var(--color-navy)]"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goTo(buildHref({ page: currentPage + 1 }))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="flex h-9 w-9 items-center justify-center border border-[var(--color-navy)]/25 text-[var(--color-navy)] transition-colors duration-300 hover:border-[var(--color-navy)] disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>
        </nav>
      )}
    </>
  );
}
