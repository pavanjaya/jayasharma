import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Award, Mic, Newspaper, Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";
import {
  RECOGNITION_CATEGORY_LABELS,
  RECOGNITION_ITEMS,
  type RecognitionCategory,
} from "@/data/content";

export const metadata: Metadata = {
  title: "Recognition | Advocate Jaya Sharma & Associates",
  description:
    "Awards, media features, chief guest appearances, and other professional recognition received by Advocate Jaya Sharma.",
};

const CATEGORY_ORDER: RecognitionCategory[] = ["award", "media", "chief-guest", "achievement"];

const CATEGORY_ICONS: Record<RecognitionCategory, typeof Award> = {
  award: Award,
  media: Newspaper,
  "chief-guest": Mic,
  achievement: Star,
};

export default function RecognitionPage() {
  const hasAny = RECOGNITION_ITEMS.length > 0;

  return (
    <>
      <PageHeader
        eyebrow="Recognition"
        title="Recognition & Achievements"
        description="Awards, media features, chief guest appearances, and other professional recognition received over the course of her practice."
      />

      <section className="mx-auto max-w-4xl px-6 pb-28 lg:px-8">
        {!hasAny ? (
          <p className="text-center text-sm text-[#3d0b3d]">
            Nothing to show here yet.
          </p>
        ) : (
          CATEGORY_ORDER.map((category) => {
            const items = RECOGNITION_ITEMS.filter((item) => item.category === category);
            if (items.length === 0) return null;
            const Icon = CATEGORY_ICONS[category];

            return (
              <div key={category} className="mt-14 border-t border-neutral-200 pt-10 first:mt-0 first:border-t-0 first:pt-0">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
                  {RECOGNITION_CATEGORY_LABELS[category]}
                </p>
                <RevealStagger className="mt-8 divide-y divide-neutral-200">
                  {items.map((item) => (
                    <RevealStaggerItem
                      key={`${item.title}-${item.organization}`}
                      className="flex gap-4 py-6 first:pt-0"
                    >
                      <Icon size={22} className="mt-1 flex-none text-[var(--color-gold)]" />
                      <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                          <p className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                            {item.title}
                          </p>
                          {item.date && (
                            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                              {item.date}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-[#3d0b3d]">
                          {item.organization}
                        </p>
                        {item.description && (
                          <p className="mt-2 text-sm leading-relaxed text-[#3d0b3d]">
                            {item.description}
                          </p>
                        )}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-navy)] transition-colors duration-300 hover:text-[var(--color-gold)]"
                          >
                            View Coverage
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                        {item.images && item.images.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-4">
                            {item.images.map((src) => (
                              <a
                                key={src}
                                href={src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block h-40 w-28 flex-none overflow-hidden bg-[var(--color-navy)]/5 transition-opacity duration-300 hover:opacity-80"
                              >
                                <Image
                                  src={src}
                                  alt={`${item.title} — photo`}
                                  fill
                                  className="object-cover"
                                  sizes="112px"
                                />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </RevealStaggerItem>
                  ))}
                </RevealStagger>
              </div>
            );
          })
        )}
      </section>

      <CTASection />
    </>
  );
}
