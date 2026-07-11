"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-background pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-[var(--color-gold)]/10 blur-3xl" />

      <motion.div
        className="relative mx-auto max-w-4xl px-6 text-center lg:px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.12, 0.1)}
      >
        <motion.p
          variants={fadeUp}
          className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-3 font-serif-display text-4xl font-semibold text-[var(--color-navy)] sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600"
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}
