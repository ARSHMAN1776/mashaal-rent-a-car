import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { FleetShowcase } from "@/components/FleetShowcase";
import { Services } from "@/components/Services";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { CTABand } from "@/components/CTABand";
import { getCarsWithResolvedImages } from "@/lib/carImages";

export default function Home() {
  const cars = getCarsWithResolvedImages();
  return (
    <>
      <Hero />
      <Marquee />
      <FleetShowcase cars={cars} />
      <Services />
      <ProcessSteps />
      <WhyUs />
      <Testimonials />
      <CTABand />
    </>
  );
}
