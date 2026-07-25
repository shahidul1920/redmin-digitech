import React from "react";
import PortfolioFilters from "@/components/PortfolioFilters";
import CTASection from "@/components/CTASection";

export default function PortfolioPage() {
  return (
    <div className="bg-light-secondary/40 py-12">
      
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-dark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden border border-border-dark shadow-lg">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-4">Case Library</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Our Work & Systems</h1>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Explore the customized API portals, shipping dispatch matrices, kitchen printer POS scripts, and high-concurrency press portals built by our engineering teams.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary opacity-15 rounded-full blur-3xl" />
        </div>
      </section>

      {/* 2. Interactive Filters Section (Client Component Leaf Node) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <PortfolioFilters />
      </section>

      {/* 3. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>

    </div>
  );
}
