import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getRestaurant } from "@/lib/data";
import { MapPin, Users, UtensilsCrossed, Wifi, ParkingSquare, Smile, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

const amenityIcons: Record<string, React.ReactNode> = {
  Parking: <ParkingSquare size={20} className="text-gray-600" />,
  WiFi: <Wifi size={20} className="text-gray-600" />,
  "Family Friendly": <Smile size={20} className="text-gray-600" />,
};

export default async function RestaurantDetailPage({ params }: Props) {
  const { id } = await params;
  const restaurant = getRestaurant(id);
  if (!restaurant) notFound();

  const total = restaurant.price + restaurant.serviceFee + (restaurant.touristTax ?? 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Image */}
        <div className="w-full h-72 md:h-96 overflow-hidden">
          <img
            src={restaurant.heroImage}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column */}
            <div className="flex-1">
              {/* Badge & Name */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-500 text-sm">★</span>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                  {restaurant.badge}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {restaurant.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{restaurant.location} · {restaurant.distance}</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  <span>Up to {restaurant.maxGuests} Guests</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1">
                  <UtensilsCrossed size={14} />
                  <span>{restaurant.tables} Table</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="flex gap-4 mb-8">
                {restaurant.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex flex-col items-center gap-2 bg-gray-50 rounded-xl p-4 w-24"
                    title={amenity}
                  >
                    {amenityIcons[amenity] ?? <span className="text-gray-600 text-sm">{amenity}</span>}
                    <span className="text-xs text-gray-500 text-center">{amenity}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  The Experience
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  {restaurant.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Location</h2>
                  <button className="flex items-center gap-1 text-indigo-600 text-sm font-semibold hover:underline">
                    Get Directions <ExternalLink size={14} />
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden h-64 bg-gray-200">
                  <iframe
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=73.0%2C19.0%2C73.2%2C19.3&layer=mapnik`}
                    width="100%"
                    height="100%"
                    className="border-0"
                    title="Map"
                  />
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-80 shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-indigo-600">
                      ₹{restaurant.price.toLocaleString()}
                    </span>
                  </div>
                  {restaurant.discount && (
                    <span className="inline-block mt-1 bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                      {restaurant.discount}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Reservation</p>
                    <p className="font-semibold text-gray-900 text-sm">{restaurant.reservationDate}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Time</p>
                    <p className="font-semibold text-gray-900 text-sm">{restaurant.time}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Table</p>
                  <p className="font-semibold text-gray-900 text-sm">{restaurant.tables} Table</p>
                </div>

                <Link href={`/buffet-deals/${restaurant.id}/checkout`}>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl transition-colors mb-3">
                    Reserve Now
                  </button>
                </Link>
                <p className="text-center text-gray-400 text-xs mb-6">
                  You won&apos;t be charged yet
                </p>

                <div className="space-y-2 text-sm border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-gray-600">
                    <span>₹{(restaurant.price / 1).toLocaleString()} × 1 nights</span>
                    <span>₹{restaurant.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Service fee</span>
                    <span>₹{restaurant.serviceFee}</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-900 pt-2 border-t border-gray-100">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-2 mt-5 pt-5 border-t border-gray-100">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80",
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="User"
                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-indigo-600 text-[10px] font-bold">
                      +12
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    12 others booked in Santorini today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
