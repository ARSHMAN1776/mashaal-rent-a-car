import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { waLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Services — Mashaal Rent A Car",
  description:
    "Explore monthly rental services offered by Mashaal Rent A Car — corporate fleet, airport transfers, weddings, city-to-city travel, and monthly self-drive across Pakistan.",
};

const services = [
  {
    icon: "briefcase",
    title: "Corporate Monthly Fleet",
    desc: "Long-term dedicated transportation solutions for businesses, multinational corporations, and institutions. From single executive sedans to 20-car corporate pools.",
    features: ["Dedicated corporate fleet manager", "Consolidated monthly tax invoicing (NTN)", "Automatic vehicle replacement guarantee", "Comprehensive commercial insurance"],
  },
  {
    icon: "wheel",
    title: "Monthly Executive Self Drive",
    desc: "Prefer to drive yourself without the burdens of ownership, depreciation, and insurance hassles. We offer brand-new, meticulously inspected vehicles.",
    features: ["Full insurance coverage included", "Routine maintenance & oil changes covered", "Flexible 30-day renewal terms", "Zero down payment or hidden security hold"],
  },
  {
    icon: "plane",
    title: "VIP Airport Protocol & Transfers",
    desc: "Punctual, dignified, and executive terminal transfer services to and from all major airports across Pakistan with real-time flight tracking.",
    features: ["Real-time flight schedule monitoring", "VIP terminal meet & greet protocol", "All international and domestic airports", "24/7 dedicated dispatch availability"],
  },
  {
    icon: "map",
    title: "Intercity Highway Travel",
    desc: "Safe, comfortable, and reliable transit between major metropolitan corridors such as Lahore–Islamabad Motorway and Karachi–Hyderabad.",
    features: ["Motorway certified defensive drivers", "Pre-departure mechanical inspection", "Toll management and transparent fuel logic", "Superior suspension luxury sedans & SUVs"],
  },
  {
    icon: "mountain",
    title: "Long-Term Tour & Travel",
    desc: "Explore northern Pakistan with experienced mountain drivers. From Murree and Naran to Hunza and Skardu with reinforced 4x4 vehicles.",
    features: ["Northern areas specialist chauffeurs", "Heavy-duty 4x4 Prado & Revo models", "High-clearance suspension & all-terrain tires", "Custom extended duration itineraries"],
  },
  {
    icon: "ring",
    title: "Delegations & Special Events",
    desc: "Make high-profile summits, corporate delegations, and VIP family ceremonies effortless with our matching flagship vehicle convoys.",
    features: ["Uniform high-class vehicle convoys", "Chauffeurs in formal executive attire", "Close coordination with event security", "On-site backup vehicle on standby"],
  },
];

function ServiceIcon({ name }: { name: string }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 22,
    height: 22,
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

export default function ServicesPage() {
  return (
    <div className="bg-[#fbf9f5] min-h-screen text-[#111318]">
      {/* Hero Banner via unified PageHeader */}
      <PageHeader
        eyebrow="Executive Mobility Solutions"
        title="Our Services."
        italicTitle="Corporate & Private Mobility."
        description="Complete corporate and private monthly leasing across all major cities of Pakistan."
      />

      {/* Monthly Notice Banner */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4 max-w-3xl">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#9a7629]/40 bg-[#9a7629]/10 text-[#9a7629] font-display text-2xl font-bold">
                !
              </span>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#9a7629]">
                  Core Rental Policy
                </span>
                <h3 className="font-display text-[22px] font-medium text-[#111318] mt-0.5 mb-1">
                  Exclusively monthly rentals (minimum 30 days)
                </h3>
                <p className="text-[13.5px] text-[#5e6370] leading-relaxed">
                  We specialize exclusively in monthly and long-term vehicle agreements. All service lines include full commercial insurance, routine mechanical servicing, and guaranteed 24-hour vehicle replacement.
                </p>
              </div>
            </div>

            <a
              href={waLink("Hi Mashaal Rent A Car, I want to discuss corporate monthly rental services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[12.5px] px-6 py-3 whitespace-nowrap"
            >
              Enquire Monthly Terms
            </a>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-[#fbf9f5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="luxury-card-light p-8 bg-white border-slate-200/80 hover:border-[#9a7629]/45 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#9a7629]/10 border border-[#9a7629]/25 flex items-center justify-center text-[#9a7629] mb-6">
                    <ServiceIcon name={svc.icon} />
                  </div>

                  <h2 className="font-display text-[22px] font-medium text-[#111318] mb-2">{svc.title}</h2>
                  <p className="text-[13px] text-[#5e6370] leading-relaxed mb-6">{svc.desc}</p>

                  <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-100">
                    {svc.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-[12.5px] text-[#4b5262]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9a7629" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={waLink(`Hi Mashaal Rent A Car, I am interested in ${svc.title} on a monthly basis.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark border-slate-300 text-[#111318] hover:border-[#9a7629] hover:text-[#9a7629] text-[12px] py-2.5 justify-center w-full"
                >
                  Enquire This Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
