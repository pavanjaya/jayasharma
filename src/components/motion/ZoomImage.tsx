"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Wraps an image container with a restrained hover zoom (max 1.03). */
export default function ZoomImage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover="hover"
      initial="rest"
    >
      <motion.div
        className="h-full w-full"
        variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
