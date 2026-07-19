"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { EASE_OUT } from "@/lib/motion-variants";

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <MotionConfig reducedMotion="user" transition={{ ease: EASE_OUT }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
