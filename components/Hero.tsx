import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const highlights = [
    "100% hak milik source code",
    "Garansi SLA & keamanan data",
    "Pengerjaan tepat waktu",
  ];

  return (
    <section className="pt-36 pb-20 md:pt-44 md:pb-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm text-slate-500 mb-6">
            Software house &amp; konsultan IT — Surabaya, Indonesia
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Rekayasa software andal untuk{" "}
            <span className="text-brand-700">pertumbuhan bisnis Anda.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">
            <strong className="text-slate-900 font-semibold">dibumi.com</strong>{" "}
            merancang sistem modular berkualitas tinggi: custom software
            enterprise, aplikasi Android native &amp; WebView, website korporat,
            hingga pengelolaan server Linux dan DevOps.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-16">
            <Link
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold"
            >
              <span>Konsultasi Gratis</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#services"
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold"
            >
              <span>Lihat Layanan</span>
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-slate-200 text-sm text-slate-600">
            {highlights.map((text, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
