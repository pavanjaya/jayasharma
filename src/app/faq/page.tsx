import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQS } from "@/data/content";

export const metadata: Metadata = {
  title: "FAQ | Advocate Jaya Sharma & Associates",
  description:
    "Answers to common questions about consultations, fees, jurisdiction, confidentiality, and the legal process.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="Common Questions"
        title="Frequently Asked Questions"
        description="Answers to questions clients often have before their first consultation. For anything specific to your situation, get in touch directly."
      />

      <section className="mx-auto max-w-3xl px-6 pb-28 lg:px-8">
        <FAQAccordion items={FAQS} />
      </section>

      <CTASection />
    </>
  );
}
