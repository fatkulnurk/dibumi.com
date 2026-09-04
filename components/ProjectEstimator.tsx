"use client";

import React, { useState } from "react";
import {
  Layers,
  Globe,
  Server,
  Code2,
  Smartphone,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Check,
} from "lucide-react";

interface OptionItem {
  id: string;
  name: string;
  category: string;
  days: number;
  description: string;
  recommended?: boolean;
}

export default function ProjectEstimator() {
  const options: OptionItem[] = [
    {
      id: "webview",
      name: "Jasa Pembuatan WebView Android (Play Store Ready)",
      category: "Mobile",
      days: 2,
      description: "Konversi website ke APK & AAB bertanda tangan digital resmi, OneSignal push notification, camera/upload handler, Keystore, siap upload Google Play.",
      recommended: true,
    },
    {
      id: "company-web",
      name: "Website Company Profile Korporat",
      category: "Web",
      days: 5,
      description: "Desain eksklusif profesional, skor Google Core Web Vitals 95+, struktur SEO on-page, mobile-responsive, dan form WhatsApp terintegrasi.",
      recommended: true,
    },
    {
      id: "server-hardening",
      name: "Kelola Server & DevOps Hardening",
      category: "DevOps",
      days: 2,
      description: "Setup VPS/Dedicated Linux (Ubuntu/Debian), Nginx/Caddy reverse proxy, Docker stack, firewall UFW, SSL otomatis, dan daily backup automasi.",
    },
    {
      id: "custom-software",
      name: "Custom Software Enterprise & API Backend",
      category: "Backend",
      days: 14,
      description: "Sistem aplikasi kustom sesuai workflow bisnis, integrasi payment gateway (Midtrans/Xendit), WhatsApp API resmi, dan hak milik source code 100%.",
    },
    {
      id: "android-native",
      name: "Aplikasi Mobile Android Native (Kotlin/Flutter)",
      category: "Mobile",
      days: 18,
      description: "Aplikasi Android native/cross-platform performa tinggi, database lokal offline-first, animasi 60-120fps, dan arsitektur MVVM bersih.",
    },
    {
      id: "sla-support",
      name: "Monthly SLA & Maintenance Support",
      category: "Support",
      days: 0,
      description: "Pemantauan server 24/7, security update berkala, backup terenkripsi, dan jaminan penanganan masalah darurat prioritas.",
    },
  ];

  const [selectedIds, setSelectedIds] = useState<string[]>(["webview", "company-web"]);
  const [clientName, setClientName] = useState("");
  const [companyName, setCompanyName] = useState("");

  const toggleOption = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedItems = options.filter((opt) => selectedIds.includes(opt.id));
  const totalDays = selectedItems.reduce((acc, curr) => acc + curr.days, 0);

  const generateWhatsAppUrl = () => {
    const itemsList = selectedItems.map((s, idx) => `${idx + 1}. ${s.name}`).join("\n");
    const message = `Halo Tim Engineer dibumi.com Surabaya,\n\nSaya ingin konsultasi dan meminta penawaran resmi untuk proyek:\n\n*Nama:* ${clientName || "-"}\n*Instansi/Perusahaan:* ${companyName || "-"}\n\n*Layanan yang Dipilih:*\n${itemsList || "- (Belum ada pilihan)"}\n\n*Estimasi Timeline:* ±${totalDays} hari kerja\n\nMohon info ketersediaan slot pengerjaan dan prosedur kerjasamanya. Terima kasih!`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="estimator" className="py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 text-brand-800 font-mono text-xs font-semibold uppercase tracking-widest mb-4">
            <span>03 — Kalkulator Scope Proyek</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Rancang kebutuhan sistem Anda.{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-cyan-600">
              Dapatkan estimasi instan.
            </span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Pilih modul layanan yang Anda perlukan di bawah ini. Sistem kami akan mengakumulasikan estimasi timeline dan menyiapkan draf konsultasi via WhatsApp resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Checklist (7 Cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {options.map((opt) => {
              const isSelected = selectedIds.includes(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleOption(opt.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer select-none flex items-start justify-between gap-4 ${
                    isSelected
                      ? "bg-white border-brand-500 shadow-soft-md ring-1 ring-brand-500/20"
                      : "bg-white/80 border-slate-200/80 hover:border-brand-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 transition-colors ${
                        isSelected
                          ? "bg-brand-600 text-white"
                          : "border border-slate-300 bg-slate-50"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-slate-900">
                          {opt.name}
                        </span>
                        {opt.recommended && (
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-brand-100 text-brand-800">
                            Paling Diminati
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {opt.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="text-xs font-mono font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-200/70">
                      {opt.days > 0 ? `±${opt.days} Hari` : "Bulanan"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scope Summary & WhatsApp Action (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="enterprise-card rounded-2xl p-7 bg-white shadow-soft-lg">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-brand-600" />
                  <span>Ringkasan Rencana Proyek</span>
                </div>
                <span className="text-xs font-mono font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                  {selectedItems.length} Layanan Dipilih
                </span>
              </div>

              {/* Selected Items List */}
              <div className="space-y-2 mb-6 max-h-48 overflow-y-auto pr-1">
                {selectedItems.length === 0 ? (
                  <p className="text-xs text-slate-400 italic">
                    Silakan centang minimal 1 layanan di sebelah kiri untuk melihat estimasi.
                  </p>
                ) : (
                  selectedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-xs text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 font-medium"
                    >
                      <span className="truncate max-w-[220px]">{item.name}</span>
                      <span className="font-mono text-brand-700 font-bold text-[11px] shrink-0">
                        {item.days > 0 ? `${item.days}h` : "SLA"}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Timeline Banner */}
              <div className="p-4 rounded-xl bg-brand-50/70 border border-brand-200/70 mb-5">
                <div className="text-[11px] font-mono text-brand-800 uppercase tracking-wider font-semibold mb-1">
                  Estimasi Waktu Pengerjaan Total:
                </div>
                <div className="text-3xl font-extrabold text-slate-900 font-mono flex items-baseline gap-2">
                  <span>±{totalDays}</span>
                  <span className="text-sm font-sans text-brand-700 font-bold">
                    Hari Kerja
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  *Waktu disesuaikan dengan kelengkapan materi dan kompleksitas alur bisnis.
                </p>
              </div>

              {/* Client Info Inputs */}
              <div className="space-y-3 mb-5">
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nama Anda:
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Bpk. Heru"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nama Perusahaan / Bisnis:
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: PT Sumber Makmur"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  />
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasikan Estimasi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
