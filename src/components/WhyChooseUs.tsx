import { WHY_CHOOSE_US } from "@/data/content";
import Reveal from "./motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "./motion/RevealStagger";

export default function WhyChooseUs() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-[var(--color-navy)] sm:text-4xl">
            A practice built on trust
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            Four principles that shape every client engagement, from the
            first consultation to the final resolution.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-x-16 gap-y-12 sm:grid-cols-2">
          {WHY_CHOOSE_US.map((item, index) => (
            <RevealStaggerItem key={item.id}>
              <p className="font-serif-display text-3xl font-semibold text-[var(--color-gold)]">
                {`0${index + 1}`}
              </p>
              <p className="mt-3 font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                {item.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
