"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { type CarCategory, type CarModel, categoryOrder } from "@/data/cars";
import { waLink } from "@/config/site";
import { CarMedia } from "./CarMedia";

type Filter = "All" | CarCategory;
const filterOptions: Filter[] = ["All", ...categoryOrder];

type SortKey = "recommended" | "name-asc" | "seats-desc";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "name-asc", label: "Name: A–Z" },
  { value: "seats-desc", label: "Seats: High to Low" },
];

const badges: Record<string, { label: string; tone: "dark" | "gold" }> = {
  fortuner: { label: "Popular", tone: "dark" },
  prado: { label: "Flagship", tone: "gold" },
  revo: { label: "Executive 4x4", tone: "dark" },
  v8: { label: "VVIP Fleet", tone: "gold" },
  civic: { label: "Executive", tone: "dark" },
  cultus: { label: "City Agile", tone: "dark" },
  alto: { label: "Smart Lease", tone: "dark" },
};

function CategoryIcon({ category }: { category: Filter }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (category) {
    case "SUV & 4x4":
      return (
        <svg {...common}><path d="M3 16V11.5a2 2 0 0 1 1.2-1.83L7 8.5h9l3 2.2a2 2 0 0 1 1 1.74V16" /><path d="M3 16h18" /><path d="M6 16v2M18 16v2" /><circle cx="7.5" cy="18" r="1.6" /><circle cx="16.5" cy="18" r="1.6" /><path d="M9 8.5V6h4v2.5" /></svg>
      );
    case "Executive & Luxury":
      return (
        <svg {...common}><path d="M3 15.5 4.6 11a2 2 0 0 1 1.9-1.4h11a2 2 0 0 1 1.9 1.4l1.6 4.5" /><path d="M3 15.5h18v1.8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" /><circle cx="7.5" cy="18.3" r="1.4" /><circle cx="16.5" cy="18.3" r="1.4" /><path d="M8 9.6V7.5h8v2.1" /></svg>
      );
    case "Sedan":
      return (
        <svg {...common}><path d="M2.5 15 4 10.8a2 2 0 0 1 1.9-1.3h12.2a2 2 0 0 1 1.9 1.3L21.5 15" /><path d="M2.5 15h19v1.5a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1z" /><circle cx="7" cy="17.3" r="1.3" /><circle cx="17" cy="17.3" r="1.3" /><path d="M7 9.5 8.5 6h7l1.5 3.5" /></svg>
      );
    case "Economy":
      return (
        <svg {...common}><path d="M3 15 4.3 11.2A2 2 0 0 1 6.2 10h11.6a2 2 0 0 1 1.9 1.2L21 15" /><path d="M3 15h18v1.3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" /><circle cx="7" cy="17.2" r="1.2" /><circle cx="17" cy="17.2" r="1.2" /></svg>
      );
    default:
      return (
        <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
      );
  }
}

function SpecIcon({ name }: { name: "seats" | "gear" | "fuel" | "drive" }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 13,
    height: 13,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#9a7629",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "seats":
      return <svg {...common}><path d="M6 19v-6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" /><path d="M6 19h12M6 19v2M18 19v2M8 11V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5" /></svg>;
    case "gear":
      return <svg {...common}><circle cx="12" cy="12" r="3" /><path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" /></svg>;
    case "fuel":
      return <svg {...common}><path d="M5 20V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14" /><path d="M4 20h10M13 9h2l3 3v5a1.5 1.5 0 0 1-3 0v-1" /></svg>;
    case "drive":
      return <svg {...common}><path d="M12 2v6M12 16v6M4.5 7 9 9.5M15 14.5l4.5 2.5M4.5 17 9 14.5M15 9.5l4.5-2.5" /><circle cx="12" cy="12" r="2.2" /></svg>;
  }
}

