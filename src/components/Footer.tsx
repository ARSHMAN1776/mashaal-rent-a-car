import Link from "next/link";
import { siteConfig, telLink, waLink } from "@/config/site";

const fleetLinks = [
  { href: "/fleet", label: "Luxury SUVs (Prado TX, Fortuner)" },
  { href: "/fleet", label: "Executive Sedans (Civic RS, Grande)" },
  { href: "/fleet", label: "Heavy 4x4 (V8 Land Cruiser, Revo)" },
  { href: "/fleet", label: "City Commute (Cultus, Alto)" },
  { href: "/fleet", label: "View Complete 50+ Fleet" },
];

const serviceLinks = [
  { href: "/services", label: "Corporate Monthly Fleet Leasing" },
  { href: "/services", label: "VIP Airport Protocol & Transfers" },
  { href: "/services", label: "Intercity Executive Travel" },
  { href: "/services", label: "Diplomatic & Delegation Fleets" },
  { href: "/services", label: "24/7 Vehicle Replacement Assurance" },
];

const locationHubs = [
  { href: "/locations", label: "Lahore Head Office" },
  { href: "/locations", label: "Islamabad & Rawalpindi" },
  { href: "/locations", label: "Karachi Regional Hub" },
  { href: "/locations", label: "Multan & Faisalabad" },
  { href: "/locations", label: "Peshawar & Gujranwala" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#070709] border-t border-white/[0.08] text-cream overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[300px] bg-gold/[0.03] blur-[140px]" />

      {/* Decorative Gold Ribbon Curves on the right */}
      <div className="pointer-events-none absolute right-0 bottom-0 w-[500px] h-[450px] overflow-hidden opacity-25 select-none hidden md:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 500 450"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 50 450 C 220 400, 380 280, 500 120"
            stroke="url(#goldRibbon)"
            strokeWidth="1.5"
          />
          <path
            d="M 120 450 C 270 380, 420 240, 500 60"
            stroke="url(#goldRibbon)"
            strokeWidth="1"
          />
          <path
            d="M 200 450 C 330 360, 450 180, 500 10"
            stroke="url(#goldRibbon)"
            strokeWidth="0.75"
          />
          <defs>
            <linearGradient id="goldRibbon" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c9a24b" stopOpacity="0" />
              <stop offset="60%" stopColor="#c9a24b" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#f0d599" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Footer Directory */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-12 pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10">
          {/* Column 1: Brand & Pedigree (span 4 on lg/xl, full on md) */}
          <div className="md:col-span-2 lg:col-span-4 xl:col-span-4 max-w-lg">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3.5 mb-5 group">
              {/* Car outline icon */}
              <div className="shrink-0 transition-transform group-hover:scale-105">
                <svg
                  width="42"
                  height="26"
                  viewBox="0 0 38 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M19 2.5C19 2.5 8.5 2.5 4.5 9C0.5 15.5 2.5 21 2.5 21H35.5C35.5 21 37.5 15.5 33.5 9C29.5 2.5 19 2.5 19 2.5Z"
                    stroke="#c9a24b"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 21C6.5 21 7.5 16.5 11 14.5H27C30.5 16.5 31.5 21 31.5 21"
                    stroke="#c9a24b"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="10"
                    cy="21"
                    r="2.5"
                    stroke="#c9a24b"
                    strokeWidth="1.4"
                    fill="#070709"
                  />
                  <circle
                    cx="28"
                    cy="21"
                    r="2.5"
                    stroke="#c9a24b"
                    strokeWidth="1.4"
                    fill="#070709"
                  />
                </svg>
              </div>

              {/* Title & subtitle */}
              <div className="flex flex-col leading-none">
                <span className="font-display text-[28px] sm:text-[30px] italic text-white font-normal tracking-wide">
                  Mashaal
                </span>
                <span className="text-[9.5px] sm:text-[10px] tracking-[0.26em] uppercase font-semibold text-gold mt-1">
                  RENT A CAR &nbsp;•&nbsp; GROUPS
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-[12.5px] sm:text-[13px] text-cream/70 leading-relaxed mb-6 font-normal">
              Mashaal Rent A Car is the executive mobility vertical of{" "}
              <span className="text-gold font-semibold">Mashaal Groups</span>,
              dedicated exclusively to monthly automotive leasing, corporate fleet
              management, and VIP chauffeur solutions across Pakistan.
            </p>

            {/* Ecosystem box */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0d12]/90 p-4 sm:p-4.5 mb-6 shadow-xl backdrop-blur-sm">
              <p className="text-[9px] uppercase tracking-[0.22em] text-gold font-bold mb-3">
                PART OF MASHAAL GROUPS ECOSYSTEM
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] gap-2.5 sm:gap-0">
                {/* 1. Mashaal Petroleum */}
                <div className="flex items-center gap-2.5 sm:pr-2.5 pt-1 sm:pt-0">
                  <div className="shrink-0 flex items-center justify-center text-gold">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c9a24b"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 20V5L12 14L20 5V20" />
                    </svg>
                  </div>
                  <div className="leading-tight min-w-0">
                    <p className="text-[11.5px] font-semibold text-white/95">Mashaal</p>
                    <p className="text-[10px] text-cream/55">Petroleum</p>
                  </div>
                </div>

                {/* 2. Mashwani Shipping LLC */}
                <div className="flex items-center gap-2.5 sm:px-2.5 pt-2 sm:pt-0">
                  <div className="shrink-0 flex items-center justify-center text-gold">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c9a24b"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <path d="M12 22V2M12 6C10 4 8 5 8 5M12 6C14 4 16 5 16 5M12 10C9 8 7 9 7 9M12 10C15 8 17 9 17 9M12 14C9 12 7 13 7 13M12 14C15 12 17 13 17 13" />
                    </svg>
                  </div>
                  <div className="leading-tight min-w-0">
                    <p className="text-[11px] font-semibold text-white/95">Mashwani Shipping</p>
                    <p className="text-[10px] text-cream/55">LLC (Dubai)</p>
                  </div>
                </div>

                {/* 3. Mashaal Foods */}
                <div className="flex items-center gap-2.5 sm:pl-2.5 pt-2 sm:pt-0">
                  <div className="shrink-0 flex items-center justify-center text-gold">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c9a24b"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2V22M18 2C16.5 2 15 3.5 15 6C15 8.5 16.5 10 18 10M6 2V8C6 9.5 7 11 9 11M9 11V22M9 11C11 11 12 9.5 12 8V2M9 2V8" />
                    </svg>
                  </div>
                  <div className="leading-tight min-w-0">
                    <p className="text-[11.5px] font-semibold text-white/95">Mashaal</p>
                    <p className="text-[10px] text-cream/55">Foods</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Action Pill Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* WhatsApp VIP */}
              <a
                href={waLink("Hi Mashaal Groups Concierge, I would like to enquire about a monthly vehicle.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gold/40 hover:border-gold bg-[#0e0e13]/60 hover:bg-gold/10 px-3.5 py-2 text-[11.5px] font-medium text-white inline-flex items-center gap-2 transition-all whitespace-nowrap group shrink-0"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c9a24b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform shrink-0"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>WhatsApp VIP</span>
                <span className="text-gold/80 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>

              {/* Phone Hotline */}
              <a
                href={telLink()}
                className="rounded-xl border border-gold/40 hover:border-gold bg-[#0e0e13]/60 hover:bg-gold/10 px-3.5 py-2 text-[11.5px] font-medium text-white inline-flex items-center gap-2 transition-all whitespace-nowrap group shrink-0"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c9a24b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Phone Hotline</span>
                <span className="text-gold/80 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>

              {/* Email Office */}
              <a
                href="mailto:rentals@mashaalgroups.com"
                className="rounded-xl border border-gold/40 hover:border-gold bg-[#0e0e13]/60 hover:bg-gold/10 px-3.5 py-2 text-[11.5px] font-medium text-white inline-flex items-center gap-2 transition-all whitespace-nowrap group shrink-0"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c9a24b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Email Office</span>
                <span className="text-gold/80 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Column 2: Monthly Fleet (span 2 on lg/xl, 1 on md) */}
          <div className="md:col-span-1 lg:col-span-2 xl:col-span-2 min-w-0">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              MONTHLY FLEET
            </h4>
            <div className="h-[2px] w-8 bg-gold mt-2 mb-5" />

            <ul className="space-y-3">
              {fleetLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="flex items-center justify-between gap-2 text-[12px] xl:text-[12.5px] text-cream/75 hover:text-gold transition-colors group leading-snug py-0.5"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{l.label}</span>
                    <span className="text-gold/50 group-hover:text-gold shrink-0 transition-colors text-[14px]">
                      ›
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Solutions (span 3 on lg/xl, 1 on md) */}
          <div className="md:col-span-1 lg:col-span-3 xl:col-span-3 min-w-0">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              CORPORATE SOLUTIONS
            </h4>
            <div className="h-[2px] w-8 bg-gold mt-2 mb-5" />

            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="flex items-center justify-between gap-2 text-[12px] xl:text-[12.5px] text-cream/75 hover:text-gold transition-colors group leading-snug py-0.5"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{l.label}</span>
                    <span className="text-gold/50 group-hover:text-gold shrink-0 transition-colors text-[14px]">
                      ›
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Nationwide Hubs & VIP Concierge (span 3 on lg/xl, 2 on md) */}
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-3 min-w-0">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              NATIONWIDE HUBS
            </h4>
            <div className="h-[2px] w-8 bg-gold mt-2 mb-5" />

            <ul className="space-y-3 mb-6">
              {locationHubs.map((h) => (
                <li key={h.label}>
                  <Link
                    href={h.href}
                    className="flex items-center justify-between gap-2 text-[12px] xl:text-[12.5px] text-cream/75 hover:text-gold transition-colors group leading-snug py-0.5"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{h.label}</span>
                    <span className="text-gold/50 group-hover:text-gold shrink-0 transition-colors text-[14px]">
                      ›
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Direct hotline card: 24/7 VIP Concierge */}
            <div className="rounded-2xl border border-gold/40 bg-[#0d0e13]/90 p-3.5 sm:p-4 relative backdrop-blur-sm shadow-xl flex items-center gap-3.5">
              <div className="shrink-0 text-gold">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c9a24b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="leading-tight min-w-0">
                <span className="block text-[9px] uppercase tracking-wider text-gold font-bold">
                  24/7 VIP CONCIERGE
                </span>
                <a
                  href={telLink()}
                  className="font-display text-[18px] sm:text-[19px] font-bold text-white hover:text-gold-light transition-colors block mt-0.5 tracking-wider truncate"
                >
                  {siteConfig.phoneNumber}
                </a>
                <span className="text-[9.5px] sm:text-[10px] text-cream/55 block mt-0.5">
                  Direct dispatch desk across all cities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar 1: Status, Nav Links, Socials & WhatsApp Button */}
      <div className="border-t border-white/[0.08] bg-[#070709]/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-12 py-5 flex flex-col lg:flex-row items-center justify-between gap-5">
          {/* Left: Monogram and Live status */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-8 w-8 shrink-0 rounded-full border border-gold/70 flex items-center justify-center font-display italic text-gold font-bold text-[15px] select-none">
              M
            </div>
            <div className="h-4 w-[1px] bg-white/20 shrink-0" />
            <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] text-cream/70 whitespace-nowrap">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Fleet Operations & Dispatch: Live 24/7 Across Pakistan</span>
            </div>
          </div>

          {/* Center: Links separated by pipes */}
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-4 gap-y-1.5 text-[11.5px] sm:text-[12px] text-cream/65">
            <Link href="/about" className="hover:text-gold transition-colors whitespace-nowrap">
              About Mashaal Groups
            </Link>
            <span className="text-white/20 select-none">|</span>
            <Link href="/locations" className="hover:text-gold transition-colors whitespace-nowrap">
              Locations
            </Link>
            <span className="text-white/20 select-none">|</span>
            <Link href="/contact" className="hover:text-gold transition-colors whitespace-nowrap">
              Monthly Terms & Agreements
            </Link>
            <span className="text-white/20 select-none">|</span>
            <Link href="/privacy" className="hover:text-gold transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
          </div>

          {/* Right: Social icons & WhatsApp pill */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Social Icons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/20 hover:border-gold/70 hover:text-gold text-cream/70 flex items-center justify-center transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/20 hover:border-gold/70 hover:text-gold text-cream/70 flex items-center justify-center transition-all"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/20 hover:border-gold/70 hover:text-gold text-cream/70 flex items-center justify-center transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/20 hover:border-gold/70 hover:text-gold text-cream/70 flex items-center justify-center transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
                </svg>
              </a>
            </div>

            {/* Chat on WhatsApp pill */}
            <a
              href={waLink("Hello, I would like to chat with Mashaal Rent A Car concierge.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c9a24b] hover:bg-[#d8b560] text-[#070709] font-semibold text-[11.5px] sm:text-[12px] px-4 sm:px-5 py-2 rounded-full flex items-center gap-1.5 shadow-lg shadow-gold/20 whitespace-nowrap transition-transform hover:scale-[1.02]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Chat on WhatsApp</span>
              <span className="text-black/80 font-bold">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar 2: Copyright & Brand Motto */}
      <div className="border-t border-white/[0.06] bg-[#050507]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[11px] text-gold/75 tracking-wider font-light">
            © 2025 Mashaal Groups. All rights reserved.
          </p>

          <p className="text-[10px] tracking-[0.28em] uppercase text-gold/80 font-medium">
            LUXURY &nbsp;/&nbsp; TRUST &nbsp;/&nbsp; MOBILITY
          </p>
        </div>
      </div>
    </footer>
  );
}
