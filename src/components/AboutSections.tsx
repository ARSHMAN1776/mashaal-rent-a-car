"use client";

import { motion } from "framer-motion";
import { siteConfig, waLink } from "@/config/site";
import Link from "next/link";

const metrics = [
  { value: "50+", label: "Executive Vehicles", desc: "Flagship SUVs, luxury sedans & heavy 4x4s" },
  { value: "100%", label: "Monthly Focus", desc: "Dedicated 30+ day long-term lease model" },
  { value: "8+", label: "Cities Covered", desc: "Lahore, Islamabad, Karachi & primary hubs" },
  { value: "24/7", label: "Fleet Assistance", desc: "Guaranteed replacement car & rapid support" },
];

const verticals = [
  {
    index: "01",
    type: "petroleum" as const,
    name: "Mashaal Petroleum",
    tagline: "Energy & Infrastructure",
    status: "Operating",
    body: "Authorized Total PARCO and PSO forecourts delivering refinery-sealed fuel across Punjab with strict volume and quality governance.",
  },
  {
    index: "02",
    type: "shipping" as const,
    name: "Mashwani Shipping L.L.C.",
    tagline: "Global Logistics & Maritime",
    status: "Operating",
    body: "Dubai-headquartered freight forwarding connecting the Middle East, South Asia, and global trade corridors with institutional precision.",
  },
  {
    index: "03",
    type: "foods" as const,
    name: "Mashaal Foods",
    tagline: "FMCG & Consumer Staples",
    status: "Operating",
    body: "Active national distribution networks delivering premium consumer staples and packaged commodities with institutional supply-chain governance.",
  },
  {
    index: "04",
    type: "rentacar" as const,
    name: "Mashaal Rent A Car",
    tagline: "Corporate & Private Mobility",
    status: "Operating",
    body: "Exclusively monthly mobility and dedicated fleet allocations for corporate entities, diplomatic missions, and discerning individuals.",
  },
];

function VerticalIcon({ type }: { type: "petroleum" | "shipping" | "foods" | "rentacar" }) {
  switch (type) {
    case "petroleum":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9a7629" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 20V5L12 14L20 5V20" />
        </svg>
      );
    case "shipping":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9a7629" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M12 22V2M12 6C10 4 8 5 8 5M12 6C14 4 16 5 16 5M12 10C9 8 7 9 7 9M12 10C15 8 17 9 17 9M12 14C9 12 7 13 7 13M12 14C15 12 17 13 17 13" />
        </svg>
      );
    case "foods":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9a7629" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 2V22M18 2C16.5 2 15 3.5 15 6C15 8.5 16.5 10 18 10M6 2V8C6 9.5 7 11 9 11M9 11V22M9 11C11 11 12 9.5 12 8V2M9 2V8" />
        </svg>
      );
    case "rentacar":
      return (
        <svg width="24" height="16" viewBox="0 0 38 24" fill="none" stroke="#9a7629" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 2.5C19 2.5 8.5 2.5 4.5 9C0.5 15.5 2.5 21 2.5 21H35.5C35.5 21 37.5 15.5 33.5 9C29.5 2.5 19 2.5 19 2.5Z" />
          <circle cx="10" cy="21" r="2.5" />
          <circle cx="28" cy="21" r="2.5" />
        </svg>
      );
  }
}

const pillars = [
  {
    title: "Predictable cost structure",
    desc: "One transparent rate for the full month — zero surge pricing, no hidden kilometer penalties, and simplified corporate monthly billing.",
  },
  {
    title: "Institutional fleet standards",
    desc: "Monthly cycles allow us to service, inspect, and rotate every vehicle to rigorous mechanical standards, ensuring flawless reliability.",
  },
  {
    title: "Dedicated strategic relations",
    desc: "We assign dedicated account representatives to build enduring relationships with corporate partners, rather than one-off transactions.",
  },
];

