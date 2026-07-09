import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-[var(--color-navy)] px-8 py-16 text-center sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-gold)]/15 blur-3xl" />

        <div className="relative">
          <h2 className="font-serif-display text-3xl font-semibold text-white sm:text-4xl">
            Ready to discuss your legal matter?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Schedule a consultation with Advocate Jaya Sharma to get clarity on
            where you stand and what to do next.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-light)]"
            >
              Schedule Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="tel:+919986758567"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone size={16} />
              +91 99867 58567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
