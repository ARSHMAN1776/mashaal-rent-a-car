"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig, telLink } from "@/config/site";
import { CrownMark, PhoneIcon } from "./icons";

const navLinks = [
  { href: "/fleet", label: "The Fleet" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <CrownMark className="h-6 w-9 text-gold" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-cream">
              MASHAAL
            </span>
            <span className="tracked-label text-[10px] text-bronze">
              Rent A Car
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tracked-label text-xs text-cream/80 transition-colors hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={telLink()}
            className="flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-gold-light"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phoneNumber}
          </a>
          <Link
            href="/fleet"
            className="rounded-full border border-gold px-5 py-2 text-xs font-semibold tracking-wide text-gold-light transition-colors hover:bg-gold hover:text-ink"
          >
            View Fleet
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-gold-light transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-gold-light transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="tracked-label py-3 text-xs text-cream/80 border-b border-line last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={telLink()}
              className="flex items-center gap-2 py-3 text-sm text-cream/80"
            >
              <PhoneIcon className="h-4 w-4" />
              {siteConfig.phoneNumber}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
