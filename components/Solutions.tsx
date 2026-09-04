import React from "react";
import Link from "next/link";
import { ArrowUpRight, Zap, ShieldCheck, Sparkles, Terminal, Rocket } from "lucide-react";

export default function Solutions() {
  const packages = [
    {
      badge: "Solusi Cepat",
      title: "WebView Android Quick-Launch",
      time: "Pengerjaan 1 - 2 Hari Kerja",
      description:
        "Paket siap rilis untuk mengonversi website Anda menjadi aplikasi Android APK & AAB bertanda tangan digital resmi, lengkap dengan push notifications.",
      specs: [
        "Full source code Android Studio (Kotlin)",
        "Dukungan Fullscreen, Camera & File Picker",
        "Integrasi OneSignal Push Notification",
        "Splash Screen elegan + Offline Handler",
        "Keystore signature siap upload Google Play",
      ],
      ctaText: "Pesan Paket WebView",
      popular: false,
    },
    {
      badge: "Paling Populer",
      title: "Company Profile Modern Next.js SSR",
      time: "Pengerjaan 3 - 7 Hari Kerja",
      description:
        "Website korporat berkelas dengan performa ultra cepat (Lighthouse 95+), Server-Side Rendering di edge Cloudflare, desain elegan, dan integrasi WhatsApp.",
      specs: [
        "Framework Next.js 15 App Router + Tailwind",
        "Desain eksklusif (Dark/Light Minimalist)",
        "SEO Meta Tags, Schema JSON-LD, Sitemap",
        "Setup Domain, SSL & Cloudflare Pages Edge",
        "Form Kontak terhubung ke Email & WhatsApp",
      ],
      ctaText: "Bangun Company Profile",
      popular: true,
    },
    {
      badge: "Infrastruktur",
      title: "Server Hardening & DevOps Setup",
      time: "Pengerjaan 1 - 3 Hari Kerja",
      description:
        "Setup komprehensif server VPS/Dedicated Anda agar siap menahan trafik tinggi, terlindung dari brute-force, dan memiliki sistem cadangan otomatis.",
      specs: [
        "Konfigurasi Linux OS (Ubuntu / Debian / AlmaLinux)",
        "Nginx / Caddy Reverse Proxy & SSL Otomatis",
        "Docker / Container Stack setup & tuning",
        "Firewall UFW / Fail2ban / SSH Key Hardening",
        "Automasi Backup berkala ke Cloud Storage",
      ],
      ctaText: "Amankan Server Sekarang",
      popular: false,
    },
  ];

  return (
    <section id="solutions" className="py-24 md:py-32 bg-zinc-950/60 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-teal-400 mb-3">
              02 — Paket & Solusi Unggulan
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
              Pilihan cepat untuk{" "}
              <span className="font-serif italic text-teal-300">
                kebutuhan mendesak.
              </span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Butuh estimasi custom untuk perangkat lunak skala besar? Tim kami siap
            melakukan analisis requirement dan estimasi timeline secara rinci.
          </p>
        </div>

        {/* 3 Columns Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all ${
                pkg.popular
                  ? "bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-teal-500/50 shadow-2xl shadow-teal-500/10 scale-[1.02]"
                  : "bg-zinc-900/60 border border-white/10 hover:border-white/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-8 bg-teal-500 text-black text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Rekomendasi Utama</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5">
                    {pkg.badge}
                  </span>
                  <span className="text-xs font-mono text-teal-400 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" />
                    {pkg.time}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-white mb-3">
                  {pkg.title}
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Specs List */}
                <div className="space-y-2.5 mb-8 pt-6 border-t border-white/10">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                    Termasuk di dalam paket:
                  </div>
                  {pkg.specs.map((item, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-2.5 text-xs text-zinc-300 font-light"
                    >
                      <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="#contact"
                className={`w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  pkg.popular
                    ? "bg-teal-400 hover:bg-teal-300 text-black shadow-lg shadow-teal-500/20"
                    : "bg-white/10 hover:bg-white text-zinc-200 hover:text-black"
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
