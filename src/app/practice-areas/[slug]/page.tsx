import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.commonQuestions.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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

        <div className="mt-14 border-t border-neutral-200 pt-10">
          <p className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
            How It Works
          </p>
          <RevealStagger className="mt-6 divide-y divide-neutral-200">
            {page.process.map((step, i) => (
              <RevealStaggerItem key={step.title} className="flex gap-5 py-5 first:pt-0">
                <span className="font-serif-display text-sm font-semibold text-[var(--color-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-serif-display text-base font-semibold text-[var(--color-navy)]">
                    {step.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#3d0b3d]">
                    {step.description}
                  </p>
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>

        <div className="mt-14 border-t border-neutral-200 pt-10">
          <p className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
            Common Questions
          </p>
          <div className="mt-4">
            <FAQAccordion items={page.commonQuestions} />
          </div>
        </div>

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
