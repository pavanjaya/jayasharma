import type { Metadata } from "next";
import Image from "next/image";
import { Award, Briefcase, GraduationCap, Landmark, Scale, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "@/components/motion/RevealStagger";
import ZoomImage from "@/components/motion/ZoomImage";
import {
  BAR_REGISTRATION,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  HIGHLIGHTS,
  PANEL_ADVOCATE_FOR,
  SKILLS,
} from "@/data/content";

export const metadata: Metadata = {
  title: "About | Advocate Jaya Sharma & Associates",
  description:
    "Learn about Advocate Jaya Sharma's education, credentials, and 15+ years of experience in litigation, arbitration, and corporate advisory.",
};

const HIGHLIGHT_ICONS: Record<string, typeof Scale> = {
  "bar-registration": Award,
  "current-practice": Scale,
  "high-court": Briefcase,
  "panel-advocate": Landmark,
  iocl: ShieldCheck,
  masters: GraduationCap,
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
      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
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
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-4xl space-y-5 text-base leading-relaxed text-[#2d2e39]">
          <p>
            Advocate Jaya Sharma is an experienced legal practitioner with
            over 15 years of expertise handling cases across the Debt
            Recovery Tribunal (DRT), NCLT, the Karnataka High Court, District
            Courts, and various other legal forums. She is registered with
            the Bar Council of India (Reg. No. {BAR_REGISTRATION}) and cleared
            the All India Bar Examination in March 2011.
          </p>
          <p>
            She is skilled in legal drafting, negotiation, arbitration, legal
            opinions, and intellectual property law, and is adept in legal
            document vetting, client counseling, and court appearances —
            known for a keen attention to detail, versatility, and a
            proactive approach to complex legal matters.
          </p>
          <p>
            She runs her own independent legal practice in Nashik and also
            serves as a Legal Associate with Jayant D Jaybhave and
            Associates, handling civil, criminal, and corporate matters. She
            is also empanelled as Panel Advocate for Bank of Maharashtra,
            Vishwas Cooperative Bank, and Shree Samarth Sahakari Bank,
            Nashik — representing the banks on debt recovery, NCLT
            proceedings, and other civil and financial disputes — and has
            been appointed as an Advocate for Indian Oil Corporation Ltd.,
            Nashik District.
          </p>
        </Reveal>
      </section>

      {/* Panel Advocate */}
      <section className="bg-surface py-20">
        <Reveal className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Empanelments
          </p>
          <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            Panel Advocate For
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#2d2e39]">
            Trusted by banks and institutions for recovery, compliance, and
            ongoing legal representation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {PANEL_ADVOCATE_FOR.map((name) => (
              <span
                key={name}
                className="rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-navy)]"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
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
              <p className="mt-1 text-sm text-[#2d2e39]">{job.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#2d2e39]">
                {job.description}
              </p>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </section>

      {/* Education */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
              Education
            </p>
            <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
              Academic Credentials
            </h2>
          </Reveal>

          <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-3">
            {EDUCATION.map((item) => (
              <RevealStaggerItem key={item.degree} className="bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-navy)]/5">
                  <GraduationCap size={20} className="text-[var(--color-gold)]" />
                </div>
                <p className="mt-5 font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                  {item.degree}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#2d2e39]">
                  {item.institution}
                </p>
                <p className="text-sm leading-relaxed text-[#2d2e39]">
                  {item.university}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                  {item.period}
                </p>
              </RevealStaggerItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.1} className="mt-14">
            <p className="text-center text-sm font-semibold text-[var(--color-navy)]">
              Certifications
            </p>
            <div className="mt-5 grid gap-6 sm:grid-cols-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.title} className="bg-white p-7">
                  <p className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                    {cert.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#2d2e39]">
                    {cert.issuer}
                  </p>
                  {cert.period && (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                      {cert.period}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Professional Standing
          </p>
          <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            Professional Highlights
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2">
          {HIGHLIGHTS.map((item) => {
            const Icon = HIGHLIGHT_ICONS[item.id];
            return (
              <RevealStaggerItem key={item.id} className="flex gap-5">
                <div className="flex h-14 w-14 flex-none items-center justify-center bg-[var(--color-navy)]">
                  <Icon size={24} className="text-[var(--color-gold-light)]" />
                </div>
                <div>
                  <p className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#2d2e39]">
                    {item.description}
                  </p>
                </div>
              </RevealStaggerItem>
            );
          })}
        </RevealStagger>
      </section>

      {/* Approach */}
      <section className="bg-surface py-20">
        <Reveal className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Her Approach
          </p>
          <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            Clarity Before Strategy
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#2d2e39]">
            Before any strategy is decided, Advocate Jaya Sharma starts by
            making sure a client understands exactly where they stand — what
            the law says, what the realistic options are, and what each
            option costs in time and effort. That clarity is what allows
            clients to make informed decisions about their own matter, rather
            than simply following instructions they don&apos;t fully
            understand. It is a simple approach, but one that requires
            discipline: careful listening, honest assessment, and precise
            documentation at every step.
          </p>
        </Reveal>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Areas of Expertise
          </p>
          <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            Skills &amp; Specialisations
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-[#2d2e39]"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
