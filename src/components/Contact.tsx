import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import Reveal from "./motion/Reveal";
import { RevealStagger, RevealStaggerItem } from "./motion/RevealStagger";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <RevealStagger className="space-y-8">
          <RevealStaggerItem className="flex gap-4">
            <Phone size={20} className="mt-0.5 flex-none text-[var(--color-gold)]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2d2e39]">
                Phone
              </p>
              <a
                href="tel:+919986758567"
                className="mt-1.5 block text-lg text-[var(--color-navy)] transition-colors duration-300 hover:text-[var(--color-gold)]"
              >
                +91 99867 58567
              </a>
            </div>
          </RevealStaggerItem>

          <RevealStaggerItem className="flex gap-4">
            <Mail size={20} className="mt-0.5 flex-none text-[var(--color-gold)]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2d2e39]">
                Email
              </p>
              <a
                href="mailto:advjayaosharma@gmail.com"
                className="mt-1.5 block text-lg text-[var(--color-navy)] transition-colors duration-300 hover:text-[var(--color-gold)]"
              >
                advjayaosharma@gmail.com
              </a>
            </div>
          </RevealStaggerItem>

          <RevealStaggerItem className="flex gap-4">
            <MapPin size={20} className="mt-0.5 flex-none text-[var(--color-gold)]" />
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2d2e39]">
                  Office
                </p>
                <p className="mt-1.5 text-base leading-relaxed text-[#2d2e39]">
                  No. 622, 6th Floor, Lotus Capital, Ashok Stambh, Nashik –
                  422002
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2d2e39]">
                  Chamber Office
                </p>
                <p className="mt-1.5 text-base leading-relaxed text-[#2d2e39]">
                  Chamber No. 16, Maruti Chambers, District Court, Nashik,
                  Maharashtra – 422002
                </p>
              </div>
            </div>
          </RevealStaggerItem>

          <RevealStaggerItem className="flex gap-4">
            <Clock size={20} className="mt-0.5 flex-none text-[var(--color-gold)]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2d2e39]">
                Office Hours
              </p>
              <p className="mt-1.5 text-base leading-relaxed text-[#2d2e39]">
                Mon – Fri: 9:00 AM – 6:00 PM
                <br />
                Saturday: 10:00 AM – 2:00 PM
                <br />
                Sunday: By appointment
              </p>
            </div>
          </RevealStaggerItem>
        </RevealStagger>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
