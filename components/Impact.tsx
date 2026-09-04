import React from "react";
import { Activity, Gauge, Server, Shield, Globe2, Clock } from "lucide-react";

export default function Impact() {
  const metrics = [
    {
      value: "99.9%",
      label: "Uptime SLA",
      description: "Keandalan infrastruktur dan server yang dikelola dengan monitoring 24/7.",
      icon: Server,
    },
    {
      value: "95+",
      label: "Lighthouse Score",
      description: "Optimasi web Core Web Vitals untuk performa instan dan SEO maksimal.",
      icon: Gauge,
    },
    {
      value: "< 50ms",
      label: "Global Edge Latency",
      description: "Didukung jaringan Cloudflare Edge global di 300+ kota di seluruh dunia.",
      icon: Globe2,
    },
    {
      value: "100%",
      label: "Full Source Code",
      description: "Kepemilikan penuh atas kode program, repositori Git, dan kredensial deployment.",
      icon: Shield,
    },
  ];

  return (
    <section id="impact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-teal-400 mb-3">
            03 — Standar & Metrik Kualitas
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
            Kualitas tanpa kompromi.{" "}
            <span className="font-serif italic text-teal-300">
              Terukur & terpercaya.
            </span>
          </h2>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const IconComp = metric.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 border border-white/10 hover:border-teal-500/30 flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-white/5 w-fit text-teal-400 mb-6">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-light text-white tracking-tight font-mono mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-zinc-200 tracking-wide mb-3">
                    {metric.label}
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Strip (04 - Engineering Workflow) */}
        <div id="stack" className="mt-20 pt-16 border-t border-white/10">
          <div className="font-mono text-xs uppercase tracking-widest text-teal-400 mb-3">
            04 — Tech Stack & Workflow
          </div>
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-8">
            Teknologi modern yang kami gunakan setiap hari
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {[
              { name: "Next.js 15", category: "Fullstack / SSR" },
              { name: "Cloudflare Pages", category: "Edge Network" },
              { name: "Android (Kotlin)", category: "Mobile Native" },
              { name: "TypeScript", category: "Type-Safe Dev" },
              { name: "Docker & Linux", category: "DevOps & Server" },
              { name: "Tailwind CSS", category: "Modern UI/UX" },
            ].map((tech, tIdx) => (
              <div
                key={tIdx}
                className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col justify-center items-center hover:border-teal-500/30 transition-all"
              >
                <span className="text-sm font-medium text-white mb-1">
                  {tech.name}
                </span>
                <span className="text-[11px] font-mono text-zinc-400">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
