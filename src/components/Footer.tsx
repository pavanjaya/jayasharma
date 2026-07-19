import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/advjayasharma", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/advjayasharma/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jayajangid/", icon: LinkedinIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Jaya Sharma & Associates" width={160} height={42} />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#2d2e39]">
              Providing expert legal representation with integrity, dedication,
              and excellence. Trusted counsel for individuals and businesses in
              Nashik since 2010.
            </p>
            <div className="mt-5 flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[#2d2e39] transition-colors hover:text-[var(--color-navy)]"
                >
                  <social.icon size={26} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--color-navy)]">Quick Links</p>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#2d2e39] hover:text-[var(--color-gold)]">
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
                  className="flex items-center gap-2 text-sm text-[#2d2e39] hover:text-[var(--color-gold)]"
                >
                  <Phone size={14} />
                  +91 99867 58567
                </a>
              </li>
              <li>
                <a
                  href="mailto:advjayaosharma@gmail.com"
                  className="flex items-center gap-2 text-sm text-[#2d2e39] hover:text-[var(--color-gold)]"
                >
                  <Mail size={14} />
                  advjayaosharma@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8">
          <p className="text-xs leading-relaxed text-[#2d2e39]">
            <span className="font-semibold text-[#2d2e39]">Disclaimer:</span>{" "}
            Under the rules of the Bar Council of India, advocates are not
            permitted to solicit work or advertise. This website has been
            created solely to provide general information about Advocate
            Jaya Sharma, her professional profile, areas of practice, and
            legal insights. The information contained herein is for
            informational purposes only and does not constitute legal
            advice, create an advocate–client relationship, or amount to any
            form of solicitation or advertisement. Accessing this website
            implies that you do so voluntarily and in accordance with the
            applicable rules of the Bar Council of India.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#2d2e39]">
            {`© ${year} Advocate Jaya Sharma & Associates. All rights reserved.`}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#2d2e39] hover:text-[var(--color-gold)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs text-[#2d2e39]">Designed &amp; Developed by Hueness</p>
      </div>
    </footer>
  );
}
