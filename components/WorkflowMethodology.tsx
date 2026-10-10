import React from "react";
import { Search, PanelsTopLeft, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Analisis Kebutuhan",
    description:
      "Diskusi mendalam untuk memahami alur bisnis, target pengguna, dan spesifikasi fungsional sistem. Kami menyiapkan dokumen Scope of Work (SOW) yang jelas tanpa biaya tersembunyi.",
  },
  {
    icon: PanelsTopLeft,
    step: "02",
    title: "Desain Sistem & Arsitektur",
    description:
      "Perancangan struktur database, arsitektur API, prototipe antarmuka UI/UX, dan penentuan spesifikasi server agar sistem siap menampung trafik tinggi.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Pengembangan & Quality Assurance",
    description:
      "Proses koding dengan standar clean code dan version control Git. Setiap modul diuji secara ketat sebelum diserahkan: fungsionalitas, keamanan data, dan uji beban.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deployment, Training & Garansi",
    description:
      "Peluncuran sistem ke server produksi atau rilis ke Google Play Store, serah terima full source code, panduan penggunaan, serta masa garansi bug-free.",
  },
];

export default function WorkflowMethodology() {
  return (
    <section
      id="methodology"
      className="border-t border-slate-200 py-20 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="mb-4 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
            Alur kerja yang terstruktur
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Metode agile yang transparan, sehingga Anda dapat memantau progres
            proyek secara berkala.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, ...item }) => (
            <div key={item.step} className="border-t border-slate-300 py-6 md:py-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="font-mono text-sm font-semibold text-slate-300">{item.step}</span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
