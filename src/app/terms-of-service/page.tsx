import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service | Advocate Jaya Sharma & Associates",
  description: "Terms of service for the Advocate Jaya Sharma & Associates website.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that govern your use of this website."
      />

      <section className="mx-auto max-w-3xl px-6 pb-28 lg:px-8">
        <Reveal className="space-y-6 text-sm leading-relaxed text-[#2d2e39]">
          <p>
            By accessing this website, you agree to the following terms. If you
            do not agree, please discontinue use of the website.
          </p>

          <div>
            <h2 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
              No Legal Advice
            </h2>
            <p className="mt-2">
              The content on this website, including the Insights section, is
              provided for general informational purposes only. It does not
              constitute legal advice and should not be relied upon as a
              substitute for consultation with an advocate on the specific
              facts of your matter.
            </p>
          </div>

          <div>
            <h2 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
              No Advocate–Client Relationship
            </h2>
            <p className="mt-2">
              Browsing this website or submitting the contact form does not, by
              itself, create an advocate–client relationship. Such a
              relationship is formed only once expressly agreed upon.
            </p>
          </div>

          <div>
            <h2 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
              No Advertisement or Solicitation
            </h2>
            <p className="mt-2">
              In accordance with the rules of the Bar Council of India, this
              website is not intended to advertise or solicit work. It is
              meant only to provide information at the request of the user.
            </p>
          </div>

          <div>
            <h2 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
              Accuracy of Information
            </h2>
            <p className="mt-2">
              While care is taken to keep information on this website accurate
              and current, no warranty is made as to its completeness or
              applicability to any particular situation, and it may not
              reflect the most recent developments in law.
            </p>
          </div>

          <div>
            <h2 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
              Governing Law
            </h2>
            <p className="mt-2">
              These terms are governed by the laws of India, and any disputes
              relating to this website shall be subject to the jurisdiction of
              the courts in Nashik, Maharashtra.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
