"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export default function CountdownTimer({
  hours = 8,
  minutes = 12,
  seconds = 36,
}: CountdownTimerProps) {
  const [time, setTime] = useState(hours * 3600 + minutes * 60 + seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex gap-3">
      {[
        { value: h, label: "HOURS" },
        { value: m, label: "MIN" },
        { value: s, label: "SEC" },
      ].map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="bg-white/20 backdrop-blur rounded-lg w-16 h-14 flex items-center justify-center text-2xl font-bold text-white">
            {pad(value)}
          </div>
          <span className="text-white/70 text-[10px] mt-1 font-medium tracking-wider">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
