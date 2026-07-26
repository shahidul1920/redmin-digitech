import React from "react";
import { CheckCircle, Zap, Shield, ArrowRight } from "@/components/Icons";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter Edition",
      badge: "Fast Launch",
      price: "$999",
      billing: "one-time setup + $49/mo hosting & SLA",
      desc: "Perfect for single-branch stores and growing startups needing a high-speed decoupled web platform.",
      features: [
        "Headless CMS setup + Next.js frontend",
        "Up to 1,000 product / article listings",
        "Standard payment gateway integration",
        "Mobile-first responsive design",
        "Basic SEO metadata configuration",
        "99.9% uptime SLA guarantee",
      ],
      ctaText: "Get Started",
      popular: false,
    },
    {
      name: "Business Edition",
      badge: "Most Popular",
      price: "$2,499",
      billing: "one-time setup + $99/mo hosting & SLA",
      desc: "Designed for multi-outlet businesses, import logistics, and 1688 API wholesale automation.",
      features: [
        "Everything in Starter Edition",
        "Automated 1688 API sourcing bridge",
        "Thermal POS kitchen printer WebSocket setup",
        "Multi-carrier shipping manifest ERP",
        "Real-time currency markup & weight calculator",
        "Dedicated technical support desk (24h turnaround)",
      ],
      ctaText: "Request Business Demo",
      popular: true,
    },
    {
      name: "Enterprise Architecture",
      badge: "Custom Scale",
      price: "Custom",
      billing: "tailored scope & enterprise agreement",
      desc: "Tailor-made for high-concurrency media portals, global freight carriers, and multi-branch chain platforms.",
      features: [
        "Custom database schema design & API pipelines",
        "Multi-region CDN edge caching deployment",
        "Custom role-based access control (RBAC)",
        "On-premise or custom AWS/Cloudflare infrastructure",
        "Direct 1-on-1 dedicated lead architect",
        "Custom SLA with 15-minute emergency response",
      ],
      ctaText: "Contact Enterprise Team",
      popular: false,
    },
  ];

  return (
    <div className="bg-light-secondary/40 py-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-dark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden border border-border-dark shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-4">
              Transparent Investment
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Modular Pricing Tiers Built for Scale
            </h1>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              No hidden fees. Choose a transparent, modular investment plan designed for your operational scale — from starter digital platforms to full custom enterprise automation.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary opacity-15 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-8 border flex flex-col justify-between relative shadow-sm hover:shadow-md transition-all ${
                tier.popular ? "border-brand ring-2 ring-brand/20" : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-dark uppercase tracking-wider">{tier.name}</span>
                  {!tier.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-light-secondary text-text-secondary px-2.5 py-1 rounded-full">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <span className="text-4xl font-bold text-dark">{tier.price}</span>
                  <p className="text-[11px] text-text-tertiary mt-1">{tier.billing}</p>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed mb-6 border-b border-border pb-6">
                  {tier.desc}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Button
                  variant={tier.popular ? "brand" : "outline"}
                  size="md"
                  href="/request-demo"
                  className="w-full"
                >
                  {tier.ctaText} <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>
    </div>
  );
}
