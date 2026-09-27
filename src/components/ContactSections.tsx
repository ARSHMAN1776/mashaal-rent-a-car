"use client";

import { motion } from "framer-motion";
import { siteConfig, telLink, waLink } from "@/config/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import { SectionLabel } from "./SectionLabel";

const checklist = [
  "Valid CNIC (original + copy)",
  "Proof of current address (utility bill)",
  "Passport-size photograph",
  "For corporate accounts: company letterhead request",
];

export function ContactSections() {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel index="01" label="Reach Us Directly" />

            <a
              href={waLink(
                "Hi Mashaal Rent A Car, I'd like to enquire about a monthly rental."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex items-center justify-between rounded-2xl border border-gold-dim/60 bg-gold/[0.06] p-7 transition-colors hover:bg-gold/10"
            >
              <div>
                <p className="tracked-label text-[10px] text-bronze">
                  Fastest Response
                </p>
                <p className="font-display mt-2 text-2xl text-cream">
                  WhatsApp Us
                </p>
              </div>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink transition-transform group-hover:scale-105">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
            </a>

            <a
              href={telLink()}
              className="group mt-5 flex items-center justify-between rounded-2xl border border-line p-7 transition-colors hover:border-gold-dim/70"
            >
              <div>
                <p className="tracked-label text-[10px] text-bronze">
                  Call The Desk
                </p>
                <p className="font-display mt-2 text-2xl text-cream">
                  {siteConfig.phoneNumber}
                </p>
              </div>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-dim/60 text-gold-light">
                <PhoneIcon className="h-5 w-5" />
              </span>
            </a>

            <div className="mt-10 space-y-4 text-sm text-cream/60">
              <p>
                <span className="tracked-label text-[10px] text-bronze block mb-1">
                  Service Area
                </span>
                {siteConfig.city}
              </p>
              <p>
                <span className="tracked-label text-[10px] text-bronze block mb-1">
                  Email
                </span>
                {siteConfig.email}
              </p>
              <p>
                <span className="tracked-label text-[10px] text-bronze block mb-1">
                  Desk Hours
                </span>
                24/7 WhatsApp support · Office hours 9am–8pm daily
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionLabel index="02" label="Before You Enquire" />
            <h2 className="font-display mt-8 text-3xl leading-tight text-cream sm:text-4xl">
              Have this ready,
              <span className="italic text-gold-light"> move faster.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/55">
              A quick checklist so your monthly rental agreement can be
              prepared the moment you reach out.
            </p>

            <ul className="mt-8 space-y-4">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-line p-5 text-sm text-cream/70"
                >
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
