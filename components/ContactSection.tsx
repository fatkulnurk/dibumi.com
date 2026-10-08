"use client";

import React, { useState } from "react";
import {
  Send,
  MessageSquare,
  CheckCircle,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

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
        setErrorMessage(
          data.error ||
            "Gagal mengirim pesan. Silakan gunakan WhatsApp langsung."
        );
      }
    } catch {
      setErrorMessage(
        "Terjadi kendala jaringan. Silakan hubungi kami via WhatsApp langsung."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLink = () => {
    const text = `Halo tim dibumi.com Surabaya,\n\nSaya ingin berkonsultasi mengenai kebutuhan proyek:\n\n• Nama: ${formData.name || "-"}\n• Kontak: ${formData.phone || "-"}\n• Layanan: ${formData.service}\n• Catatan Kebutuhan: ${formData.message || "Diskusi awal rencana sistem"}\n\nMohon info jadwal diskusi teknis dan penawarannya. Terima kasih!`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-colors";
  const labelClass = "block text-sm font-medium text-slate-700 mb-2";

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Mulai bangun sistem Anda
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Kirimkan brief kebutuhan Anda atau hubungi langsung technical desk
            kami di Surabaya untuk respons cepat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Office & direct info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flat-card rounded-lg p-7">
              <h3 className="text-lg font-bold text-slate-900 mb-5">
                Kantor &amp; technical desk
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5 text-sm">
                  <MapPin className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">
                      Domisili kantor
                    </div>
                    <div className="text-slate-900 font-medium">
                      Surabaya, Jawa Timur — Indonesia
                    </div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      Melayani klien di seluruh Indonesia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm">
                  <Mail className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">
                      Email korespondensi
                    </div>
                    <a
                      href="mailto:halo@dibumi.com"
                      className="text-brand-700 font-medium hover:underline"
                    >
                      halo@dibumi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm">
                  <Clock className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">
                      Jam operasional
                    </div>
                    <div className="text-slate-900 font-medium">
                      Senin — Sabtu (08.30 - 20.00 WIB)
                    </div>
                    <div className="text-slate-500 text-xs">
                      Layanan darurat server aktif 24/7 bagi klien SLA
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat WhatsApp</span>
              </a>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Setiap dokumen bisnis, database pelanggan, dan algoritma sistem
              Anda dilindungi dengan jaminan kerahasiaan penuh.
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="flat-card rounded-lg p-7">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Permintaan konsultasi diterima
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Terima kasih telah menghubungi kami. Tim engineer dibumi.com
                    akan meninjau kebutuhan Anda dan membalas dalam waktu
                    maksimal 1x24 jam kerja.
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
                    className="text-sm text-brand-700 font-semibold hover:underline pt-2"
                  >
                    Kirim formulir lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Nama lengkap / instansi</label>
                      <input
                        type="text"
                        required
                        placeholder="Bpk/Ibu ..."
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Email resmi</label>
                      <input
                        type="email"
                        required
                        placeholder="nama@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Nomor WhatsApp aktif</label>
                      <input
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Kebutuhan layanan</label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="Custom Software Development">
                          Custom Software Development
                        </option>
                        <option value="Jasa Pembuatan WebView Android">
                          Jasa Pembuatan WebView Android
                        </option>
                        <option value="Website Company Profile Korporat">
                          Website Company Profile Korporat
                        </option>
                        <option value="Kelola Server & DevOps">
                          Kelola Server Linux &amp; DevOps
                        </option>
                        <option value="Custom Android Apps Native">
                          Custom Android Apps Native
                        </option>
                        <option value="Lainnya / Konsultasi Arsitektur">
                          Konsultasi arsitektur sistem baru
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Rincian kebutuhan &amp; ekspektasi waktu
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Ceritakan secara singkat fitur utama yang dibutuhkan, alur kerja sistem, atau kendala server yang dihadapi..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 px-6 rounded-lg font-semibold text-sm disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Mengirimkan permintaan...</span>
                    ) : (
                      <>
                        <span>Kirim formulir konsultasi</span>
                        <Send className="w-4 h-4" />
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
