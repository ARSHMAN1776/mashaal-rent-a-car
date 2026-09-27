"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const stats = [
  { value: "50+", label: "Fleet Vehicles" },
  { value: "04", label: "Vehicle Categories" },
  { value: "04", label: "Group Business Verticals" },
  { value: "02", label: "Country Presence — PK & UAE" },
];

export function StatBand() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-gold/[0.05] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-display max-w-3xl text-3xl italic leading-snug text-cream sm:text-4xl"
        >
          &ldquo;Institutional scale, built for sustainable, multi-decade
          stewardship — extended from fuel and freight into mobility.&rdquo;
        </motion.blockquote>
        <p className="mt-5 tracked-label text-[10px] text-bronze">
          — {siteConfig.parentBrand} Holding Principle
        </p>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-line pt-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="font-display text-4xl text-gold-light sm:text-5xl">
                {s.value}
              </p>
              <p className="tracked-label mt-3 text-[10px] text-bronze">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <a
          href={siteConfig.parentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tracked-label mt-14 inline-flex items-center gap-2 text-xs text-gold-light/90 hover:text-gold-light"
        >
          Explore {siteConfig.parentBrand} →
        </a>
      </div>
    </section>
  );
}
