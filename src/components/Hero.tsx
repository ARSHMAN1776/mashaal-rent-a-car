"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { waLink } from "@/config/site";
import { WhatsAppIcon, ArrowIcon } from "./icons";

const stats = [
  { value: "50+", label: "Vehicles In Fleet" },
  { value: "04", label: "Fleet Categories" },
  { value: "100%", label: "Monthly Contracts" },
  { value: "24/7", label: "Support Desk" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32">
      {/* backdrop accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="tracked-label text-xs text-gold-light/80"
        >
          A Mobility Vertical of Mashaal Groups
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display mt-6 max-w-4xl text-[13vw] leading-[0.95] text-cream sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Move through Pakistan
          <span className="block italic text-gold-light">on your terms.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-cream/65 sm:text-lg"
        >
          Mashaal Rent A Car provides institutionally governed, monthly-only
          vehicle rentals — from the Fortuner and Prado to the Civic and
          Alto — across a fleet of 50+ vehicles, backed by the reliability
          standards of Mashaal Groups.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/fleet"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-[1.02]"
          >
            Explore The Fleet
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={waLink(
              "Hi Mashaal Rent A Car, I'd like to enquire about a monthly rental."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-gold-dim/60 px-7 py-3.5 text-sm font-semibold tracking-wide text-cream/90 transition-colors hover:border-gold hover:text-gold-light"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-20 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl text-gold-light sm:text-4xl">
                {s.value}
              </p>
              <p className="tracked-label mt-2 text-[10px] text-bronze">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