const standards = [
  {
    title: "24-Hour Replacement Assurance",
    desc: "In the unlikely event of mechanical maintenance, a replacement vehicle of equal or superior class is dispatched promptly anywhere in our network.",
    tag: "Uptime Guarantee",
  },
  {
    title: "Verified Chauffeur Corps",
    desc: "Drivers undergo criminal background checks, medical clearances, and defensive driving certification with route expertise.",
    tag: "Safety Protocol",
  },
  {
    title: "Comprehensive Commercial Cover",
    desc: "Every fleet unit carries verified commercial insurance with transparent liability terms and documented policy protection.",
    tag: "Complete Protection",
  },
  {
    title: "Corporate Invoicing & Tax Compliance",
    desc: "Full NTN and GST compliant monthly invoices with detailed trip reconciliation for corporate finance departments.",
    tag: "Tax & Compliance",
  },
];

const highlights = [
  {
    title: "Refinery-sealed standards",
    desc: "Backed by Mashaal Petroleum's forecourt discipline, we enforce uncompromising standards on every vehicle's fluids, filters, and mechanical components.",
  },
  {
    title: "Global supply chain heritage",
    desc: "From Mashwani Shipping LLC Dubai to our national fleet hubs, institutional logistics logic underpins all our fleet positioning and dispatch.",
  },
  {
    title: "Strict monthly lifecycle management",
    desc: "Vehicles undergo systematic 30-day health audits, interior sanitization, and tire inspections between contract renewals.",
  },
];

