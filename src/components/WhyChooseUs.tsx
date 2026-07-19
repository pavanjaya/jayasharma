import Image from "next/image";
import { WHY_CHOOSE_US } from "@/data/content";
import Reveal from "./motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "./motion/RevealStagger";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      <div className="pointer-events-none absolute -right-40 top-10 h-[26rem] w-[26rem] rounded-full bg-[var(--color-gold)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-serif-display text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            A practice built on trust
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#2d2e39]">
            Four principles that shape every client engagement, from the
            first consultation to the final resolution.
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden lg:mx-0">
            <Image
              src="/images/scales-justice-hand.jpg"
              alt="Scales of justice"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, 90vw"
            />
          </Reveal>

          <RevealStagger className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item) => (
              <RevealStaggerItem key={item.id}>
                <p className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#2d2e39]">
                  {item.description}
                </p>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
