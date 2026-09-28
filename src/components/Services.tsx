"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { waLink } from "@/config/site";

const services = [
  {
    icon: "briefcase",
    title: "Corporate Monthly Fleet",
    desc: "Long-term dedicated executive vehicles & pool cars for organizations with consolidated tax invoicing.",
    perks: ["Dedicated account manager", "Custom monthly billing", "Instant replacement guarantee"],
  },
  {
    icon: "wheel",
    title: "Monthly Self Drive",
    desc: "Drive yourself on flexible 30+ day terms with full commercial insurance and zero maintenance hassle.",
    perks: ["Unlimited intra-city mileage", "Routine servicing covered", "Zero maintenance cost"],
  },
  {
    icon: "plane",
    title: "Monthly Airport Protocol",
    desc: "Dedicated VIP airport pickups and drop-offs with flight tracking and executive meet & greet.",
    perks: ["All international airports", "Priority terminal lanes", "Flight delay buffer"],
  },
  {
    icon: "map",
    title: "Intercity Monthly Mobility",
    desc: "Reliable, comfortable transit between Lahore, Islamabad, Karachi & all major hubs across Pakistan.",
    perks: ["Motorway certified drivers", "Pre-inspected highway vehicles", "24/7 route support"],
  },
  {
    icon: "mountain",
    title: "Long-Term Tour & Travel",
    desc: "Extended travel packages across northern Pakistan with experienced mountain drivers and high-clearance 4x4s.",
    perks: ["Gilgit, Hunza & Skardu ready", "Heavy-duty 4x4 options", "Emergency recovery kit"],
  },
  {
    icon: "ring",
    title: "Delegation & Event Fleets",
    desc: "Coordinated luxury vehicle convoys for high-level corporate delegations, diplomatic visits, and VIP weddings.",
    perks: ["Matching flagship convoys", "Security protocol drivers", "Flexible fleet scaling"],
  },
];

function ServiceIcon({ name }: { name: string }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "briefcase":
      return (
        <svg {...common}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      );
    case "wheel":
      return (
        <svg {...common}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/></svg>
      );
    case "plane":
      return (
        <svg {...common}><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 16.5 3.5L13 7 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
      );
    case "map":
      return (
        <svg {...common}><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
      );
    case "mountain":
      return (
        <svg {...common}><polygon points="3 20 9 4 15 12 19 8 21 20 3 20"/></svg>
      );
    case "ring":
      return (
        <svg {...common}><circle cx="12" cy="12" r="8"/><path d="M12 4L9 8h6L12 4z"/></svg>
      );
    default:
      return null;
  }
}

export function Services() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#121316]/[0.08] relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading row */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="gold-badge-light mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
              <span>Full-Service Monthly Mobility</span>
            </div>
            <h2 className="font-display text-balance text-[clamp(2.1rem,4vw,3.3rem)] font-light leading-[1.08] text-[#111318]">
              Complete mobility,
              <br />
              <span className="italic text-[#9a7629]">tailored to executive standards.</span>
            </h2>
            <p className="mt-4 text-[14.5px] text-[#5e6370] leading-relaxed">
              Every monthly package includes bumper-to-bumper maintenance, commercial insurance cover, and immediate replacement vehicle dispatch.
            </p>
          </div>

          <Link
            href="/services"
            className="btn-outline-dark text-[13px] px-6 py-3 border-[#121316]/20 hover:border-[#9a7629] hover:text-[#9a7629] transition-colors"
          >
            Explore All Services
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="luxury-card-light p-7 bg-[#fdfcf9] border-[#121316]/[0.08] hover:border-[#9a7629]/45 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#9a7629]/10 border border-[#9a7629]/25 flex items-center justify-center text-[#9a7629] mb-5">
                  <ServiceIcon name={svc.icon} />
                </div>
                <h3 className="font-display text-[21px] font-medium text-[#111318] mb-2">
                  {svc.title}
                </h3>
                <p className="text-[13px] text-[#5e6370] leading-relaxed mb-6">
                  {svc.desc}
                </p>

                {/* Service perks */}
                <div className="space-y-2 pt-4 border-t border-[#121316]/[0.06] mb-6">
                  {svc.perks.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-[12px] text-[#374151]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629] shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={waLink(`Hi Mashaal Rent A Car, I'd like to enquire about ${svc.title} on a monthly plan.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12.5px] font-bold text-[#8a6519] hover:text-[#6a4c0f] transition-colors group"
              >
                <span>Enquire Monthly Terms</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
