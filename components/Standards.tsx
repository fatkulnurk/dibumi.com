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
    <section id="standards" className="border-t border-slate-200/80 bg-white/65 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Dibangun dengan tanggung jawab</p>
          <h2 className="mb-4 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
            Standar kerja kami
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Komitmen profesionalitas yang berlaku di setiap proyek yang kami
            kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {standards.map(({ icon: Icon, ...std }) => (
            <div key={std.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><Icon className="h-5 w-5" /></span>
              <h3 className="mb-2 text-base font-bold text-slate-900">
                {std.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {std.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {commitments.map(({ icon: Icon, ...item }) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-700 shadow-sm"><Icon className="h-4 w-4" /></div>
              <h3 className="mb-2 text-sm font-bold text-slate-900">
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
