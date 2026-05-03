import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { restaurants } from "@/lib/data";
import { MapPin, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[480px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="max-w-7xl mx-auto px-6 text-white">
              <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest">
                Premium Curated Journeys
              </span>
              <h1 className="text-5xl font-bold mt-3 mb-4 max-w-xl leading-tight">
                Discover Hidden Gems & Luxury Deals
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-md">
                Real-time exclusive offers on the finest dining experiences and
                stays.
              </p>
              <Link
                href="/buffet-deals"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Explore Buffet Deals
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Deals */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Featured Deals
              </h2>
              <p className="text-gray-500 mt-1">
                Limited-time offers — grab them before they&apos;re gone
              </p>
            </div>
            <Link
              href="/buffet-deals"
              className="text-indigo-600 font-semibold text-sm hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {restaurants.map((r) => (
              <Link key={r.id} href={`/buffet-deals/${r.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {r.discount && (
                      <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {r.discount}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">
                          {r.name}
                        </h3>
                        <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                          <MapPin size={13} />
                          <span>
                            {r.location} · {r.distance}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star size={14} fill="currentColor" />
                        <span className="text-sm font-semibold">4.8</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        {r.originalPrice && (
                          <span className="text-gray-400 text-sm line-through mr-2">
                            ₹{r.originalPrice.toLocaleString()}
                          </span>
                        )}
                        <span className="text-indigo-600 font-bold text-lg">
                          ₹{r.price.toLocaleString()}
                        </span>
                        <span className="text-gray-400 text-sm"> /table</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        Up to {r.maxGuests} guests
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
