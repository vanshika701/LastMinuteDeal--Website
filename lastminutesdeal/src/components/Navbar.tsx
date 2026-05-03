"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, MapPin } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

const SearchModal = dynamic(() => import("./SearchModal"), { ssr: false });

export default function Navbar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-indigo-600">
            Last Minutes Deal
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link
              href="/daily-deals"
              className={`transition-colors border-b-2 pb-1 ${
                isActive("/daily-deals")
                  ? "text-indigo-600 border-indigo-600"
                  : "border-transparent hover:text-indigo-600"
              }`}
            >
              Daily Deals
            </Link>
            <Link
              href="/buffet-deals"
              className={`transition-colors border-b-2 pb-1 ${
                isActive("/buffet-deals")
                  ? "text-indigo-600 border-indigo-600"
                  : "border-transparent hover:text-indigo-600"
              }`}
            >
              Buffet Deals
            </Link>
            <Link
              href="/hotel-deals"
              className={`transition-colors border-b-2 pb-1 ${
                isActive("/hotel-deals")
                  ? "text-indigo-600 border-indigo-600"
                  : "border-transparent hover:text-indigo-600"
              }`}
            >
              Hotel Deals
            </Link>
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <button
              onClick={() => setSearchOpen(true)}
              className="hover:text-indigo-600 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="hover:text-indigo-600 transition-colors"
              aria-label="Location"
            >
              <MapPin size={20} />
            </button>
            <div className="w-9 h-9 rounded-full bg-orange-400 overflow-hidden cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </nav>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
