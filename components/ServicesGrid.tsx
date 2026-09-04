import React from "react";
import Link from "next/link";
import {
  Code,
  Globe,
  Smartphone,
  Server,
  Layers,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      num: "01",
      icon: Code,
      title: "Custom Software Development",
      highlight: "Sistem tailor-made sesuai alur bisnis",
      description:
        "Pengembangan software internal, automasi workflow, SaaS platform, ERP/CRM modular, serta integrasi API third-party yang fleksibel dan terukur.",
      features: [
        "Arsitektur modular & clean code",
        "Integrasi payment gateway, ERP & WhatsApp API",
        "Database optimization & real-time sync",
      ],
      tag: "Enterprise & Startup",
    },
    {
      num: "02",
      icon: Globe,
      title: "Company Profile & Modern Web",
      highlight: "Tampilan berkelas, cepat & SEO-ready",
      description:
        "Website perusahaan, portofolio eksekutif, dan landing page konversi tinggi yang cepat, responsif, dan mudah dikelola.",
      features: [
        "Skor Google Lighthouse 95+",
        "Struktur halaman cepat & instant load",
        "Optimasi SEO on-page & dynamic OpenGraph",
      ],
      tag: "Branding & Leads",
    },
    {
      num: "03",
      icon: Smartphone,
      title: "Custom Android Apps",
      highlight: "Aplikasi mobile andal & modern",
      description:
        "Pengembangan aplikasi Android native (Kotlin) atau cross-platform (Flutter/React Native) dengan antarmuka halus, offline-first sync, dan performa tinggi.",
      features: [
        "UI/UX mulus 60-120fps",
        "Sinkronisasi data offline & background task",
        "Siap rilis Google Play Store",
      ],
      tag: "Native & Cross-Platform",
    },
    {
      num: "04",
      icon: Layers,
      title: "Jasa Pembuatan WebView Android",
      highlight: "Ubah website Anda jadi App Android",
      description:
        "Solusi cepat & hemat mengubah website atau web-app menjadi aplikasi Android (APK & AAB) dengan fitur layaknya native app.",
      features: [
        "Push Notification (OneSignal / Firebase)",
        "Penanganan Camera, File Upload, Geolocation",
        "Splash screen custom & offline fallback page",
        "Bantuan pembuatan Keystore & upload Play Store",
      ],
      tag: "Fast Turnaround",
    },
    {
      num: "05",
      icon: Server,
      title: "Kelola Server & DevOps",
      highlight: "Infrastruktur stabil, cepat & aman",
      description:
        "Setup, konfigurasi, optimasi, dan pemeliharaan server VPS / Dedicated (Ubuntu, Debian, AlmaLinux) dengan Nginx, Caddy, Docker, dan CI/CD automation.",
      features: [
        "Server hardening & firewall configuration",
        "Automasi daily/weekly encrypted backup",
        "Reverse proxy, SSL setup, & Nginx tuning",
        "Mitigasi DDoS & optimasi jaringan",
      ],
      tag: "24/7 Reliability",
    },
    {
      num: "06",
      icon: ShieldAlert,
      title: "Maintenance & SLA Support",
      highlight: "Pendampingan teknis jangka panjang",
      description:
        "Layanan pemeliharaan berkala untuk menjaga sistem, website, dan server Anda tetap up-to-date, bebas bug, dan aman dari kerentanan keamanan.",
      features: [
        "Security patching & dependency updates",
        "Server uptime & resource monitoring",
        "Guaranteed response time SLA",
      ],
      tag: "Long-term Partner",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header (Evozi style: 01 — What we build) */}
        <div className="mb-16 md:mb-20">
          <div className="font-mono text-xs uppercase tracking-widest text-teal-400 mb-3">
            01 — Layanan Rekayasa Digital
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight max-w-3xl">
            Solusi komprehensif. Dikerjakan dengan standar{" "}
            <span className="font-serif italic text-teal-300">
              presisi & performa tinggi.
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between group hover:border-teal-500/40"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-teal-400 group-hover:text-teal-300 group-hover:bg-teal-500/10 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 bg-zinc-900/80 px-2.5 py-1 rounded-md border border-white/5">
                        {service.tag}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-zinc-500 font-semibold">
                      {service.num}
                    </span>
                  </div>

                  {/* Title & Highlight */}
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-teal-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-teal-400/90 mb-4">
                    // {service.highlight}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-white/5">
                    {service.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-zinc-300 font-light"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA */}
                <Link
                  href={`#contact?topic=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white group/link transition-colors pt-2"
                >
                  <span>Konsultasikan Kebutuhan Ini</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 text-teal-400 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
