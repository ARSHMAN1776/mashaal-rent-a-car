import type { Metadata } from "next";
import { AboutSections } from "@/components/AboutSections";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About Us — Mashaal Rent A Car",
  description:
    "Mashaal Rent A Car is the executive mobility vertical of Mashaal Groups, built on institutional governance, capital discipline, and long-term thinking.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#fbf9f5] min-h-screen">
      <AboutSections />
      <CTABand />
    </div>
  );
}
