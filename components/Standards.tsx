import React from "react";

const standards = [
  {
    title: "Perjanjian Kerahasiaan (NDA)",
    description:
      "Kami menjamin kerahasiaan ide bisnis, database pelanggan, dan seluruh logika software Anda melalui Non-Disclosure Agreement resmi sebelum pengerjaan dimulai.",
  },
  {
    title: "Keamanan Sejak Awal",
    description:
      "Sistem dirancang untuk mengurangi risiko SQL injection, cross-site scripting (XSS), brute force, dan kebocoran endpoint API, dengan enkripsi data standar industri.",
  },
  {
    title: "Kode Bersih & Mudah Dirawat",
    description:
      "Kode ditulis dengan struktur terorganisir, arsitektur modular, dan dokumentasi lengkap agar mudah dilanjutkan atau dikembangkan di masa mendatang.",
  },
];

const commitments = [
  {
    title: "Hak milik penuh",
    description:
      "Seluruh kode program, repositori Git, akun cloud, dan akses database menjadi aset perusahaan Anda.",
  },
  {
    title: "Transparan",
    description:
      "Lingkup kerja, timeline, dan biaya disepakati di awal tanpa biaya tersembunyi.",
  },
  {
    title: "Pendampingan",
    description:
      "Dukungan teknis berkelanjutan setelah serah terima, termasuk masa garansi perbaikan bug.",
  },
];

export default function Standards() {
  return (
    <section id="standards" className="py-20 md:py-28 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Standar kerja kami
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Komitmen profesionalitas yang berlaku di setiap proyek yang kami
            kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {standards.map((std) => (
            <div key={std.title}>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {std.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {std.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {commitments.map((item) => (
            <div key={item.title} className="bg-white p-7">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
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
