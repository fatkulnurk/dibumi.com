import React from "react";
import Link from "next/link";

export default function Footer({ edgeLocation = "Surabaya, Indonesia" }: { edgeLocation?: string }) {
  return (
    <footer className="border-t border-teal-900/20 bg-[#12343b] pt-16 pb-12 text-teal-100 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 text-white font-semibold text-base"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-400 border border-teal-200/30 flex items-center justify-center">
                <span className="font-mono text-xs text-white font-bold">db</span>
              </div>
              <span>
                dibumi<span className="text-teal-300">.com</span>
              </span>
            </Link>
            <p className="text-teal-100/70 font-light leading-relaxed max-w-sm">
              dibumi.com adalah perusahaan teknologi dari Surabaya, Indonesia. Kami membantu bisnis
              membangun software, aplikasi, website, dan infrastruktur digital yang siap berkembang.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-teal-400/90 pt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Perusahaan berbasis Surabaya, Indonesia • {edgeLocation}</span>
            </div>
          </div>

          {/* Nav Links: Layanan */}
          <div className="md:col-span-3 space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-teal-200">
              Layanan Spesialis
            </div>
            <ul className="space-y-2 font-light">
              <li>
                <Link href="#services" className="hover:text-teal-300 transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-teal-300 transition-colors">
                  Jasa Pembuatan WebView Android
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-teal-300 transition-colors">
                  Company Profile Modern
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-teal-300 transition-colors">
                  Kelola Server &amp; Hardening Linux
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-teal-300 transition-colors">
                  Custom Android Native Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Links: Quick Calculator & Tools */}
          <div className="md:col-span-2 space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-teal-200">
              Kalkulator &amp; Specs
            </div>
            <ul className="space-y-2 font-light">
              <li>
                <Link href="#estimator" className="hover:text-teal-300 transition-colors">
                  Scope Calculator
                </Link>
              </li>
              <li>
                <Link href="#impact" className="hover:text-teal-300 transition-colors">
                  Uptime &amp; SLA
                </Link>
              </li>
              <li>
                <Link href="#impact" className="hover:text-teal-300 transition-colors">
                  Lighthouse 100/100
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Links: Hubungi */}
          <div className="md:col-span-2 space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-teal-200">
              Kontak
            </div>
            <ul className="space-y-2 font-light">
              <li>
                <a href="mailto:halo@dibumi.com" className="hover:text-teal-300 transition-colors">
                  halo@dibumi.com
                </a>
              </li>
              <li>
                <Link href="#contact" className="hover:text-teal-300 transition-colors">
                  WhatsApp Technical Desk
                </Link>
              </li>
              <li>
                <span className="text-teal-100/65">Surabaya / Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Evozi style footer tagline) */}
        <div className="pt-8 border-t border-teal-100/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-teal-100/50">
          <div>
            © {new Date().getFullYear()} dibumi.com. All rights reserved.
          </div>
          <div className="text-zinc-500">
            Built for ambitious businesses and growing teams.
          </div>
        </div>
      </div>
    </footer>
  );
}
