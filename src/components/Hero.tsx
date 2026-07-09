"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";
import { fadeUp, imageReveal, staggerContainer } from "@/lib/motion-variants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-28 lg:pt-32 lg:pb-36">
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          className="flex flex-col items-start"
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.15, 0.5)}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--color-navy)]"
          >
            <Scale size={14} className="text-[var(--color-gold)]" />
            Trusted Legal Counsel Since 2010
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 max-w-xl font-serif-display text-4xl font-semibold uppercase leading-[0.95] text-[var(--color-navy)] sm:text-5xl lg:text-6xl"
          >
            <span className="block">Law with Clarity.</span>
            <span className="block">Practice with Integrity.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600"
          >
            A practice built on professionalism, integrity, diligence, and a
            steadfast commitment to the rule of law.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-[var(--color-navy)] px-7 py-3.5 text-sm font-semibold text-white"
              whileHover={{ scale: 1.02, backgroundColor: "#b08d4f" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              Book Consultation
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="#practice-areas"
              className="inline-flex items-center justify-center gap-2 border border-neutral-300 px-7 py-3.5 text-sm font-semibold text-[var(--color-navy)]"
              whileHover={{ scale: 1.02, backgroundColor: "#ffeed3", borderColor: "#333465" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              Our Services
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none"
          initial="hidden"
          animate="visible"
          variants={imageReveal}
        >
          <div className="absolute -inset-3 -z-10 border border-[var(--color-gold)]/30" />
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
            <Image
              src="/advocate-jaya-sharma.jpg"
              alt="Advocate Jaya Sharma"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 80vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
