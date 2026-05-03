export interface Restaurant {
  id: string;
  name: string;
  location: string;
  distance: string;
  badge: string;
  image: string;
  heroImage: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  maxGuests: number;
  tables: number;
  reservationDate: string;
  time: string;
  serviceFee: number;
  touristTax: number;
  description: string;
  amenities: string[];
  category?: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  distance: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  amenities: string[];
  tag: string;
  tagColor: string;
  nights: number;
  serviceFee: number;
  taxes: number;
}

export interface DailyDeal {
  id: string;
  name: string;
  location: string;
  distance: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: string;
  time: string;
  rating: number;
  cuisine: string;
  persons: number;
  serviceFee: number;
}

export const restaurants: Restaurant[] = [
  {
    id: "amber-soul",
    name: "Amber Soul",
    location: "Kalyan",
    distance: "4.2 km away",
    badge: "PREMIUM COLLECTION",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    price: 3000,
    originalPrice: 6000,
    discount: "SAVE 50% TODAY",
    maxGuests: 4,
    tables: 1,
    reservationDate: "Oct 12, 2026",
    time: "8:30PM",
    serviceFee: 50,
    touristTax: 0,
    description:
      "Nestled on the volcanic cliffs of Oia, Palacio Villa is an architectural masterpiece where traditional Cycladic charm meets modern luxury. Every morning begins with a curated breakfast served on your private terrace, followed by a personalized spa treatment in our grotto-style wellness center.\n\nDesigned for those who seek seclusion without compromising on service, the villa features a 24/7 private concierge and an infinity pool that seems to spill directly into the Aegean Sea.",
    amenities: ["Parking", "WiFi", "Family Friendly"],
    category: "buffet",
  },
  {
    id: "hotel-devine",
    name: "Hotel Devine",
    location: "Kurla",
    distance: "4.2 km away",
    badge: "HOTEL DEVINE",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    price: 3200,
    maxGuests: 4,
    tables: 1,
    reservationDate: "Oct 24, 2026",
    time: "8:30PM",
    serviceFee: 50,
    touristTax: 100,
    description:
      "Hotel Devine offers an exceptional dining experience in the heart of Kurla. Our chef-curated buffet features over 200 dishes from across the globe, paired with an extensive wine cellar.\n\nThe restaurant's warm ambiance and attentive service make it the perfect setting for celebrations and business gatherings alike.",
    amenities: ["Parking", "WiFi", "Family Friendly"],
    category: "buffet",
  },
  {
    id: "grand-imperial",
    name: "Grand Imperial",
    location: "Kalyan",
    distance: "4.2 km away",
    badge: "GRAND IMPERIAL",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&q=80",
    price: 3500,
    maxGuests: 4,
    tables: 1,
    reservationDate: "Oct 24, 2026",
    time: "8:30PM",
    serviceFee: 50,
    touristTax: 100,
    description:
      "Grand Imperial stands as Kalyan's most prestigious dining destination, offering a regal atmosphere with royal service. Our award-winning chefs craft seasonal menus that celebrate the finest local and imported ingredients.\n\nWith three private dining rooms and a rooftop terrace, Grand Imperial is the ultimate venue for making every occasion unforgettable.",
    amenities: ["Parking", "WiFi", "Family Friendly"],
    category: "buffet",
  },
];

export const hotels: Hotel[] = [
  {
    id: "palacio-villa",
    name: "Palacio Villa",
    location: "Santorini",
    distance: "Beachfront",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    price: 20500,
    originalPrice: 45000,
    discount: "-55%",
    rating: 4.9,
    reviews: 312,
    amenities: ["WiFi", "Parking", "Pool", "Breakfast"],
    tag: "NOW OR NEVER",
    tagColor: "bg-orange-500",
    nights: 1,
    serviceFee: 500,
    taxes: 1000,
  },
  {
    id: "rustic-wood-hut",
    name: "Rustic Wood Hut",
    location: "Coorg",
    distance: "Forest Retreat",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
    price: 8500,
    originalPrice: 15000,
    discount: "-43%",
    rating: 4.7,
    reviews: 178,
    amenities: ["WiFi", "Breakfast", "Pool"],
    tag: "ECO STAY",
    tagColor: "bg-green-600",
    nights: 1,
    serviceFee: 250,
    taxes: 500,
  },
  {
    id: "grand-marina",
    name: "The Grand Marina",
    location: "Goa",
    distance: "Sea View",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    price: 12000,
    originalPrice: 22000,
    discount: "-45%",
    rating: 4.8,
    reviews: 245,
    amenities: ["WiFi", "Parking", "Pool", "Breakfast"],
    tag: "TOP RATED",
    tagColor: "bg-indigo-600",
    nights: 1,
    serviceFee: 350,
    taxes: 700,
  },
  {
    id: "cliff-house-resort",
    name: "Cliff House Resort",
    location: "Munnar",
    distance: "Hill Station",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
    price: 7200,
    originalPrice: 13500,
    discount: "-47%",
    rating: 4.6,
    reviews: 134,
    amenities: ["WiFi", "Breakfast"],
    tag: "MOUNTAIN VIEW",
    tagColor: "bg-teal-600",
    nights: 1,
    serviceFee: 200,
    taxes: 400,
  },
  {
    id: "prestige-suites",
    name: "Prestige Suites",
    location: "Mumbai",
    distance: "City Centre",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    price: 9800,
    originalPrice: 18000,
    discount: "-46%",
    rating: 4.7,
    reviews: 289,
    amenities: ["WiFi", "Parking", "Breakfast"],
    tag: "BUSINESS READY",
    tagColor: "bg-gray-700",
    nights: 1,
    serviceFee: 300,
    taxes: 600,
  },
  {
    id: "ocean-pearl",
    name: "Ocean Pearl",
    location: "Maldives",
    distance: "Overwater Villa",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    price: 35000,
    originalPrice: 65000,
    discount: "-46%",
    rating: 5.0,
    reviews: 98,
    amenities: ["WiFi", "Pool", "Breakfast"],
    tag: "LUXURY",
    tagColor: "bg-amber-500",
    nights: 1,
    serviceFee: 1000,
    taxes: 2000,
  },
];

