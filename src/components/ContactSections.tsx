"use client";

import { motion } from "framer-motion";
import { siteConfig, telLink, waLink } from "@/config/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

const checklist = [
  { item: "Valid Pakistani CNIC (Original & clean copy)", detail: "Required for agreement and identity verification" },
  { item: "Proof of Address (Utility bill or office address)", detail: "Establishes registered delivery and invoicing location" },
  { item: "Valid Driving License (For self-drive options)", detail: "Must be valid for the duration of the 30-day lease" },
  { item: "Corporate Letterhead (For enterprise billing)", detail: "Authorizing fleet dispatch with company NTN & GST details" },
];

export function ContactSections() {
  return (
    <section className="bg-[#fbf9f5] py-20 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Column: Direct channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-badge-light mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
              <span>Instant Response Desk</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-light text-[#111318] mb-8">
              Connect with our <span className="italic text-[#9a7629]">fleet managers.</span>
            </h2>

            {/* WhatsApp VIP Card */}
            <a
              href={waLink("Hi Mashaal Rent A Car Concierge, I would like to reserve a vehicle on monthly terms.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-[#9a7629]/35 bg-white hover:border-[#9a7629] p-7 transition-all duration-300 mb-5 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">
                    Fastest Channel · 24/7 Live
                  </span>
                </div>
                <h3 className="font-display text-2xl font-medium text-[#111318] group-hover:text-[#9a7629] transition-colors">
                  WhatsApp VIP Desk
                </h3>
                <p className="text-[13px] text-[#5e6370] mt-1">Instant quotes, vehicle photos & availability</p>
              </div>
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#9a7629] text-white shadow-md shadow-[#9a7629]/20 transition-transform group-hover:scale-105 shrink-0 ml-4">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
            </a>

            {/* Direct Phone Card */}
            <a
              href={telLink()}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white hover:border-[#9a7629]/40 p-7 transition-all duration-300 mb-8 shadow-sm"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a7629] block mb-1">
                  Voice Dispatch Desk
                </span>
                <h3 className="font-display text-2xl font-medium text-[#111318] group-hover:text-[#9a7629] transition-colors">
                  {siteConfig.phoneNumber}
                </h3>
                <p className="text-[13px] text-[#5e6370] mt-1">24/7 roadside assistance & fleet dispatch</p>
              </div>
              <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#9a7629]/30 bg-[#9a7629]/10 text-[#9a7629] transition-transform group-hover:scale-105 shrink-0 ml-4">
                <PhoneIcon className="h-6 w-6" />
              </span>
            </a>

            {/* Metadata detail cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="luxury-card-light p-5 bg-white border-slate-200/80 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a7629] block mb-1">
                  Headquarters
                </span>
                <p className="text-[13px] font-medium text-[#111318]">{siteConfig.city}</p>
                <p className="text-[11.5px] text-[#5e6370] mt-0.5">Nationwide delivery network</p>
              </div>

              <div className="luxury-card-light p-5 bg-white border-slate-200/80 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a7629] block mb-1">
                  Corporate Email
                </span>
                <p className="text-[13px] font-medium text-[#111318]">{siteConfig.email}</p>
                <p className="text-[11.5px] text-[#5e6370] mt-0.5">Enterprise fleet proposals</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Pre-requisite checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="gold-badge-light mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
              <span>Rental Preparation</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-light text-[#111318] mb-4">
              Have this ready, <span className="italic text-[#9a7629]">move faster.</span>
            </h2>
            <p className="text-[14px] text-[#5e6370] leading-relaxed mb-8">
              A quick checklist so your 30-day rental agreement and vehicle handover can be executed without delay.
            </p>

            <div className="space-y-4">
              {checklist.map((c, i) => (
                <div
                  key={c.item}
                  className="luxury-card-light p-5 bg-white border-slate-200/80 hover:border-[#9a7629]/30 flex items-start gap-4 shadow-sm"
                >
                  <span className="font-display text-[#9a7629] font-semibold text-lg shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-[14.5px] font-semibold text-[#111318]">{c.item}</h4>
                    <p className="text-[12px] text-[#5e6370] mt-0.5 leading-relaxed">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Guarantee badge */}
            <div className="mt-8 rounded-xl border border-[#9a7629]/30 bg-white p-5 flex items-center gap-4 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9a7629" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              <div>
                <h5 className="text-[13px] font-bold text-[#111318]">Institutional Confidentiality & Speed</h5>
                <p className="text-[11.5px] text-[#5e6370] leading-relaxed mt-0.5">
                  All corporate documentation is handled strictly under non-disclosure agreements with compliant tax invoicing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
