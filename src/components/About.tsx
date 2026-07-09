import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { SKILLS } from "@/data/content";
import Reveal from "./motion/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-28 lg:px-8">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          About Our Firm
        </p>
        <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
          14+ years of dedicated legal practice
        </h2>
        <p className="mt-6 text-2xl leading-snug text-neutral-800 sm:text-3xl">
          Advocate Jaya Sharma holds B.Com., LL.B., and LL.M. credentials, with
          over 14 years of experience spanning litigation, arbitration, and
          corporate advisory work across the Debt Recovery Tribunal, NCLT, the
          Karnataka High Court, and the Nashik District Court. She runs her own
          independent legal practice in Nashik and also serves as a Legal
          Associate with Jayant D Jaybhave and Associates, and is empanelled as
          Panel Advocate for several leading banks and Indian Oil Corporation
          Ltd.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <p className="flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)]">
          <BookOpen size={16} className="text-[var(--color-gold)]" />
          Areas of Expertise
        </p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-10">
        <Link
          href="/about"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)]"
        >
          Read Full Profile
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </Reveal>
    </section>
  );
}
