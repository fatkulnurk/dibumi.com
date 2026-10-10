import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-sm pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 text-slate-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 shadow-md shadow-brand-900/20">
                <span className="text-xs font-extrabold tracking-tight text-white">db</span>
              </span>
              <span className="font-bold text-base tracking-tight">
                dibumi<span className="text-brand-600">.com</span>
              </span>
            </Link>
            <p className="text-slate-600 leading-relaxed max-w-sm">
              Software house &amp; konsultan IT berbasis di Surabaya, Indonesia.
              Kami membantu bisnis dari UKM hingga korporat membangun software
              berkualitas tinggi, aplikasi mobile, dan infrastruktur cloud yang
              tangguh.
            </p>
            <p className="text-slate-500 text-xs">
              Surabaya, Jawa Timur — Indonesia
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-sm font-semibold text-slate-900">
              Layanan
            </div>
            <ul className="space-y-2 text-slate-600">
              <li>
                <Link href="#services" className="hover:text-brand-700 transition-colors">
                  Custom Software Enterprise
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-700 transition-colors">
                  Jasa WebView Android
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-700 transition-colors">
                  Website Company Profile
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-700 transition-colors">
                  Kelola Server &amp; DevOps
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="text-sm font-semibold text-slate-900">
              Perusahaan
            </div>
            <ul className="space-y-2 text-slate-600">
              <li>
                <Link href="#methodology" className="hover:text-brand-700 transition-colors">
                  Metodologi
                </Link>
              </li>
              <li>
                <Link href="#standards" className="hover:text-brand-700 transition-colors">
                  Standar Kerja
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-brand-700 transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="text-sm font-semibold text-slate-900">Kontak</div>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a
                  href="mailto:fatkul@dibumi.com"
                  className="hover:text-brand-700 transition-colors"
                >
                  fatkul@dibumi.com
                </a>
              </li>
              <li>
                <Link href="#contact" className="hover:text-brand-700 transition-colors">
                  Konsultasi WhatsApp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} dibumi.com. Hak cipta dilindungi
            undang-undang.
          </div>
          <div>Surabaya, Jawa Timur, Indonesia.</div>
        </div>
      </div>
    </footer>
  );
}