export function FleetShowcase({ cars }: { cars: CarModel[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [sort, setSort] = useState<SortKey>("recommended");

  const filteredCars = useMemo(() => {
    const list = activeFilter === "All" ? cars : cars.filter((c) => c.category === activeFilter);
    const sorted = [...list];
    if (sort === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "seats-desc") sorted.sort((a, b) => b.seats - a.seats);
    return sorted;
  }, [cars, activeFilter, sort]);

  return (
    <section className="py-20 lg:py-28 bg-[#fbf9f5] border-t border-[#121316]/[0.08] relative" id="fleet-preview">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Heading Row */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="gold-badge-light mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
              <span>Dedicated Monthly Lease · 50+ Vehicles</span>
            </div>
            <h2 className="font-display text-balance text-[clamp(2.1rem,4vw,3.4rem)] font-light leading-[1.08] text-[#111318]">
              Flagship Fleet,
              <br />
              <span className="italic text-[#9a7629]">engineered for monthly elegance.</span>
            </h2>
            <p className="mt-3 text-[14.5px] text-[#5e6370] max-w-lg leading-relaxed">
              Available exclusively on 30+ day terms. Every vehicle includes comprehensive insurance, routine scheduled maintenance, and 24/7 replacement vehicle guarantee.
            </p>
          </div>

          <Link
            href="/fleet"
            className="btn-outline-dark text-[13px] px-6 py-3 border-[#121316]/20 hover:border-[#9a7629] hover:text-[#9a7629] transition-colors"
          >
            Explore All 50+ Fleet
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Toolbar — category filters + sort */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-[#121316]/[0.08]">
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => {
              const count = filter === "All"
                ? cars.length
                : cars.filter((c) => c.category === filter).length;
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold tracking-wide transition-all cursor-pointer border ${
                    isActive
                      ? "bg-[#111318] border-[#111318] text-white shadow-sm"
                      : "bg-white border-[#121316]/12 text-[#4b5262] hover:border-[#9a7629]/50 hover:text-[#111318]"
                  }`}
                >
                  <CategoryIcon category={filter} />
                  <span>{filter}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-[#f2efe9] text-[#787f91]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <label className="flex items-center gap-2 text-[12.5px] text-[#5e6370]">
            <span className="hidden sm:inline">Sort by:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-full border border-[#121316]/15 bg-white px-4 py-1.5 text-[12px] font-semibold text-[#111318] cursor-pointer hover:border-[#9a7629]/50 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9a7629]"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-white text-[#111318]">
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Cars Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + sort}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filteredCars.map((car, i) => {
              const badge = badges[car.slug] ?? { label: car.category, tone: "dark" as const };
              const drivetrain = car.category === "SUV & 4x4" ? "4x4" : "Automatic";

              return (
                <motion.div
                  key={car.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="luxury-card-light group flex flex-col overflow-hidden bg-white border border-[#121316]/[0.08] hover:border-[#9a7629]/50"
                >
                  {/* Media Frame */}
                  <div className="relative bg-[#f5f3ec] p-3 pb-0">
                    <CarMedia car={car} variant="light" />

                    {/* Ambient vehicle ground reflection shadow */}
                    <div className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 w-[75%] h-[12px] bg-gradient-to-r from-transparent via-[#121316]/18 to-transparent blur-[6px] rounded-full" />
                    
                    {/* Badge */}
                    <span
                      className={`absolute top-4 left-4 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        badge.tone === "gold"
                          ? "bg-[#9a7629] text-white shadow-sm"
                          : "bg-[#111318] text-white shadow-sm"
                      }`}
                    >
                      {badge.label}
                    </span>

                    {/* Live Status */}
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#121316]/10 px-2.5 py-1 text-[10px] font-semibold text-[#111318] shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      30-Day Lease
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10.5px] font-bold text-[#9a7629] tracking-widest uppercase mb-1">
                        {car.make}
                      </div>
                      <h3 className="font-display text-[22px] font-medium text-[#111318] mb-2 group-hover:text-[#9a7629] transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-[12.5px] text-[#5e6370] leading-relaxed mb-4">
                        {car.tagline}
                      </p>

                      {/* Specs Row */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-[#4b5262] py-3 border-y border-[#121316]/[0.06] mb-5">
                        <span className="inline-flex items-center gap-1.5">
                          <SpecIcon name="seats" />
                          {car.seats} Seats
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <SpecIcon name="gear" />
                          {car.transmission}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <SpecIcon name="fuel" />
                          {car.fuel}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <SpecIcon name="drive" />
                          {drivetrain}
                        </span>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="pt-3 border-t border-[#121316]/[0.06]">
                      <a
                        href={waLink(`Hi Mashaal Rent A Car, I want to reserve the ${car.make} ${car.name} on monthly terms.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#9a7629]/40 bg-[#9a7629]/10 hover:bg-[#9a7629] text-[#8a6519] hover:text-white py-2.5 px-4 text-[12.5px] font-semibold transition-all duration-200 group/link shadow-sm hover:shadow-md hover:shadow-[#9a7629]/15"
                        aria-label={`Reserve ${car.name} on monthly lease`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.712 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span>Reserve on WhatsApp</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/link:translate-x-1" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
