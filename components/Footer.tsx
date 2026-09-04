import React from "react";
import Link from "next/link";

export default function Footer({ edgeLocation = "Cloudflare Global Edge" }: { edgeLocation?: string }) {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 text-white font-semibold text-base"
            >
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center">
                <span className="font-mono text-xs text-teal-400 font-bold">db</span>
              </div>
              <span>
                dibumi<span className="text-teal-400">.com</span>
              </span>
            </Link>
            <p className="text-zinc-400 font-light leading-relaxed max-w-sm">
              Studio rekayasa software &amp; infrastruktur cloud. Membantu startup, korporat, dan kreator
              membangun sistem berkinerja tinggi, berlatensi rendah, dan siap tumbuh di skala global.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-teal-400/90 pt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Served via Next.js 16 SSR • Edge Datacenter: {edgeLocation}</span>
            </div>
          </div>

          {/* Nav Links: Layanan */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-200">
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
                  Company Profile Next.js SSR
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
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-200">
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
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-200">
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
                <span className="text-zinc-500">Yogyakarta / Remote ID</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Evozi style footer tagline) */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} dibumi.com. All rights reserved.
          </div>
          <div className="text-zinc-500">
            Engineered with Next.js 16 SSR &amp; Cloudflare Edge Network.
          </div>
        </div>
      </div>
    </footer>
  );
}
