import type { Metadata } from "next";
import { MapPin, Navigation } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Advocate Jaya Sharma & Associates",
  description:
    "Get in touch with Advocate Jaya Sharma & Associates in Nashik. Phone, email, office locations, and consultation hours.",
};

const MAP_QUERY = encodeURIComponent(
  "Maruti Chambers, District Court, Nashik, Maharashtra 422002"
);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Reach out to discuss your legal matter. Available for consultations by appointment, with 24/7 support for urgent needs."
      />

      <Contact />

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-neutral-200 bg-surface px-8 py-16 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-navy)]">
            <MapPin size={24} className="text-[var(--color-gold-light)]" />
          </div>
          <div>
            <p className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
              Chamber No. 16, Maruti Chambers
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              District Court, Nashik, Maharashtra – 422002
            </p>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold)]"
          >
            <Navigation size={15} />
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
}