export function AboutSections() {
  return (
    <div className="relative overflow-hidden bg-[#fbf9f5] text-[#111318]">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[120px] left-1/4 h-[520px] w-[520px] rounded-full bg-[#9a7629]/[0.04] blur-[140px]" />
        <div className="absolute top-[35%] right-[5%] h-[420px] w-[420px] rounded-full bg-[#9a7629]/[0.03] blur-[130px]" />
      </div>

      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="gold-badge-light mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9a7629] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9a7629]" />
              </span>
              <span>About Us · Part of Mashaal Groups</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display text-balance text-[clamp(2.4rem,5.5vw,4.5rem)] font-light leading-[1.06] text-[#111318] mb-6"
            >
              A mobility vertical,
              <br />
              <span className="italic text-[#9a7629]">
                built on institutional discipline.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[16px] sm:text-[18px] text-[#4b5262] leading-relaxed max-w-2xl mb-4"
            >
              Mashaal Rent A Car extends the governance, capital discipline, and long-term thinking of
              Mashaal Groups into monthly corporate and personal mobility across Pakistan.
            </motion.p>
          </div>

          {/* Metrics */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 border-t border-slate-200 divide-x divide-y lg:divide-y-0 divide-slate-200">
            {metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                className="pt-8 pr-6"
              >
                <div className="font-display text-[clamp(2.2rem,3.4vw,3rem)] text-[#9a7629] font-medium">
                  {m.value}
                </div>
                <div className="mt-1 text-[13.5px] font-semibold text-[#111318] tracking-wide">
                  {m.label}
                </div>
                <div className="mt-1 text-[12px] text-[#5e6370] leading-snug">
                  {m.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Story & Philosophy ────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-start">
            {/* Left Narrative */}
            <div>
              <div className="gold-badge-light mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
                <span>Pedigree & Standards</span>
              </div>
              <h2 className="font-display text-balance mt-3 text-[clamp(2rem,3.8vw,3rem)] font-light leading-tight text-[#111318] mb-6">
                Mobility deserves the same precision as energy & logistics.
              </h2>
              <div className="space-y-4 text-[14.5px] text-[#4b5262] leading-relaxed">
                <p>
                  Mashaal Rent A Car was founded on a simple principle: transportation should never be treated as a casual, transactional exchange. In an industry often marked by unpredictable vehicle condition, hidden fees, and erratic availability, we engineered an institutional alternative.
                </p>
                <p>
                  Built by the same holding group behind Mashaal Petroleum&rsquo;s authorized Total PARCO & PSO network and Mashwani Shipping&rsquo;s international Dubai freight corridor, our mobility vertical inherits deep capital strength and procedural rigor.
                </p>
                <p className="font-display italic text-[17px] text-[#8b651b] border-l-2 border-[#9a7629] pl-5 py-2 my-4 bg-[#9a7629]/[0.05]">
                  &ldquo;Rather than short-term daily rentals, we operate exclusively on monthly contracts. This lets us guarantee meticulous maintenance across all 50+ vehicles and establish authentic, enduring partnerships with corporate and private clients.&rdquo;
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={waLink("Hi Mashaal Groups, I would like to enquire about your monthly mobility solutions.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-[13px] px-6 py-3"
                >
                  Enquire Monthly Fleet
                </a>
                <Link href="/fleet" className="btn-outline-dark border-slate-300 text-[#111318] hover:border-[#9a7629] hover:text-[#9a7629] text-[13px] px-6 py-3">
                  Explore 50+ Fleet
                </Link>
              </div>
            </div>

            {/* Right: highlights */}
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="luxury-card-light p-6 bg-[#fbf9f5] border-slate-200/80 hover:border-[#9a7629]/40"
                >
                  <span className="font-display text-lg text-[#9a7629] font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[16px] font-semibold text-[#111318] mt-2 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#5e6370] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Part Of Mashaal Groups ────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-[#fbf9f5] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="gold-badge-light mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
                <span>Holding Portfolio</span>
              </div>
              <h2 className="font-display text-balance text-[clamp(2rem,3.8vw,3rem)] font-light leading-tight text-[#111318]">
                Four verticals.
                <span className="italic text-[#9a7629]"> One holding standard.</span>
              </h2>
              <p className="mt-3 text-[14px] text-[#5e6370] max-w-lg">
                Mashaal Groups operates across critical national and international infrastructure sectors, maintaining unified corporate governance.
              </p>
            </div>

            <a
              href={siteConfig.parentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#9a7629] hover:text-[#111318] transition-colors group pb-1"
            >
              Explore {siteConfig.parentBrand} Ecosystem
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Vertical cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verticals.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="luxury-card-light p-7 bg-white border-slate-200/80 hover:border-[#9a7629]/40 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#9a7629]/10 border border-[#9a7629]/25 text-[#9a7629] shadow-sm">
                        <VerticalIcon type={v.type} />
                      </div>
                      <span className="font-display text-xl text-[#9a7629] font-medium">
                        {v.index}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {v.status}
                    </span>
                  </div>

                  <h3 className="font-display text-[22px] font-medium text-[#111318] mb-1">
                    {v.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-[#9a7629] tracking-widest uppercase block mb-3">
                    {v.tagline}
                  </span>
                  <p className="text-[13px] text-[#5e6370] leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Monthly Only ──────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="gold-badge-light mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
              <span>Core Business Model</span>
            </div>
            <h2 className="font-display text-balance text-[clamp(2rem,3.8vw,3rem)] font-light text-[#111318] leading-tight">
              Why we work exclusively on a <span className="italic text-[#9a7629]">monthly basis.</span>
            </h2>
            <p className="mt-3 text-[14px] text-[#5e6370] leading-relaxed">
              We deliberately chose not to operate daily or short-term rentals. A dedicated monthly model unlocks three fundamental advantages for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="luxury-card-light p-7 bg-[#fbf9f5] border-slate-200/80 hover:border-[#9a7629]/40 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-xl text-[#9a7629] font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[19px] font-medium text-[#111318] mt-3 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#5e6370] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-bold text-[#8b651b] uppercase tracking-wider">
                  <span>Guaranteed Policy</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Operational Standards & Governance ───────────────────────── */}
      <section className="relative py-20 lg:py-24 bg-[#fbf9f5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="gold-badge-light mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
                <span>Operational Governance</span>
              </div>
              <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light text-[#111318] leading-tight">
                Institutional service guarantees
              </h2>
            </div>
            <p className="text-[13.5px] text-[#5e6370] max-w-md">
              Every monthly lease is backed by formalized service-level agreements and dedicated fleet managers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((std, i) => (
              <motion.div
                key={std.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="luxury-card-light p-6 bg-white border-slate-200/80 hover:border-[#9a7629]/40 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9a7629]">
                    {std.tag}
                  </span>
                  <h4 className="font-display text-[17px] font-medium text-[#111318] mt-3 mb-2">{std.title}</h4>
                  <p className="text-[12.5px] text-[#5e6370] leading-relaxed">{std.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
