import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <div className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[var(--color-navy)]/5">
              <Phone size={19} className="text-[var(--color-gold)]" />
            </div>
            <div>
              <p className="font-medium text-[var(--color-navy)]">Phone</p>
              <a
                href="tel:+919986758567"
                className="mt-1 block text-sm text-neutral-600 hover:text-[var(--color-gold)]"
              >
                +91 99867 58567
              </a>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[var(--color-navy)]/5">
              <Mail size={19} className="text-[var(--color-gold)]" />
            </div>
            <div>
              <p className="font-medium text-[var(--color-navy)]">Email</p>
              <a
                href="mailto:jayapjangid@gmail.com"
                className="mt-1 block text-sm text-neutral-600 hover:text-[var(--color-gold)]"
              >
                jayapjangid@gmail.com
              </a>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[var(--color-navy)]/5">
              <MapPin size={19} className="text-[var(--color-gold)]" />
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-[var(--color-navy)]">Chamber Office</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  Chamber No. 16, Maruti Chambers, District Court, Nashik,
                  Maharashtra – 422002
                </p>
              </div>
              <div>
                <p className="font-medium text-[var(--color-navy)]">Residential Office</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  1, Janaki Bungalow, Architect Colony, Savarkar Nagar,
                  Gangapur Road, Nashik – 422013
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[var(--color-navy)]/5">
              <Clock size={19} className="text-[var(--color-gold)]" />
            </div>
            <div>
              <p className="font-medium text-[var(--color-navy)]">Office Hours</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                Mon – Fri: 9:00 AM – 6:00 PM
                <br />
                Saturday: 10:00 AM – 2:00 PM
                <br />
                Sunday: By appointment
              </p>
              <p className="mt-2 text-sm font-medium text-[var(--color-gold)]">
                Emergency legal assistance available 24/7
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
