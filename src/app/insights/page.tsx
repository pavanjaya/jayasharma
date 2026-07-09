import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { BLOG_POSTS } from "@/data/blog";

export const metadata: Metadata = {
  title: "Insights | Advocate Jaya Sharma & Associates",
  description:
    "General legal information and explainers on banking recovery, criminal defense, property law, family law, and legal documentation.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Insights"
        title="Insights"
        description="General legal information and explainers, written to help you understand the process before you need to act on it. Not a substitute for advice on your specific matter."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/5"
            >
              <span className="w-fit rounded-full bg-[var(--color-navy)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                {post.category}
              </span>
              <h2 className="mt-5 font-serif-display text-xl font-semibold leading-snug text-[var(--color-navy)]">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs text-neutral-500">
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
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
