import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Disclaimer"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-neutral-200 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Jaya Sharma & Associates" width={142} height={46} />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
              Providing expert legal representation with integrity, dedication,
              and excellence. Trusted counsel for individuals and businesses in
              Nashik since 2010.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--color-navy)]">Quick Links</p>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-500 hover:text-[var(--color-gold)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--color-navy)]">Contact</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+919986758567"
                  className="flex items-center gap-2 text-sm text-neutral-500 hover:text-[var(--color-gold)]"
                >
                  <Phone size={14} />
                  +91 99867 58567
                </a>
              </li>
              <li>
                <a
                  href="mailto:jayapjangid@gmail.com"
                  className="flex items-center gap-2 text-sm text-neutral-500 hover:text-[var(--color-gold)]"
                >
                  <Mail size={14} />
                  jayapjangid@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-neutral-200 pt-8">
          <p className="text-xs leading-relaxed text-neutral-400">
            <span className="font-semibold text-neutral-500">Disclaimer:</span>{" "}
            The information on this website is provided for general
            informational purposes only and does not constitute legal advice
            or solicitation. Access to this website is subject to the
            applicable rules of the Bar Council of India.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-400">
            {`© ${year} Advocate Jaya Sharma & Associates. All rights reserved.`}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <a key={link} href="#" className="text-xs text-neutral-400 hover:text-neutral-600">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
