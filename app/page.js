"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Reveal the main hero elements
      gsap.fromTo(
        ".hero-anim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        }
      );

      // Stagger animate components in the showcase section
      gsap.fromTo(
        ".showcase-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".showcase-section",
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-light-secondary/50 font-sans">
      {/* 2. Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-32">
          <p className="hero-anim opacity-0 inline-block text-sm font-semibold tracking-widest uppercase text-brand mb-6">
            Redmun Digitech
          </p>

          <h1 className="hero-anim opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-dark mb-8">
            Enterprise Management Platform{" "}
            <span className="text-gradient-brand">Built for Growing Businesses</span>
          </h1>

          <p className="hero-anim opacity-0 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            We engineer specialized web platforms, shipping systems, and automated 1688 import dashboards designed to streamline logistics and accelerate corporate performance.
          </p>

          <div className="hero-anim opacity-0 flex flex-wrap gap-4 justify-center">
            <Button variant="brand" size="lg" href="#showcase">
              Explore Live Demos
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Talk to an Expert
            </Button>
          </div>
        </div>

        {/* 3. Showroom / Live Design Guide Components */}
        <section id="showcase" className="showcase-section py-16 border-t border-border">
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-dark mb-4">
              UI System Components
            </h2>
            <p className="text-text-secondary max-w-2xl">
              A premium selection of modular widgets designed for fast loading times, SEO compatibility, and custom animations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Button Component Gallery */}
            <div className="showcase-card opacity-0 bg-white p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-dark mb-2">Interactive Button States</h3>
                <p className="text-sm text-text-tertiary mb-6">
                  Interactive physics built directly on top of GSAP. Hover to test the magnetic hover rebound and click for active press styling.
                </p>
              </div>

              {/* Grid of button configurations */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Styles</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="brand" size="sm">Brand Red</Button>
                    <Button variant="primary" size="sm">Primary Blue</Button>
                    <Button variant="secondary" size="sm">Neutral Dark</Button>
                    <Button variant="outline" size="sm">Outline</Button>
                    <Button variant="ghost" size="sm">Ghost Link</Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Sizes</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="brand" size="sm">Small</Button>
                    <Button variant="brand" size="md">Medium</Button>
                    <Button variant="brand" size="lg">Large Scale</Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Status Options</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary" size="md" loading={true}>Processing</Button>
                    <Button variant="outline" size="md" icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    }>With Icon</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Tokens Card */}
            <div className="showcase-card opacity-0 bg-white p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-dark mb-2">Color Profile Registry</h3>
                <p className="text-sm text-text-tertiary mb-6">
                  System-wide variables synchronized with Tailwind v4. These are the default configurations derived directly from the logo.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-brand text-white flex flex-col justify-between h-28 border border-transparent">
                  <span className="font-bold text-sm">Logo Red</span>
                  <span className="text-xs opacity-80">#FF0000 / bg-brand</span>
                </div>
                <div className="p-4 rounded-xl bg-primary text-white flex flex-col justify-between h-28 border border-transparent">
                  <span className="font-bold text-sm">Action Blue</span>
                  <span className="text-xs opacity-80">#0057FF / bg-primary</span>
                </div>
                <div className="p-4 rounded-xl bg-dark text-white flex flex-col justify-between h-28 border border-transparent">
                  <span className="font-bold text-sm">Enterprise Dark</span>
                  <span className="text-xs opacity-80">#0B1220 / bg-dark</span>
                </div>
                <div className="p-4 rounded-xl bg-light text-dark flex flex-col justify-between h-28 border border-border">
                  <span className="font-bold text-sm">Interface Light</span>
                  <span className="text-xs opacity-80 text-text-secondary">#F7F9FC / bg-light</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Full Width Premium CTA Section */}
        <CTASection />
      </main>
    </div>
  );
}
