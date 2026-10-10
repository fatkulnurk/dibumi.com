import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Globe2,
  AppWindow,
  Server,
  LifeBuoy,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Pengembangan perangkat lunak kustom sesuai workflow bisnis Anda: sistem automasi internal, platform SaaS, dashboard monitoring, hingga ERP/CRM modular.",
    points: ["Integrasi API & payment gateway", "Arsitektur aman & modular"],
  },
  {
    icon: Smartphone,
    title: "Jasa WebView Android",
    description:
      "Konversi website menjadi aplikasi Android resmi (APK & AAB) siap rilis ke Google Play Store, lengkap dengan push notification, kamera, dan file upload.",
    points: ["Play Store ready", "Pengerjaan 1–2 hari"],
  },
  {
    icon: Globe2,
    title: "Company Profile Modern",
    description:
      "Website profil korporat dengan struktur SEO on-page optimal, performa cepat, dan terhubung langsung ke WhatsApp tim sales Anda.",
    points: ["Core Web Vitals optimal", "Schema markup & meta dinamis"],
  },
  {
    icon: AppWindow,
    title: "Custom Android Apps",
    description:
      "Aplikasi Android native (Kotlin) atau cross-platform (Flutter) dengan performa stabil dan dukungan sinkronisasi data offline.",
    points: ["MVVM / clean architecture", "Database offline-first"],
  },
  {
    icon: Server,
    title: "Kelola Server & DevOps",
    description:
      "Setup, hardening keamanan, tuning kecepatan, dan pemeliharaan server VPS/dedicated (Ubuntu, Debian, AlmaLinux) untuk menjaga uptime bisnis Anda.",
    points: ["Hardening & Fail2ban", "Nginx / reverse proxy & backup"],
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & SLA",
    description:
      "Pemantauan server berkala, security update, backup terenkripsi, dan pendampingan teknis jangka panjang untuk kelancaran operasional.",
    points: ["Monitoring berkala", "Respons darurat prioritas"],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-slate-200/80 bg-white/65 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Apa yang kami kerjakan</p>
          <h2 className="mb-4 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
            Layanan yang kami kerjakan
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Dikerjakan langsung oleh software engineer berpengalaman — dari
            sistem inti perusahaan, aplikasi mobile, hingga infrastruktur server.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, ...service }, index) => (
            <div
              key={service.title}
              className="service-card flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-7"
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-cyan-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-xs text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="mb-3 text-lg font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                        <span className="h-1 w-1 rounded-full bg-brand-600" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
              >
                <span>Konsultasikan</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
