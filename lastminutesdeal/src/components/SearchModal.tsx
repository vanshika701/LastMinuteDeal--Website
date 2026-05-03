"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { searchAll, type SearchResult } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Buffet: "bg-indigo-100 text-indigo-700",
  Hotel: "bg-amber-100 text-amber-700",
  "Daily Deal": "bg-green-100 text-green-700",
};

interface Props {
  onClose: () => void;
}

export default function SearchModal({ onClose }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setResults(searchAll(query));
  }, [query]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSelect = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <Search size={20} className="text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search restaurants, hotels, deals..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-gray-900 text-base outline-none placeholder:text-gray-400"
          />
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {query && results.length === 0 && (
            <div className="py-12 text-center text-gray-400 text-sm">
              No results found for &ldquo;{query}&rdquo;
            </div>
          )}

          {!query && (
            <div className="py-10 text-center text-gray-400 text-sm">
              Start typing to search across all deals
            </div>
          )}

          {results.length > 0 && (
            <ul className="divide-y divide-gray-50">
              {results.map((r) => (
                <li key={`${r.category}-${r.id}`}>
                  <button
                    onClick={() => handleSelect(r.href)}
                    className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 transition-colors text-left"
                  >
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-semibold text-gray-900 text-sm truncate">
                          {r.name}
                        </span>
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${categoryColors[r.category]}`}
                        >
                          {r.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{r.location}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-indigo-600 font-bold text-sm">
                        ₹{r.price.toLocaleString()}
                      </p>
                    </div>
                    <ArrowRight size={14} className="text-gray-300 shrink-0" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer hint */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex gap-4 text-xs text-gray-400">
          <span>↵ to select</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
