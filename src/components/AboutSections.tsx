"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { siteConfig } from "@/config/site";

const verticals = [
  {
    index: "01",
    name: "Mashaal Petroleum",
    status: "Operating",
    body: "Authorized Total PARCO and PSO forecourts delivering refinery-sealed fuel across Punjab.",
  },
  {
    index: "02",
    name: "Mashwani Shipping L.L.C.",
    status: "Operating",
    body: "Dubai-headquartered freight forwarding connecting the Middle East, South Asia, and global trade routes.",
  },
  {
    index: "03",
    name: "Mashaal Foods",
    status: "In Development",
    body: "An upcoming vertical for essential food staples and consumer FMCG products.",
  },
  {
    index: "04",
    name: "Mashaal Rent A Car",
    status: "Operating",
    body: "Monthly-only mobility and fleet solutions for corporate and individual clients — this business.",
  },
];

export function AboutSections() {
  return (
    <>
      <section className="border-t border-line py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="01" label="Our Story" />
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl">
              Mobility deserves the same
              <span className="italic text-gold-light"> discipline</span> as
              energy and logistics.
            </h2>
            <div className="space-y-5 text-sm leading-relaxed text-cream/60 sm:text-base">
              <p>
                Mashaal Rent A Car was established to bring the same
                fiduciary rigour that governs Mashaal Petroleum&rsquo;s
                forecourts and Mashwani Shipping&rsquo;s freight operations
                into personal and corporate transportation.
              </p>
              <p>
                Rather than short-term daily rentals, we operate exclusively
                on monthly contracts — a structure that lets us maintain a
                fleet of 50+ vehicles to a consistent standard, price
                transparently, and build long-term relationships with
                corporate and individual clients alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="02" label="Part Of Mashaal Groups" />
          <h2 className="font-display mt-8 max-w-2xl text-3xl leading-tight text-cream sm:text-4xl">
            Four verticals.
            <span className="italic text-gold-light"> One holding standard.</span>
          </h2>

          <div className="mt-14 divide-y divide-line border-t border-line">
            {verticals.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid gap-3 py-8 sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="font-display text-2xl text-gold-dim">
                  {v.index}
                </span>
                <div>
                  <h3 className="font-display text-xl text-cream sm:text-2xl">
                    {v.name}
                  </h3>
                  <p className="mt-1 max-w-md text-sm text-cream/55">
                    {v.body}
                  </p>
                </div>
                <span
                  className={`tracked-label w-fit justify-self-start rounded-full border px-3 py-1.5 text-[9px] sm:justify-self-end ${
                    v.status === "Operating"
                      ? "border-gold-dim/60 text-gold-light"
                      : "border-line-strong text-cream/40"
                  }`}
                >
                  {v.status}
                </span>
              </motion.div>
            ))}
          </div>

          <a
            href={siteConfig.parentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tracked-label mt-10 inline-flex items-center gap-2 text-xs text-gold-light/90 hover:text-gold-light"
          >
            Visit {siteConfig.parentBrand} →
          </a>
        </div>
      </section>

      <section className="border-t border-line py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel index="03" label="Why Monthly Only" />
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {[
              {
                title: "Predictable Cost",
                body: "One fixed rate for the full month — no daily surge pricing or mileage anxiety.",
              },
              {
                title: "Fleet Consistency",
                body: "Monthly cycles let us service and rotate every vehicle to the same standard, every time.",
              },
              {
                title: "Real Relationships",
                body: "We get to know corporate clients and individuals over months, not one-off transactions.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-line p-8">
                <h3 className="font-display text-xl text-gold-light">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/55">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
