import { Eye, HeartHandshake, PenTool, Scale, TrendingUp } from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/content";
import Reveal from "./motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "./motion/RevealStagger";

const ICONS: Record<string, typeof HeartHandshake> = {
  "client-first": HeartHandshake,
  "transparent-process": Eye,
  "meticulous-drafting": PenTool,
  "practical-advisory": TrendingUp,
};

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
          <Reveal className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden bg-[var(--color-navy)] lg:mx-0">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--color-gold)]/20 blur-2xl" />
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-[var(--color-gold)]/20 blur-2xl" />
            <Scale size={140} strokeWidth={1.25} className="relative text-[var(--color-gold-light)]" />
          </Reveal>

          <RevealStagger className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = ICONS[item.id];
              return (
                <RevealStaggerItem key={item.id} className="flex gap-5">
                  <div className="flex h-14 w-14 flex-none items-center justify-center bg-[var(--color-navy)]">
                    <Icon size={24} className="text-[var(--color-gold-light)]" />
                  </div>
                  <div>
                    <p className="font-serif-display text-lg font-semibold text-[var(--color-navy)]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#2d2e39]">
                      {item.description}
                    </p>
                  </div>
                </RevealStaggerItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
