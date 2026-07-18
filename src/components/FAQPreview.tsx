import { FAQS } from "@/data/content";
import Button from "./Button";
import FAQAccordion from "./FAQAccordion";
import Reveal from "./motion/Reveal";

export default function FAQPreview() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-28 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          Common Questions
        </p>
        <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-neutral-600">
          Answers to a few things clients often ask before their first
          consultation.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-14">
        <FAQAccordion items={FAQS.slice(0, 3)} />
      </Reveal>

      <Reveal delay={0.15} className="mt-10 text-center">
        <Button href="/faq" variant="outline">
          View All FAQs
        </Button>
      </Reveal>
    </section>
  );
}
