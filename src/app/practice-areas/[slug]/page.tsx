import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";
import { PRACTICE_AREA_LANDING_PAGES, SERVICES } from "@/data/content";
import { BLOG_POSTS } from "@/data/blog";

export function generateStaticParams() {
  return PRACTICE_AREA_LANDING_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = PRACTICE_AREA_LANDING_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.seoTitle,
    description: page.seoDescription,
  };
}

export default async function PracticeAreaLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = PRACTICE_AREA_LANDING_PAGES.find((p) => p.slug === slug);
  const service = SERVICES.find((s) => s.slug === slug);
  if (!page || !service) notFound();

  const relatedPosts = BLOG_POSTS.filter((post) =>
    page.relatedPostSlugs.includes(post.slug)
  );

  return (
    <>
      <PageHeader
        eyebrow="Practice Area"
        title={page.heading}
        description={service.shortDescription}
      />

      <section className="mx-auto max-w-3xl px-6 pb-20 lg:px-8">
        <Reveal className="space-y-5 text-base leading-relaxed text-[#3d0b3d]">
          {page.intro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <p className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
            What This Covers
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm text-[#3d0b3d]">
                <CheckCircle2 size={16} className="mt-0.5 flex-none text-[var(--color-gold)]" />
                {bullet}
              </li>
            ))}
          </ul>
        </Reveal>

        {relatedPosts.length > 0 && (
          <div className="mt-14 border-t border-neutral-200 pt-10">
            <p className="text-sm font-semibold text-[var(--color-navy)]">Related Reading</p>
            <RevealStagger className="mt-5 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((post) => (
                <RevealStaggerItem key={post.slug}>
                  <Link href={`/insights/${post.slug}`} className="group block">
                    <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-navy)]/5">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 40vw, 90vw"
                      />
                    </div>
                    <p className="mt-3 font-serif-display text-base font-semibold leading-snug text-[var(--color-navy)] transition-colors duration-300 group-hover:text-[var(--color-gold)]">
                      {post.title}
                    </p>
                  </Link>
                </RevealStaggerItem>
              ))}
            </RevealStagger>
          </div>
        )}

        <Reveal delay={0.1} className="mt-12">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] transition-colors duration-300 hover:text-[var(--color-gold)]"
          >
            <ArrowLeft size={15} />
            Back to All Practice Areas
          </Link>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
