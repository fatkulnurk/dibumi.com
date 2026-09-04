"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Server,
  Globe,
  Layers,
  ShieldCheck,
  ArrowUpRight,
  Bell,
  Camera,
  FolderUp,
  Lock,
  CheckCircle2,
  Zap,
  HardDrive,
  Check,
} from "lucide-react";

export default function BentoServices() {
  const [webViewFeature, setWebViewFeature] = useState<"notif" | "cam" | "offline">("notif");

  return (
    <section id="services" className="py-24 md:py-32 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 text-brand-800 font-mono text-xs font-semibold uppercase tracking-widest mb-4">
              <span>01 — Layanan Spesialis</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
              Solusi rekayasa digital lengkap.{" "}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-cyan-600">
                Presisi, terukur, dan bergaransi.
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            Dari sistem inti perusahaan, aplikasi mobile Play Store, hingga infrastruktur server Linux. Dikerjakan langsung oleh software engineer berpengalaman di Surabaya.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Custom Software Development (8 Cols) */}
          <div className="lg:col-span-8 enterprise-card rounded-2xl p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-brand-50 border border-brand-200/80 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition-all">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-700 font-semibold">
                      Enterprise Core System
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Custom Software Development
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-400 font-semibold bg-slate-100 px-3 py-1 rounded-md">
                  01 / 06
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Pengembangan perangkat lunak kustom yang dirancang tepat sesuai dengan workflow unik bisnis Anda. Cocok untuk sistem automasi internal, platform SaaS, integrasi antarsistem, dashboard monitoring eksekutif, dan ERP/CRM modular.
              </p>

              {/* Functional Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-brand-600 stroke-[3]" />
                    Integrasi API &amp; Payment Gateway
                  </div>
                  <p className="text-xs text-slate-500">
                    Koneksi otomatis ke Midtrans, Xendit, WhatsApp API resmi, dan ERP akuntansi.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-brand-600 stroke-[3]" />
                    Arsitektur Aman &amp; Modular
                  </div>
                  <p className="text-xs text-slate-500">
                    Clean code, role-based access control (RBAC), dan database teroptimasi untuk performa tinggi.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between pt-4 border-t border-slate-100 gap-3">
              <span className="text-xs font-medium text-slate-500">
                Deliverable: Full Source Code, Dokumentasi Teknis, &amp; Garansi Bug-Free
              </span>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-900 group-hover:translate-x-0.5 transition"
              >
                <span>Konsultasikan Kebutuhan Software</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Jasa Pembuatan WebView Android (4 Cols) */}
          <div className="lg:col-span-4 enterprise-card rounded-2xl p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200/80 text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-700 font-semibold">
                      Play Store Ready
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Jasa WebView Android
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-400 font-semibold bg-slate-100 px-3 py-1 rounded-md">
                  02 / 06
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                Konversi website atau web-application Anda menjadi aplikasi Android resmi (APK &amp; AAB) yang siap dirilis ke Google Play Store dalam hitungan hari kerja.
              </p>

              {/* Native Capabilities Switcher */}
              <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4 mb-6">
                <div className="text-[11px] font-mono text-slate-600 mb-2 font-semibold">
                  Fitur Native Termasuk:
                </div>
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  <button
                    onClick={() => setWebViewFeature("notif")}
                    className={`px-2 py-1.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition ${
                      webViewFeature === "notif"
                        ? "bg-brand-600 text-white shadow-sm"
                        : "bg-white text-slate-600 border border-slate-200"
                    }`}
                  >
                    <Bell className="w-3.5 h-3.5" />
                    <span>Notif</span>
                  </button>
                  <button
                    onClick={() => setWebViewFeature("cam")}
                    className={`px-2 py-1.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition ${
                      webViewFeature === "cam"
                        ? "bg-brand-600 text-white shadow-sm"
                        : "bg-white text-slate-600 border border-slate-200"
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Kamera</span>
                  </button>
                  <button
                    onClick={() => setWebViewFeature("offline")}
                    className={`px-2 py-1.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition ${
                      webViewFeature === "offline"
                        ? "bg-brand-600 text-white shadow-sm"
                        : "bg-white text-slate-600 border border-slate-200"
                    }`}
                  >
                    <FolderUp className="w-3.5 h-3.5" />
                    <span>Upload</span>
                  </button>
                </div>

                <div className="text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200 font-medium">
                  {webViewFeature === "notif" && (
                    <span className="text-brand-800">✓ Push Notification OneSignal / Firebase terpasang aktif</span>
                  )}
                  {webViewFeature === "cam" && (
                    <span className="text-cyan-800">✓ Izin kamera &amp; barcode scanner otomatis tertangani</span>
                  )}
                  {webViewFeature === "offline" && (
                    <span className="text-slate-800">✓ File uploader, splash screen &amp; layar offline fallback custom</span>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-200/60">
                Pengerjaan: 1–2 Hari
              </span>
              <Link
                href="#estimator"
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-brand-700 transition"
              >
                <span>Estimasi Paket</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Company Profile Korporat (4 Cols) */}
          <div className="lg:col-span-4 enterprise-card rounded-2xl p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold">
                      Branding &amp; Konversi
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Company Profile Modern
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-400 font-semibold bg-slate-100 px-3 py-1 rounded-md">
                  03 / 06
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Website profil korporat dengan visual eksklusif, kecepatan loading sekejap, struktur SEO on-page optimal, dan terhubung langsung ke WhatsApp tim sales Anda.
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Skor Google Core Web Vitals 95+ (Cepat &amp; Ringan)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Optimasi Mobile &amp; Desain Eksklusif Sesuai Brand</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Schema Markup JSON-LD &amp; Dynamic Meta Tags</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                Pengerjaan: 3–5 Hari
              </span>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-emerald-700 transition"
              >
                <span>Pesan Website</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 4: Custom Android Apps Native (4 Cols) */}
          <div className="lg:col-span-4 enterprise-card rounded-2xl p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-orange-50 border border-orange-200/80 text-orange-700 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-orange-700 font-semibold">
                      Mobile Engineering
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Custom Android Apps
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-400 font-semibold bg-slate-100 px-3 py-1 rounded-md">
                  04 / 06
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Pembuatan aplikasi Android native (Kotlin) atau cross-platform (Flutter) dengan performa stabil, animasi mulus 60-120fps, dan dukungan sinkronisasi data offline.
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Arsitektur MVVM / Clean Architecture Teruji</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Database Lokal Room / SQLite Offline-First</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Dukungan Upload &amp; Review Google Play Store</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-orange-800 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/60">
                Skalabilitas Tinggi
              </span>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-orange-700 transition"
              >
                <span>Konsultasi App</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 5: Kelola Server & DevOps Hardening (4 Cols) */}
          <div className="lg:col-span-4 enterprise-card rounded-2xl p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-50 border border-purple-200/80 text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-purple-700 font-semibold">
                      DevOps &amp; Security
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Kelola Server &amp; DevOps
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-400 font-semibold bg-slate-100 px-3 py-1 rounded-md">
                  05 / 06
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Setup, konfigurasi keamanan, tuning kecepatan, dan pemeliharaan server VPS / Dedicated (Ubuntu, Debian, AlmaLinux) untuk menjamin uptime bisnis Anda.
              </p>

              {/* Status checklist */}
              <div className="space-y-2 mb-6 text-xs font-mono">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-600 flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" /> Hardening &amp; Fail2ban
                  </span>
                  <span className="text-emerald-700 font-bold">Secure</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-600 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-brand-600" /> Nginx / Reverse Proxy
                  </span>
                  <span className="text-brand-700 font-bold">Tuned</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-600 flex items-center gap-2">
                    <HardDrive className="w-3.5 h-3.5 text-purple-600" /> Automated Daily Backup
                  </span>
                  <span className="text-purple-700 font-bold">Active</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-purple-800 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200/60">
                SLA Uptime 99.9%
              </span>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-purple-700 transition"
              >
                <span>Kelola Server</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
