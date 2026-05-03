"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDailyDeal } from "@/lib/data";
import { CreditCard, Wallet, ArrowLeft, Shield, Star, ChevronDown, Clock } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default function DailyDealCheckout({ params }: Props) {
  const { id } = use(params);
  const router = useRouter();
  const deal = getDailyDeal(id);
  if (!deal) notFound();

  const [paymentMethod, setPaymentMethod] = useState<"card" | "wallet">("card");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    arrival: "Early Morning (8AM - 11AM)",
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const total = deal.price * deal.persons + deal.serviceFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/booking-confirmed?restaurant=${deal.id}&total=${total}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Complete Your Booking</h1>
          <p className="text-gray-500 mb-8">Secure your spot at {deal.name}.</p>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left: Form */}
              <div className="flex-1 space-y-8">
                {/* Guest Details */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                    <h2 className="text-xl font-bold text-gray-900">Guest Details</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" placeholder="John Doe" value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" placeholder="+1 (555) 000-0000" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Arrival Preference</label>
                      <div className="relative">
                        <select value={form.arrival} onChange={(e) => setForm({ ...form, arrival: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none bg-white">
                          <option>Early Morning (8AM - 11AM)</option>
                          <option>Late Morning (11AM - 1PM)</option>
                          <option>Afternoon (1PM - 5PM)</option>
                          <option>Evening (5PM - 9PM)</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                    <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <button type="button" onClick={() => setPaymentMethod("card")}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-colors ${paymentMethod === "card" ? "border-indigo-600 bg-indigo-50" : "border-gray-200"}`}>
                      <CreditCard size={20} className={paymentMethod === "card" ? "text-indigo-600" : "text-gray-500"} />
                      <span className={`text-sm font-medium ${paymentMethod === "card" ? "text-indigo-600" : "text-gray-600"}`}>Credit/Debit Card</span>
                      {paymentMethod === "card" && (
                        <div className="ml-auto w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                    <button type="button" onClick={() => setPaymentMethod("wallet")}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-colors ${paymentMethod === "wallet" ? "border-indigo-600 bg-indigo-50" : "border-gray-200"}`}>
                      <Wallet size={20} className={paymentMethod === "wallet" ? "text-indigo-600" : "text-gray-500"} />
                      <span className={`text-sm font-medium ${paymentMethod === "wallet" ? "text-indigo-600" : "text-gray-600"}`}>Digital Wallet</span>
                    </button>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                        <input type="text" placeholder="Name on card" value={form.cardholderName}
                          onChange={(e) => setForm({ ...form, cardholderName: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <input type="text" placeholder="0000 0000 0000 0000" value={form.cardNumber}
                          onChange={(e) => setForm({ ...form, cardNumber: e.target.value })} maxLength={19}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                          <input type="text" placeholder="MM / YY" value={form.expiry}
                            onChange={(e) => setForm({ ...form, expiry: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                          <input type="text" placeholder="123" value={form.cvv}
                            onChange={(e) => setForm({ ...form, cvv: e.target.value })} maxLength={4}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "wallet" && (
                    <div className="bg-gray-50 rounded-xl p-6 text-center text-gray-500 text-sm">
                      Connect your digital wallet to continue.
                    </div>
                  )}

                  <div className="flex items-start gap-3 mt-5 bg-blue-50 rounded-xl p-4">
                    <Shield size={16} className="text-blue-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-blue-700 leading-relaxed">
                      Your payment information is encrypted and securely processed. We never store your CVV or full card details.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link href="/daily-deals" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                    <ArrowLeft size={16} />
                    Back to Selection
                  </Link>
                  <button type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
                    Confirm &amp; Pay ₹{total.toLocaleString()}.00
                  </button>
                </div>
              </div>

              {/* Right: Summary */}
              <div className="lg:w-80 shrink-0">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                  <div className="relative h-44">
                    <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {deal.discount}
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Clock size={11} />
                      {deal.time}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{deal.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{deal.location} · {deal.distance}</p>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Cuisine</p>
                        <p className="font-semibold text-gray-900 text-sm">{deal.cuisine}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Persons</p>
                        <p className="font-semibold text-gray-900 text-sm">{deal.persons} Guests</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm border-t border-gray-100 pt-4">
                      <div className="flex justify-between text-gray-600">
                        <span>₹{deal.price.toLocaleString()} × {deal.persons} persons</span>
                        <span>₹{(deal.price * deal.persons).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Service Fee</span>
                        <span>₹{deal.serviceFee}</span>
                      </div>
                      <div className="flex justify-between font-bold text-gray-900 pt-2 border-t border-gray-100 text-base">
                        <span>Total</span>
                        <span className="text-indigo-600">₹{total.toLocaleString()}.00</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4 bg-orange-50 rounded-xl p-3">
                      <Star size={16} className="text-orange-500" fill="currentColor" />
                      <div>
                        <p className="text-xs font-bold text-orange-600">Best Price Guaranteed</p>
                        <p className="text-xs text-orange-500">You&apos;re saving on this deal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
