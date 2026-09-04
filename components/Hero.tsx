import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Server, Smartphone, Layers, ShieldCheck, Zap, Globe } from "lucide-react";

export default function Hero() {
  const servicePills = [
    { label: "Custom Software", icon: Code2, href: "#services" },
    { label: "WebView Android", icon: Layers, href: "#services" },
    { label: "Company Profile SSR", icon: Globe, href: "#services" },
    { label: "Kelola Server & DevOps", icon: Server, href: "#services" },
    { label: "Custom Android Native", icon: Smartphone, href: "#services" },
  ];

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient & Mesh Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-teal-500/15 via-cyan-500/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl">
          {/* Top Edge SSR Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-wider mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>Next.js 16 SSR • Edge-Native Execution</span>
          </div>

          {/* Evozi-style Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1] mb-8">
            We engineer{" "}
            <span className="font-serif italic font-normal text-teal-300">
              what&apos;s next.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mb-10">
            <strong className="text-zinc-100 font-medium">dibumi.com</strong> membangun
            perangkat lunak berkinerja tinggi: dari{" "}
            <span className="text-zinc-200">Custom Software &amp; Microservices</span>,{" "}
            <span className="text-zinc-200">Jasa WebView Android siap Google Play</span>,{" "}
            <span className="text-zinc-200">Company Profile ultra-cepat</span>, hingga{" "}
            <span className="text-zinc-200">Server Hardening &amp; DevOps</span> yang andal 24/7.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <Link
              href="#estimator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl hover:shadow-teal-500/10 group shimmer-btn"
            >
              <span>Hitung Estimasi Proyek</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/15 text-zinc-300 font-semibold text-xs uppercase tracking-wider hover:text-white hover:border-teal-500/50 hover:bg-zinc-800/80 transition-all"
            >
              <span>Lihat Semua Layanan</span>
            </Link>
          </div>

          {/* Interactive Quick Service Pills */}
          <div className="pt-8 border-t border-white/10">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mb-3">
              Eksplorasi Cepat Spesialisasi:
            </div>
            <div className="flex flex-wrap gap-2.5">
              {servicePills.map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <Link
                    key={idx}
                    href={pill.href}
                    className="glow-pill px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-300 hover:text-teal-300 flex items-center gap-2 transition"
                  >
                    <Icon className="w-3.5 h-3.5 text-teal-400" />
                    <span>{pill.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
