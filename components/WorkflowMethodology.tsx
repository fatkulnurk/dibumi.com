import React from "react";
import { MessageSquareCode, Compass, Code, Rocket, CheckCircle } from "lucide-react";

export default function WorkflowMethodology() {
  const steps = [
    {
      step: "01",
      icon: MessageSquareCode,
      title: "Discovery & Analisis Kebutuhan",
      description:
        "Diskusi mendalam untuk memahami alur bisnis, target pengguna, dan spesifikasi fungsional sistem. Kami menyiapkan dokumen Scope of Work (SOW) yang jelas tanpa biaya tersembunyi.",
    },
    {
      step: "02",
      icon: Compass,
      title: "Desain Sistem & Arsitektur",
      description:
        "Perancangan struktur database, arsitektur API, prototipe antarmuka UI/UX, dan penentuan spesifikasi server untuk memastikan sistem siap menampung trafik tinggi.",
    },
    {
      step: "03",
      icon: Code,
      title: "Pengembangan & Quality Assurance",
      description:
        "Proses koding dengan standar clean code dan version control Git. Setiap modul diuji secara ketat (fungsionalitas, keamanan data, dan uji beban) sebelum diserahkan.",
    },
    {
      step: "04",
      icon: Rocket,
      title: "Deployment, Training & Garansi",
      description:
        "Peluncuran sistem ke server produksi atau rilis ke Google Play Store, serah terima full source code, panduan penggunaan, serta masa garansi bug-free resmi.",
    },
  ];

  return (
    <section id="methodology" className="py-24 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 text-brand-800 font-mono text-xs font-semibold uppercase tracking-widest mb-4">
            <span>02 — Metodologi Kerja</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Alur kerja terstruktur.{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-cyan-600">
              Hasil tepat waktu dan terukur.
            </span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Kami menerapkan metode agile yang transparan sehingga Anda dapat memantau progres pengerjaan proyek secara berkala tanpa rasa khawatir.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-brand-50/40 border border-brand-200/60 flex flex-col justify-between hover:bg-white hover:border-brand-500/40 hover:shadow-soft-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-brand-700/80 group-hover:text-brand-600 transition-colors">
                      {item.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white border border-brand-200/80 text-brand-700 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-100 flex items-center gap-1.5 text-xs font-semibold text-brand-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Tahap {item.step} Selesai &amp; Ditinjau</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
