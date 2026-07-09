import { Scale } from "lucide-react";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-background pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-[var(--color-gold)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-navy)]">
          <Scale className="text-[var(--color-gold-light)]" size={18} />
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-serif-display text-4xl font-semibold text-[var(--color-navy)] sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600">
          {description}
        </p>
      </div>
    </section>
  );
}
