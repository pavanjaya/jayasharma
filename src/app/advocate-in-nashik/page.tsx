import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";
import ZoomImage from "@/components/motion/ZoomImage";
import { SERVICES } from "@/data/content";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Advocate in Nashik | Advocate Jaya Sharma & Associates",
  description:
    "Advocate Jaya Sharma is an advocate and lawyer in Nashik, Maharashtra, practicing civil, family, property, corporate, and criminal law, with over 15 years of legal experience.",
  alternates: {
    canonical: "/advocate-in-nashik",
  },
};

// Short, page-specific descriptions — distinct from the homepage cards and
// the dedicated practice-area pages, so this page reads as an overview and
// internal-linking hub rather than a duplicate of either.
const AREA_OVERVIEWS: Record<string, string> = {
  "civil-litigation":
    "Civil suits, contractual disputes, and recovery matters before the Nashik District Court, from the pre-litigation notice stage through trial and appeal.",
  "property-law":
    "Title verification, due diligence, and drafting of sale and lease deeds, along with representation in property and partition disputes.",
  "arbitration-adr":
    "Representation in arbitration and mediation as an alternative to courtroom litigation, including drafting of arbitration clauses and enforcement of awards.",
  "legal-documentation":
    "Drafting and vetting of agreements, deeds, powers of attorney, wills, and legal notices, with an emphasis on precision that prevents disputes.",
  "banking-recovery-nclt":
    "Representation for banks and financial institutions in debt recovery matters before the DRT and NCLT, alongside current empanelments with banks in Nashik.",
  "corporate-law":
    "Advisory on company incorporation, regulatory compliance, and commercial contracts, informed by experience across civil, criminal, and corporate matters.",
  "family-law":
    "Matrimonial disputes, child custody, maintenance, and inheritance matters, handled with procedural rigour and a considered, client-focused approach.",
  "criminal-defense":
    "Defense representation in criminal matters before the Nashik District Court, including bail applications and trial representation.",
};

