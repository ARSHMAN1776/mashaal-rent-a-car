"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categoryOrder, type CarCategory, type CarModel } from "@/data/cars";
import { CarMedia } from "./CarMedia";
import { WhatsAppInline } from "./WhatsAppButton";
import { waLink } from "@/config/site";

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
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2.5">
        {filters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2.5 text-[12px] font-medium tracking-wide transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#9a7629] border-[#9a7629] text-white shadow-md shadow-[#9a7629]/15"
                  : "bg-white border-slate-200 text-[#4b5262] hover:border-[#9a7629]/40 hover:text-[#111318]"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid of groups */}
      <div className="mt-14 space-y-20">
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
                <div className="flex items-baseline justify-between gap-4 border-b border-slate-200 pb-4">
                  <h2 className="font-display text-2xl text-[#111318] sm:text-3xl font-light">
                    {category}
                  </h2>
                  <span className="text-[11px] font-semibold text-[#9a7629] tracking-widest uppercase">
                    {categoryCars.length} Flagship{categoryCars.length > 1 ? "s" : ""} Displayed
                  </span>
                </div>

                <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryCars.map((car) => (
                    <div
                      key={car.slug}
                      className="luxury-card-light group flex flex-col overflow-hidden bg-white border-slate-200/80 hover:border-[#9a7629]/45 p-5 justify-between shadow-sm"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9a7629]">
                            {car.make}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f4f3ef] border border-slate-200 px-2 py-0.5 text-[9.5px] font-medium text-[#4b5262]">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Monthly
                          </span>
                        </div>

                        <div className="relative my-2 rounded-xl overflow-hidden bg-[#fbf9f5] border border-slate-200/60 p-2">
                          <CarMedia car={car} variant="light" className="rounded-xl" />
                          {/* Ambient vehicle ground reflection shadow */}
                          <div className="pointer-events-none absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[75%] h-[10px] bg-gradient-to-r from-transparent via-[#121316]/18 to-transparent blur-[5px] rounded-full" />
                        </div>

                        <h3 className="font-display text-[22px] font-medium text-[#111318] group-hover:text-[#9a7629] transition-colors mt-3">
                          {car.name}
                        </h3>
                        <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#5e6370]">
                          {car.tagline}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 text-[11.5px] text-[#4b5262] py-2.5 border-y border-slate-100">
                          <span>{car.seats} Seats</span>
                          <span className="text-slate-300">·</span>
                          <span>{car.transmission}</span>
                          <span className="text-slate-300">·</span>
                          <span>{car.fuel}</span>
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-100">
                        <WhatsAppInline
                          message={`Hi Mashaal Rent A Car, I would like to reserve the ${car.name} on a monthly lease.`}
                          label="Reserve"
                          className="w-full justify-center text-[12.5px] py-2.5 font-semibold"
                        />
                      </div>
                    </div>
                  ))}

                  {/* More in category card */}
                  <div className="flex flex-col justify-center rounded-2xl border border-dashed border-[#9a7629]/40 bg-white p-8 text-center shadow-sm">
                    <p className="font-display text-4xl text-[#9a7629] font-light">
                      +{categoryCars.reduce((sum, c) => sum + c.moreInCategory, 0)}
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b651b] mt-2">
                      Additional {category} Units
                    </p>
                    <p className="mt-3 text-[12.5px] text-[#5e6370] leading-relaxed max-w-xs mx-auto">
                      Additional variants and custom corporate specifications available on direct inquiry.
                    </p>
                    <a
                      href={waLink("Hi Mashaal Rent A Car, I would like to know more about additional fleet options and custom corporate specifications.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-dark border-[#9a7629]/40 text-[#9a7629] hover:bg-[#9a7629] hover:text-white text-[12px] px-4 py-2.5 mt-6 mx-auto inline-flex items-center gap-2"
                    >
                      Inquire Custom Fleet
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-16 text-center text-[11.5px] text-[#7a8190]">
        *All executive monthly leases include routine maintenance, commercial insurance & guaranteed replacement vehicle.
      </p>
    </div>
  );
}
