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
    <section id="services" className="border-t border-slate-200 bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
            Layanan yang kami kerjakan
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Dikerjakan langsung oleh software engineer berpengalaman — dari
            sistem inti perusahaan, aplikasi mobile, hingga infrastruktur server.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {services.map(({ icon: Icon, ...service }) => (
            <div
              key={service.title}
              className="group grid grid-cols-[3rem_1fr] gap-4 border-t border-slate-200 py-7 sm:gap-5 sm:py-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-800 transition-colors group-hover:bg-brand-100">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div className="flex min-w-0 flex-col">
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-900">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <ul className="mb-5 flex flex-wrap gap-x-4 gap-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs font-medium text-slate-600"
                    >
                      <span className="h-1 w-1 rounded-full bg-brand-700" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-800 transition-colors group-hover:text-brand-950"
                >
                  Konsultasikan <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
