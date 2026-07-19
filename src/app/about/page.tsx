import type { Metadata } from "next";
import Image from "next/image";
import { Award, Briefcase, GraduationCap, Landmark, Quote, Scale, ShieldCheck } from "lucide-react";
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
            over 15 years of professional experience in litigation, legal
            advisory, and dispute resolution. Enrolled with the Bar Council
            of India (Registration No. {BAR_REGISTRATION}) and having
            successfully cleared the All India Bar Examination, she has
            built a reputation for delivering practical, strategic, and
            client-focused legal solutions with professionalism, integrity,
            and meticulous attention to detail.
          </p>
          <p>
            During her professional journey, she has represented clients
            before various judicial and quasi-judicial forums, including the
            Karnataka High Court, Debt Recovery Tribunal (DRT), National
            Company Law Tribunal (NCLT), District Courts, and other legal
            authorities. Her previous experience includes handling debt
            recovery matters, banking litigation, corporate disputes,
            commercial litigation, legal drafting, arbitration, legal
            opinions, and complex civil proceedings, providing her with
            extensive exposure to high-value and technically challenging
            legal matters.
          </p>
          <p>
            Today, Advocate Jaya Sharma leads her independent legal practice
            in Nashik, Maharashtra, where she provides comprehensive legal
            representation and strategic legal counsel to individuals,
            businesses, and institutions. Her practice primarily focuses on
            Civil Law, Criminal Law, Property &amp; Real Estate Matters, Legal
            Documentation, Contract Drafting &amp; Review, Legal Opinions,
            Arbitration, Consumer Disputes, and General Legal Advisory. She
            is known for her meticulous legal drafting, strategic case
            preparation, practical legal advice, and unwavering commitment
            to protecting her clients&apos; interests.
          </p>
          <p>
            In addition to her independent practice, she serves as a Legal
            Associate with Jayant D. Jaybhave &amp; Associates, where she
            handles civil, criminal, and corporate legal matters.
          </p>
          <p>
            She is also an Empanelled Panel Advocate for Bank of
            Maharashtra, Vishwas Cooperative Bank, and Shree Samarth Sahakari
            Bank, Nashik, representing these institutions in debt recovery
            proceedings, banking litigation, NCLT matters, and other civil
            and financial disputes. She has further been appointed as an
            Advocate for Indian Oil Corporation Limited (IOCL), Nashik
            District, providing legal representation, litigation support,
            and legal advisory services as required.
          </p>
          <p>
            With a strong foundation in litigation and advisory practice,
            Advocate Jaya Sharma is committed to delivering practical legal
            solutions, transparent guidance, and dedicated representation,
            ensuring that every client receives personalized attention and a
            strategy tailored to achieve the best possible outcome.
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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {PANEL_ADVOCATE_FOR.map((name) => (
              <span
                key={name}
                className="flex items-center gap-2.5 border border-[var(--color-gold)]/25 bg-white px-5 py-3 text-sm font-semibold text-[var(--color-navy)]"
              >
                <Landmark size={16} className="text-[var(--color-gold)]" />
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
                <GraduationCap size={32} className="text-[var(--color-gold)]" />
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
                  <Award size={32} className="text-[var(--color-gold)]" />
                  <p className="mt-5 font-serif-display text-lg font-semibold text-[var(--color-navy)]">
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
                <Icon size={28} className="flex-none text-[var(--color-gold)]" />
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
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#2d2e39]">
            That clarity is what allows clients to make informed decisions
            about their own matter, rather than simply following
            instructions they don&apos;t fully understand. It is a simple
            approach, but one that requires discipline: careful listening,
            honest assessment, and precise documentation at every step.
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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-2 border border-[var(--color-gold)]/25 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-navy)]"
              >
                <span className="h-1.5 w-1.5 flex-none bg-[var(--color-gold)]" />
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
