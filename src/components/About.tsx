import Button from "./Button";
import Reveal from "./motion/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <Reveal className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          About Our Firm
        </p>
        <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
          15+ years of dedicated legal practice
        </h2>
        <p className="font-plex-serif mt-6 text-xl leading-snug text-[#2d2e39] sm:text-2xl">
          Advocate Jaya Sharma is a qualified legal professional holding
          B.Com., LL.B., and LL.M. (Business Law) degrees, with over 15 years
          of experience providing trusted legal representation and strategic
          legal counsel to individuals, businesses, and institutions. With
          extensive experience before the Karnataka High Court, DRT, NCLT,
          District Courts, and other judicial forums, she has successfully
          handled matters across civil, criminal, corporate, banking,
          property, and commercial law. Through her independent practice in
          Nashik, she is committed to delivering practical legal solutions,
          meticulous legal drafting, effective dispute resolution, and
          dedicated representation with professionalism, integrity, and a
          client-first approach.
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
