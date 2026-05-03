import { Share2, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <p className="font-bold text-lg mb-2">Last Minutes Deal</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium curated journeys for the spontaneous traveler. Discover
            hidden gems and luxury deals in real-time.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-4 text-sm">Quick Links</p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4 text-sm">Support</p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Booking Guide
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-4">
            <p className="font-semibold mb-3 text-sm">Connect</p>
            <div className="flex gap-3 text-gray-400">
              <button className="hover:text-white transition-colors">
                <Share2 size={18} />
              </button>
              <button className="hover:text-white transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
          <div>
            <p className="font-semibold mb-3 text-sm">Social Media</p>
            <div className="flex gap-3 text-gray-400">
              {["f", "in", "tw"].map((s) => (
                <button
                  key={s}
                  className="hover:text-white transition-colors w-7 h-7 rounded-full border border-gray-700 flex items-center justify-center text-xs font-bold"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-xs">
        © 2024 Last Minutes Deal. Premium Curated Journeys.
      </div>
    </footer>
  );
}