export const dailyDeals: DailyDeal[] = [
  {
    id: "spice-garden",
    name: "The Spice Garden",
    location: "Bandra",
    distance: "2.1 km away",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    price: 1200,
    originalPrice: 2400,
    discount: "50% OFF",
    time: "Valid till 10PM",
    rating: 4.7,
    cuisine: "Indian",
    persons: 2,
    serviceFee: 50,
  },
  {
    id: "sakura-sushi",
    name: "Sakura Sushi",
    location: "Andheri",
    distance: "3.5 km away",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    price: 1800,
    originalPrice: 3000,
    discount: "40% OFF",
    time: "Valid till 9PM",
    rating: 4.9,
    cuisine: "Japanese",
    persons: 2,
    serviceFee: 50,
  },
  {
    id: "la-piazza",
    name: "La Piazza",
    location: "Juhu",
    distance: "5.0 km away",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    price: 2200,
    originalPrice: 4000,
    discount: "45% OFF",
    time: "Valid till 11PM",
    rating: 4.6,
    cuisine: "Italian",
    persons: 2,
    serviceFee: 75,
  },
  {
    id: "coastal-catch",
    name: "Coastal Catch",
    location: "Worli",
    distance: "4.2 km away",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    price: 1500,
    originalPrice: 2800,
    discount: "46% OFF",
    time: "Valid till 8PM",
    rating: 4.5,
    cuisine: "Seafood",
    persons: 2,
    serviceFee: 50,
  },
  {
    id: "rooftop-grill",
    name: "The Rooftop Grill",
    location: "Lower Parel",
    distance: "6.1 km away",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    price: 2800,
    originalPrice: 5000,
    discount: "44% OFF",
    time: "Valid till 11PM",
    rating: 4.8,
    cuisine: "Continental",
    persons: 2,
    serviceFee: 100,
  },
  {
    id: "momo-house",
    name: "Momo House",
    location: "Thane",
    distance: "8.3 km away",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80",
    price: 800,
    originalPrice: 1500,
    discount: "47% OFF",
    time: "Valid till 9PM",
    rating: 4.4,
    cuisine: "Tibetan",
    persons: 2,
    serviceFee: 30,
  },
];

export function getRestaurant(id: string) {
  return restaurants.find((r) => r.id === id);
}

export function getHotel(id: string) {
  return hotels.find((h) => h.id === id);
}

export function getDailyDeal(id: string) {
  return dailyDeals.find((d) => d.id === id);
}

export interface SearchResult {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  category: "Buffet" | "Hotel" | "Daily Deal";
  href: string;
}

export function searchAll(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [
    ...restaurants.map((r) => ({
      id: r.id,
      name: r.name,
      location: r.location,
      image: r.image,
      price: r.price,
      category: "Buffet" as const,
      href: `/buffet-deals/${r.id}`,
    })),
    ...hotels.map((h) => ({
      id: h.id,
      name: h.name,
      location: h.location,
      image: h.image,
      price: h.price,
      category: "Hotel" as const,
      href: `/hotel-deals/${h.id}/checkout`,
    })),
    ...dailyDeals.map((d) => ({
      id: d.id,
      name: d.name,
      location: d.location,
      image: d.image,
      price: d.price,
      category: "Daily Deal" as const,
      href: `/daily-deals/${d.id}/checkout`,
    })),
  ];

  return results.filter(
    (r) =>
      r.name.toLowerCase().includes(q) ||
      r.location.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q)
  );
}
