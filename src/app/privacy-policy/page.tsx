import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/motion/Reveal";

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

      <section className="mx-auto max-w-3xl px-6 pb-28 lg:px-8">
        <Reveal className="space-y-6 text-sm leading-relaxed text-[#3d0b3d]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
            Last updated: August 30, 2026
          </p>

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
              not sold or rented to third parties, and is not shared with any
              third party for marketing purposes. Contact form submissions are
              processed through Formspree, a third-party form-handling
              service, solely to deliver your enquiry to us — see the
              Third-Party Services section below.
            </p>
          </div>

          <div>
            <h2 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
              Data Retention
            </h2>
            <p className="mt-2">
              Enquiry details submitted through the contact form are retained
              only for as long as needed to respond to the enquiry and, where
              an engagement follows, for as long as required by professional
              and legal record-keeping obligations. You may request that your
              submitted contact details be deleted at any time by writing to
              the email address below.
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
              Cookies &amp; Third-Party Services
            </h2>
            <p className="mt-2">
              This website uses Google Firebase Analytics to understand how
              visitors use the site, such as which pages are viewed and
              general location and device information. This data is
              aggregated and anonymised, and is not used for advertising or
              sold to third parties. It does not use advertising cookies.
            </p>
            <p className="mt-2">
              The contact form is processed by Formspree, and the office
              location on the Contact page is displayed using an embedded
              Google Maps iframe — both may set their own cookies or process
              basic technical data (such as IP address) under their
              respective privacy policies, independent of this website. Basic,
              non-identifying technical data may also be processed by the
              hosting provider to operate the website.
            </p>
          </div>

          <div>
            <h2 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
              Changes to This Policy
            </h2>
            <p className="mt-2">
              This Privacy Policy may be updated from time to time to reflect
              changes to the website or the services it uses. The date at the
              top of this page indicates when it was last revised.
            </p>
          </div>

          <div>
            <h2 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
              Contact
            </h2>
            <p className="mt-2">
              For any questions about this Privacy Policy, you can reach us
              at:
            </p>
            <p className="mt-3">
              Advocate Jaya Sharma
              <br />
              No. 622, 6th Floor, Lotus Capital, Ashok Stambh
              <br />
              Nashik, Maharashtra – 422002
              <br />
              Phone:{" "}
              <a
                href="tel:+919986758567"
                className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-gold)]"
              >
                +91 99867 58567
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:advjayaosharma@gmail.com"
                className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-gold)]"
              >
                advjayaosharma@gmail.com
              </a>
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
