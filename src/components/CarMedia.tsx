import Image from "next/image";
import type { CarModel } from "@/data/cars";
import { CarSilhouette } from "./CarSilhouette";

interface CarMediaProps {
  car: CarModel;
  variant?: "hero" | "card";
  className?: string;
}

/**
 * Renders the car's real photo when car.image is set, otherwise falls
 * back to the gold line-art silhouette. car.image is only ever set (by
 * getCarsWithResolvedImages, server-side) when the file genuinely exists
 * under public/, so there's no client-side 404 flash to guard against.
 */
export function CarMedia({ car, variant = "hero", className = "" }: CarMediaProps) {
  const aspect = variant === "hero" ? "aspect-[16/10]" : "aspect-[4/3]";

  if (car.image) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-line ${aspect} ${className}`}
      >
        <Image
          src={car.image}
          alt={`${car.make} ${car.name}`}
          fill
          sizes={variant === "hero" ? "(min-width: 1024px) 480px, 100vw" : "(min-width: 1024px) 320px, 90vw"}
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
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
        className="h-full w-full text-gold-light/90"
      />
    </div>
  );
}
