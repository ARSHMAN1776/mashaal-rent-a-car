"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categoryOrder, formatPKR, type CarCategory, type CarModel } from "@/data/cars";
import { CarMedia } from "./CarMedia";
import { WhatsAppInline } from "./WhatsAppButton";

type Filter = "All" | CarCategory;

const filters: Filter[] = ["All", ...categoryOrder];

export function FleetGrid({ cars }: { cars: CarModel[] }) {
  const [active, setActive] = useState<Filter>("All");

  const grouped = categoryOrder
    .filter((c) => active === "All" || active === c)
    .map((category) => ({
      category,
      cars: cars.filter((c) => c.category === category),
    }));

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`tracked-label rounded-full border px-5 py-2.5 text-[11px] transition-colors ${
              active === f
                ? "border-gold bg-gold text-ink"
                : "border-line-strong text-cream/70 hover:border-gold-dim hover:text-gold-light"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-16 space-y-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="space-y-20"
          >
            {grouped.map(({ category, cars: categoryCars }) => (
              <div key={category}>
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                  <h2 className="font-display text-2xl text-cream sm:text-3xl">
                    {category}
                  </h2>
                  <span className="tracked-label text-[10px] text-bronze">
                    {categoryCars.length} Flagship
                    {categoryCars.length > 1 ? "s" : ""} Shown
                  </span>
                </div>

                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryCars.map((car) => (
                    <div
                      key={car.slug}
                      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-gold-dim/70"
                    >
                      <span className="tracked-label text-[10px] text-bronze">
                        {car.make}
                      </span>
                      <div className="relative mt-2">
                        <div className="absolute inset-0 -z-10 rounded-full bg-gold/[0.04] blur-2xl" />
                        <CarMedia car={car} variant="card" />
                      </div>
                      <h3 className="font-display text-3xl text-cream">
                        {car.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/55">
                        {car.tagline}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-cream/45">
                        <span>{car.seats} Seats</span>
                        <span>·</span>
                        <span>{car.transmission}</span>
                        <span>·</span>
                        <span>{car.fuel}</span>
                      </div>

                      <div className="hairline-solid my-5" />

                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <p className="tracked-label text-[9px] text-bronze">
                            Monthly From
                          </p>
                          <p className="font-display text-xl text-gold-light">
                            {formatPKR(car.monthlyFrom)}
                            <span className="ml-1 font-sans text-[11px] text-cream/40">
                              /mo*
                            </span>
                          </p>
                        </div>
                      </div>

                      <WhatsAppInline
                        message={`Hi Mashaal Rent A Car, I'd like to enquire about the ${car.name} on a monthly basis.`}
                        label="Enquire"
                        className="mt-5 w-full justify-center"
                      />
                    </div>
                  ))}

                  <div className="flex flex-col justify-center rounded-2xl border border-dashed border-line-strong p-6 text-center">
                    <p className="font-display text-3xl text-gold-light">
                      +
                      {categoryCars.reduce((sum, c) => sum + c.moreInCategory, 0)}
                    </p>
                    <p className="tracked-label mt-2 text-[10px] text-bronze">
                      More Available In {category}
                    </p>
                    <p className="mt-3 text-xs text-cream/45">
                      Additional units and variants available on request —
                      enquire for live availability.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-16 text-center text-[11px] text-cream/30">
        *Indicative monthly rates — confirm current pricing on enquiry.
      </p>
    </div>
  );
}
