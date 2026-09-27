export type SilhouetteVariant = "suv" | "sedan" | "pickup" | "hatchback";

export type CarCategory =
  | "SUV & 4x4"
  | "Executive & Luxury"
  | "Sedan"
  | "Economy";

export interface CarModel {
  slug: string;
  name: string;
  make: string;
  category: CarCategory;
  tagline: string;
  monthlyFrom: number; // PKR, indicative — confirm current rates before publishing
  seats: number;
  transmission: "Automatic" | "Manual";
  fuel: "Petrol" | "Diesel" | "Hybrid";
  highlights: string[];
  silhouette: SilhouetteVariant;
  silhouetteScale: number; // relative visual size within its family, 0.8–1.15
  roofRails?: boolean;
  moreInCategory: number; // "+N more available in this category"
  image?: string; // public/ path, e.g. "/cars/fortuner.jpg" — falls back to the line-art silhouette when unset or missing
}

// Indicative monthly rates (PKR) — placeholders only, confirm before publishing.
export const cars: CarModel[] = [
  {
    slug: "fortuner",
    name: "Fortuner",
    make: "Toyota",
    category: "SUV & 4x4",
    tagline: "The commanding SUV for executive travel and family journeys alike.",
    monthlyFrom: 280000,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    highlights: ["7-seat comfort", "4x4 capability", "Chauffeur available"],
    silhouette: "suv",
    silhouetteScale: 1,
    roofRails: true,
    moreInCategory: 11,
    image: "/cars/fortuner.png",
  },
  {
    slug: "prado",
    name: "Prado",
    make: "Toyota Land Cruiser",
    category: "SUV & 4x4",
    tagline: "Refined, unstoppable, and unmistakably premium on every route.",
    monthlyFrom: 350000,
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    highlights: ["Luxury cabin", "All-terrain poise", "Corporate favourite"],
    silhouette: "suv",
    silhouetteScale: 1.08,
    roofRails: true,
    moreInCategory: 6,
    image: "/cars/prado.jpg",
  },
  {
    slug: "revo",
    name: "Revo",
    make: "Toyota Hilux",
    category: "SUV & 4x4",
    tagline: "Built for work and terrain — Pakistan's most trusted pickup.",
    monthlyFrom: 220000,
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    highlights: ["Double cabin", "Rugged 4x4", "High load capacity"],
    silhouette: "pickup",
    silhouetteScale: 1,
    moreInCategory: 8,
    image: "/cars/revo.jpg",
  },
  {
    slug: "v8",
    name: "V8",
    make: "Toyota Land Cruiser",
    category: "Executive & Luxury",
    tagline: "The flagship. Reserved for principals, protocol, and occasions of scale.",
    monthlyFrom: 550000,
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    highlights: ["Flagship presence", "Security-grade options", "Full-time chauffeur"],
    silhouette: "suv",
    silhouetteScale: 1.15,
    roofRails: true,
    moreInCategory: 3,
    image: "/cars/v8.png",
  },
  {
    slug: "civic",
    name: "Civic",
    make: "Honda",
    category: "Sedan",
    tagline: "Sharp, efficient, and dependable for daily executive movement.",
    monthlyFrom: 150000,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    highlights: ["Fuel efficient", "Sport-tuned handling", "Daily reliability"],
    silhouette: "sedan",
    silhouetteScale: 1,
    moreInCategory: 9,
    image: "/cars/civic.png",
  },
  {
    slug: "cultus",
    name: "Cultus",
    make: "Suzuki",
    category: "Economy",
    tagline: "Compact, economical, and effortless to run for city life.",
    monthlyFrom: 85000,
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    highlights: ["Low running cost", "Easy city parking", "AC as standard"],
    silhouette: "hatchback",
    silhouetteScale: 1,
    moreInCategory: 7,
    image: "/cars/cultus.jpg",
  },
  {
    slug: "alto",
    name: "Alto",
    make: "Suzuki",
    category: "Economy",
    tagline: "Pakistan's most-loved city car — light, nimble, and dependable.",
    monthlyFrom: 65000,
    seats: 4,
    transmission: "Manual",
    fuel: "Petrol",
    highlights: ["Best-in-class economy", "Compact footprint", "Ideal starter rental"],
    silhouette: "hatchback",
    silhouetteScale: 0.88,
    moreInCategory: 14,
    image: "/cars/alto.jpg",
  },
];

export const categoryOrder: CarCategory[] = [
  "SUV & 4x4",
  "Executive & Luxury",
  "Sedan",
  "Economy",
];

export function formatPKR(amount: number) {
  return `PKR ${amount.toLocaleString("en-PK")}`;
}

export function carsByCategory() {
  return categoryOrder.map((category) => ({
    category,
    cars: cars.filter((c) => c.category === category),
  }));
}
