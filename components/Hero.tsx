import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Server, Smartphone, Cpu, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Grid & Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-40 pointer-events-none">
        <div className="w-[600px] h-[350px] bg-gradient-to-tr from-teal-500/20 to-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-wider mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>Edge SSR Enabled • Ready for Scale</span>
          </div>

          {/* Evozi-style Headline with Italic Serif Accent */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.12] mb-8">
            We engineer{" "}
            <span className="font-serif italic font-normal text-teal-300">
              what&apos;s next.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mb-10">
            <strong className="text-zinc-200 font-medium">dibumi.com</strong> merancang,
            membangun, dan mengelola perangkat lunak berkinerja tinggi — dari{" "}
            <span className="text-zinc-200">Custom Software Enterprise</span>,{" "}
            <span className="text-zinc-200">Aplikasi Android & WebView Native</span>,{" "}
            <span className="text-zinc-200">Company Profile Modern</span>, hingga{" "}
            <span className="text-zinc-200">Server Management & DevOps</span> yang andal.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/10 group"
            >
              <span>Jelajahi Layanan Kami</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/15 text-zinc-300 font-medium text-sm hover:text-white hover:border-teal-500/50 hover:bg-zinc-800/80 transition-all"
            >
              <span>Konsultasi & Estimasi Biaya</span>
            </Link>
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-16 mt-16 border-t border-white/10 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-teal-400" />
              <span>Clean Codebase</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-cyan-400" />
              <span>Android & WebView</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-purple-400" />
              <span>Server & Hardening</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SLA Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
