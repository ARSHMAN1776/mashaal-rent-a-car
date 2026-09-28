"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig, telLink } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Fleet" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 h-[68px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <svg width="34" height="21" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M18 2C18 2 8 2 4 8C0 14 2 20 2 20H34C34 20 36 14 32 8C28 2 18 2 18 2Z" stroke="#c9a24b" strokeWidth="1.5" fill="none"/>
            <path d="M6 20C6 20 7 16 10 14H26C29 16 30 20 30 20" stroke="#c9a24b" strokeWidth="1.5" fill="none"/>
            <circle cx="9" cy="20" r="2.5" stroke="#c9a24b" strokeWidth="1.2" fill="none"/>
            <circle cx="27" cy="20" r="2.5" stroke="#c9a24b" strokeWidth="1.2" fill="none"/>
          </svg>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[19px] italic text-cream">
              Mashaal
            </span>
            <span className="text-[9px] tracking-[0.28em] uppercase font-medium text-gold">
              Rent A Car
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative text-[13px] font-medium py-1.5 transition-colors duration-200 ${
                  isActive ? "text-cream" : "text-cream/60 hover:text-cream"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full bg-gold transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={telLink()}
            className="flex items-center gap-2 text-[13px] text-[#f2ede4]/70 hover:text-[#c9a24b] transition-colors duration-200"
            aria-label={`Call ${siteConfig.phoneNumber}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.57 4.38a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91A16 16 0 0 0 14 16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.34z"/>
            </svg>
            {siteConfig.phoneNumber}
          </a>
          <Link
            href="/contact"
            className="btn-primary text-[12px] px-5 py-2.5"
          >
            Monthly Enquiry
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden cursor-pointer"
        >
          <span
            className={`h-px w-6 bg-[#f2ede4] transition-transform duration-200 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-[#f2ede4] transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-[#f2ede4] transition-transform duration-200 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/[0.06] bg-[#0c0c0c]/98 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[14px] text-[#f2ede4]/80 border-b border-white/[0.05] last:border-0 hover:text-[#c9a24b] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <a href={telLink()} className="text-[13px] text-[#f2ede4]/70">
                {siteConfig.phoneNumber}
              </a>
              <Link href="/contact" className="btn-primary text-[12px] px-5 py-2.5 ml-auto">
                Monthly Enquiry
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
