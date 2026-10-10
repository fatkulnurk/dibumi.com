import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Cloud,
  Code2,
  Database,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const highlights = [
  "100% hak milik source code",
  "Garansi SLA & keamanan data",
  "Pengerjaan tepat waktu",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 md:pt-40 md:pb-24">
      <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] opacity-70" />
      <div className="hero-glow pointer-events-none absolute -right-40 top-20 -z-10 h-[520px] w-[520px] rounded-full" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1.03fr_0.97fr] lg:gap-8">
        <div className="max-w-2xl">
          <div className="reveal-up mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3.5 py-2 text-xs font-semibold text-brand-900 shadow-sm sm:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand-400" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-600" />
            </span>
            Software house &amp; konsultan IT — Surabaya
          </div>

          <h1 className="reveal-up reveal-delay-1 text-[2.65rem] font-bold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[4.15rem]">
            Teknologi yang membawa bisnis{" "}
            <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-cyan-500 bg-clip-text text-transparent">
              melangkah lebih jauh.
            </span>
          </h1>

          <p className="reveal-up reveal-delay-2 mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <strong className="font-semibold text-slate-900">dibumi.com</strong>{" "}
            merancang software, aplikasi Android, website korporat, dan infrastruktur
            cloud yang membantu bisnis bekerja lebih cerdas.
          </p>

          <div className="reveal-up reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="btn-primary group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
            >
              Konsultasi Gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#services"
              className="btn-secondary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
            >
              Jelajahi layanan
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="reveal-up reveal-delay-3 mt-9 flex flex-wrap gap-x-5 gap-y-3 border-t border-slate-200/80 pt-6 text-xs font-medium text-slate-600 sm:text-sm">
            {highlights.map((text) => (
              <li key={text} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="h-3 w-3" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
          <div className="absolute inset-8 rounded-[2.5rem] bg-brand-200/50 blur-3xl" />
          <div className="hero-grid absolute inset-0 rounded-[2rem] opacity-50" />
          <div className="float-slow relative rounded-[2rem] border border-white/80 bg-white/70 p-3 shadow-[0_35px_90px_-35px_rgba(15,118,110,0.38)] backdrop-blur-xl sm:p-5">
            <div className="overflow-hidden rounded-[1.45rem] border border-slate-200/80 bg-slate-950">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-[10px] text-slate-400 sm:text-xs">dibumi.systems / overview</span>
                <Braces className="h-4 w-4 text-brand-300" />
              </div>

              <div className="relative min-h-[320px] overflow-hidden px-5 py-6 sm:min-h-[350px] sm:px-8 sm:py-8">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(13,148,136,0.22),transparent_58%)]" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 330" fill="none" aria-hidden="true">
                  <path className="draw-line" d="M95 166C145 166 145 96 205 96" stroke="#2dd4bf" strokeOpacity=".55" strokeWidth="1.5" />
                  <path className="draw-line" d="M295 96C355 96 355 166 405 166" stroke="#2dd4bf" strokeOpacity=".55" strokeWidth="1.5" />
                  <path className="draw-line" d="M250 142V208" stroke="#2dd4bf" strokeOpacity=".4" strokeWidth="1.5" />
                  <circle cx="95" cy="166" r="3" fill="#5eead4" />
                  <circle cx="405" cy="166" r="3" fill="#5eead4" />
                </svg>

                <div className="relative z-10 flex items-center justify-between text-[10px] font-medium text-slate-400 sm:text-xs">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Secure by design</span>
                  <span className="flex items-center gap-1.5 text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> All systems operational</span>
                </div>

                <div className="relative z-10 mx-auto mt-14 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-brand-300/30 bg-gradient-to-br from-brand-500 to-cyan-700 shadow-[0_0_60px_rgba(20,184,166,0.28)] sm:mt-16 sm:h-32 sm:w-32">
                  <div className="absolute inset-2 rounded-[1.5rem] border border-white/20" />
                  <Code2 className="h-12 w-12 text-white sm:h-14 sm:w-14" strokeWidth={1.5} />
                  <Sparkles className="absolute -right-2 -top-2 h-7 w-7 rounded-xl bg-white p-1.5 text-brand-700 shadow-lg" />
                </div>

                <div className="relative z-10 mt-6 text-center">
                  <p className="text-sm font-semibold text-white sm:text-base">Satu partner. Solusi menyeluruh.</p>
                  <p className="mt-1 text-xs text-slate-400">Dari ide hingga sistem siap berkembang.</p>
                </div>

                <div className="relative z-10 mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { icon: Database, label: "Software" },
                    { icon: Cloud, label: "Cloud" },
                    { icon: ShieldCheck, label: "Security" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.06] px-2 py-2.5 text-[10px] font-medium text-slate-300 sm:gap-2 sm:text-xs">
                      <Icon className="h-3.5 w-3.5 text-brand-300 sm:h-4 sm:w-4" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="float-fast absolute -left-4 top-[28%] flex items-center gap-2.5 rounded-2xl border border-white bg-white px-3 py-2.5 shadow-xl shadow-slate-900/10 sm:-left-8 sm:px-4 sm:py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><Zap className="h-4 w-4" /></span>
            <span><span className="block text-xs font-bold text-slate-900">Performa optimal</span><span className="block text-[10px] text-slate-500">Cepat. Stabil. Andal.</span></span>
          </div>

          <div className="float-slow absolute -right-2 bottom-[14%] flex items-center gap-2.5 rounded-2xl border border-white bg-white px-3 py-2.5 shadow-xl shadow-slate-900/10 sm:-right-5 sm:px-4 sm:py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><ShieldCheck className="h-4 w-4" /></span>
            <span><span className="block text-xs font-bold text-slate-900">Dibangun aman</span><span className="block text-[10px] text-slate-500">Data Anda terlindungi</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
