"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Scale } from "lucide-react";
import { EASE_OUT } from "@/lib/motion-variants";

const STORAGE_KEY = "disclaimer-acknowledged";

export default function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleContinue = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[var(--color-navy)]/70 backdrop-blur-sm px-4 py-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
            className="w-full max-w-lg rounded-2xl border border-neutral-200 bg-white p-8 text-center sm:p-10 my-auto"
          >
            <Scale className="mx-auto text-[var(--color-gold)]" size={32} />

            <h2 className="mt-5 font-serif-display text-2xl font-semibold text-[var(--color-navy)]">
              Disclaimer
            </h2>

            <div className="mx-auto mt-3 h-px w-12 bg-[var(--color-gold)]" />

            <p className="mt-6 text-sm leading-relaxed text-[#3d0b3d]">
              Under the Bar Council of India Rules, advocates are not permitted to
              advertise or solicit clients.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#3d0b3d]">
              This website is intended solely to provide general information about
              Advocate Jaya Sharma and her professional practice.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#3d0b3d]">
              It is not legal advice and does not create an advocate&ndash;client
              relationship.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#3d0b3d]">
              By continuing, you acknowledge that you are accessing this website
              voluntarily.
            </p>

            <motion.button
              type="button"
              onClick={handleContinue}
              className="btn-pill mt-8 w-full border border-[var(--color-navy)] bg-[var(--color-navy)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-white sm:w-auto sm:px-10"
              whileHover={{ backgroundColor: "#861888", borderColor: "#861888" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
            >
              I Understand &amp; Continue
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
