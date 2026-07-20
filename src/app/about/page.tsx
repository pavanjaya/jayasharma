import type { Metadata } from "next";
import Image from "next/image";
import { Award, GraduationCap, Landmark, Quote } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";
import ZoomImage from "@/components/motion/ZoomImage";
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  PANEL_ADVOCATE_FOR,
  SKILLS,
} from "@/data/content";

export const metadata: Metadata = {
  title: "About | Advocate Jaya Sharma & Associates",
  description:
    "Learn about Advocate Jaya Sharma's education, credentials, and 15+ years of experience in litigation, arbitration, and corporate advisory.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Advocate Jaya Sharma"
        title="A Practice Built on Integrity and Precision"
        description="B.Com., LL.B., LL.M. — 15+ years spanning litigation, arbitration, and corporate advisory, with a practical, business-first approach to every matter."
      />

      {/* Bio */}
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <Reveal className="relative mx-auto max-w-[54.6rem]">
          <div className="absolute -inset-3 -z-10 border border-[var(--color-gold)]/30" />
          <ZoomImage className="relative aspect-[1160/522] w-full overflow-hidden bg-surface">
            <Image
              src="/advocate-jaya-sharma-about.jpg"
              alt="Advocate Jaya Sharma"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 54.6rem, 90vw"
            />
          </ZoomImage>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-[#3d0b3d]">
          <p>
            Advocate Jaya Sharma is an experienced legal practitioner with
            over 15 years of professional experience in litigation, legal
            advisory, and dispute resolution. Enrolled with the Bar Council
            of India, she has built a reputation for delivering practical,
            strategic, and client-focused legal solutions with
            professionalism, integrity, and meticulous attention to detail.
          </p>
          <p>
            She has represented clients before the Karnataka High Court, the
            Debt Recovery Tribunal, the National Company Law Tribunal, and
            District Courts, across debt recovery, banking litigation,
            corporate disputes, commercial litigation, arbitration, and
            complex civil proceedings — extensive exposure to high-value and
            technically challenging matters.
          </p>
          <p>
            Today, she leads her independent legal practice in Nashik,
            Maharashtra, focused on civil, criminal, and property law, legal
            documentation, contract review, arbitration, and general legal
            advisory — known for meticulous drafting, strategic case
            preparation, and dedicated representation tailored to each
            client&apos;s matter.
          </p>
        </Reveal>
      </section>

      {/* Approach */}
      <section className="relative overflow-hidden bg-surface py-24">
        <div className="pointer-events-none absolute -right-40 -top-20 h-[26rem] w-[26rem] rounded-full bg-[var(--color-gold)]/10 blur-3xl" />
        <Reveal className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Quote size={40} strokeWidth={1.5} className="mx-auto text-[var(--color-gold)]" />
          <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Her Approach
          </p>
          <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            Clarity Before Strategy
          </h2>
          <p className="font-plex-serif mt-8 text-2xl leading-snug text-[var(--color-navy)]">
            Before any strategy is decided, Advocate Jaya Sharma starts by
            making sure a client understands exactly where they stand — what
            the law says, what the realistic options are, and what each
            option costs in time and effort.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#3d0b3d]">
            That clarity is what allows clients to make informed decisions
            about their own matter, rather than simply following
            instructions they don&apos;t fully understand. It is a simple
            approach, but one that requires discipline: careful listening,
            honest assessment, and precise documentation at every step.
          </p>
        </Reveal>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Career
          </p>
          <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            Professional Experience
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 divide-y divide-neutral-200">
          {EXPERIENCE.map((job) => (
            <RevealStaggerItem key={`${job.firm}-${job.period}`} className="py-7 first:pt-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                  {job.role} · {job.firm}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-[#3d0b3d]">{job.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#3d0b3d]">
                {job.description}
              </p>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </section>

      {/* Education & Certifications */}
      <section className="bg-[#FBF8F0] py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
              Education
            </p>
            <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
              Academic Credentials
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2">
            <RevealStagger className="divide-y divide-neutral-200">
              {EDUCATION.map((item) => (
                <RevealStaggerItem key={item.degree} className="flex gap-4 py-6 first:pt-0">
                  <GraduationCap size={22} className="mt-1 flex-none text-[var(--color-gold)]" />
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <p className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                        {item.degree}
                      </p>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[#3d0b3d]">
                      {item.institution}, {item.university}
                    </p>
                  </div>
                </RevealStaggerItem>
              ))}
            </RevealStagger>

            <RevealStagger className="divide-y divide-neutral-200">
              {CERTIFICATIONS.map((cert) => (
                <RevealStaggerItem key={cert.title} className="flex gap-4 py-6 first:pt-0">
                  <Award size={22} className="mt-1 flex-none text-[var(--color-gold)]" />
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <p className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                        {cert.title}
                      </p>
                      {cert.period && (
                        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                          {cert.period}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[#3d0b3d]">
                      {cert.issuer}
                    </p>
                  </div>
                </RevealStaggerItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* Panel Advocate */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
                Empanelments
              </p>
              <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
                Panel Advocate For
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#3d0b3d]">
                Trusted by banks and institutions for recovery, compliance,
                and ongoing legal representation.
              </p>
            </Reveal>

            <RevealStagger className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {PANEL_ADVOCATE_FOR.map((item) => (
                <RevealStaggerItem
                  key={item.name}
                  className="border-t border-[var(--color-gold)]/25 pt-5"
                >
                  <Landmark size={20} className="text-[var(--color-gold)]" />
                  <p className="mt-4 font-serif-display text-lg font-semibold leading-snug text-[var(--color-navy)]">
                    {item.name}
                  </p>
                  <p className="mt-1.5 text-sm text-[#3d0b3d]">{item.role}</p>
                </RevealStaggerItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
              Areas of Expertise
            </p>
            <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
              Skills &amp; Specialisations
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-16 sm:grid-cols-2">
            <RevealStagger className="divide-y divide-[var(--color-navy)]/10">
              {SKILLS.slice(0, Math.ceil(SKILLS.length / 2)).map((skill, i) => (
                <RevealStaggerItem
                  key={skill}
                  className="flex items-center gap-4 py-4 first:pt-0"
                >
                  <span className="font-serif-display text-sm font-semibold text-[var(--color-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold text-[var(--color-navy)]">
                    {skill}
                  </span>
                </RevealStaggerItem>
              ))}
            </RevealStagger>
            <RevealStagger className="divide-y divide-[var(--color-navy)]/10">
              {SKILLS.slice(Math.ceil(SKILLS.length / 2)).map((skill, i) => (
                <RevealStaggerItem
                  key={skill}
                  className="flex items-center gap-4 py-4 first:pt-0"
                >
                  <span className="font-serif-display text-sm font-semibold text-[var(--color-gold)]">
                    {String(i + 1 + Math.ceil(SKILLS.length / 2)).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold text-[var(--color-navy)]">
                    {skill}
                  </span>
                </RevealStaggerItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
