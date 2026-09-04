import React from "react";
import Link from "next/link";
import { Terminal, Shield, ArrowUpRight } from "lucide-react";

export default function Footer({ edgeLocation = "Global Edge" }: { edgeLocation?: string }) {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-white font-semibold text-base"
            >
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center">
                <span className="font-mono text-xs text-teal-400 font-bold">db</span>
              </div>
              <span>
                dibumi<span className="text-teal-400">.com</span>
              </span>
            </Link>
            <p className="text-zinc-400 font-light leading-relaxed max-w-sm">
              Studio rekayasa software & infrastruktur cloud. Membantu bisnis dan
              kreator mewujudkan sistem cepat, andal, dan siap bertumbuh di skala global.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-teal-400/90 pt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Served via Cloudflare Pages SSR • Edge Node: {edgeLocation}</span>
            </div>
          </div>

          {/* Nav Links: Layanan */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-200">
              Layanan Utama
            </div>
            <ul className="space-y-2 font-light">
              <li>
                <Link href="#services" className="hover:text-teal-300 transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-teal-300 transition-colors">
                  Company Profile & Web SSR
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-teal-300 transition-colors">
                  Custom Android Apps
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-teal-300 transition-colors">
                  Jasa Pembuatan WebView Android
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-teal-300 transition-colors">
                  Kelola Server & Hardening DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Links: Quick Solutions */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-200">
              Paket
            </div>
            <ul className="space-y-2 font-light">
              <li>
                <Link href="#solutions" className="hover:text-teal-300 transition-colors">
                  WebView Quick-Launch
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-teal-300 transition-colors">
                  Company Profile Pro
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-teal-300 transition-colors">
                  Server Hardening
                </Link>
              </li>
              <li>
                <Link href="#impact" className="hover:text-teal-300 transition-colors">
                  Tech Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Links: Kontak */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-200">
              Hubungi
            </div>
            <ul className="space-y-2 font-light">
              <li>
                <a href="mailto:halo@dibumi.com" className="hover:text-teal-300 transition-colors">
                  halo@dibumi.com
                </a>
              </li>
              <li>
                <Link href="#contact" className="hover:text-teal-300 transition-colors">
                  Konsultasi WhatsApp
                </Link>
              </li>
              <li>
                <span className="text-zinc-400">Yogyakarta / Remote ID</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Evozi style footer tagline) */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} dibumi.com. Hak cipta dilindungi undang-undang.
          </div>
          <div className="text-zinc-400">
            Powered by modern clean code & obsessive performance.
          </div>
        </div>
      </div>
    </footer>
  );
}
