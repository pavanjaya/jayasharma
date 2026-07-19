import Button from "./Button";
import Reveal from "./motion/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-28 lg:px-8">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          About Our Firm
        </p>
        <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
          15+ years of dedicated legal practice
        </h2>
        <p className="font-plex-serif mt-6 text-2xl leading-snug text-[#2d2e39] sm:text-3xl">
          Advocate Jaya Sharma holds B.Com., LL.B., and LL.M. credentials, with
          over 15 years of experience spanning litigation, arbitration, and
          corporate advisory work across the Debt Recovery Tribunal, NCLT, the
          Karnataka High Court, and the Nashik District Court. She runs her own
          independent legal practice in Nashik and also serves as a Legal
          Associate with Jayant D Jaybhave and Associates, and is empanelled as
          Panel Advocate for several leading banks and Indian Oil Corporation
          Ltd.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <Button href="/about" variant="outline">
          Read Full Profile
        </Button>
      </Reveal>
    </section>
  );
}
