import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import InsightsGrid from "@/components/InsightsGrid";
import { BLOG_POSTS } from "@/data/blog";

export const metadata: Metadata = {
  title: "Insights | Advocate Jaya Sharma & Associates",
  description:
    "General legal information and explainers on banking recovery, criminal defense, property law, family law, and legal documentation.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Insights"
        title="Insights"
        description="General legal information and explainers, written to help you understand the process before you need to act on it. Not a substitute for advice on your specific matter."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <InsightsGrid posts={BLOG_POSTS} />
      </section>

      <CTASection />
    </>
  );
}
