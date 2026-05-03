import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { restaurants } from "@/lib/data";
import { MapPin, Star, Users, UtensilsCrossed } from "lucide-react";

export default function BuffetDeals() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Buffet Deals</h1>
          <p className="text-gray-500 mt-2">
            Exclusive buffet experiences at unbeatable prices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((r) => (
            <Link key={r.id} href={`/buffet-deals/${r.id}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-indigo-600 text-xs font-bold px-2 py-1 rounded-full">
                    {r.badge}
                  </div>
                  {r.discount && (
                    <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {r.discount}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-gray-900 text-lg">{r.name}</h3>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm font-semibold text-gray-700">4.8</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                    <MapPin size={13} />
                    <span>{r.location} · {r.distance}</span>
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>Up to {r.maxGuests} guests</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <UtensilsCrossed size={14} />
                      <span>{r.tables} Table</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      {r.originalPrice && (
                        <span className="text-gray-400 text-sm line-through mr-2">
                          ₹{r.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-indigo-600 font-bold text-xl">
                        ₹{r.price.toLocaleString()}
                      </span>
                      <span className="text-gray-400 text-sm"> /table</span>
                    </div>
                    <span className="text-indigo-600 text-sm font-semibold group-hover:underline">
                      Reserve →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
