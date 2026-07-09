import Image from "next/image";
import { ArrowRight, Scale } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-28 lg:pt-32 lg:pb-36">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[var(--color-gold)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[var(--color-navy)]/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--color-navy)]">
            <Scale size={14} className="text-[var(--color-gold)]" />
            Trusted Legal Counsel Since 2010
          </div>

          <h1 className="mt-8 max-w-xl font-serif-display text-4xl font-semibold uppercase leading-[0.95] text-[var(--color-navy)] sm:text-5xl lg:text-6xl">
            <span className="block">Law with Clarity.</span>
            <span className="block">Practice with Integrity.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
            A practice built on professionalism, integrity, diligence, and a
            steadfast commitment to the rule of law.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-[var(--color-navy)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold)]"
            >
              Book Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#practice-areas"
              className="inline-flex items-center justify-center gap-2 border border-neutral-300 px-7 py-3.5 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:border-[var(--color-navy)] hover:bg-surface"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
          <div className="absolute -inset-3 -z-10 border border-[var(--color-gold)]/30" />
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
            <Image
              src="/advocate-jaya-sharma.jpg"
              alt="Advocate Jaya Sharma"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 80vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
