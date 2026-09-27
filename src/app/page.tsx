import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { WhyUs } from "@/components/WhyUs";
import { FleetShowcase } from "@/components/FleetShowcase";
import { ProcessSteps } from "@/components/ProcessSteps";
import { StatBand } from "@/components/StatBand";
import { Testimonials } from "@/components/Testimonials";
import { CTABand } from "@/components/CTABand";
import { getCarsWithResolvedImages } from "@/lib/carImages";

export default function Home() {
  const cars = getCarsWithResolvedImages();
  return (
    <>
      <Hero />
      <Marquee />
      <WhyUs />
      <FleetShowcase cars={cars} />
      <ProcessSteps />
      <StatBand />
      <Testimonials />
      <CTABand />
    </>
  );
}
