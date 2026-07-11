import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/content";
import ServiceIcon from "./ServiceIcon";
import Reveal from "./motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "./motion/RevealStagger";

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            What We Do
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
            Practice Areas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            Comprehensive legal services tailored to individuals and
            businesses, backed by 15+ years of courtroom and advisory
            experience.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <RevealStaggerItem
              key={service.slug}
              className="group bg-white p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-16 w-16 items-center justify-center bg-[var(--color-mint)] transition-colors duration-300 group-hover:bg-[var(--color-gold)]">
                <ServiceIcon
                  icon={service.icon}
                  size={28}
                  className="text-[var(--color-navy)] group-hover:text-white"
                />
              </div>
              <h3 className="mt-6 font-serif-display text-xl font-semibold text-[var(--color-navy)]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {service.shortDescription}
              </p>
            </RevealStaggerItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.1} className="mt-12 text-center">
          <Link
            href="/practice-areas"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-navy)] transition-colors duration-300 hover:border-[var(--color-navy)]"
          >
            View All Practice Areas
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
