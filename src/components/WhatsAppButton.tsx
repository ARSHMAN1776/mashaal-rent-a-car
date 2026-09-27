"use client";

import { siteConfig, waLink } from "@/config/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppButton() {
  return (
    <a
      href={waLink(
        `Hi Mashaal Rent A Car, I'd like to enquire about a monthly rental.`
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-transform hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}

export function WhatsAppInline({
  message,
  label = "Enquire on WhatsApp",
  className = "",
}: {
  message: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2.5 rounded-full border border-gold-dim/60 bg-gold/10 px-5 py-2.5 text-sm font-semibold tracking-wide text-gold-light transition-colors hover:bg-gold hover:text-ink ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {label}
    </a>
  );
}
