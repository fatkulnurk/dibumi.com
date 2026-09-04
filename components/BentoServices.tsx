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
  Terminal,
  Bell,
  Camera,
  FolderUp,
  Cpu,
  Zap,
  Lock,
  CheckCircle2,
  Activity,
  HardDrive,
} from "lucide-react";

export default function BentoServices() {
  const [activeTab, setActiveTab] = useState<"api" | "auth" | "db">("api");
  const [webViewFeature, setWebViewFeature] = useState<"notif" | "cam" | "offline">("notif");

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-mono text-xs uppercase tracking-widest mb-4">
              <span>01 — Capability Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.15]">
              Rekayasa software presisi tinggi.{" "}
              <span className="font-serif italic font-normal text-teal-300">
                Dirancang untuk skala global.
              </span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Setiap lini produk dan infrastruktur dibangun menggunakan arsitektur modular, 
            keamanan berlapis, dan performa Server-Side Rendering tanpa kompromi.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {/* Card 1: Custom Software Development (Large 8-col) */}
          <div className="lg:col-span-8 bento-card p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-teal-400">
                      Core Architecture
                    </span>
                    <h3 className="text-xl font-medium text-white">
                      Custom Software Development
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-zinc-500 font-semibold bg-zinc-900/80 px-2.5 py-1 rounded-md border border-white/5">
                  01 / 06
                </span>
              </div>

              <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                Pengembangan sistem enterprise tailor-made, workflow otomasi bisnis, arsitektur
                microservices berlatensi rendah, serta integrasi multi-API yang tangguh.
              </p>

              {/* Interactive Code Preview Box */}
              <div className="rounded-xl bg-zinc-950/80 border border-white/10 p-4 font-mono text-xs mb-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="flex gap-2 text-[11px]">
                    <button
                      onClick={() => setActiveTab("api")}
                      className={`px-2 py-0.5 rounded transition ${
                        activeTab === "api"
                          ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      api_router.ts
                    </button>
                    <button
                      onClick={() => setActiveTab("auth")}
                      className={`px-2 py-0.5 rounded transition ${
                        activeTab === "auth"
                          ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      security_layer.rs
                    </button>
                    <button
                      onClick={() => setActiveTab("db")}
                      className={`px-2 py-0.5 rounded transition ${
                        activeTab === "db"
                          ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      schema.sql
                    </button>
                  </div>
                </div>

                {activeTab === "api" && (
                  <div className="text-zinc-300 space-y-1 text-[11px] overflow-x-auto">
                    <p className="text-zinc-500">// High-throughput Edge Pipeline</p>
                    <p>
                      <span className="text-purple-400">export const</span>{" "}
                      <span className="text-teal-300">runtime</span> ={" "}
                      <span className="text-emerald-300">&apos;edge&apos;</span>;
                    </p>
                    <p>
                      <span className="text-purple-400">export async function</span>{" "}
                      <span className="text-blue-400">processOrder</span>(
                      <span className="text-orange-300">payload</span>:{" "}
                      <span className="text-teal-300">SecureTransaction</span>) &#123;
                    </p>
                    <p className="pl-4 text-zinc-400">
                      <span className="text-purple-400">const</span> verified ={" "}
                      <span className="text-purple-400">await</span> engine.verifyHMAC(payload);
                    </p>
                    <p className="pl-4 text-zinc-400">
                      <span className="text-purple-400">return</span> Response.json(&#123; status:{" "}
                      <span className="text-emerald-400">&apos;OK&apos;</span>, latencyMs: 12 &#125;);
                    </p>
                    <p>&#125;</p>
                  </div>
                )}

                {activeTab === "auth" && (
                  <div className="text-zinc-300 space-y-1 text-[11px] overflow-x-auto">
                    <p className="text-zinc-500">// Token Shield & Rate Limiting</p>
                    <p className="text-purple-400">fn validate_token(req: &amp;Request) -&gt; Result&lt;Claims, AuthError&gt; &#123;</p>
                    <p className="pl-4 text-zinc-400">rate_limiter.check_ip(req.client_ip())?;</p>
                    <p className="pl-4 text-zinc-400">jwt::decode_with_argon2(req.bearer_token())</p>
                    <p className="text-purple-400">&#125;</p>
                  </div>
                )}

                {activeTab === "db" && (
                  <div className="text-zinc-300 space-y-1 text-[11px] overflow-x-auto">
                    <p className="text-zinc-500">-- Automated Partitioning &amp; Indexing</p>
                    <p className="text-teal-300">CREATE TABLE enterprise_ledger (</p>
                    <p className="pl-4 text-zinc-400">id UUID PRIMARY KEY DEFAULT gen_random_uuid(),</p>
                    <p className="pl-4 text-zinc-400">amount NUMERIC(18,4) NOT NULL, metadata JSONB,</p>
                    <p className="pl-4 text-zinc-400">created_at TIMESTAMPTZ DEFAULT clock_timestamp()</p>
                    <p className="text-teal-300">) PARTITION BY RANGE (created_at);</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/5 gap-3">
              <div className="flex items-center gap-4 text-xs text-zinc-400 font-light">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  REST &amp; gRPC API
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  Payment Gateway
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  ERP / CRM Custom
                </span>
              </div>

              <Link
                href="#contact?service=custom-software"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-teal-300 group-hover:translate-x-0.5 transition"
              >
                <span>Konsultasi Arsitektur</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-teal-400" />
              </Link>
            </div>
          </div>

          {/* Card 2: Jasa Pembuatan WebView Android (4-col) */}
          <div className="lg:col-span-4 bento-card p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                      Mobile Conversion
                    </span>
                    <h3 className="text-lg font-medium text-white">
                      WebView Android Studio
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-zinc-500 font-semibold bg-zinc-900/80 px-2.5 py-1 rounded-md border border-white/5">
                  02 / 06
                </span>
              </div>

              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                Ubah website/web-app Anda menjadi aplikasi Android APK &amp; AAB resmi siap rilis Google Play Store.
              </p>

              {/* Interactive Phone Feature Switcher */}
              <div className="rounded-xl bg-zinc-950/90 border border-white/10 p-4 mb-6">
                <div className="text-[11px] font-mono text-zinc-400 mb-2">Native Capabilities:</div>
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  <button
                    onClick={() => setWebViewFeature("notif")}
                    className={`px-2 py-1.5 rounded-lg text-[11px] font-medium flex items-center justify-center gap-1 transition ${
                      webViewFeature === "notif"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        : "bg-white/5 text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Bell className="w-3 h-3" />
                    <span>Push</span>
                  </button>
                  <button
                    onClick={() => setWebViewFeature("cam")}
                    className={`px-2 py-1.5 rounded-lg text-[11px] font-medium flex items-center justify-center gap-1 transition ${
                      webViewFeature === "cam"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        : "bg-white/5 text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Camera className="w-3 h-3" />
                    <span>Camera</span>
                  </button>
                  <button
                    onClick={() => setWebViewFeature("offline")}
                    className={`px-2 py-1.5 rounded-lg text-[11px] font-medium flex items-center justify-center gap-1 transition ${
                      webViewFeature === "offline"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        : "bg-white/5 text-zinc-400 hover:text-white"
                    }`}
                  >
                    <FolderUp className="w-3 h-3" />
                    <span>Upload</span>
                  </button>
                </div>

                <div className="text-[11px] font-mono text-zinc-300 bg-zinc-900/60 p-2.5 rounded-lg border border-white/5">
                  {webViewFeature === "notif" && (
                    <span className="text-teal-300">✓ OneSignal &amp; Firebase Cloud Messaging terintegrasi</span>
                  )}
                  {webViewFeature === "cam" && (
                    <span className="text-cyan-300">✓ Permission Handler kamera &amp; barcode scanning support</span>
                  )}
                  {webViewFeature === "offline" && (
                    <span className="text-purple-300">✓ Multi-file picker &amp; offline custom fallback page</span>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400">
                Turnaround: 1-2 Hari
              </span>
              <Link
                href="#estimator"
                className="inline-flex items-center gap-1 text-xs font-medium text-white hover:text-cyan-300 transition"
              >
                <span>Estimasi Biaya</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
              </Link>
            </div>
          </div>

          {/* Card 3: Kelola Server & DevOps Hardening (4-col) */}
          <div className="lg:col-span-4 bento-card p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
                      DevOps &amp; Cloud
                    </span>
                    <h3 className="text-lg font-medium text-white">
                      Kelola Server &amp; Hardening
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-zinc-500 font-semibold bg-zinc-900/80 px-2.5 py-1 rounded-md border border-white/5">
                  03 / 06
                </span>
              </div>

              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                Manajemen VPS/Dedicated server (Ubuntu/Debian) dengan Nginx, Docker, UFW firewall, dan daily encrypted backup.
              </p>

              {/* Server Status Indicators */}
              <div className="space-y-2 mb-6 text-xs font-mono">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950/80 border border-white/5">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" /> SSH Key &amp; Fail2ban
                  </span>
                  <span className="text-emerald-400 font-semibold">Active</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950/80 border border-white/5">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-teal-400" /> Nginx / Caddy Proxy
                  </span>
                  <span className="text-teal-400 font-semibold">Tuned</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950/80 border border-white/5">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <HardDrive className="w-3.5 h-3.5 text-purple-400" /> Backup Automasi
                  </span>
                  <span className="text-purple-400 font-semibold">Daily Sync</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-purple-400">
                SLA Uptime 99.9%
              </span>
              <Link
                href="#contact?service=server-devops"
                className="inline-flex items-center gap-1 text-xs font-medium text-white hover:text-purple-300 transition"
              >
                <span>Setup Server</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
              </Link>
            </div>
          </div>

          {/* Card 4: Company Profile & Modern Web SSR (4-col) */}
          <div className="lg:col-span-4 bento-card p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                      High-Speed Web
                    </span>
                    <h3 className="text-lg font-medium text-white">
                      Company Profile Next.js 16
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-zinc-500 font-semibold bg-zinc-900/80 px-2.5 py-1 rounded-md border border-white/5">
                  04 / 06
                </span>
              </div>

              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                Landing page &amp; web profil korporat dengan Server-Side Rendering di edge global Cloudflare.
              </p>

              {/* Lighthouse Score Showcase */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 mb-6 flex items-center justify-around">
                <div className="text-center">
                  <div className="w-11 h-11 rounded-full border-2 border-emerald-400 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm mx-auto mb-1">
                    100
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">Performance</span>
                </div>
                <div className="text-center">
                  <div className="w-11 h-11 rounded-full border-2 border-emerald-400 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm mx-auto mb-1">
                    100
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">SEO Rank</span>
                </div>
                <div className="text-center">
                  <div className="w-11 h-11 rounded-full border-2 border-emerald-400 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm mx-auto mb-1">
                    100
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">Best Practice</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400">
                Core Web Vitals &lt; 0.8s
              </span>
              <Link
                href="#contact?service=company-profile"
                className="inline-flex items-center gap-1 text-xs font-medium text-white hover:text-emerald-300 transition"
              >
                <span>Mulai Proyek Web</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </Link>
            </div>
          </div>

          {/* Card 5: Custom Android Apps (4-col) */}
          <div className="lg:col-span-4 bento-card p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-orange-400">
                      Mobile Engineering
                    </span>
                    <h3 className="text-lg font-medium text-white">
                      Custom Android Native
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-zinc-500 font-semibold bg-zinc-900/80 px-2.5 py-1 rounded-md border border-white/5">
                  05 / 06
                </span>
              </div>

              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                Aplikasi Android Kotlin / Flutter dengan UI responsif, arsitektur MVVM / Clean Architecture, dan sinkronisasi offline.
              </p>

              <div className="space-y-2 mb-6 text-xs text-zinc-300 font-light">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>Kotlin Coroutines &amp; Flow State Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>SQLite / Room Offline-First Database</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>Google Play App Signing &amp; Publish Support</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-orange-400">
                Native &amp; Cross-Platform
              </span>
              <Link
                href="#contact?service=android-apps"
                className="inline-flex items-center gap-1 text-xs font-medium text-white hover:text-orange-300 transition"
              >
                <span>Konsultasi App</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
