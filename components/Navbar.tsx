"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, MapPin, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Layanan Spesialis", href: "#services" },
    { name: "Metodologi", href: "#methodology" },
    { name: "Kalkulator Scope", href: "#estimator" },
    { name: "Standar Kualitas", href: "#standards" },
    { name: "Kontak Kantor", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header py-3.5" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-slate-900 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 via-brand-500 to-cyan-500 flex items-center justify-center shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform">
            <span className="font-mono text-sm font-bold text-white tracking-tighter">db</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors flex items-center">
              dibumi<span className="text-brand-600 font-extrabold">.com</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500 -mt-1 hidden sm:block">
              Software House • Surabaya
            </span>
          </div>
        </Link>

        {/* Center Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-1 bg-white/90 border border-slate-200/80 rounded-full px-4 py-1.5 shadow-sm backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-brand-700 hover:bg-brand-50 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA Deskripsi & WhatsApp Direct */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50/90 border border-brand-200/60 text-xs font-medium text-brand-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            <span>Surabaya Desk: <strong className="text-brand-900 font-semibold">Active</strong></span>
          </div>

          <Link
            href="#contact"
            className="btn-primary-gradient inline-flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 rounded-full shadow-sm"
          >
            <span>Konsultasi Proyek</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:text-brand-700 hover:bg-brand-50 transition border border-slate-200/60"
          aria-label="Menu Navigasi"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-brand-100 px-6 py-6 mt-3 space-y-4 shadow-xl backdrop-blur-xl animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-brand-700 hover:bg-brand-50 px-3 py-2 rounded-lg transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 space-y-3">
            <div className="text-xs text-slate-500 flex items-center gap-2 px-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Kantor Surabaya: Jam Kerja Aktif</span>
            </div>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-primary-gradient inline-flex justify-center items-center gap-2 text-xs font-bold px-5 py-3 rounded-xl shadow-md"
            >
              <span>Hubungi Tim Teknis Kami</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
