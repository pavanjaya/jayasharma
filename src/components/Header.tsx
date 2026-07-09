"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-background/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-sm border-b border-neutral-200" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Jaya Sharma & Associates" width={142} height={46} priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-[var(--color-navy)]"
                  : "text-neutral-600 hover:text-[var(--color-navy)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold)]"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          className="text-[var(--color-navy)] lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-neutral-200 bg-background px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-neutral-800"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919986758567"
              className="flex items-center gap-2 text-base font-medium text-neutral-800"
            >
              <Phone size={17} />
              +91 99867 58567
            </a>
            <Link
              href="/contact"
              className="mt-1 rounded-full bg-[var(--color-navy)] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
