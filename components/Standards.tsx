import React from "react";
import { FileCheck2, LockKeyhole, Braces, KeyRound, Eye, Headset } from "lucide-react";

const standards = [
  {
    icon: FileCheck2,
    title: "Perjanjian Kerahasiaan (NDA)",
    description:
      "Kami menjamin kerahasiaan ide bisnis, database pelanggan, dan seluruh logika software Anda melalui Non-Disclosure Agreement resmi sebelum pengerjaan dimulai.",
  },
  {
    icon: LockKeyhole,
    title: "Keamanan Sejak Awal",
    description:
      "Sistem dirancang untuk mengurangi risiko SQL injection, cross-site scripting (XSS), brute force, dan kebocoran endpoint API, dengan enkripsi data standar industri.",
  },
  {
    icon: Braces,
    title: "Kode Bersih & Mudah Dirawat",
    description:
      "Kode ditulis dengan struktur terorganisir, arsitektur modular, dan dokumentasi lengkap agar mudah dilanjutkan atau dikembangkan di masa mendatang.",
  },
];

const commitments = [
  {
    icon: KeyRound,
    title: "Hak milik penuh",
    description:
      "Seluruh kode program, repositori Git, akun cloud, dan akses database menjadi aset perusahaan Anda.",
  },
  {
    icon: Eye,
    title: "Transparan",
    description:
      "Lingkup kerja, timeline, dan biaya disepakati di awal tanpa biaya tersembunyi.",
  },
  {
    icon: Headset,
    title: "Pendampingan",
    description:
      "Dukungan teknis berkelanjutan setelah serah terima, termasuk masa garansi perbaikan bug.",
  },
];

export default function Standards() {
  return (
    <section id="standards" className="border-t border-slate-200 bg-slate-100/70 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="mb-4 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
            Standar kerja kami
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Komitmen profesionalitas yang berlaku di setiap proyek yang kami
            kerjakan.
          </p>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {standards.map(({ icon: Icon, ...std }) => (
            <div key={std.title} className="border-l-2 border-brand-700 pl-5">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-800"><Icon className="h-5 w-5" strokeWidth={1.6} /></span>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                {std.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {std.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-slate-300 pt-8 sm:grid-cols-3">
          {commitments.map(({ icon: Icon, ...item }) => (
            <div key={item.title}>
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-800"><Icon className="h-4 w-4" strokeWidth={1.6} /></div>
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
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
