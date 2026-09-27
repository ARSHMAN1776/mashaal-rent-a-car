"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

// Placeholder quotes — replace with real client testimonials before launch.
const quotes = [
  {
    quote:
      "We moved our entire executive fleet to a monthly plan with Mashaal. Fixed cost, zero surprises, and the Prado has been flawless.",
    name: "Corporate Client",
    role: "Logistics Firm, Lahore",
  },
  {
    quote:
      "Booked the Civic for three months while my own car was in for work. Delivery was on time and the process was refreshingly simple.",
    name: "Individual Renter",
    role: "Rahim Yar Khan",
  },
  {
    quote:
      "The Revo has handled every site visit we've thrown at it. Being part of Mashaal Groups gives us real confidence in the paperwork side too.",
    name: "Site Operations Lead",
    role: "Construction Sector",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel index="04" label="In Their Words" />

        <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col justify-between rounded-2xl border border-line bg-surface p-8"
            >
              <blockquote className="font-display text-xl italic leading-snug text-cream">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-sm font-semibold text-gold-light">
                  {q.name}
                </p>
                <p className="mt-1 text-xs text-cream/45">{q.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
