"use client";

import { motion } from "framer-motion";
import { siteConfig, telLink, waLink } from "@/config/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function CTABand() {
  return (
    <section className="relative overflow-hidden border-t border-line py-28 text-center lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tracked-label text-xs text-gold-light/80"
        >
          {siteConfig.tagline}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-6 text-5xl leading-tight text-cream sm:text-6xl"
        >
          Ready to <span className="italic text-gold-light">drive?</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={waLink(
              "Hi Mashaal Rent A Car, I'd like to enquire about a monthly rental."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
          <a
            href={telLink()}
            className="inline-flex items-center gap-2.5 rounded-full border border-gold-dim/60 px-8 py-3.5 text-sm font-semibold tracking-wide text-cream/90 transition-colors hover:border-gold hover:text-gold-light"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phoneNumber}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
