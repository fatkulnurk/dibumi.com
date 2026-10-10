import React from "react";
import type { SiteContent } from "@/lib/i18n";

export default function Platforms({ content }: { content: SiteContent["platforms"] }) {
  return (
    <section id="platforms" className="border-t border-slate-200 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
            {content.title}
          </h2>
          <p className="text-base leading-relaxed text-slate-600">{content.description}</p>
        </div>

        <ul className="grid grid-cols-1 border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {content.names.map((name, index) => (
            <li
              key={name}
              className="flex min-h-24 items-center gap-4 border-b border-slate-200 py-6 sm:even:border-l sm:even:pl-6"
            >
              <span className="font-mono text-xs font-semibold text-brand-700" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-semibold tracking-tight text-slate-800">{name}</span>
            </li>
          ))}
        </ul>

        <p className="mt-7 max-w-3xl border-l-2 border-brand-600 pl-4 text-xs leading-6 text-slate-500">
          {content.disclaimer}
        </p>
      </div>
    </section>
  );
}
