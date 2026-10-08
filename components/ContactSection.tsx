import React from "react";
import { MessageSquare, Mail, MapPin, Clock } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/6281234567890?text=${encodeURIComponent(
  "Halo tim dibumi.com Surabaya,\n\nSaya ingin berkonsultasi mengenai kebutuhan proyek. Terima kasih!"
)}`;

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Mulai bangun sistem Anda
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Hubungi langsung technical desk kami di Surabaya untuk respons cepat
            dan analisis kebutuhan teknis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
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
                      href="mailto:fatkul@dibumi.com"
                      className="text-brand-700 font-medium hover:underline"
                    >
                      fatkul@dibumi.com
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
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-sm text-slate-600 leading-relaxed">
              Setiap dokumen bisnis, database pelanggan, dan algoritma sistem
              Anda dilindungi dengan jaminan kerahasiaan penuh di bawah
              perjanjian kerahasiaan (NDA) resmi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
