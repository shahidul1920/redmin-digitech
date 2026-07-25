import React from "react";
import { ShieldCheck, Lock, Eye, FileText, Database, Server } from "@/components/Icons";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import HeroScrollReveal from "@/components/HeroScrollReveal";
import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "collection",
      navLabel: "1. Information Scope",
      title: "1. Information Collection & Data Scope",
      icon: Eye,
      content:
        "Redmun Digitech collects technical metadata necessary to operate, optimize, and secure our enterprise management platforms. This includes administrative account credentials, IP addresses, browser agent headers, API integration webhooks, and transactional logs resulting from wholesale catalog synchronizations and shipping manifest compilation.",
    },
    {
      id: "sovereignty",
      navLabel: "2. Data Sovereignty",
      title: "2. Client Data Sovereignty & Headless Architecture",
      icon: Lock,
      content:
        "By utilizing a decoupled Headless WordPress architecture, your core business data — including customer databases, order histories, product catalog listings, and pricing rules — remains strictly under your direct database ownership. Redmun Digitech does not sell, license, or monetize client transactional data to third parties.",
    },
    {
      id: "api-payloads",
      navLabel: "3. API Confidentiality",
      title: "3. API Payload Confidentiality & Third-Party Services",
      icon: Database,
      content:
        "When processing 1688 wholesale API calls, shipping carrier tracking updates, or translation queue data, payloads are transmitted using encrypted HTTPS/TLS 1.3 channels. Third-party API integrations (such as Cloudflare CDN, AWS Edge, and payment gateways) receive only sanitized data required for execution.",
    },
    {
      id: "cookies",
      navLabel: "4. Cookies & Telemetry",
      title: "4. Cookies & Telemetry Analytics",
      icon: Server,
      content:
        "Our frontend applications use essential session tokens and minimal performance telemetry cookies to maintain user authentication and monitor application load times. We do not deploy intrusive third-party cross-site tracking cookies.",
    },
    {
      id: "retention",
      navLabel: "5. Data Retention & Erasure",
      title: "5. Data Retention, Security & Erasure Rights",
      icon: ShieldCheck,
      content:
        "System operation logs are retained for 90 days for auditing and incident investigation before automated purging. Enterprise clients may request full database export files or complete data erasure upon contract termination under applicable data privacy regulations.",
    },
    {
      id: "contact-privacy",
      navLabel: "6. Data Officer Contact",
      title: "6. Data Protection Officer Contact",
      icon: FileText,
      content:
        "If you have inquiries regarding our data handling procedures or wish to exercise data subject rights, contact our Data Protection Office at privacy@redmundigitech.com or visit our Dhaka Operations HQ.",
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
            <span className="reveal-item opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest glass text-brand">
              <ShieldCheck className="w-4 h-4" />
              Data Protection Standard
            </span>

            <h1 className="reveal-item opacity-0 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Privacy <span className="text-gradient-brand">Policy</span>
            </h1>

            <p className="reveal-item opacity-0 text-base md:text-lg text-text-muted leading-relaxed">
              How Redmun Digitech handles, protects, and respects client data sovereignty across our decoupled platforms and API pipelines.
            </p>

            <div className="reveal-item opacity-0 text-xs text-text-tertiary">
              Last Updated: July 25, 2026 • Version 2.4
            </div>
          </HeroScrollReveal>
        </div>
      </section>

      {/* 2. CORE CONTENT WITH STICKY OUTLINE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left — Sticky Navigation Index */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 min-w-0">
              <ScrollReveal>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-dark border-b border-border pb-3">
                    Policy Index
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="block text-xs font-semibold text-text-secondary hover:text-brand transition-colors py-1.5 leading-snug break-words"
                      >
                        {sec.navLabel}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Key Guarantee Badge */}
                <div className="bg-dark text-white p-6 rounded-2xl border border-border-dark space-y-3 mt-6">
                  <div className="flex items-center gap-2 text-brand font-bold text-sm">
                    <Lock className="w-4 h-4" />
                    <span>Zero Data Monetization</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Your databases are decoupled and private. We never sell or share operational analytics to third-party brokers.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Policy Text Sections */}
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
                        <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
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
