import React from "react";
import { Check, ShieldCheck, Zap, Server, Code, Clock } from "@/components/Icons";
import DemoRequestForm from "@/components/DemoRequestForm";
import CTASection from "@/components/CTASection";

export default function RequestDemoPage() {
  const demoPerks = [
    {
      title: "Customized Product Walkthrough",
      desc: "Experience real-time administrative workflows, bulk catalog scraping, and order management configured to your business model.",
      icon: Zap,
    },
    {
      title: "API & Infrastructure Audit",
      desc: "Our senior software architects evaluate your existing ERP, inventory database, or payment bridges for seamless integration.",
      icon: Server,
    },
    {
      title: "Sub-Second Speed Guarantee",
      desc: "Test live Next.js + Headless CMS caching nodes running at 99.9% uptime with sub-second page delivery speeds.",
      icon: Code,
    },
    {
      title: "Rapid Deployment Blueprint",
      desc: "Receive a tailored 15-day timeline and modular pricing breakdown right after your technical scoping call.",
      icon: Clock,
    },
  ];

  return (
    <div className="bg-light-secondary/40 py-12">
      {/* 1. Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-dark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden border border-border-dark shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-4">
              Enterprise Consultation
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Request a Tailored Platform Demo
            </h1>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Schedule a 1-on-1 technical scoping call with our software engineers. See live demonstrations of 1688 API sourcing bridges, shipping manifests, and restaurant chain platforms.
            </p>
          </div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand opacity-15 rounded-full blur-3xl" />
        </div>
      </section>

      {/* 2. Main Content (Perks + Interactive Form) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
        {/* Left Perks Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block">
              Why Book A Demo?
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-dark">
              See How Redmun Platform Transforms Operations
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              We skip generic slides. You get a direct, interactive walkthrough of our working platform engines, customized to solve your specific logistics or e-commerce bottlenecks.
            </p>
          </div>

          <div className="space-y-6">
            {demoPerks.map((perk, idx) => {
              const IconComp = perk.icon;
              return (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white border border-border shadow-sm items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark mb-1">{perk.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{perk.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Proof / Guarantee Box */}
          <div className="p-6 rounded-2xl bg-dark text-white border border-border-dark space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-brand uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Developer Access</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Every demo is conducted directly by a lead engineer with no sales representatives or automated bot loops.
            </p>
          </div>
        </div>

        {/* Right Form Component */}
        <div className="lg:col-span-7">
          <DemoRequestForm />
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>
    </div>
  );
}
