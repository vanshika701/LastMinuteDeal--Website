import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { dailyDeals } from "@/lib/data";
import { MapPin, Star, Clock } from "lucide-react";

export default function DailyDeals() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Daily Deals</h1>
          <p className="text-gray-500 mt-2">
            Flash deals refreshed every day — book before they expire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dailyDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {deal.discount}
                </span>
                <span className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Clock size={11} />
                  {deal.time}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-gray-900 text-lg">{deal.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={13} fill="currentColor" />
                    <span className="text-sm font-semibold text-gray-700">{deal.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
                  <MapPin size={13} />
                  <span>{deal.location} · {deal.distance}</span>
                </div>
                <span className="text-xs text-indigo-600 font-medium bg-indigo-50 px-2 py-0.5 rounded-full">
                  {deal.cuisine}
                </span>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-gray-400 text-sm line-through mr-2">
                      ₹{deal.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-indigo-600 font-bold text-xl">
                      ₹{deal.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm"> /person</span>
                  </div>
                  <Link href={`/daily-deals/${deal.id}/checkout`}>
                    <button className="text-indigo-600 text-sm font-semibold hover:underline">
                      Book Now →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
