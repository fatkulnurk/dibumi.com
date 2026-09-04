"use client";

import React, { useState } from "react";
import { Send, MessageSquare, CheckCircle, Mail, MapPin, Phone, ShieldCheck, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Custom Software Development",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Gagal mengirim pesan. Silakan gunakan WhatsApp langsung.");
      }
    } catch {
      setErrorMessage("Terjadi kendala jaringan. Silakan hubungi kami via WhatsApp langsung.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLink = () => {
    const text = `Halo tim dibumi.com Surabaya,\n\nSaya ingin berkonsultasi mengenai kebutuhan proyek:\n\n• Nama: ${formData.name || "-"}\n• Kontak: ${formData.phone || "-"}\n• Layanan: ${formData.service}\n• Catatan Kebutuhan: ${formData.message || "Diskusi awal rencana sistem"}\n\nMohon info jadwal diskusi teknis dan penawarannya. Terima kasih!`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 text-brand-800 font-mono text-xs font-semibold uppercase tracking-widest mb-4">
            <span>05 — Kontak &amp; Konsultasi Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Mulai bangun sistem Anda bersama kami.{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-cyan-600">
              Diskusikan hari ini.
            </span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Kirimkan brief kebutuhan Anda atau hubungi langsung technical desk kami di Surabaya untuk respons cepat dan analisis kebutuhan teknis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Office & Direct Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="enterprise-card rounded-2xl p-8 bg-white shadow-soft-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Kantor &amp; Technical Desk
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                Konsultasikan ide arsitektur, kebutuhan konversi WebView Android, pengelolaan server Linux, maupun website korporat tanpa komitmen awal.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3.5 text-xs text-slate-700">
                  <div className="p-2.5 rounded-xl bg-brand-50 text-brand-700 border border-brand-200/80 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase">Domisili Kantor</div>
                    <div className="text-slate-900 font-semibold mt-0.5">
                      Surabaya, Jawa Timur — Indonesia
                    </div>
                    <div className="text-slate-500 text-[11px] mt-0.5">
                      Melayani klien di seluruh Indonesia &amp; Regional
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs text-slate-700">
                  <div className="p-2.5 rounded-xl bg-brand-50 text-brand-700 border border-brand-200/80 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase">Email Korespondensi</div>
                    <a href="mailto:halo@dibumi.com" className="text-brand-700 font-bold hover:underline block mt-0.5 font-mono">
                      halo@dibumi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs text-slate-700">
                  <div className="p-2.5 rounded-xl bg-brand-50 text-brand-700 border border-brand-200/80 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase">Jam Operasional</div>
                    <div className="text-slate-900 font-semibold mt-0.5">
                      Senin — Sabtu (08.30 - 20.00 WIB)
                    </div>
                    <div className="text-slate-500 text-[11px]">
                      Layanan emergency server aktif 24/7 bagi klien SLA
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat WhatsApp Tim dibumi.com</span>
                </a>
              </div>
            </div>

            {/* Privacy Card */}
            <div className="rounded-2xl p-6 bg-white border border-slate-200/80 text-xs text-slate-600 space-y-2 shadow-soft-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>Kerahasiaan Bisnis &amp; NDA Terjamin</span>
              </div>
              <p className="leading-relaxed">
                Setiap dokumen bisnis, database pelanggan, dan algoritma sistem Anda dilindungi dengan jaminan kerahasiaan penuh di bawah payung hukum yang jelas.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="enterprise-card rounded-2xl p-8 bg-white shadow-soft-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Permintaan Konsultasi Diterima!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Terima kasih telah menghubungi kami. Technical engineer dibumi.com akan meninjau rincian kebutuhan Anda dan membalas dalam waktu maksimal 1x24 jam kerja.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "Custom Software Development",
                        message: "",
                      });
                    }}
                    className="text-xs text-brand-700 font-bold hover:underline pt-4 block mx-auto font-mono"
                  >
                    Kirim Formulir Lainnya →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Nama Lengkap / Instansi
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Bpk/Ibu ..."
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Email Resmi
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nama@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Nomor WhatsApp Aktif
                      </label>
                      <input
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Kebutuhan Layanan
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all cursor-pointer font-medium"
                      >
                        <option value="Custom Software Development">
                          Custom Software Development (Sistem &amp; Enterprise)
                        </option>
                        <option value="Jasa Pembuatan WebView Android">
                          Jasa Pembuatan WebView Android (Play Store Ready)
                        </option>
                        <option value="Website Company Profile Korporat">
                          Website Company Profile Korporat
                        </option>
                        <option value="Kelola Server & DevOps">
                          Kelola Server Linux &amp; DevOps Hardening
                        </option>
                        <option value="Custom Android Apps Native">
                          Custom Android Apps Native (Kotlin/Flutter)
                        </option>
                        <option value="Lainnya / Konsultasi Arsitektur">
                          Konsultasi Arsitektur Sistem Baru
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Rincian Kebutuhan &amp; Ekspektasi Waktu
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Ceritakan secara singkat mengenai fitur utama yang Anda butuhkan, alur kerja sistem, atau kendala server yang dihadapi..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary-gradient py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider disabled:opacity-50 flex items-center justify-center gap-2 shadow-md shadow-brand-600/20"
                  >
                    {isSubmitting ? (
                      <span>Mengirimkan Permintaan...</span>
                    ) : (
                      <>
                        <span>Kirim Formulir Konsultasi</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
