import React from "react";
import { MessageSquare, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import type { SiteContent } from "@/lib/i18n";

export default function ContactSection({ content }: { content: SiteContent["contact"] }) {
  const whatsappUrl = `https://wa.me/6285607100255?text=${encodeURIComponent(content.whatsappMessage)}`;
  return (
    <section id="contact" className="border-t border-slate-200 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="mb-4 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
            {content.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-5">
                {content.office}
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5 text-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-800"><MapPin className="h-4 w-4" strokeWidth={1.6} /></span>
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">
                      {content.locationLabel}
                    </div>
                    <div className="text-slate-900 font-medium">
                      {content.location}
                    </div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      {content.locationNote}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-800"><Mail className="h-4 w-4" strokeWidth={1.6} /></span>
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">
                      {content.emailLabel}
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
                      {content.hoursLabel}
                    </div>
                    <div className="text-slate-900 font-medium">
                      {content.hours}
                    </div>
                    <div className="text-slate-500 text-xs">
                      {content.hoursNote}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-brand-950 p-7 text-white sm:p-9 lg:col-span-5">
            <div>
              <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-200"><MessageSquare className="h-5 w-5" strokeWidth={1.6} /></span>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight">{content.ideaTitle}</h3>
              <p className="text-sm leading-6 text-slate-300">
                {content.ideaDescription}
              </p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center justify-between whitespace-nowrap rounded-xl border border-white/25 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              <span>{content.whatsapp}</span><ArrowUpRight className="h-4 w-4 text-brand-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
