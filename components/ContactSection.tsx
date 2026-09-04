"use client";

import React, { useState } from "react";
import { Send, MessageSquare, CheckCircle, Mail, PhoneCall, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      setErrorMessage("Terjadi kesalahan jaringan. Silakan hubungi via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLink = () => {
    const text = `Halo tim dibumi.com, saya ingin konsultasi mengenai:\n\n• Nama: ${formData.name || "-"}\n• Layanan: ${formData.service}\n• Kebutuhan: ${formData.message || "Diskusi detail proyek"}`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-teal-400 mb-3">
            05 — Konsultasi & Mulai Proyek
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-4">
            Siap membangun sistem impian?{" "}
            <span className="font-serif italic text-teal-300">
              Diskusikan sekarang.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Kirimkan detail kebutuhan proyek Anda atau klik tombol WhatsApp untuk
            respon cepat langsung dari tim engineer dibumi.com.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & WhatsApp Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <h3 className="text-lg font-medium text-white mb-4">
                Hubungi Kami Langsung
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light">
                Kami siap membantu Anda memilih arsitektur terbaik, estimasi timeline,
                serta penawaran biaya yang transparan tanpa komitmen awal.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <div className="p-2 rounded-lg bg-zinc-900 text-teal-400 border border-white/5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400">Email Resmi</div>
                    <a href="mailto:halo@dibumi.com" className="hover:text-teal-300 font-mono">
                      halo@dibumi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <div className="p-2 rounded-lg bg-zinc-900 text-teal-400 border border-white/5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400">WhatsApp Fast-Response</div>
                    <span className="font-mono text-zinc-200">
                      Senin — Sabtu (09.00 - 20.00 WIB)
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat WhatsApp Sekarang</span>
                </a>
              </div>
            </div>

            {/* Privacy & SLA Card */}
            <div className="rounded-2xl p-6 bg-zinc-900/40 border border-white/5 text-xs text-zinc-400 font-light space-y-2">
              <div className="flex items-center gap-2 text-zinc-200 font-medium">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>Kerahasiaan & NDA Terjamin</span>
              </div>
              <p>
                Setiap ide bisnis, rancangan database, dan kode software Anda
                dilindungi dengan perjanjian kerahasiaan (Non-Disclosure Agreement).
              </p>
            </div>
          </div>

          {/* Right Column: Form SSR Handled */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-white">
                    Pesan Berhasil Terkirim!
                  </h3>
                  <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Terima kasih telah menghubungi kami. Tim engineer dibumi.com
                    akan meninjau kebutuhan Anda dan membalas dalam waktu maksimal 1x24 jam.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        service: "Custom Software Development",
                        message: "",
                      });
                    }}
                    className="text-xs text-teal-400 hover:underline pt-4 block mx-auto"
                  >
                    Kirim Pesan Lainnya →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
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
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                        Email Aktif
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nama@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      Kebutuhan Layanan
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all cursor-pointer"
                    >
                      <option value="Custom Software Development">
                        Custom Software Development (Sistem & Web App)
                      </option>
                      <option value="Company Profile & Modern Web">
                        Company Profile & Modern Web (Next.js SSR)
                      </option>
                      <option value="Custom Android Apps">
                        Custom Android Apps (Native / Cross-Platform)
                      </option>
                      <option value="Jasa Pembuatan WebView Android">
                        Jasa Pembuatan WebView Android (Play Store Ready)
                      </option>
                      <option value="Kelola Server & DevOps">
                        Kelola Server, Hardening & DevOps Linux
                      </option>
                      <option value="Lainnya / Konsultasi Arsitektur">
                        Lainnya / Konsultasi Arsitektur Sistem
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      Deskripsi Kebutuhan & Target Waktu
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Jelaskan secara singkat fitur utama yang dibutuhkan, target pengguna, atau kendala server saat ini..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <span>Mengirim Formulir...</span>
                    ) : (
                      <>
                        <span>Kirim Permintaan Konsultasi</span>
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