const PAGE_FAQS = [
  {
    question: "What areas of law does Advocate Jaya Sharma practice?",
    answer:
      "The practice covers civil litigation, property law, family law, criminal defense, corporate law, arbitration and alternate dispute resolution, legal documentation, and banking recovery/NCLT matters. Each area is described in more detail on its own practice-area page.",
  },
  {
    question: "Where is Advocate Jaya Sharma based?",
    answer:
      "The practice is based in Nashik, Maharashtra, with office locations at Lotus Capital, Ashok Stambh, and at Maruti Chambers near the Nashik District Court. Matters are primarily heard before the Nashik District Court.",
  },
  {
    question: "What is the difference between an advocate and a lawyer?",
    answer:
      "In India, an advocate is a law graduate enrolled with a State Bar Council under the Advocates Act, 1961, and is entitled to represent clients and appear before courts and tribunals. The term \"lawyer\" is often used more loosely — someone searching for a lawyer in Nashik and someone searching for an advocate in Nashik are typically looking for the same thing, since every practicing advocate is a lawyer, though not every law graduate is an enrolled advocate.",
  },
  {
    question: "When may someone need legal advice before taking legal action?",
    answer:
      "Legal advice is often useful before signing a significant agreement, before initiating court proceedings, or upon receiving a legal notice, summons, or FIR. Early advice can affect which options remain available and how a matter is best approached.",
  },
  {
    question: "What information may be useful when seeking legal guidance?",
    answer:
      "Relevant documents such as contracts, notices, correspondence, or court papers, along with a clear timeline of events, help in assessing a matter accurately. Even where a document's relevance is unclear, it is generally useful to have it on hand.",
  },
  {
    question: "Does the practice handle matters outside the Nashik District Court?",
    answer:
      "The primary practice is before the Nashik District Court. Advocate Jaya Sharma also has prior professional experience appearing before the Debt Recovery Tribunal, the National Company Law Tribunal, and the Karnataka High Court.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Advocate in Nashik",
      item: `${SITE_URL}/advocate-in-nashik`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PAGE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AdvocateInNashikPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHeader
        eyebrow="Legal Practice in Nashik"
        title="Advocate in Nashik"
        description="An overview of Advocate Jaya Sharma's legal practice in Nashik, Maharashtra — her professional background, areas of practice, and the courts and forums before which matters are handled."
      />

      <section className="mx-auto max-w-3xl px-6 pb-4 lg:px-8">
        <Reveal className="relative mx-auto max-w-xl">
          <div className="absolute -inset-3 -z-10 border border-[var(--color-gold)]/30" />
          <ZoomImage className="relative aspect-[4/5] w-full overflow-hidden bg-surface sm:aspect-[16/10]">
            <Image
              src="/advocate-jaya-sharma-about.jpg"
              alt="Advocate Jaya Sharma"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 36rem, 90vw"
            />
          </ZoomImage>
        </Reveal>

        <Reveal className="mt-14 border-t border-neutral-200 pt-10">
          <h2 className="font-serif-display text-2xl font-semibold text-[var(--color-navy)]">
            Advocate Jaya Sharma
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-[#3d0b3d]">
            <p>
              Advocate Jaya Sharma is a legal practitioner and lawyer based
              in Nashik, Maharashtra. She holds B.Com., LL.B., and LL.M. degrees, with
              her LL.M. in Business Law from Nathmal Goenka Law College,
              Akola (SGB Amravati University). She is enrolled with the Bar
              Council of India (Registration No. MAH/4623/2010) and has over
              15 years of professional experience in litigation, legal
              advisory, and dispute resolution.
            </p>
            <p>
              Her professional background includes seven years as Senior
              Advocate at H R Katti Associates, Bangalore (2016–2022),
              representing clients before the Debt Recovery Tribunal, the
              National Company Law Tribunal, and the Karnataka High Court.
              Since February 2022, she has run her own independent legal
              practice in Nashik and also serves as a Legal Associate with
              Jayant D Jaybhave and Associates.
            </p>
            <p>
              A fuller account of her education, professional experience,
              and empanelments is available on the{" "}
              <Link
                href="/about"
                className="font-semibold text-[var(--color-navy)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-gold)]"
              >
                About page
              </Link>
              .
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-14 border-t border-neutral-200 pt-10">
          <h2 className="font-serif-display text-2xl font-semibold text-[var(--color-navy)]">
            Legal Practice in Nashik
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-[#3d0b3d]">
            <p>
              The practice is based in Nashik and handles civil, criminal,
              family, and property matters, together with corporate
              advisory, arbitration, legal documentation, and banking
              recovery work. Matters are primarily heard before the Nashik
              District Court.
            </p>
            <p>
              Advocate Jaya Sharma is presently empanelled as Panel Advocate
              for Bank of Maharashtra, Vishwas Cooperative Bank, and Shree
              Samarth Sahakari Bank, Nashik, and is appointed as an Advocate
              for Indian Oil Corporation Ltd., Nashik District. The practice
              maintains office locations at Lotus Capital, Ashok Stambh, and
              at Maruti Chambers near the Nashik District Court — details of
              both are available on the{" "}
              <Link
                href="/contact"
                className="font-semibold text-[var(--color-navy)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-gold)]"
              >
                Contact page
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>

      {/* Areas of Legal Practice */}
      <section className="mt-14 py-4">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal className="border-t border-neutral-200 pt-10">
            <h2 className="font-serif-display text-2xl font-semibold text-[var(--color-navy)]">
              Areas of Legal Practice
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#3d0b3d]">
              An overview of each area follows below. Each links through to a
              dedicated page with further detail on how that matter type is
              handled.
            </p>
          </Reveal>

          <RevealStagger className="mt-10 grid gap-px overflow-hidden bg-neutral-200 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <RevealStaggerItem key={service.slug} className="group bg-background">
                <Link
                  href={`/practice-areas/${service.slug}`}
                  className="flex h-full flex-col p-8 transition-colors duration-300 group-hover:bg-[var(--color-navy)]"
                >
                  <ServiceIcon
                    icon={service.icon}
                    size={28}
                    className="text-[var(--color-gold)]"
                  />
                  <h3 className="mt-5 font-serif-display text-lg font-semibold text-[var(--color-navy)] transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#3d0b3d] transition-colors duration-300 group-hover:text-white/70">
                    {AREA_OVERVIEWS[service.slug]}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] transition-colors duration-300 group-hover:text-white">
                    Read More
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-4 lg:px-8">
        <Reveal className="mt-4 border-t border-neutral-200 pt-10">
          <h2 className="font-serif-display text-2xl font-semibold text-[var(--color-navy)]">
            Professional Experience
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-[#3d0b3d]">
            <p>
              Advocate Jaya Sharma has over 15 years of experience in the
              legal profession, having been enrolled with the Bar Council of
              India in 2010. Her career began with practice in Akola and
              Shahada, Maharashtra (2010–2015), followed by seven years as
              Senior Advocate at H R Katti Associates in Bangalore
              (2016–2022). Since February 2022, she has practiced
              independently in Nashik and serves concurrently as a Legal
              Associate with Jayant D Jaybhave and Associates.
            </p>
            <p>
              A detailed, chronological professional timeline is available
              on the{" "}
              <Link
                href="/about"
                className="font-semibold text-[var(--color-navy)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-gold)]"
              >
                About page
              </Link>
              .
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-14 border-t border-neutral-200 pt-10">
          <h2 className="font-serif-display text-2xl font-semibold text-[var(--color-navy)]">
            Legal Information and Resources
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-[#3d0b3d]">
            <p>
              The{" "}
              <Link
                href="/insights"
                className="font-semibold text-[var(--color-navy)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-gold)]"
              >
                Insights
              </Link>{" "}
              section of this website contains general legal information and
              educational articles on topics relevant to civil, family,
              property, criminal, and banking law in the Indian context.
              This content is intended for general informational purposes
              only. It does not constitute legal advice, does not create an
              advocate–client relationship, and is not a substitute for
              consultation on the facts of an individual matter.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-14 border-t border-neutral-200 pt-10">
          <h2 className="font-serif-display text-2xl font-semibold text-[var(--color-navy)]">
            Common Questions
          </h2>
          <div className="mt-4">
            <FAQAccordion items={PAGE_FAQS} />
          </div>
          <p className="mt-4 text-sm text-[#3d0b3d]">
            Additional questions about consultations, fees, and process are
            answered on the{" "}
            <Link
              href="/faq"
              className="font-semibold text-[var(--color-navy)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-gold)]"
            >
              FAQ page
            </Link>
            .
          </p>
        </Reveal>

        <Reveal className="mt-14 border-t border-neutral-200 pt-10 pb-4">
          <h2 className="font-serif-display text-2xl font-semibold text-[var(--color-navy)]">
            Contact
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3d0b3d]">
            For professional contact information, including office
            locations, phone, email, and consultation scheduling, please
            refer to the{" "}
            <Link
              href="/contact"
              className="font-semibold text-[var(--color-navy)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-gold)]"
            >
              Contact page
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
