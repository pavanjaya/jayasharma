"use client";

import { useEffect, useState } from "react";
import { Scale } from "lucide-react";

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

  if (!open) return null;

  const handleContinue = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-navy)]/70 backdrop-blur-sm px-4 py-8">
      <div className="w-full max-w-lg rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-2xl sm:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-navy)]">
          <Scale className="text-[var(--color-gold-light)]" size={22} />
        </div>

        <h2 className="mt-5 font-serif-display text-2xl font-semibold text-[var(--color-navy)]">
          Disclaimer
        </h2>

        <div className="mx-auto mt-3 h-px w-12 bg-[var(--color-gold)]" />

        <p className="mt-6 text-sm leading-relaxed text-neutral-600">
          Under the Bar Council of India Rules, advocates are not permitted to
          advertise or solicit clients.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          This website is intended solely to provide general information about
          Advocate Jaya Sharma and her professional practice.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          It is not legal advice and does not create an advocate&ndash;client
          relationship.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          By continuing, you acknowledge that you are accessing this website
          voluntarily.
        </p>

        <button
          type="button"
          onClick={handleContinue}
          className="mt-8 w-full rounded-full bg-[var(--color-navy)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold)] sm:w-auto sm:px-10"
        >
          I Understand &amp; Continue
        </button>
      </div>
    </div>
  );
}
