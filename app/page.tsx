import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkflowMethodology from "@/components/WorkflowMethodology";
import Standards from "@/components/Standards";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-slate-50 text-slate-900 selection:bg-brand-100 selection:text-brand-950">
      <Navbar />

      <div className="flex-grow">
        <Hero />
        <Services />
        <WorkflowMethodology />
        <Standards />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
