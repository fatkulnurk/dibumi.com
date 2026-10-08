import React from "react";

const steps = [
  {
    step: "01",
    title: "Discovery & Analisis Kebutuhan",
    description:
      "Diskusi mendalam untuk memahami alur bisnis, target pengguna, dan spesifikasi fungsional sistem. Kami menyiapkan dokumen Scope of Work (SOW) yang jelas tanpa biaya tersembunyi.",
  },
  {
    step: "02",
    title: "Desain Sistem & Arsitektur",
    description:
      "Perancangan struktur database, arsitektur API, prototipe antarmuka UI/UX, dan penentuan spesifikasi server agar sistem siap menampung trafik tinggi.",
  },
  {
    step: "03",
    title: "Pengembangan & Quality Assurance",
    description:
      "Proses koding dengan standar clean code dan version control Git. Setiap modul diuji secara ketat sebelum diserahkan: fungsionalitas, keamanan data, dan uji beban.",
  },
  {
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
      className="py-20 md:py-28 border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Alur kerja yang terstruktur
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Metode agile yang transparan, sehingga Anda dapat memantau progres
            proyek secara berkala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="pt-6 border-t border-slate-200">
              <span className="text-sm font-semibold text-brand-700">
                {item.step}
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-3 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
