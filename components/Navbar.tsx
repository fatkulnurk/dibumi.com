"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Sparkles, Activity, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [edgeInfo, setEdgeInfo] = useState<{ datacenter?: string; latency?: number } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Fetch live edge probe
    const startTime = performance.now();
    fetch("/api/edge-info")
      .then((res) => res.json())
      .then((data) => {
        const latency = Math.round(performance.now() - startTime);
        setEdgeInfo({ datacenter: data.datacenter || "SIN", latency });
      })
      .catch(() => {
        setEdgeInfo({ datacenter: "EDGE", latency: 24 });
      });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Layanan Matrix", href: "#services" },
    { name: "Scope & Estimator", href: "#estimator" },
    { name: "Kualitas & Metrik", href: "#impact" },
    { name: "Hubungi Kami", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-ink focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-400 border border-teal-300 flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-teal-500/20">
            <span className="font-mono text-xs font-bold text-white">db</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-base group-hover:text-teal-300 transition-colors flex items-center gap-1">
              dibumi<span className="text-teal-400">.com</span>
            </span>
          </div>
        </Link>

        {/* Center Nav Desktop */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 border border-teal-900/10 rounded-full px-4 py-1.5 shadow-lg shadow-teal-900/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 text-xs uppercase tracking-wider font-medium text-slate-600 hover:text-tosca-700 hover:bg-tosca-50 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Availability status */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-teal-900/10 text-[11px] font-mono text-zinc-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              Live Status:{" "}
                <strong className="text-teal-800">
                {edgeInfo ? edgeInfo.datacenter : "Live"}
              </strong>
            </span>
          </div>

          <Link
            href="#estimator"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white hover:from-teal-700 hover:to-cyan-600 transition-all shadow-md shadow-teal-600/20 group"
          >
            <span>Kalkulator Proyek</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-teal-700 hover:text-teal-900 hover:bg-teal-50 transition"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-white/10 px-6 py-6 mt-3 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white py-1 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 space-y-3">
            <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
               <span>Technical team aktif • Surabaya, Indonesia</span>
            </div>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex justify-center items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-black transition"
            >
              <span>Konsultasi Cepat via WA</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
