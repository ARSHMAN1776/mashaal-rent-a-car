import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { AboutSections } from "@/components/AboutSections";

export const metadata: Metadata = {
  title: "About — Mashaal Rent A Car",
  description:
    "Mashaal Rent A Car is the mobility vertical of Mashaal Groups, built on the same institutional standards as Mashaal Petroleum and Mashwani Shipping.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A mobility vertical,"
        italicTitle="built on institutional discipline."
        description="Mashaal Rent A Car extends the governance, capital discipline, and long-term thinking of Mashaal Groups into personal and corporate mobility."
      />
      <AboutSections />
      <CTABand />
    </>
  );
}
