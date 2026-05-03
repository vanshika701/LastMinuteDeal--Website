"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import { getRestaurant } from "@/lib/data";
import { CheckCircle2, MapPin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

function BookingConfirmedContent() {
  const searchParams = useSearchParams();
  const restaurantId = searchParams.get("restaurant") ?? "amber-soul";
  const total = searchParams.get("total") ?? "3050";

  const restaurant = getRestaurant(restaurantId);

  const bookingId = "#LMD-9823";
  const duration = "Dec 14/2026 — 8.30PM";
  const guests = 4;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Confirmation Header */}
        <div className="flex flex-col items-center pt-12 pb-8 px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircle2 size={40} className="text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-gray-500 max-w-sm">
            Pack your bags! Your exclusive stay at Palacio Villa is all set and
            ready for your arrival.
          </p>
        </div>

        {/* Promo Banner */}
        <div className="relative mx-4 md:mx-auto md:max-w-5xl rounded-2xl overflow-hidden mb-10 h-64 md:h-72">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80"
            alt="Rustic Wood Hut"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-black/30 flex items-center justify-end">
            <div className="text-white text-right p-8 max-w-sm">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest flex items-center justify-end gap-1 mb-2">
                🔥 NOW OR NEVER
              </span>
              <h2 className="text-3xl font-bold mb-3">
                Rustic Wood Hut Experience
              </h2>
              <p className="text-white/80 text-sm mb-6">
                Limited availability for our signature glamping forest retreat.
                These rates vanish in:
              </p>
              <CountdownTimer hours={8} minutes={12} seconds={36} />
            </div>
          </div>

          {/* Price Card */}
          <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg">
            <p className="text-xs font-semibold text-gray-500 mb-1 flex items-center gap-2">
              Exclusive Rate{" "}
              <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
                -55%
              </span>
            </p>
            <p className="text-gray-400 text-sm line-through">₹25,000</p>
            <p className="text-indigo-600 text-2xl font-bold">
              ₹20,500
              <span className="text-sm font-normal text-gray-500"> /stay</span>
            </p>
            <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-colors">
              Claim Deal
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 pb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Booking Card */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative h-56">
                  <img
                    src={
                      restaurant?.image ??
                      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                    }
                    alt={restaurant?.name ?? "Restaurant"}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    CONFIRMED
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {restaurant?.name ?? "Hotel Devine"}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                        <MapPin size={13} />
                        <span>
                          {restaurant?.location ?? "Kurla"} ·{" "}
                          {restaurant?.distance ?? "4.2 km away"}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        BOOKING ID
                      </p>
                      <p className="text-indigo-600 font-bold text-lg">
                        {bookingId}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 py-5 border-t border-b border-gray-100 mb-5">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                        DURATION
                      </p>
                      <p className="font-semibold text-gray-900 text-sm">
                        {duration}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        (1 Table · {guests} Guest)
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                        TOTAL PAID
                      </p>
                      <p className="text-indigo-600 font-bold text-2xl">
                        ₹{Number(total).toLocaleString()}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        Inclusive of taxes
                      </p>
                    </div>
                  </div>

                  {/* Email Confirmation */}
                  <div className="flex items-center gap-3 bg-gray-900 text-white rounded-xl px-5 py-4 mb-6">
                    <Mail size={18} className="text-gray-300 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        EMAIL CONFIRMATION
                      </p>
                      <p className="text-sm">
                        Sent to{" "}
                        <span className="text-indigo-400 underline">
                          user@example.com
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <Link href="/" className="flex-1">
                      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl transition-colors">
                        Return to Home
                      </button>
                    </Link>
                    <button
                      onClick={() => window.history.back()}
                      className="flex-1 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-3.5 rounded-xl transition-colors"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* You Might Also Like */}
            <div className="lg:w-72 shrink-0">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                YOU MIGHT ALSO LIKE
              </p>

              <div className="space-y-4">
                {/* Hotel Greentop */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="relative h-36">
                    <img
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80"
                      alt="Hotel Greentop"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      75% OFF
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 mb-1">
                      Hotel Greentop
                    </h4>
                    <p className="text-gray-500 text-xs mb-3">
                      Chef&apos;s special 12-course tasting menu starting at $85
                      per person.
                    </p>
                    <button className="w-full border-2 border-indigo-200 text-indigo-600 font-semibold text-sm py-2.5 rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                      Check Availability
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Floating Spa Ritual */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="relative h-36">
                    <img
                      src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80"
                      alt="Floating Spa Ritual"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded-full">
                      WELLNESS
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-bold text-gray-900">
                        Floating Spa Ritual
                      </h4>
                      <button className="text-indigo-600 hover:text-indigo-800 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-500 text-xs mb-3">
                      Rejuvenating volcanic stone therapy overlooking the Aegean
                      horizon.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-600 font-bold text-lg">
                        ₹12,200
                      </span>
                      <span className="text-gray-400 text-xs uppercase tracking-wide">
                        SESSION
                      </span>
                    </div>
                  </div>
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

export default function BookingConfirmedPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BookingConfirmedContent />
    </Suspense>
  );
}
