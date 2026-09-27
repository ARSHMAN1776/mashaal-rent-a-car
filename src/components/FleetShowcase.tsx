"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { formatPKR, type CarModel } from "@/data/cars";
import { CarMedia } from "./CarMedia";
import { SectionLabel } from "./SectionLabel";
import { WhatsAppInline } from "./WhatsAppButton";
import { ArrowIcon } from "./icons";

export function FleetShowcase({ cars }: { cars: CarModel[] }) {
  return (
    <section className="border-t border-line py-24 lg:py-32" id="fleet-preview">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="02" label="The Fleet" />
            <h2 className="font-display mt-8 max-w-2xl text-4xl leading-tight text-cream sm:text-5xl">
              Seven flagships.
              <span className="italic text-gold-light"> Fifty vehicles strong.</span>
            </h2>
          </div>
          <Link
            href="/fleet"
            className="group hidden items-center gap-2 tracked-label text-xs text-gold-light/90 hover:text-gold-light sm:flex"
          >
            View Full Fleet
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-16 space-y-2">
          {cars.map((car, i) => (
            <motion.div
              key={car.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-8 border-t border-line py-10 lg:grid-cols-2 lg:gap-16 ${
                i === cars.length - 1 ? "border-b" : ""
              }`}
            >
              <div
                className={`flex justify-center ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 -z-10 rounded-full bg-gold/[0.05] blur-3xl" />
                  <CarMedia car={car} variant="hero" />
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="tracked-label text-[10px] text-bronze">
                  {car.make} · {car.category}
                </span>
                <h3 className="font-display mt-3 text-4xl text-cream sm:text-5xl">
                  {car.name}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/60 sm:text-base">
                  {car.tagline}
                </p>

                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-cream/50">
                  {car.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-gold-dim" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div>
                    <p className="tracked-label text-[10px] text-bronze">
                      Monthly From
                    </p>
                    <p className="font-display text-2xl text-gold-light">
                      {formatPKR(car.monthlyFrom)}
                      <span className="ml-1 font-sans text-xs text-cream/40">
                        /mo*
                      </span>
                    </p>
                  </div>
                  <WhatsAppInline
                    message={`Hi Mashaal Rent A Car, I'd like to enquire about the ${car.name} on a monthly basis.`}
                    label={`Enquire — ${car.name}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="max-w-md text-sm text-cream/50">
            Beyond these flagships, {"50+"} vehicles are available across all
            four categories — pickups, hatchbacks, sedans, and executive SUVs.
          </p>
          <Link
            href="/fleet"
            className="inline-flex items-center gap-2.5 rounded-full border border-gold px-7 py-3 text-xs font-semibold tracking-wide text-gold-light transition-colors hover:bg-gold hover:text-ink"
          >
            View Full Fleet
            <ArrowIcon className="h-4 w-4" />
          </Link>
          <p className="text-[11px] text-cream/30">
            *Indicative monthly rates — confirm current pricing on enquiry.
          </p>
        </div>
      </div>
    </section>
  );
}
