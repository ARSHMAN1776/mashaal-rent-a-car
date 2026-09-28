import Image from "next/image";
import type { CarModel } from "@/data/cars";
import { CarSilhouette } from "./CarSilhouette";

interface CarMediaProps {
  car: CarModel;
  variant?: "hero" | "card" | "light";
  className?: string;
}

/**
 * Renders the car's real photo when car.image is set, otherwise falls
 * back to a line-art silhouette. car.image is only ever set (by
 * getCarsWithResolvedImages, server-side) when the file genuinely exists
 * under public/, so there's no client-side 404 flash to guard against.
 *
 * "light" skips the dark vignette/tint treatment used by "hero"/"card" —
 * the source photos already sit on a white studio backdrop, which matches
 * a white card natively, so no blending is needed there.
 */
export function CarMedia({ car, variant = "hero", className = "" }: CarMediaProps) {
  const aspect = variant === "hero" ? "aspect-[16/10]" : "aspect-[4/3]";

  if (car.image) {
    if (variant === "light") {
      return (
        <div className={`relative w-full overflow-hidden ${aspect} ${className}`}>
          <Image
            src={car.image}
            alt={`${car.make} ${car.name}`}
            fill
            sizes="(min-width: 1024px) 320px, 90vw"
            className="object-cover"
          />
        </div>
      );
    }

    return (
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-line bg-[#0e0d0b] ${aspect} ${className}`}
      >
        <Image
          src={car.image}
          alt={`${car.make} ${car.name}`}
          fill
          sizes={variant === "hero" ? "(min-width: 1024px) 480px, 100vw" : "(min-width: 1024px) 320px, 90vw"}
          className="object-cover [filter:brightness(0.92)_saturate(1.08)_sepia(0.1)]"
        />
        {/* Vignette — softens the studio-white photo backdrop into the dark frame on all sides */}
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_45%,rgba(11,11,12,0.55)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold-dim/25" />
      </div>
    );
  }

  return (
    <div
      className={`flex w-full items-center justify-center rounded-2xl ${aspect} ${className}`}
    >
      <CarSilhouette
        variant={car.silhouette}
        scale={car.silhouetteScale}
        roofRails={car.roofRails}
        className={`h-full w-full ${variant === "light" ? "text-gray-300" : "text-gold-light/90"}`}
      />
    </div>
  );
}
