"use client";

import { motion } from "framer-motion";

const steps = [
  {
    index: "01",
    phase: "Fleet Allocation",
    tag: "Consultation & Pick",
    title: "Select Your Vehicle",
    body: "Choose your model from our 50+ luxury fleet — from fuel-efficient executive sedans to flagship 4x4 Prado and Land Cruisers.",
    icon: "car" as const,
  },
  {
    index: "02",
    phase: "Verification Protocol",
    tag: "Frictionless Clearance",
    title: "Simple Verification",
    body: "Fast and dignified documentation. National CNIC and address verification with zero bureaucratic hurdles.",
    icon: "shield" as const,
  },
  {
    index: "03",
    phase: "Commercial Contract",
    tag: "Transparent Terms",
    title: "Transparent Agreement",
    body: "A fixed 30+ day monthly agreement with transparent pricing, full commercial insurance, and routine servicing included.",
    icon: "contract" as const,
  },
  {
    index: "04",
    phase: "Handover & Mobility",
    tag: "Doorstep Delivery",
    title: "Doorstep Handover",
    body: "Your pristine, detailed, and full-tank vehicle is delivered directly to your residence, office, or airport arrival terminal.",
    icon: "key" as const,
  },
];

function StepIcon({ name }: { name: "car" | "shield" | "contract" | "key" }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 15,
    height: 15,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "car":
      return (
        <svg {...common}>
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2 11 2 11.3 2 11.6V16c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "contract":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case "key":
      return (
        <svg {...common}>
          <circle cx="7.5" cy="15.5" r="5.5" />
          <path d="m21 2-9.6 9.6" />
          <path d="m15.5 7.5 3 3L22 7l-3-3" />
        </svg>
      );
  }
}

export function ProcessSteps() {
  return (
    <section className="border-t border-slate-200 bg-[#faf8f5] py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle warm ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9a7629]/[0.035] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="gold-badge-light mb-3 inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
            <span>Streamlined Protocol</span>
          </div>

          <h2 className="font-display text-balance text-[clamp(2rem,3.6vw,3.1rem)] font-light leading-[1.1] text-[#111318]">
            From consultation to keys-in-hand,
            <br />
            <span className="italic text-[#9a7629]">in four seamless steps.</span>
          </h2>
          <p className="mt-3 text-[14px] text-[#5e6370]">
            A predictable, zero-friction monthly leasing process engineered for executive peace of mind.
          </p>
        </div>

        {/* Stripe Timeline Container */}
        <div className="relative">
          {/* Animated Central Vertical Stripe (Desktop: Center, Mobile: Left) */}
          <div className="absolute left-5 md:left-1/2 top-6 bottom-6 w-[2px] -translate-x-1/2 bg-slate-200 overflow-hidden">
            {/* Traveling golden light beam */}
            <motion.div
              animate={{ y: ["-100%", "260%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-32 w-full bg-gradient-to-b from-transparent via-[#9a7629] to-transparent"
            />
          </div>

          {/* Steps Timeline rows */}
          <div className="space-y-10 md:space-y-14">
            {steps.map((s, i) => {
              const isEven = i % 2 === 0;

              return (
                <div
                  key={s.index}
                  className="relative flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-10"
                >
                  {/* Left Column (Desktop Left) */}
                  <div className="w-full">
                    {isEven ? (
                      /* Cards 01 and 03: On the LEFT side of the line */
                      <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.55 }}
                        className="luxury-card-light pl-14 md:pl-6 p-5 md:p-6 bg-white border border-slate-200/90 hover:border-[#9a7629]/45 max-w-md ml-auto shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a7629] bg-[#9a7629]/10 rounded-full px-2.5 py-0.5">
                            {s.tag}
                          </span>
                          <span className="font-display text-xl font-medium text-[#9a7629]">
                            {s.index}
                          </span>
                        </div>
                        <h3 className="font-display text-[19px] font-medium text-[#111318] mt-1">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-[12.5px] leading-relaxed text-[#5e6370]">
                          {s.body}
                        </p>
                      </motion.div>
                    ) : (
                      /* Phase Indicator for 02 and 04: On the LEFT (Desktop only) */
                      <div className="hidden md:flex flex-col items-end text-right pr-6">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a7629]">
                          Phase {s.index}
                        </span>
                        <span className="font-display text-[17px] text-[#111318]/70 italic mt-0.5">
                          {s.phase}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Center Node (Stripe anchor directly on central line) */}
                  <div className="absolute left-5 md:relative md:left-auto -translate-x-1/2 md:translate-x-0 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#9a7629] bg-white shadow-md shadow-[#9a7629]/20 text-[#9a7629] transition-transform hover:scale-110">
                    <StepIcon name={s.icon} />
                  </div>

                  {/* Right Column (Desktop Right) */}
                  <div className="w-full">
                    {!isEven ? (
                      /* Cards 02 and 04: On the RIGHT side of the line */
                      <motion.div
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.55 }}
                        className="luxury-card-light pl-14 md:pl-6 p-5 md:p-6 bg-white border border-slate-200/90 hover:border-[#9a7629]/45 max-w-md mr-auto shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a7629] bg-[#9a7629]/10 rounded-full px-2.5 py-0.5">
                            {s.tag}
                          </span>
                          <span className="font-display text-xl font-medium text-[#9a7629]">
                            {s.index}
                          </span>
                        </div>
                        <h3 className="font-display text-[19px] font-medium text-[#111318] mt-1">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-[12.5px] leading-relaxed text-[#5e6370]">
                          {s.body}
                        </p>
                      </motion.div>
                    ) : (
                      /* Phase Indicator for 01 and 03: On the RIGHT (Desktop only) */
                      <div className="hidden md:flex flex-col items-start text-left pl-6">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a7629]">
                          Phase {s.index}
                        </span>
                        <span className="font-display text-[17px] text-[#111318]/70 italic mt-0.5">
                          {s.phase}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
