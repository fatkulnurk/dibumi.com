import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ServicesGrid from "@/components/ServicesGrid";
import Solutions from "@/components/Solutions";
import Impact from "@/components/Impact";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Cloudflare Pages Edge Server-Side Rendering
export const runtime = "edge";

export default async function HomePage() {
  // Server-side rendering timestamp / edge context
  const serverRenderTime = new Date().toUTCString();

  return (
    <main className="min-h-screen flex flex-col justify-between selection:bg-teal-500/30 selection:text-teal-200">
      <Navbar />
      
      <div className="flex-grow">
        <Hero />
        <Ticker />
        <ServicesGrid />
        <Solutions />
        <Impact />
        <ContactSection />
      </div>

      <Footer edgeLocation="Cloudflare Edge SSR" />
    </main>
  );
}
