import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { FleetGrid } from "@/components/FleetGrid";
import { CTABand } from "@/components/CTABand";
import { getCarsWithResolvedImages } from "@/lib/carImages";

export const metadata: Metadata = {
  title: "The Fleet — Mashaal Rent A Car",
  description:
    "Browse Mashaal Rent A Car's full fleet of 50+ vehicles across SUV & 4x4, Executive & Luxury, Sedan, and Economy categories — all available on flexible monthly plans.",
};

export default function FleetPage() {
  const cars = getCarsWithResolvedImages();
  return (
    <div className="bg-[#fbf9f5] min-h-screen">
      <PageHeader
        eyebrow="The Executive Fleet"
        title="Fifty vehicles."
        italicTitle="Four categories. One standard."
        description="Every category is anchored by a flagship model — fully inspected, detailed, and available on dedicated 30+ day monthly agreements."
      />
      <section className="bg-[#fbf9f5] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FleetGrid cars={cars} />
        </div>
      </section>
      <CTABand />
    </div>
  );
}
