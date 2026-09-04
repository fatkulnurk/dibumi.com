import React from "react";
import { Sparkle } from "lucide-react";

export default function Ticker() {
  const items = [
    "Custom Software Enterprise",
    "Jasa Pembuatan WebView Android (Play Store Ready)",
    "Website Company Profile Korporat",
    "Kelola Server Linux & DevOps Hardening",
    "Aplikasi Mobile Android Native",
    "Integrasi Payment Gateway & WhatsApp API",
    "Arsitektur Microservices & RESTful API",
    "Pemeliharaan & Garansi SLA 24/7",
    "Software House Surabaya — Melayani Seluruh Indonesia",
  ];

  return (
    <div className="w-full border-y border-brand-200/60 bg-gradient-to-r from-brand-50/80 via-white to-brand-50/80 py-4 overflow-hidden select-none">
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Loop 1 */}
        <div className="flex items-center gap-8 px-4">
          {items.map((item, idx) => (
            <div key={`t1-${idx}`} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-700 hover:text-brand-700 transition-colors">
                {item}
              </span>
              <Sparkle className="w-3.5 h-3.5 text-brand-600 fill-brand-400" />
            </div>
          ))}
        </div>

        {/* Loop 2 */}
        <div className="flex items-center gap-8 px-4" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`t2-${idx}`} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-700 hover:text-brand-700 transition-colors">
                {item}
              </span>
              <Sparkle className="w-3.5 h-3.5 text-brand-600 fill-brand-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
