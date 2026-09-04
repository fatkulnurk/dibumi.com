import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import BentoServices from "@/components/BentoServices";
import ProjectEstimator from "@/components/ProjectEstimator";
import ImpactMetrics from "@/components/ImpactMetrics";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Cloudflare Pages Edge Server-Side Rendering
export const runtime = "edge";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between selection:bg-teal-500/30 selection:text-teal-200 bg-grid-pattern">
      <Navbar />

      <div className="flex-grow">
        <Hero />
        <Ticker />
        <BentoServices />
        <ProjectEstimator />
        <ImpactMetrics />
        <ContactSection />
      </div>

      <Footer edgeLocation="Cloudflare Edge SSR (Next.js 16)" />
    </main>
  );
}
