import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Pengembangan perangkat lunak kustom sesuai workflow bisnis Anda: sistem automasi internal, platform SaaS, dashboard monitoring, hingga ERP/CRM modular.",
    points: ["Integrasi API & payment gateway", "Arsitektur aman & modular"],
  },
  {
    title: "Jasa WebView Android",
    description:
      "Konversi website menjadi aplikasi Android resmi (APK & AAB) siap rilis ke Google Play Store, lengkap dengan push notification, kamera, dan file upload.",
    points: ["Play Store ready", "Pengerjaan 1–2 hari"],
  },
  {
    title: "Company Profile Modern",
    description:
      "Website profil korporat dengan struktur SEO on-page optimal, performa cepat, dan terhubung langsung ke WhatsApp tim sales Anda.",
    points: ["Core Web Vitals optimal", "Schema markup & meta dinamis"],
  },
  {
    title: "Custom Android Apps",
    description:
      "Aplikasi Android native (Kotlin) atau cross-platform (Flutter) dengan performa stabil dan dukungan sinkronisasi data offline.",
    points: ["MVVM / clean architecture", "Database offline-first"],
  },
  {
    title: "Kelola Server & DevOps",
    description:
      "Setup, hardening keamanan, tuning kecepatan, dan pemeliharaan server VPS/dedicated (Ubuntu, Debian, AlmaLinux) untuk menjaga uptime bisnis Anda.",
    points: ["Hardening & Fail2ban", "Nginx / reverse proxy & backup"],
  },
  {
    title: "Maintenance & SLA",
    description:
      "Pemantauan server berkala, security update, backup terenkripsi, dan pendampingan teknis jangka panjang untuk kelancaran operasional.",
    points: ["Monitoring berkala", "Respons darurat prioritas"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Layanan yang kami kerjakan
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Dikerjakan langsung oleh software engineer berpengalaman — dari
            sistem inti perusahaan, aplikasi mobile, hingga infrastruktur server.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-7 flex flex-col justify-between hover:bg-slate-50 transition-colors"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-slate-700 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-600 shrink-0" />
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
