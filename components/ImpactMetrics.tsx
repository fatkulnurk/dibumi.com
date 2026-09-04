import React from "react";
import { Gauge, Server, Shield, Globe2, Cpu, CheckCircle2, Lock, FileCheck } from "lucide-react";

export default function ImpactMetrics() {
  const metrics = [
    {
      value: "99.9%",
      label: "Garansi Uptime SLA",
      description: "Infrastruktur server dipantau secara berkala untuk meminimalisir downtime operasional bisnis.",
      icon: Server,
      color: "text-brand-700",
      bg: "bg-brand-50 border-brand-200",
    },
    {
      value: "95+",
      label: "Skor Core Web Vitals",
      description: "Setiap website dioptimasi agar memuat sangat cepat, ramah pengguna mobile, dan berperingkat tinggi di Google.",
      icon: Gauge,
      color: "text-emerald-700",
      bg: "bg-emerald-50 border-emerald-200",
    },
    {
      value: "100%",
      label: "Hak Milik Source Code",
      description: "Seluruh kode program, akun cloud, repositori Git, dan akses database sepenuhnya menjadi aset perusahaan Anda.",
      icon: Shield,
      color: "text-cyan-700",
      bg: "bg-cyan-50 border-cyan-200",
    },
    {
      value: "< 24 Jam",
      label: "SLA Response Darurat",
      description: "Tim teknis kami di Surabaya siap merespon kendala darurat sistem demi kelancaran operasional.",
      icon: CheckCircle2,
      color: "text-purple-700",
      bg: "bg-purple-50 border-purple-200",
    },
  ];

  const standards = [
    {
      title: "Perjanjian Kerahasiaan (NDA)",
      description: "Kami menjamin kerahasiaan ide bisnis, database pelanggan, dan seluruh logika software Anda melalui Non-Disclosure Agreement resmi sebelum pengerjaan dimulai.",
      icon: FileCheck,
    },
    {
      title: "Security-First Architecture",
      description: "Sistem dilindungi dari potensi serangan SQL Injection, Cross-Site Scripting (XSS), Brute Force, dan kebocoran endpoint API dengan enkripsi data standar industri.",
      icon: Lock,
    },
    {
      title: "Clean Code & Mudah Dirawat",
      description: "Kode program ditulis dengan struktur terorganisir, standar arsitektur modular, dan dokumentasi lengkap agar mudah dilanjutkan atau dikembangkan di masa mendatang.",
      icon: Cpu,
    },
  ];

  return (
    <section id="standards" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 text-brand-800 font-mono text-xs font-semibold uppercase tracking-widest mb-4">
            <span>04 — Standar Kualitas &amp; Legalitas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            Komitmen profesionalitas.{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-cyan-600">
              Aman, transparan, dan terpercaya.
            </span>
          </h2>
        </div>

        {/* 4 Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, idx) => {
            const IconComp = metric.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md hover:border-brand-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3 rounded-xl border w-fit ${metric.bg} ${metric.color} mb-6`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-mono mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-bold text-slate-800 tracking-wide mb-2">
                    {metric.label}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust & Legal Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-12 border-t border-slate-100">
          {standards.map((std, idx) => {
            const Icon = std.icon;
            return (
              <div key={idx} className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/70 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-brand-100 text-brand-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {std.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {std.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
