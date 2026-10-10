import React from "react";
import { MessageSquare, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/6285607100255?text=${encodeURIComponent(
  "Halo tim dibumi.com Surabaya,\n\nSaya ingin berkonsultasi mengenai kebutuhan proyek. Terima kasih!"
)}`;

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-200 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="mb-4 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
            Mulai bangun sistem Anda
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Hubungi langsung technical desk kami di Surabaya untuk respons cepat
            dan analisis kebutuhan teknis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-5">
                Kantor &amp; technical desk
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5 text-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-800"><MapPin className="h-4 w-4" strokeWidth={1.6} /></span>
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
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-800"><Mail className="h-4 w-4" strokeWidth={1.6} /></span>
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
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-800"><Clock className="h-4 w-4" strokeWidth={1.6} /></span>
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

            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-brand-950 p-7 text-white sm:p-9 lg:col-span-5">
            <div>
              <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-200"><MessageSquare className="h-5 w-5" strokeWidth={1.6} /></span>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight">Punya kebutuhan proyek?</h3>
              <p className="text-sm leading-6 text-slate-300">
                Ceritakan tantangan bisnis Anda. Tim teknis kami siap membantu
                menemukan solusi yang tepat, aman, dan bisa berkembang.
              </p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center justify-between whitespace-nowrap rounded-xl border border-white/25 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              <span>Chat WhatsApp</span><ArrowUpRight className="h-4 w-4 text-brand-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
