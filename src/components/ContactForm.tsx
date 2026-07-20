"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { EASE_OUT } from "@/lib/motion-variants";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdnrraq";

const fieldClass =
  "w-full border-b border-neutral-300 bg-transparent px-0 py-2.5 text-base text-[#3d0b3d] outline-none transition-colors placeholder:text-neutral-400 focus:border-[var(--color-gold)]";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="flex flex-col items-center justify-center gap-3 py-20 text-center"
        >
          <CheckCircle2 className="text-[var(--color-gold)]" size={40} />
          <p className="font-serif-display text-xl font-semibold text-[var(--color-navy)]">
            Thank you for reaching out
          </p>
          <p className="max-w-sm text-sm text-[#3d0b3d]">
            Your message has been received. Our team will get back to you
            shortly.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <p className="font-serif-display text-2xl font-semibold text-[var(--color-navy)]">
            Your Details
          </p>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#3d0b3d]">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#3d0b3d]">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 00000 00000"
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#3d0b3d]">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#3d0b3d]">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Briefly describe your legal matter"
              className={`${fieldClass} resize-none`}
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">
              Something went wrong sending your message. Please try again or
              call us directly.
            </p>
          )}

          <motion.button
            type="submit"
            disabled={submitting}
            className="btn-pill inline-flex items-center justify-center gap-2 border border-[var(--color-navy)] bg-[var(--color-navy)] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-white disabled:opacity-60"
            whileHover={submitting ? undefined : { backgroundColor: "#861888", borderColor: "#861888" }}
            whileTap={submitting ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
          >
            {submitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
