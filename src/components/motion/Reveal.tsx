"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion-variants";

export default function Reveal({
  children,
  delay = 0,
  className,
  id,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  as?: "div" | "span";
}) {
  const Component = as === "span" ? motion.span : motion.div;

  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
