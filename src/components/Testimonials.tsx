"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    quote:
      "We transitioned our entire senior leadership fleet to a dedicated monthly agreement with Mashaal. Fixed predictability, zero hidden expenses, and the Toyota Prado units have been in showroom condition.",
    name: "Tariq Mahmood",
    role: "Director of Operations, Enterprise Logistics Group",
    city: "Lahore",
  },
  {
    quote:
      "Leased the Honda Civic RS for three months during our international audit project. The delivery to F-7 was seamless, and their 24/7 dedicated fleet support was immediately responsive.",
    name: "Dr. Ayesha Siddiqui",
    role: "Senior Partner, Global Consulting Firm",
    city: "Islamabad",
  },
  {
    quote:
      "The Hilux Revo Rocco fleet handled every industrial site visit across Punjab without a hitch. Being supported by Mashaal Groups provides total institutional confidence in documentation and tax compliance.",
    name: "Hamza Rasheed",
    role: "Project Infrastructure Head, Construction Sector",
    city: "Karachi",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#fbf9f5] border-t border-slate-200 py-20 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="gold-badge-light mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
          <span>Client Testimonials</span>
        </div>

        <h2 className="font-display text-balance mt-3 max-w-2xl text-[clamp(2.1rem,4vw,3.3rem)] font-light leading-[1.08] text-[#111318]">
          Endorsed by Pakistan&rsquo;s leading
          <span className="italic text-[#9a7629]"> corporate & private clients.</span>
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="luxury-card-light flex flex-col justify-between p-8 bg-white border-slate-200/80 hover:border-[#9a7629]/40 relative shadow-sm"
            >
              {/* Golden quote mark watermark */}
              <div className="font-display text-6xl text-[#9a7629]/25 leading-none mb-3 select-none">
                &ldquo;
              </div>

              <blockquote className="font-display text-[18px] italic leading-relaxed text-[#1f242e] flex-1">
                {q.quote}
              </blockquote>

              <figcaption className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[14px] font-semibold text-[#111318]">
                    {q.name}
                  </p>
                  <p className="text-[11.5px] text-[#5e6370] mt-0.5">{q.role}</p>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8b651b] border border-[#9a7629]/30 rounded-full px-2.5 py-0.5 bg-[#9a7629]/10 shrink-0">
                  {q.city}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
