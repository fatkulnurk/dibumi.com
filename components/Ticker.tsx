import React from "react";
import { Sparkle } from "lucide-react";

export default function Ticker() {
  const items = [
    "Custom Software Development",
    "Modern Company Profile",
    "Custom Android Apps",
    "Jasa WebView Android (Play Store Ready)",
    "Kelola Server Linux & DevOps",
    "High-Performance Web App",
    "API & Microservices Architecture",
    "Server Hardening & DDoS Mitigation",
    "OneSignal Push Notification",
    "Cloudflare Edge SSR Deployment",
  ];

  return (
    <div className="w-full border-y border-white/10 bg-zinc-950/80 py-4 overflow-hidden select-none backdrop-blur-sm">
      <div className="flex animate-ticker whitespace-nowrap">
        {/* First Loop */}
        <div className="flex items-center gap-8 px-4">
          {items.map((item, idx) => (
            <div key={`t1-${idx}`} className="flex items-center gap-8">
              <span className="text-sm font-medium tracking-wide text-zinc-400 hover:text-white transition-colors cursor-default">
                {item}
              </span>
              <Sparkle className="w-3.5 h-3.5 text-teal-400/70 fill-teal-400/30" />
            </div>
          ))}
        </div>

        {/* Second Loop for Seamless Infinite Scroll */}
        <div className="flex items-center gap-8 px-4" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`t2-${idx}`} className="flex items-center gap-8">
              <span className="text-sm font-medium tracking-wide text-zinc-400 hover:text-white transition-colors cursor-default">
                {item}
              </span>
              <Sparkle className="w-3.5 h-3.5 text-teal-400/70 fill-teal-400/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
