import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | Advocate Jaya Sharma & Associates",
  description: "Privacy policy for the Advocate Jaya Sharma & Associates website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How information submitted through this website is collected and used."
      />

      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-28 text-sm leading-relaxed text-neutral-600 lg:px-8">
        <p>
          This Privacy Policy explains how information is collected and used
          when you visit this website or submit the contact form. It applies
          only to this website and does not extend to any advice, documents,
          or communications exchanged as part of an engagement with Advocate
          Jaya Sharma.
        </p>

        <div>
          <h2 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
            Information We Collect
          </h2>
          <p className="mt-2">
            When you use the contact form, we collect the information you
            provide, such as your name, phone number, email address, and the
            details of your enquiry. We do not collect payment information or
            sensitive personal data through this website.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
            How Information Is Used
          </h2>
          <p className="mt-2">
            Information submitted is used solely to respond to your enquiry
            and, where relevant, to assess and provide legal services. It is
            not sold, rented, or shared with third parties for marketing
            purposes.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
            Confidentiality
          </h2>
          <p className="mt-2">
            Any information shared in connection with a legal matter is
            treated as confidential in accordance with professional conduct
            rules governing advocates in India.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
            Cookies
          </h2>
          <p className="mt-2">
            This website does not use tracking or advertising cookies. Basic,
            non-identifying technical data may be processed by the hosting
            provider to operate the website.
          </p>
        </div>

        <div>
          <h2 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
            Contact
          </h2>
          <p className="mt-2">
            For any questions about this Privacy Policy, reach out via the
            contact details listed on the Contact page.
          </p>
        </div>
      </section>
    </>
  );
}
