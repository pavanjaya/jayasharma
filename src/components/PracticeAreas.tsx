import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/content";
import Button from "./Button";
import ServiceIcon from "./ServiceIcon";
import Reveal from "./motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "./motion/RevealStagger";

export default function PracticeAreas() {
  const services = SERVICES.slice(0, 6);

  return (
    <section id="practice-areas" className="relative overflow-hidden bg-surface py-28">
      <div className="pointer-events-none absolute -left-40 -bottom-40 h-[28rem] w-[28rem] rounded-full bg-[var(--color-gold)]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            What We Do
          </p>
          <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            Practice Areas
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            Comprehensive legal services tailored to individuals and
            businesses, backed by 15+ years of courtroom and advisory
            experience.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-px overflow-hidden bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <RevealStaggerItem key={service.slug} className="group bg-white">
              <Link
                href={`/practice-areas#${service.slug}`}
                className="flex h-full flex-col p-10 transition-colors duration-300 group-hover:bg-[var(--color-navy)]"
              >
                <div className="flex h-16 w-16 items-center justify-center bg-[var(--color-gold-light)] transition-colors duration-300 group-hover:bg-[var(--color-gold)]">
                  <ServiceIcon
                    icon={service.icon}
                    size={30}
                    className="text-[var(--color-navy)] transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)] transition-colors duration-300 group-hover:text-[var(--color-gold-light)]">
                  {`0${index + 1}`}
                </p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-[var(--color-navy)] transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white/70">
                  {service.shortDescription}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] transition-colors duration-300 group-hover:text-white">
                  Learn More
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealStaggerItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.1} className="mt-12 text-center">
          <Button href="/practice-areas" variant="outline">
            View All Practice Areas
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
