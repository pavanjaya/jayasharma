import type { Metadata } from "next";
import Image from "next/image";
import { Award, Briefcase, GraduationCap, Landmark, Scale, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import {
  BAR_REGISTRATION,
  CERTIFICATIONS,
  CREDENTIALS,
  EDUCATION,
  EXPERIENCE,
  HIGHLIGHTS,
  PANEL_ADVOCATE_FOR,
  SKILLS,
} from "@/data/content";

export const metadata: Metadata = {
  title: "About | Advocate Jaya Sharma & Associates",
  description:
    "Learn about Advocate Jaya Sharma's education, credentials, and 14+ years of experience in litigation, arbitration, and corporate advisory.",
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
        description="B.Com., LL.B., LL.M. — 14+ years spanning litigation, arbitration, and corporate advisory, with a practical, business-first approach to every matter."
      />

      {/* Bio */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute -inset-3 -z-10 border border-[var(--color-gold)]/30" />
          <div className="relative aspect-[1160/522] w-full overflow-hidden bg-surface">
            <Image
              src="/advocate-jaya-sharma-about.jpg"
              alt="Advocate Jaya Sharma"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42rem, 90vw"
            />
          </div>
        </div>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-neutral-600">
          <p>
            Advocate Jaya Sharma is an experienced legal practitioner with
            over 14 years of expertise handling cases across the Debt
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
        </div>
      </section>

      {/* Panel Advocate */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Empanelments
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
            Panel Advocate For
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
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
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Career
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
            Professional Experience
          </h2>
        </div>

        <div className="mt-14 space-y-6">
          {EXPERIENCE.map((job) => (
            <div
              key={`${job.firm}-${job.period}`}
              className="rounded-2xl border border-neutral-200 bg-white p-7 sm:p-8"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                  {job.role} · {job.firm}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500">{job.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
              Education
            </p>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
              Academic Credentials
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {EDUCATION.map((item) => (
              <div
                key={item.degree}
                className="rounded-2xl border border-neutral-200 bg-white p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-navy)]/5">
                  <GraduationCap size={20} className="text-[var(--color-gold)]" />
                </div>
                <p className="mt-5 font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                  {item.degree}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.institution}
                </p>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {item.university}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                  {item.period}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {CREDENTIALS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-medium text-neutral-600"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-14 mx-auto max-w-2xl">
            <p className="text-center text-sm font-semibold text-[var(--color-navy)]">
              Certifications
            </p>
            <div className="mt-5 space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="flex flex-col gap-1 rounded-xl border border-neutral-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm font-medium text-[var(--color-navy)]">
                    {cert.title}
                  </span>
                  <span className="text-xs text-neutral-500">
                    {cert.issuer}
                    {cert.period ? ` · ${cert.period}` : ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Professional Standing
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
            Professional Highlights
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {HIGHLIGHTS.map((item) => {
            const Icon = HIGHLIGHT_ICONS[item.id];
            return (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-7"
              >
                <div className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[var(--color-navy)]/5">
                  <Icon size={19} className="text-[var(--color-gold)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-navy)]">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Her Approach
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
            Clarity Before Strategy
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600">
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
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          Areas of Expertise
        </p>
        <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
          Skills &amp; Specialisations
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
