import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { hotels } from "@/lib/data";
import { MapPin, Star, Wifi, ParkingSquare, Coffee, Waves } from "lucide-react";

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi size={13} />,
  Parking: <ParkingSquare size={13} />,
  Pool: <Waves size={13} />,
  Breakfast: <Coffee size={13} />,
};

export default function HotelDeals() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Hotel Deals</h1>
          <p className="text-gray-500 mt-2">
            Exclusive stays at luxury properties — limited availability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className={`absolute top-3 left-3 ${hotel.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                  {hotel.tag}
                </span>
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {hotel.discount}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-gray-900 text-lg">{hotel.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500 shrink-0">
                    <Star size={13} fill="currentColor" />
                    <span className="text-sm font-semibold text-gray-700">{hotel.rating}</span>
                    <span className="text-xs text-gray-400">({hotel.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                  <MapPin size={13} />
                  <span>{hotel.location} · {hotel.distance}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.map((a) => (
                    <span key={a} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                      {amenityIcons[a]}
                      {a}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-gray-400 text-sm line-through mr-2">
                      ₹{hotel.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-indigo-600 font-bold text-xl">
                      ₹{hotel.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm"> /night</span>
                  </div>
                  <Link href={`/hotel-deals/${hotel.id}/checkout`}>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
                      Book Now
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
