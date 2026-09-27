import { existsSync } from "node:fs";
import { join } from "node:path";
import { cars as rawCars, type CarModel } from "@/data/cars";

/**
 * Resolves each car's `image` to itself only if the file actually exists
 * under public/, otherwise strips it so CarMedia falls back to the
 * line-art silhouette. Runs server-side (fs) so there's no client-side
 * 404/onError flash — drop a real photo into public/cars/<slug>.jpg and
 * it appears on the next request, no code changes needed.
 */
export function getCarsWithResolvedImages(): CarModel[] {
  return rawCars.map((car) => {
    if (!car.image) return car;
    const filePath = join(process.cwd(), "public", car.image);
    return existsSync(filePath) ? car : { ...car, image: undefined };
  });
}
