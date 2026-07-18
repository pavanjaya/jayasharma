"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { EASE_OUT } from "@/lib/motion-variants";
import { SERVICES } from "@/data/content";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdnrraq";

const fieldClass =
  "w-full border-b border-neutral-300 bg-transparent px-0 py-2.5 text-base text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-[var(--color-gold)]";

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setError(false);
    }, 300);
  };

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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-[var(--color-navy)]/70 px-4 py-8 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto w-full max-w-lg bg-white p-8 sm:p-10"
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-6 top-6 text-neutral-400 transition-colors duration-300 hover:text-[var(--color-navy)]"
            >
              <X size={20} />
            </button>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                  className="flex flex-col items-center justify-center gap-3 py-14 text-center"
                >
                  <CheckCircle2 className="text-[var(--color-gold)]" size={40} />
                  <p className="font-serif-display text-xl font-semibold text-[var(--color-navy)]">
                    Consultation Requested
                  </p>
                  <p className="max-w-sm text-sm text-neutral-500">
                    Thank you for reaching out. Our team will contact you
                    shortly to confirm your appointment.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <p className="font-serif-display text-2xl font-semibold text-[var(--color-navy)]">
                      Book a Consultation
                    </p>
                    <p className="mt-1.5 text-sm text-neutral-500">
                      Share a few details and we&apos;ll confirm a time that
                      works for you.
                    </p>
                  </div>

                  <input type="hidden" name="_subject" value="New Consultation Booking Request" />

                  <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="booking-name" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Full Name
                      </label>
                      <input
                        id="booking-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-phone" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Phone Number
                      </label>
                      <input
                        id="booking-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="booking-email" className="mb-1.5 block text-sm font-medium text-neutral-700">
                      Email Address
                    </label>
                    <input
                      id="booking-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-practice-area" className="mb-1.5 block text-sm font-medium text-neutral-700">
                      Practice Area
                    </label>
                    <select
                      id="booking-practice-area"
                      name="practiceArea"
                      required
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Select a practice area
                      </option>
                      {SERVICES.map((service) => (
                        <option key={service.slug} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="booking-date" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Preferred Date
                      </label>
                      <input
                        id="booking-date"
                        name="preferredDate"
                        type="date"
                        required
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-time" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Preferred Time
                      </label>
                      <input
                        id="booking-time"
                        name="preferredTime"
                        type="time"
                        required
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="booking-message" className="mb-1.5 block text-sm font-medium text-neutral-700">
                      Briefly Describe Your Matter (Optional)
                    </label>
                    <textarea
                      id="booking-message"
                      name="message"
                      rows={3}
                      placeholder="A short summary helps us prepare for the call"
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600">
                      Something went wrong sending your request. Please try
                      again or call us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-pill w-full border border-[var(--color-navy)] bg-[var(--color-navy)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Request Consultation"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
