"use client";

import { Phone } from "lucide-react";
import { useBookingModal } from "./BookingModalContext";
import Button from "./Button";
import Reveal from "./motion/Reveal";

export default function CTASection() {
  const { open: openBookingModal } = useBookingModal();

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl bg-[var(--color-navy)] px-8 py-16 text-center sm:px-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-gold)]/15 blur-3xl" />

        <div className="relative">
          <h2 className="font-serif-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Ready to discuss your legal matter?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            Schedule a consultation with Advocate Jaya Sharma to get clarity on
            where you stand and what to do next.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button onClick={openBookingModal} variant="tertiary">Book Consultation</Button>
            <Button
              href="tel:+919986758567"
              variant="light"
              leadingIcon={<Phone size={16} />}
              trailingIcon={null}
            >
              +91 99867 58567
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
