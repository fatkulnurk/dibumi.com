import React from "react";
import Link from "next/link";
import { MapPin, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-brand-950/20 bg-slate-950 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Identity & Surabaya Anchor */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 text-white font-bold text-lg tracking-tight"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-400 flex items-center justify-center">
                <span className="font-mono text-xs font-black text-white">db</span>
              </div>
              <span>
                dibumi<span className="text-brand-400">.com</span>
              </span>
            </Link>
            <p className="text-slate-400 font-normal leading-relaxed max-w-sm">
              Perusahaan software house &amp; konsultan IT berbasis di Surabaya, Indonesia. Kami membantu bisnis berskala UKM hingga korporat membangun software berkualitas tinggi, aplikasi mobile, dan infrastruktur cloud yang tangguh.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-brand-400 pt-2">
              <MapPin className="w-4 h-4 text-brand-400" />
              <span>Surabaya, Jawa Timur — Indonesia</span>
            </div>
          </div>

          {/* Layanan Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Layanan Spesialis
            </div>
            <ul className="space-y-2 font-normal">
              <li>
                <Link href="#services" className="hover:text-brand-300 transition-colors">
                  Custom Software Enterprise
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-300 transition-colors">
                  Jasa Pembuatan WebView Android
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-300 transition-colors">
                  Website Company Profile Korporat
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-300 transition-colors">
                  Kelola Server &amp; DevOps Hardening
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-300 transition-colors">
                  Aplikasi Mobile Android Native
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigasi Korporat */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Perusahaan
            </div>
            <ul className="space-y-2 font-normal">
              <li>
                <Link href="#methodology" className="hover:text-brand-300 transition-colors">
                  Metodologi Kerja
                </Link>
              </li>
              <li>
                <Link href="#estimator" className="hover:text-brand-300 transition-colors">
                  Kalkulator Scope
                </Link>
              </li>
              <li>
                <Link href="#standards" className="hover:text-brand-300 transition-colors">
                  Standar Kualitas &amp; NDA
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-brand-300 transition-colors">
                  Technical Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak & Lokasi */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Kontak Resmi
            </div>
            <ul className="space-y-2 font-normal">
              <li>
                <a href="mailto:halo@dibumi.com" className="hover:text-brand-300 transition-colors font-mono">
                  halo@dibumi.com
                </a>
              </li>
              <li>
                <Link href="#contact" className="hover:text-brand-300 transition-colors">
                  Konsultasi WhatsApp
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Surabaya / Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-slate-500">
          <div>
            © {new Date().getFullYear()} dibumi.com. Hak cipta dilindungi undang-undang.
          </div>
          <div className="text-slate-500">
            Perusahaan Software House &amp; Konsultan IT — Surabaya, Jawa Timur, Indonesia.
          </div>
        </div>
      </div>
    </footer>
  );
}
