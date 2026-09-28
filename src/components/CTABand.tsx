"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { telLink, waLink } from "@/config/site";

export function CTABand() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 lg:pt-28 lg:pb-36 border-t border-white/[0.08]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta-road.jpg"
          alt="Luxury vehicle on open road"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="gold-badge mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>Dedicated Monthly Lease</span>
          </div>

          <h2 className="font-display text-balance text-[clamp(1.95rem,3.4vw,2.8rem)] font-light leading-[1.1] text-cream mb-4">
            Your executive journey,
            <br />
            <span className="italic text-gold-light">begins on monthly terms.</span>
          </h2>

          <p className="text-[14px] sm:text-[15px] text-cream/70 leading-relaxed mb-8 max-w-md">
            Experience complete automotive peace of mind. Zero ownership depreciation, full maintenance coverage, and replacement vehicle guarantee across all major Pakistani cities.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href={waLink("Hi Mashaal Rent A Car, I would like to reserve an executive vehicle on a monthly lease.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[13px] px-7 py-3.5 shadow-lg shadow-gold/15"
            >
              <span>Enquire Monthly Lease</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <a
              href={telLink()}
              className="btn-outline border-white/20 text-cream hover:border-gold hover:text-gold-light text-[13px] px-6 py-3.5"
            >
              Speak to Fleet Dispatch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
