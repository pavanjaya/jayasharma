"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { EASE_OUT } from "@/lib/motion-variants";

type ButtonVariant = "primary" | "outline" | "light" | "tertiary";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "border border-[var(--color-navy)] bg-[var(--color-navy)] text-white",
  outline: "border border-[var(--color-navy)]/30 bg-transparent text-[var(--color-navy)]",
  light: "border border-white/40 bg-transparent text-white",
  tertiary: "border border-neutral-300 bg-white text-[var(--color-navy)]",
};

const VARIANT_HOVER: Record<ButtonVariant, Record<string, string>> = {
  primary: { backgroundColor: "#b08d4f", borderColor: "#b08d4f" },
  outline: { backgroundColor: "#333465", borderColor: "#333465", color: "#ffffff" },
  light: { backgroundColor: "#ffffff", borderColor: "#ffffff", color: "#333465" },
  tertiary: { backgroundColor: "#b08d4f", borderColor: "#b08d4f", color: "#ffffff" },
};

const MotionLink = motion(Link);

export default function Button({
  href,
  children,
  variant = "primary",
  leadingIcon,
  trailingIcon,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode | null;
  className?: string;
}) {
  const classes = `btn-pill group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${VARIANT_CLASS[variant]} ${className}`;

  const content = (
    <>
      {leadingIcon}
      {children}
      {trailingIcon === undefined ? (
        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      ) : (
        trailingIcon
      )}
    </>
  );

  const motionProps = {
    className: classes,
    whileHover: VARIANT_HOVER[variant],
    whileTap: { scale: 0.98 },
    transition: { duration: 0.25, ease: EASE_OUT },
  };

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <MotionLink href={href} {...motionProps}>
        {content}
      </MotionLink>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...motionProps}
    >
      {content}
    </motion.a>
  );
}
