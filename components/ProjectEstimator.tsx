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
      name: "Jasa WebView Android (Play Store Ready)",
      category: "Mobile",
      days: 2,
      description: "Konversi web ke APK & AAB, Push Notification OneSignal, camera/upload handler, Keystore.",
      recommended: true,
    },
    {
      id: "company-web",
      name: "Company Profile Modern",
      category: "Web",
      days: 5,
      description: "Website perusahaan cepat, mudah ditemukan, responsif, dan siap menjadi pusat informasi bisnis Anda.",
      recommended: true,
    },
    {
      id: "server-hardening",
      name: "Kelola Server & Hardening DevOps",
      category: "DevOps",
      days: 2,
      description: "Setup Ubuntu/Debian, Nginx/Caddy reverse proxy, Docker, SSL otomatis, UFW firewall & backup.",
    },
    {
      id: "custom-software",
      name: "Custom Software / Microservices API",
      category: "Backend",
      days: 14,
      description: "Sistem custom modular, integrasi payment gateway / ERP / CRM, background queue jobs.",
    },
    {
      id: "android-native",
      name: "Custom Android App Native (Kotlin/Flutter)",
      category: "Mobile",
      days: 18,
      description: "Aplikasi mobile lengkap, offline-first sync, MVVM architecture, animasi halus 60-120fps.",
    },
    {
      id: "sla-support",
      name: "Monthly SLA & Maintenance Support",
      category: "Support",
      days: 0,
      description: "Monitoring server 24/7, patching keamanan rutin, garansi response time darurat.",
    },
  ];

  const [selectedIds, setSelectedIds] = useState<string[]>(["webview"]);
  const [clientName, setClientName] = useState("");

  const toggleOption = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedItems = options.filter((opt) => selectedIds.includes(opt.id));
  const totalDays = selectedItems.reduce((acc, curr) => acc + curr.days, 0);

  const generateWhatsAppUrl = () => {
    const itemsList = selectedItems.map((s) => `• ${s.name}`).join("\n");
    const message = `Halo tim dibumi.com, saya ${clientName ? clientName : "ingin"} menanyakan estimasi proyek:\n\n*Pilihan Layanan:*\n${itemsList || "• (Belum memilih)"}\n\n*Estimasi Timeline:* ±${totalDays} hari kerja\n\nMohon info ketersediaan slot dan penawaran resminya. Terima kasih!`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="estimator" className="py-24 md:py-32 bg-zinc-950/80 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span>02 — Interactive Scope Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.15] mb-4">
            Rancang kebutuhan proyek Anda.{" "}
            <span className="font-serif italic font-normal text-teal-300">
              Dapatkan estimasi instan.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Pilih komponen sistem yang Anda butuhkan di bawah ini untuk melihat estimasi waktu
            pengerjaan dan langsung terhubung dengan technical consultant kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Selector (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            {options.map((opt) => {
              const isSelected = selectedIds.includes(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleOption(opt.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer select-none flex items-start justify-between gap-4 ${
                    isSelected
                      ? "bg-zinc-900/90 border-teal-500/50 shadow-lg shadow-teal-500/10"
                      : "bg-zinc-900/30 border-white/5 hover:border-white/15 hover:bg-zinc-900/50"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 transition-colors ${
                        isSelected
                          ? "bg-teal-400 text-black"
                          : "border border-zinc-600 bg-zinc-900"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-white">
                          {opt.name}
                        </span>
                        {opt.recommended && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                            Populer
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/20">
                      {opt.days > 0 ? `±${opt.days} Hari` : "Bulanan"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Estimation Summary Box (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bento-card p-8 border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-teal-400" />
                  <span>Ringkasan Estimasi</span>
                </div>
                <span className="text-xs font-mono text-teal-400">
                  {selectedItems.length} Item Terpilih
                </span>
              </div>

              {/* Selected List */}
              <div className="space-y-2.5 mb-6 max-h-48 overflow-y-auto pr-1">
                {selectedItems.length === 0 ? (
                  <p className="text-xs text-zinc-500 font-light italic">
                    Silakan centang minimal 1 layanan di sebelah kiri.
                  </p>
                ) : (
                  selectedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-xs text-zinc-300 bg-zinc-900/60 p-2.5 rounded-lg border border-white/5"
                    >
                      <span className="truncate max-w-[200px]">{item.name}</span>
                      <span className="font-mono text-teal-400 text-[11px] shrink-0">
                        {item.days > 0 ? `${item.days}h` : "SLA"}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Timeline Gauge */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 mb-6">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Estimasi Total Timeline Pengerjaan:
                </div>
                <div className="text-3xl font-light text-white font-mono flex items-baseline gap-2">
                  <span>±{totalDays}</span>
                  <span className="text-sm font-sans text-teal-300 font-normal">
                    Hari Kerja
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 font-light mt-1">
                  *Waktu dapat disesuaikan dengan skala kompleksitas dan antrian proyek.
                </p>
              </div>

              {/* Client Name Input for Direct WhatsApp */}
              <div className="mb-5">
                <label className="block text-[11px] font-mono text-zinc-300 uppercase tracking-wider mb-2">
                  Nama Anda (Opsional):
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Rudi / PT Maju Digital"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-teal-500 transition"
                />
              </div>

              {/* WhatsApp Trigger Button */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 shimmer-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasikan Estimasi Ini via WA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
