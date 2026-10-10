import React from "react";
import { FileCheck2, LockKeyhole, Braces, KeyRound, Eye, Headset } from "lucide-react";
import type { SiteContent } from "@/lib/i18n";

const standardIcons = [FileCheck2, LockKeyhole, Braces];
const commitmentIcons = [KeyRound, Eye, Headset];

export default function Standards({ content }: { content: SiteContent["standards"] }) {
  return (
    <section id="standards" className="border-t border-slate-200 bg-slate-100/70 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="mb-4 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
            {content.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {content.items.map((std, index) => {
            const Icon = standardIcons[index];
            return (
            <div key={std.title} className="border-l-2 border-brand-700 pl-5">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-800"><Icon className="h-5 w-5" strokeWidth={1.6} /></span>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                {std.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {std.description}
              </p>
            </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-slate-300 pt-8 sm:grid-cols-3">
          {content.commitments.map((item, index) => {
            const Icon = commitmentIcons[index];
            return (
            <div key={item.title}>
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-800"><Icon className="h-4 w-4" strokeWidth={1.6} /></div>
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
