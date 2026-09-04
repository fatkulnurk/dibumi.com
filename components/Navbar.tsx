"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

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
    { name: "Layanan", href: "#services" },
    { name: "Paket & Solusi", href: "#solutions" },
    { name: "Metrik", href: "#impact" },
    { name: "Tech Stack", href: "#stack" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3.5" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-white focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
            <span className="font-mono text-xs font-bold text-teal-400">db</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-base group-hover:text-teal-300 transition-colors flex items-center gap-1.5">
              dibumi<span className="text-teal-400">.com</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-white/10 rounded-full px-4 py-1.5 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 text-xs uppercase tracking-wider font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-all shadow-sm group"
          >
            <span>Konsultasi Proyek</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
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
          <div className="pt-3 border-t border-white/10">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex justify-center items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-black transition"
            >
              <span>Mulai Konsultasi Gratis</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
