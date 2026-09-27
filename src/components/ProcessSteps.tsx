"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    index: "01",
    title: "Choose Your Vehicle",
    body: "Browse the fleet by category and select the vehicle that fits your need — from an Alto to a V8.",
  },
  {
    index: "02",
    title: "Submit Documents",
    body: "A simple CNIC and address verification — no lengthy paperwork, no unnecessary delay.",
  },
  {
    index: "03",
    title: "Sign The Agreement",
    body: "One transparent, fixed monthly contract. The rate you're quoted is the rate you pay.",
  },
  {
    index: "04",
    title: "Get It Delivered",
    body: "Your vehicle arrives fuelled, inspected, and ready on your chosen date.",
  },
];

export function ProcessSteps() {
  return (
    <section className="border-t border-line bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel index="03" label="How It Works" />

        <h2 className="font-display mt-8 max-w-2xl text-4xl leading-tight text-cream sm:text-5xl">
          From enquiry to keys-in-hand,
          <span className="italic text-gold-light"> in four steps.</span>
        </h2>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-line-strong lg:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative"
            >
              <span className="font-display relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold-dim/60 bg-ink text-lg text-gold-light">
                {s.index}
              </span>
              <h3 className="font-display mt-6 text-xl text-cream">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/55">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
