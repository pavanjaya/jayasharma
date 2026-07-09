"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "./motion/Reveal";

const MotionLink = motion(Link);

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl bg-[var(--color-navy)] px-8 py-16 text-center sm:px-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-gold)]/15 blur-3xl" />

        <div className="relative">
          <h2 className="font-serif-display text-3xl font-semibold text-white sm:text-4xl">
            Ready to discuss your legal matter?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Schedule a consultation with Advocate Jaya Sharma to get clarity on
            where you stand and what to do next.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MotionLink
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-7 py-3.5 text-sm font-semibold text-white"
              whileHover={{ scale: 1.03, backgroundColor: "#d4b878" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              Book Consultation
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </MotionLink>
            <a
              href="tel:+919986758567"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              <Phone size={16} />
              +91 99867 58567
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
