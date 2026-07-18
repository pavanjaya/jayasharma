import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/motion/Reveal";
import { SERVICES } from "@/data/content";

export const metadata: Metadata = {
  title: "Practice Areas | Advocate Jaya Sharma & Associates",
  description:
    "Corporate law, civil litigation, family law, criminal defense, property law, and legal documentation services in Nashik.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Practice Areas"
        description="Comprehensive legal services tailored to individuals and businesses, backed by 15+ years of courtroom and advisory experience."
      />

      <section className="mx-auto max-w-5xl divide-y divide-neutral-200 px-6 pb-28 lg:px-8">
        {SERVICES.map((service, index) => (
          <Reveal key={service.slug} id={service.slug} className="scroll-mt-28 py-12 first:pt-0">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
              <div className="lg:w-72 lg:flex-none">
                <div className="flex h-14 w-14 items-center justify-center bg-[var(--color-mint)]">
                  <ServiceIcon icon={service.icon} size={26} className="text-[var(--color-navy)]" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
                  {`0${index + 1}`}
                </p>
                <h2 className="mt-2 font-serif-display text-2xl font-semibold text-[var(--color-navy)]">
                  {service.title}
                </h2>
              </div>

              <div className="flex-1">
                <p className="text-base leading-relaxed text-neutral-600">
                  {service.longDescription}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <CheckCircle2 size={16} className="mt-0.5 flex-none text-[var(--color-gold)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <CTASection />
    </>
  );
}
