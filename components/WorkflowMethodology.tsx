import React from "react";
import { Search, PanelsTopLeft, Code2, Rocket } from "lucide-react";
import type { SiteContent } from "@/lib/i18n";

const icons = [Search, PanelsTopLeft, Code2, Rocket];

export default function WorkflowMethodology({ content }: { content: SiteContent["workflow"] }) {
  return (
    <section
      id="methodology"
      className="border-t border-slate-200 py-20 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="mb-4 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
            {content.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((item, index) => {
            const Icon = icons[index];
            return (
            <div key={item.title} className="border-t border-slate-300 py-6 md:py-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="font-mono text-sm font-semibold text-slate-300">0{index + 1}</span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-slate-600">
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
