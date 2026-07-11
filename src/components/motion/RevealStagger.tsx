"use client";

import { motion } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

export const RevealStagger = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    className?: string;
    stagger?: number;
  }
>(function RevealStagger({ children, className, stagger = 0.12 }, ref) {
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer(stagger)}
    >
      {children}
    </motion.div>
  );
});

export function RevealStaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
