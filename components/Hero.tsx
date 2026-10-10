import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { SiteContent } from "@/lib/i18n";

export default function Hero({ content }: { content: SiteContent["hero"] }) {
  return (
    <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-slate-950 pt-20 sm:min-h-[660px] lg:min-h-[700px]">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <Image
          src="/images/software-workspace.jpg"
          alt={content.imageAlt}
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover object-center motion-reduce:animate-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/30" />
        <div className="absolute inset-0 bg-slate-950/15" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-3 text-sm font-medium tracking-wide text-brand-200">
            <span className="h-px w-8 bg-brand-300" aria-hidden="true" />
            {content.eyebrow}
          </p>
          <h1 className="animate-fade-up text-4xl font-semibold leading-[1.1] tracking-[-0.035em] text-white motion-reduce:animate-none sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            {content.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800 active:scale-[0.98]"
            >
              {content.consultation} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#services"
              className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/35 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 active:scale-[0.98]"
            >
              {content.services} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" aria-hidden="true" />
    </section>
  );
}
