import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Server,
  Smartphone,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const highlights = [
    { text: "100% Hak Milik Source Code", icon: ShieldCheck },
    { text: "Garansi SLA & Keamanan Data", icon: CheckCircle2 },
    { text: "Pengerjaan Tepat Waktu", icon: Clock },
  ];

  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      {/* Background Soft Mesh Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-tr from-brand-300/30 via-cyan-200/25 to-brand-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Location & Credibility Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-brand-200/80 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
            <span className="font-mono text-brand-700">Enterprise Engineering Partner</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">Surabaya, Indonesia</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-8">
            Rekayasa software andal untuk{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-cyan-600">
              pertumbuhan bisnis Anda.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            <strong className="text-slate-900 font-semibold">dibumi.com</strong> adalah software house &amp; konsultan IT berbasis di Surabaya. Kami merancang sistem modular berkualitas tinggi: dari{" "}
            <span className="text-slate-800 font-medium">Custom Software Enterprise</span>,{" "}
            <span className="text-slate-800 font-medium">Aplikasi Android Native &amp; WebView</span>,{" "}
            <span className="text-slate-800 font-medium">Website Korporat</span>, hingga{" "}
            <span className="text-slate-800 font-medium">Kelola Server Linux &amp; DevOps</span> yang stabil dan aman.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Link
              href="#estimator"
              className="btn-primary-gradient inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-bold tracking-wide shadow-lg shadow-brand-600/25 group"
            >
              <span>Hitung Estimasi Kebutuhan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white border border-slate-300/80 text-slate-800 hover:text-brand-700 hover:border-brand-500 hover:bg-brand-50/40 font-semibold text-sm transition-all shadow-sm"
            >
              <span>Konsultasi Teknis Gratis</span>
            </Link>
          </div>

          {/* Corporate Trust Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-slate-200/70 text-xs font-semibold text-slate-700">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-brand-100 text-brand-700">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
