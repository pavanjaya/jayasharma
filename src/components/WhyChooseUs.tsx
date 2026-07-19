import { Eye, HeartHandshake, PenTool, TrendingUp } from "lucide-react";
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

        <RevealStagger className="mt-16 grid gap-x-16 gap-y-14 sm:grid-cols-2">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = ICONS[item.id];
            return (
              <RevealStaggerItem key={item.id} className="flex gap-6">
                <div className="flex h-16 w-16 flex-none items-center justify-center bg-[var(--color-navy)]">
                  <Icon size={28} className="text-[var(--color-gold-light)]" />
                </div>
                <div>
                  <p className="font-serif-display text-xl font-semibold text-[var(--color-navy)]">
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
    </section>
  );
}
