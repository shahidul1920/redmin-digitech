import React from "react";
import { FileText, Check, ShieldCheck, Zap, Lock, Cpu, Server, Scale } from "@/components/Icons";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import HeroScrollReveal from "@/components/HeroScrollReveal";
import ScrollReveal from "@/components/ScrollReveal";

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      navLabel: "1. Acceptance of Terms",
      title: "1. Acceptance of Terms & Scope",
      icon: Scale,
      content:
        "By accessing, deploying, or utilizing Redmun Digitech software platforms, custom API connectors, or decoupled Next.js storefronts, you agree to be legally bound by these Terms of Service. These terms apply to all corporate accounts, API integrations, and ongoing technical support agreements.",
    },
    {
      id: "licensing",
      navLabel: "2. Software Licensing",
      title: "2. Software Licensing & IP Rights",
      icon: Cpu,
      content:
        "Upon full payment of project implementation fees, clients receive a perpetual, non-transferable license to operate custom frontend interfaces and backend modules developed by Redmun Digitech. Proprietary core engine utilities, 1688 API translation bridges, and pre-built operational modules remain the intellectual property of Redmun Digitech.",
    },
    {
      id: "api-limits",
      navLabel: "3. API Rate Limits",
      title: "3. API Usage Fair Use & Rate Limits",
      icon: Zap,
      content:
        "Automated catalog scraping and 1688 wholesale API pipelines are governed by rate-limiting rules established during project scoping. Clients agree not to execute unthrottled concurrent query scripts that exceed agreed payload caps or compromise upstream supplier server stability.",
    },
    {
      id: "payment",
      navLabel: "4. Billing & SLAs",
      title: "4. Deployment Pricing, Billing & SLAs",
      icon: Server,
      content:
        "Implementation milestone payments are due according to the project scope schedule. Monthly platform maintenance, edge CDN hosting, and SLA response tiers are billed on a recurring monthly or annual basis. Failure to remit payment within 30 days of invoice issuance may result in temporary API gateway suspension.",
    },
    {
      id: "liability",
      navLabel: "5. Limitation of Liability",
      title: "5. Limitation of Liability",
      icon: ShieldCheck,
      content:
        "Redmun Digitech is not liable for indirect, incidental, or consequential damages resulting from upstream third-party marketplace API downtime (e.g., 1688.com supplier outages), regional internet censorship, or third-party courier dispatch delays beyond our software control.",
    },
    {
      id: "termination",
      navLabel: "6. Agreement Termination",
      title: "6. Agreement Termination & Data Transfer",
      icon: Lock,
      content:
        "Either party may terminate a service agreement with 30 days written notice. Upon contract termination, Redmun Digitech provides complete WordPress database backup exports and asset archives to ensure zero vendor lock-in for the client.",
    },
  ];

  return (
    <div className="bg-light-secondary/40">

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-dark text-white min-h-[50vh] flex items-center">
        <div className="absolute inset-0 line-grid pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-brand opacity-10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary opacity-10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 w-full">
          <HeroScrollReveal className="max-w-3xl space-y-6">
            <span className="reveal-item opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest glass text-primary">
              <Scale className="w-4 h-4" />
              Legal Operating Agreement
            </span>

            <h1 className="reveal-item opacity-0 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Terms of <span className="text-gradient-primary">Service</span>
            </h1>

            <p className="reveal-item opacity-0 text-base md:text-lg text-text-muted leading-relaxed">
              Standard operating guidelines, API rate usage terms, software licensing rules, and enterprise platform agreements.
            </p>

            <div className="reveal-item opacity-0 text-xs text-text-tertiary">
              Last Updated: July 25, 2026 • Version 3.1
            </div>
          </HeroScrollReveal>
        </div>
      </section>

      {/* 2. CONTENT WITH STICKY INDEX */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left — Sticky Index */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 min-w-0">
              <ScrollReveal>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-dark border-b border-border pb-3">
                    Terms Navigation
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="block text-xs font-semibold text-text-secondary hover:text-primary transition-colors py-1.5 leading-snug break-words"
                      >
                        {sec.navLabel}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Open Architecture Guarantee */}
                <div className="bg-white p-6 rounded-2xl border border-border space-y-3 mt-6">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    <Check className="w-4 h-4" />
                    <span>No Proprietary Lock-In</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Decoupled databases and open REST/GraphQL APIs guarantee full asset portability whenever required.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Terms Content Sections */}
            <div className="lg:col-span-8 min-w-0">
              <ScrollReveal stagger={0.1} className="space-y-6 md:space-y-8">
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <div
                      key={sec.id}
                      id={sec.id}
                      className="sr-item opacity-0 bg-white p-8 md:p-10 rounded-3xl border border-border shadow-sm space-y-4 scroll-mt-28 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-bold text-dark">{sec.title}</h2>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed pt-2">
                        {sec.content}
                      </p>
                    </div>
                  );
                })}
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTASection />
      </div>

    </div>
  );
}
