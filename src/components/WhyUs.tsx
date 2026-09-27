"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const pillars = [
  {
    index: "01",
    title: "Verified Fleet Integrity",
    body: "Every vehicle in the fleet is serviced, inspected, and insured under group-standard compliance protocols before it reaches you — no exceptions.",
  },
  {
    index: "02",
    title: "Transparent Monthly Pricing",
    body: "One fixed monthly rate per vehicle category. No hidden mileage traps, no daily surge pricing, no fine-print surprises.",
  },
  {
    index: "03",
    title: "Corporate & Individual Plans",
    body: "Structured long-term leasing for corporate fleets, alongside flexible monthly plans for individuals and families.",
  },
  {
    index: "04",
    title: "Group-Backed Reliability",
    body: "Governed by the same fiduciary oversight and long-term stewardship as Mashaal Petroleum and Mashwani Shipping.",
  },
];

export function WhyUs() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel index="01" label="Why Mashaal Rent A Car" />

        <h2 className="font-display mt-8 max-w-2xl text-4xl leading-tight text-cream sm:text-5xl">
          Institutional standards,
          <span className="italic text-gold-light"> brought to the road.</span>
        </h2>

        <div className="mt-16 divide-y divide-line border-t border-line">
          {pillars.map((p, i) => (
            <motion.div
              key={p.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="grid gap-6 py-10 sm:grid-cols-[120px_1fr] lg:grid-cols-[160px_1fr_1.2fr]"
            >
              <span className="font-display text-3xl text-gold-dim">
                {p.index}
              </span>
              <h3 className="font-display text-2xl text-cream sm:text-3xl">
                {p.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-cream/60 sm:text-base">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
