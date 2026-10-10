import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-24 sm:px-8 md:gap-14 md:pb-24 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="max-w-xl">
        <p className="mb-5 text-sm font-medium text-brand-800">
          Software house &amp; konsultan IT di Surabaya
        </p>
        <h1 className="animate-fade-up motion-reduce:animate-none text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Bangun sistem untuk berkembang.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Kami membuat software, aplikasi, dan website yang menjawab kebutuhan nyata bisnis Anda.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-900 active:scale-[0.98]"
          >
            Konsultasi gratis <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#services"
            className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-brand-700 hover:text-brand-800 active:scale-[0.98]"
          >
            Lihat layanan <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <figure className="relative min-h-[300px] overflow-hidden rounded-2xl bg-slate-200 sm:min-h-[420px] lg:min-h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85"
          alt="Detail papan sirkuit komputer, menggambarkan teknologi yang menopang sistem bisnis"
          fill
          priority
          unoptimized
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent px-6 pb-5 pt-16 text-sm font-medium text-white">
          Teknologi yang dirancang untuk kebutuhan bisnis Anda.
        </figcaption>
      </figure>
    </section>
  );
}
