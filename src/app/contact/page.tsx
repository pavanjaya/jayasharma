import type { Metadata } from "next";
import { MapPin, Navigation } from "lucide-react";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Reveal from "@/components/motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";

export const metadata: Metadata = {
  title: "Contact | Advocate Jaya Sharma & Associates",
  description:
    "Get in touch with Advocate Jaya Sharma & Associates in Nashik. Phone, email, office locations, and consultation hours.",
};

const CHAMBER_MAP_QUERY = encodeURIComponent(
  "Maruti Chambers, District Court, Nashik, Maharashtra 422002"
);

const OFFICE_MAP_QUERY = encodeURIComponent(
  "Lotus Capital, Ashok Stambh, Nashik, Maharashtra 422002"
);

const PROCESS_STEPS = [
  {
    title: "Submit Your Request",
    description:
      "Share a few details about your matter through the contact form or a consultation request.",
  },
  {
    title: "We Review & Reach Out",
    description:
      "Advocate Jaya Sharma personally reviews your enquiry and contacts you to confirm a time, based on availability.",
  },
  {
    title: "Consultation",
    description:
      "Discuss your matter directly and get clarity on where you stand and what your realistic options are.",
  },
  {
    title: "Next Steps",
    description:
      "If you'd like to proceed, we agree on a clear, practical path forward for your matter.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Reach out to discuss your legal matter. Available for consultations by appointment."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            What Happens Next
          </p>
          <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            After You Reach Out
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <RevealStaggerItem key={step.title} className="text-center lg:text-left">
              <span className="font-serif-display text-sm font-semibold text-[var(--color-gold)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#3d0b3d]">
                {step.description}
              </p>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </section>

      <Contact />

      <section className="bg-[#FBF8F0] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="grid gap-12 divide-y divide-neutral-200 sm:grid-cols-2 sm:gap-8 sm:divide-y-0 sm:divide-x">
          <div className="flex flex-col items-center gap-4 pb-12 text-center sm:pb-0">
            <MapPin size={22} className="text-[var(--color-gold)]" />
            <div>
              <p className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                No. 622, 6th Floor, Lotus Capital
              </p>
              <p className="mt-1 text-sm text-[#3d0b3d]">
                Ashok Stambh, Nashik – 422002
              </p>
            </div>
            <Button
              href={`https://www.google.com/maps/search/?api=1&query=${OFFICE_MAP_QUERY}`}
              variant="outline"
              leadingIcon={<Navigation size={15} />}
              trailingIcon={null}
              className="mt-2"
            >
              Get Directions
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4 pt-12 text-center sm:pt-0 sm:pl-8">
            <MapPin size={22} className="text-[var(--color-gold)]" />
            <div>
              <p className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                Chamber No. 16, Maruti Chambers
              </p>
              <p className="mt-1 text-sm text-[#3d0b3d]">
                District Court, Nashik, Maharashtra – 422002
              </p>
            </div>
            <Button
              href={`https://www.google.com/maps/search/?api=1&query=${CHAMBER_MAP_QUERY}`}
              variant="outline"
              leadingIcon={<Navigation size={15} />}
              trailingIcon={null}
              className="mt-2"
            >
              Get Directions
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps?q=20.007474,73.784198&z=16&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location on Google Maps"
            />
          </div>
        </Reveal>
        </div>
      </section>
    </>
  );
}
