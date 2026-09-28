import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { siteConfig, waLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Locations — Mashaal Rent A Car",
  description:
    "Mashaal Rent A Car operates across all major cities of Pakistan including Lahore, Islamabad, Karachi, Rawalpindi, Faisalabad, and more on monthly lease terms.",
};

const locations = [
  {
    city: "Lahore",
    province: "Punjab",
    desc: "Our primary provincial headquarters and main logistics depot. Complete fleet available including Toyota Prado TX, Fortuner Legender, and executive sedans.",
    phone: siteConfig.phoneNumber,
    isMain: true,
  },
  {
    city: "Islamabad & Rawalpindi",
    province: "Federal Capital & Punjab",
    desc: "Serving the twin cities with executive mobility for diplomatic missions, multinational corporations, and private executives.",
    phone: siteConfig.phoneNumber,
    isMain: true,
  },
  {
    city: "Karachi",
    province: "Sindh",
    desc: "Dedicated monthly fleets for corporate entities, port logistics executives, and international airport protocol transfers in Pakistan's economic center.",
    phone: siteConfig.phoneNumber,
    isMain: true,
  },
  {
    city: "Faisalabad",
    province: "Punjab",
    desc: "Available for textile industrial groups, corporate executives, and long-term executive travel.",
    phone: siteConfig.phoneNumber,
    isMain: false,
  },
  {
    city: "Multan",
    province: "Punjab",
    desc: "Supporting South Punjab with heavy-duty 4x4s and executive sedans for agribusiness and industrial projects.",
    phone: siteConfig.phoneNumber,
    isMain: false,
  },
  {
    city: "Gujranwala",
    province: "Punjab",
    desc: "Dedicated monthly leases for industrial manufacturers and regional commercial travel.",
    phone: siteConfig.phoneNumber,
    isMain: false,
  },
  {
    city: "Peshawar",
    province: "Khyber Pakhtunkhwa",
    desc: "Direct fleet support for Khyber Pakhtunkhwa and transit routes with heavy 4x4 options.",
    phone: siteConfig.phoneNumber,
    isMain: false,
  },
];

export default function LocationsPage() {
  const mainLocations = locations.filter((l) => l.isMain);
  const otherLocations = locations.filter((l) => !l.isMain);

  return (
    <div className="bg-[#fbf9f5] min-h-screen text-[#111318]">
      {/* Hero Banner via unified PageHeader */}
      <PageHeader
        eyebrow="Nationwide Fleet Network"
        title="Our Regional Hubs."
        italicTitle="Across Pakistan."
        description="Direct fleet depots and executive dispatch across all major economic centers in Pakistan."
      />

      {/* Coverage stat band */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div>
              <div className="gold-badge-light mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
                <span>Geographic Reach</span>
              </div>
              <h2 className="font-display text-[1.9rem] font-light text-[#111318]">We operate nationwide</h2>
              <p className="text-[13.5px] text-[#5e6370] mt-1">Direct fleet dispatch across Punjab, Federal Capital, Sindh & KPK</p>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {[
                { n: "8+", l: "Primary Hubs" },
                { n: "50+", l: "Fleet Units" },
                { n: "24/7", l: "Road Assistance" },
                { n: "100%", l: "Monthly Model" }
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-[2.2rem] text-[#9a7629] font-medium">{s.n}</div>
                  <div className="text-[11px] text-[#5e6370] uppercase tracking-widest font-semibold mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main offices */}
      <section className="py-20 lg:py-24 bg-[#fbf9f5] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="gold-badge-light mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
            <span>Primary Headquarters</span>
          </div>
          <h2 className="font-display text-3xl font-light text-[#111318] mb-10">
            Main Regional Depots
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainLocations.map((loc) => (
              <div key={loc.city} className="luxury-card-light p-7 bg-white border-slate-200/80 hover:border-[#9a7629]/45 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display text-[24px] font-medium text-[#111318]">{loc.city}</h3>
                      <p className="text-[11.5px] font-semibold text-[#9a7629] tracking-widest uppercase">{loc.province}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b651b] border border-[#9a7629]/30 rounded-full px-2.5 py-0.5 bg-[#9a7629]/10 shrink-0">
                      Primary Hub
                    </span>
                  </div>
                  <p className="text-[13px] text-[#5e6370] leading-relaxed mb-6">{loc.desc}</p>
                  
                  <div className="space-y-2.5 text-[12.5px] text-[#4b5262] mb-6 py-4 border-y border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9a7629" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      Direct Executive Dispatch & Protocol
                    </div>
                    <div className="flex items-center gap-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9a7629" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.57 4.38a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91A16 16 0 0 0 14 16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.34z"/></svg>
                      {loc.phone}
                    </div>
                  </div>
                </div>

                <a
                  href={waLink(`Hi Mashaal Rent A Car, I want to enquire about monthly vehicle rental in ${loc.city}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-[12px] py-2.5 justify-center w-full"
                >
                  Reserve in {loc.city}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional coverage */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="gold-badge-light mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
            <span>Industrial & Regional Depots</span>
          </div>
          <h2 className="font-display text-3xl font-light text-[#111318] mb-10">
            Additional City Hubs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherLocations.map((loc) => (
              <div key={loc.city} className="luxury-card-light p-6 bg-[#fbf9f5] border-slate-200/80 hover:border-[#9a7629]/40 flex flex-col justify-between" >
                <div>
                  <h3 className="font-display text-[20px] font-medium text-[#111318] mb-0.5">{loc.city}</h3>
                  <p className="text-[11px] font-semibold text-[#9a7629] tracking-widest uppercase mb-3">{loc.province}</p>
                  <p className="text-[12.5px] text-[#5e6370] leading-relaxed mb-6">{loc.desc}</p>
                </div>

                <a
                  href={waLink(`Hi Mashaal Rent A Car, I want to enquire about monthly car rentals in ${loc.city}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#9a7629] hover:text-[#111318] transition-colors"
                >
                  <span>Enquire {loc.city}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
