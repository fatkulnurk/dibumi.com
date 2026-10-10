"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Layanan", href: "#services" },
    { name: "Proses", href: "#methodology" },
    { name: "Standar", href: "#standards" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-slate-50/95 py-3 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-800">
            <span className="text-xs font-extrabold tracking-tight text-white">db</span>
          </span>
          <span className="font-bold text-base tracking-tight">
            dibumi<span className="text-brand-600">.com</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden items-center gap-1.5 whitespace-nowrap rounded-lg bg-brand-800 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-900 active:scale-[0.98] md:inline-flex"
        >
          <span>Hubungi Kami</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-xl p-2.5 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          aria-label="Menu Navigasi"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="mt-3 space-y-1 border-b border-slate-200 bg-slate-50 px-6 py-5 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-sm text-slate-700 transition-colors hover:text-brand-800"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-brand-800 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-900 active:scale-[0.98]"
          >
            <span>Hubungi Kami</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
