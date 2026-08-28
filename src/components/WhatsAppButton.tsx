"use client";

import { trackEvent } from "@/lib/analytics";
import { WhatsAppIcon } from "./SocialIcons";

const WHATSAPP_NUMBER = "919986758567";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'd like to know more about your legal services."
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click")}
      aria-label="Chat on WhatsApp"
      className="btn-pill fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center bg-[#25D366] text-white transition-transform duration-300 hover:scale-105"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
