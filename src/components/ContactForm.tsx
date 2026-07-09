"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { EASE_OUT } from "@/lib/motion-variants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white px-8 py-16 text-center"
        >
          <CheckCircle2 className="text-[var(--color-gold)]" size={40} />
          <p className="font-serif-display text-xl font-semibold text-[var(--color-navy)]">
            Thank you for reaching out
          </p>
          <p className="max-w-sm text-sm text-neutral-500">
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
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-neutral-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-neutral-700">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 00000 00000"
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-neutral-700">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Briefly describe your legal matter"
              className="w-full resize-none rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full rounded-lg bg-[var(--color-navy)] px-6 py-3.5 text-sm font-semibold text-white"
            whileHover={{ scale: 1.01, backgroundColor: "#b08d4f" }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
          >
            Send Message
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
