"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { waLink } from "@/config/site";

const stats = [
  { value: "30+", label: "Days Minimum", desc: "Dedicated monthly contracts" },
  { value: "50+", label: "Flagship Fleet", desc: "Prado, Fortuner, Civic & more" },
  { value: "24/7", label: "Fleet Assurance", desc: "Guaranteed replacement car" },
  { value: "8+", label: "Cities Covered", desc: "Nationwide dispatch across Pakistan" },
];

export function Hero() {
  return (
    <section className="relative flex flex-col justify-between -mt-[68px] min-h-[calc(100svh-68px)] bg-[#070709] overflow-hidden">
      {/* Background imagery with luxury vignette — pushed gracefully to the right */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#070709] pointer-events-none select-none">
        <div className="absolute inset-y-0 w-full lg:w-[110%] xl:w-[115%] h-full right-0 lg:translate-x-[20%] xl:translate-x-[24%] opacity-55 lg:opacity-80 transition-opacity duration-700">
          <Image
            src="/hero-bg.jpg"
            alt="Mashaal Luxury Fleet"
            fill
            priority
            quality={92}
            className="object-cover object-center"
          />
        </div>

        {/* Cinematic dark gradients for pristine typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/95 via-45% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/60" />
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_75%_50%,rgba(201,162,75,0.07)_0%,transparent_65%)]" />
      </div>

      {/* Main hero body — generous vertical breathing room */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 pt-28 lg:pt-36 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/[0.07] backdrop-blur-md px-4 py-1.5 mb-7 sm:mb-8 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.22em] uppercase text-gold">
              Monthly Rentals Only · Minimum 30 Days
            </span>
          </motion.div>

          {/* Headline with airy leading and refined serif italic */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[clamp(2.4rem,5vw,4.2rem)] font-light leading-[1.18] sm:leading-[1.14] tracking-[-0.01em] text-cream mb-6 sm:mb-8"
          >
            Executive Mobility,
            <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f0d599] via-[#c9a24b] to-[#e6ca65]">
              on dedicated monthly terms.
            </span>
          </motion.h1>

          {/* Editorial subtext with relaxed line height */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="text-[15px] sm:text-[16px] leading-[1.78] font-light text-cream/70 max-w-xl mb-10 sm:mb-12"
          >
            Exclusively monthly fleet solutions for corporations, diplomatic missions, and discerning individuals. Pristine 50+ vehicles, guaranteed 24/7 replacement, and transparent all-inclusive billing across Pakistan.
          </motion.p>

          {/* Luxury Action Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-wrap items-center gap-4 mb-7"
          >
            {/* Primary Gold Action Pill */}
            <a
              href={waLink("Hi Mashaal Rent A Car, I would like to enquire about a monthly vehicle lease.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-[#d4af37] via-[#c9a24b] to-[#b38a32] hover:from-[#e0be53] hover:to-[#c9a24b] text-[#070709] font-semibold text-[13px] sm:text-[13.5px] px-8 py-4 shadow-xl shadow-gold/20 tracking-wide inline-flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Enquire Monthly Lease</span>
              <span className="font-bold text-[14px]">→</span>
            </a>

            {/* Secondary Frosted Glass Pill */}
            <Link
              href="/fleet"
              className="rounded-full border border-white/20 hover:border-gold/60 bg-white/[0.04] hover:bg-white/[0.08] text-cream hover:text-gold-light text-[13px] sm:text-[13.5px] font-medium px-8 py-4 tracking-wide backdrop-blur-md inline-flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore 50+ Fleet</span>
            </Link>
          </motion.div>

          {/* Subtle Institutional Dispatch Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex items-center gap-2.5 text-[11.5px] text-cream/45"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold/70 shrink-0" />
            <span>Direct fleet dispatch across Lahore, Islamabad, Karachi & nationwide economic hubs</span>
          </motion.div>
        </div>
      </div>

      {/* Integrated Institutional Stat Band */}
      <div className="relative z-20 w-full bg-[#0a0a0e]/95 backdrop-blur-md border-t border-white/[0.08] mt-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.08]">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="flex items-baseline gap-3.5 px-3 sm:px-8 py-2"
              >
                <span className="font-display text-2xl sm:text-3xl text-gold-light shrink-0 font-medium">
                  {item.value}
                </span>
                <div className="min-w-0 leading-tight">
                  <h4 className="text-[12.5px] font-semibold text-cream tracking-wide">{item.label}</h4>
                  <p className="text-[11px] text-cream/45 mt-0.5 truncate">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
