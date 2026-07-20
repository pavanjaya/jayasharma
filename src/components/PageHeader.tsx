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
    <section className="bg-background pt-36 pb-16 lg:pt-44 lg:pb-20">
      <motion.div
        className="mx-auto max-w-4xl px-6 text-center lg:px-8"
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
          className="mt-3 font-serif-display text-5xl font-bold tracking-tight text-[var(--color-navy)] sm:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#3d0b3d]"
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}
