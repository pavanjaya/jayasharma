import type { Metadata } from "next";
import { MapPin, Navigation } from "lucide-react";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Reveal from "@/components/motion/Reveal";

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

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Reach out to discuss your legal matter. Available for consultations by appointment."
      />

      <Contact />

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
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
      </section>
    </>
  );
}
