import beer from "@/assets/p-beer.jpg";
import wine from "@/assets/p-wine.jpg";
import champagne from "@/assets/p-champagne.jpg";
import soda from "@/assets/p-soda.jpg";
import ice from "@/assets/p-ice.jpg";
import energy from "@/assets/p-energy.jpg";
import snacks from "@/assets/p-snacks.jpg";

export type Category = {
  slug: string;
  name: string;
  blurb: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number; // USD
  size: string;
  origin: string;
  abv?: number;
  ageRestricted: boolean;
  stock: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  tags: ("popular" | "new" | "deal")[];
};

export const categories: Category[] = [
  { slug: "beer", name: "Beer", blurb: "Ice-cold local & imported" },
  { slug: "wine", name: "Wine", blurb: "Red, white & rosé" },
  { slug: "champagne", name: "Champagne", blurb: "Celebrate on the beach" },
  { slug: "soft-drinks", name: "Soft Drinks", blurb: "Chilled and fizzy" },
  { slug: "water-ice", name: "Water & Ice", blurb: "Delivered frozen solid" },
  { slug: "energy-juice", name: "Energy & Juice", blurb: "Fuel for the day" },
  { slug: "snacks", name: "Snacks", blurb: "Chips, candy, party packs" },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "safari-lager-500ml",
    name: "Safari Lager",
    brand: "Safari",
    category: "beer",
    price: 2.4,
    size: "500 ml",
    origin: "Tanzania",
    abv: 5.5,
    ageRestricted: true,
    stock: 120,
    rating: 4.8,
    reviews: 214,
    image: beer,
    description:
      "Tanzania's classic golden lager, served frost-cold from our Nungwi cold room. Crisp, clean and made for the beach.",
    tags: ["popular"],
  },
  {
    id: "2",
    slug: "kilimanjaro-lager-500ml",
    name: "Kilimanjaro Lager",
    brand: "Kilimanjaro",
    category: "beer",
    price: 2.6,
    size: "500 ml",
    origin: "Tanzania",
    abv: 4.5,
    ageRestricted: true,
    stock: 86,
    rating: 4.7,
    reviews: 168,
    image: beer,
    description: "Smooth and light with a dry finish. If you can climb it, you can drink it.",
    tags: ["popular", "deal"],
  },
  {
    id: "3",
    slug: "crisp-white-wine",
    name: "Crisp White Wine",
    brand: "Cape Point",
    category: "wine",
    price: 14.5,
    size: "750 ml",
    origin: "South Africa",
    abv: 12.5,
    ageRestricted: true,
    stock: 24,
    rating: 4.6,
    reviews: 61,
    image: wine,
    description: "Chilled sauvignon blanc with citrus and green apple. Perfect for sunset on the sand.",
    tags: ["popular"],
  },
  {
    id: "4",
    slug: "brut-champagne",
    name: "Brut Champagne",
    brand: "Maison Rive",
    category: "champagne",
    price: 62,
    size: "750 ml",
    origin: "France",
    abv: 12,
    ageRestricted: true,
    stock: 9,
    rating: 4.9,
    reviews: 34,
    image: champagne,
    description: "Fine bubbles, brioche and stone fruit. Delivered in an ice sleeve at no extra cost.",
    tags: ["new"],
  },
  {
    id: "5",
    slug: "classic-cola-330ml",
    name: "Classic Cola",
    brand: "Cola Co.",
    category: "soft-drinks",
    price: 1.2,
    size: "330 ml",
    origin: "Tanzania",
    ageRestricted: false,
    stock: 300,
    rating: 4.5,
    reviews: 402,
    image: soda,
    description: "The one everybody knows, in a cold glass bottle straight from the fridge.",
    tags: ["popular"],
  },
  {
    id: "6",
    slug: "ice-water-bundle",
    name: "Ice Bag + Water Bundle",
    brand: "Nungwi Fresh",
    category: "water-ice",
    price: 4.5,
    size: "2 kg ice + 1.5 L",
    origin: "Zanzibar",
    ageRestricted: false,
    stock: 60,
    rating: 4.7,
    reviews: 97,
    image: ice,
    description: "Two kilos of crystal ice plus chilled mineral water. Packed insulated so it arrives solid.",
    tags: ["deal"],
  },
  {
    id: "7",
    slug: "energy-can-juice",
    name: "Energy Can & Fresh Juice",
    brand: "Boost",
    category: "energy-juice",
    price: 5.2,
    size: "500 ml + 330 ml",
    origin: "Zanzibar",
    ageRestricted: false,
    stock: 45,
    rating: 4.4,
    reviews: 58,
    image: energy,
    description: "A cold energy can with freshly pressed orange juice. Your late-night and early-morning combo.",
    tags: ["new"],
  },
  {
    id: "8",
    slug: "beach-party-snack-pack",
    name: "Beach Party Snack Pack",
    brand: "Nungwi Fresh",
    category: "snacks",
    price: 9.9,
    size: "Serves 4",
    origin: "Zanzibar",
    ageRestricted: false,
    stock: 30,
    rating: 4.6,
    reviews: 76,
    image: snacks,
    description: "Chips, cookies, candy and nuts bundled for a group. Add drinks and you have a party.",
    tags: ["popular", "deal"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
