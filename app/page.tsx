import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import BentoServices from "@/components/BentoServices";
import WorkflowMethodology from "@/components/WorkflowMethodology";
import ProjectEstimator from "@/components/ProjectEstimator";
import ImpactMetrics from "@/components/ImpactMetrics";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between selection:bg-brand-100 selection:text-brand-900 bg-enterprise-pattern">
      <Navbar />

      <div className="flex-grow">
        <Hero />
        <Ticker />
        <BentoServices />
        <WorkflowMethodology />
        <ProjectEstimator />
        <ImpactMetrics />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
