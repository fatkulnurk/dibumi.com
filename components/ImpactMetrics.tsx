import React from "react";
import { Gauge, Server, Shield, Globe2, Cpu, CheckCircle2, Lock, Sparkles } from "lucide-react";

export default function ImpactMetrics() {
  const metrics = [
    {
      value: "99.9%",
      label: "Uptime SLA Garansi",
      description: "Pemantauan server & monitoring kesehatan sistem secara berkelanjutan 24/7.",
      icon: Server,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      value: "100/100",
      label: "Google Lighthouse Score",
      description: "Optimasi Core Web Vitals untuk kecepatan akses instan dan ranking SEO maksimal.",
      icon: Gauge,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      value: "< 45ms",
      label: "Global Edge Latency",
      description: "Didukung jaringan Cloudflare Edge global di 300+ kota di seluruh dunia.",
      icon: Globe2,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      value: "100%",
      label: "Full Source Code Ownership",
      description: "Seluruh hak cipta kode, repositori Git, dan akses server menjadi milik Anda.",
      icon: Shield,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
    },
  ];

  return (
    <section id="impact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span>03 — Performance & Standards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.15]">
            Tolok ukur keandalan teknis.{" "}
            <span className="font-serif italic font-normal text-teal-300">
              Transparan & teruji.
            </span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const IconComp = metric.icon;
            return (
              <div
                key={idx}
                className="bento-card p-8 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className={`p-2.5 rounded-xl ${metric.bg} border border-white/5 w-fit ${metric.color} mb-6`}>
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

        {/* Architecture & Engineering Standards Matrix */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <Lock className="w-4 h-4 text-teal-400" />
                <span>Security First Architecture</span>
              </div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Setiap endpoint API dan query database diamankan dari SQL injection, XSS, SSRF, 
                serta dilengkapi sistem rate limiting dan brute-force prevention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Zero-Lag Native Mobile</span>
              </div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Aplikasi Android (baik Native maupun WebView) dioptimasi dengan memory-leak prevention, 
                hardware acceleration, dan rendering 60-120fps yang mulus.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>NDA & Direct Communication</span>
              </div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Kerahasiaan source code terjamin penuh dengan kontrak NDA resmi. 
                Komunikasi teknis langsung tanpa perantara sales rumit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
