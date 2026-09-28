"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  { title: "Institutional Fleet Standard", desc: "Every vehicle undergoes a 50-point diagnostic inspection and full detailing before delivery." },
  { title: "24/7 Replacement Car Policy", desc: "If scheduled maintenance is due, an identical or upgraded class vehicle is immediately dispatched." },
  { title: "Transparent Monthly Billing", desc: "One fixed monthly rate. Zero surge pricing, no hidden kilometer traps, and full NTN tax compliance." },
  { title: "Verified Executive Chauffeurs", desc: "Route-certified, security-cleared, and NDA-compliant professional drivers available upon request." },
  { title: "Exclusive 30+ Day Focus", desc: "By operating exclusively on monthly terms, our fleet avoids high-turnover daily wear and stays pristine." },
  { title: "Nationwide Hub Infrastructure", desc: "Direct logistical depots in Lahore, Islamabad, Karachi, Rawalpindi, Multan, and Faisalabad." },
];

const locations = ["Lahore", "Islamabad", "Karachi", "Rawalpindi", "Faisalabad", "Multan", "Gujranwala", "Peshawar"];

export function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-start">
          {/* Left copy */}
          <div>
            <div className="gold-badge-light mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
              <span>Holding Group Standard</span>
            </div>
            <h2 className="font-display text-balance text-[clamp(2.1rem,4vw,3.3rem)] font-light leading-[1.08] text-[#111318] mb-6">
              Your trust,
              <br />
              <span className="italic text-[#9a7629]">anchors our standard.</span>
            </h2>
            <p className="text-[14.5px] text-[#5e6370] leading-relaxed max-w-md mb-8">
              Mashaal Rent A Car extends the operational rigor of Mashaal Groups into national mobility. We engineer predictable, dignified, and reliable transportation for businesses and private clients.
            </p>

            <Link
              href="/about"
              className="btn-primary text-[12.5px] px-6 py-3 inline-flex items-center gap-2"
            >
              Learn About Mashaal Groups
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            <div className="h-px bg-slate-200 my-10 max-w-xs" />

            {/* Locations */}
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#9a7629] mb-3">
              Active Regional Fleet Hubs
            </h4>
            <div className="flex flex-wrap gap-2 text-[12px] text-[#4b5262] max-w-sm">
              {locations.map((loc, i) => (
                <span key={loc} className="flex items-center gap-2">
                  {i > 0 && <span className="text-[#9a7629]">·</span>}
                  <span>{loc}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right: features list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="luxury-card-light p-6 bg-[#fbf9f5] border-slate-200/80 hover:border-[#9a7629]/40 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display italic text-lg text-[#9a7629] font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-[17px] font-medium text-[#111318] mt-2 mb-1.5">
                    {f.title}
                  </h4>
                  <p className="text-[12.5px] text-[#5e6370] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
