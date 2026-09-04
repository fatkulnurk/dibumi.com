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
    <main className="light-theme min-h-screen flex flex-col justify-between selection:bg-tosca-200 selection:text-tosca-900 bg-grid-pattern">
      <Navbar />

      <div className="flex-grow">
        <Hero />
        <Ticker />
        <BentoServices />
        <ProjectEstimator />
        <ImpactMetrics />
        <ContactSection />
      </div>

      <Footer edgeLocation="Surabaya, Indonesia" />
    </main>
  );
}
