import Button from "./Button";
import Reveal from "./motion/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <Reveal className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          About Us
        </p>
        <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
          15+ years of dedicated legal practice
        </h2>
        <p className="font-plex-serif mt-6 text-xl leading-snug text-[#2d2e39] sm:text-2xl">
          Advocate Jaya Sharma brings over 15 years of legal experience,
          having represented individuals, businesses, and institutions
          before the Karnataka High Court, the Debt Recovery Tribunal, and
          the NCLT. A B.Com., LL.B., and LL.M. in Business Law, she now
          leads her independent practice in Nashik — where every strategy
          starts with a clear-eyed read of where a client actually stands,
          not a template answer.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 max-w-4xl">
        <Button href="/about" variant="outline">
          Read Full Profile
        </Button>
      </Reveal>
    </section>
  );
}
