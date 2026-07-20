"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useBookingModal } from "./BookingModalContext";
import Button from "./Button";

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
  const { open: openBookingModal } = useBookingModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname !== "/") return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 z-50 w-full border-b backdrop-blur-md"
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(255,254,250,0.92)" : "rgba(255,254,250,0)",
        borderBottomColor: scrolled ? "rgba(229,229,229,1)" : "rgba(229,229,229,0)",
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center" onClick={handleLogoClick}>
          <Image src="/logo.svg" alt="Jaya Sharma & Associates" width={215} height={50} priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors duration-300 ${
                pathname === link.href
                  ? "font-semibold text-[var(--color-gold)]"
                  : "font-medium text-[#3d0b3d] hover:text-[var(--color-gold)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Button onClick={openBookingModal} trailingIcon={null} className="px-5 py-2.5">
            Book Consultation
          </Button>
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
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-neutral-200 bg-background px-6 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-[#3d0b3d]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919986758567"
              className="flex items-center gap-2 text-base font-medium text-[#3d0b3d]"
            >
              <Phone size={17} />
              +91 99867 58567
            </a>
            <Button
              onClick={() => {
                setMenuOpen(false);
                openBookingModal();
              }}
              trailingIcon={null}
              className="mt-1 w-full"
            >
              Book Consultation
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
