import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Server, Shield, Cpu, Zap, Globe, Package, Utensils, Building, ShoppingCart, Truck, Layers } from "@/components/Icons";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export default function IndustriesPage() {
  const industries = [
    {
      id: "media",
      icon: Globe,
      title: "Media & High-Concurrency Editorial",
      tagline: "Sub-second article publishing with 99.9% uptime under peak traffic spikes.",
      desc: "Legacy WordPress portals crash under sudden breaking news traffic spikes. We build decoupled Next.js storefronts backed by Headless WordPress API nodes, delivering instant page rendering, optimized ad slot loading, and dynamic caching.",
      solutions: [
        "Headless WordPress API routing with Next.js ISR",
        "Sub-second Google Core Web Vitals optimization",
        "Automated ad slot injection & analytics tracking",
        "Multi-editor permission levels & draft workflow"
      ],
      productLink: "/products/news-portal",
      productName: "News Portal Engine",
      badge: "High-Traffic Ready",
    },
    {
      id: "sourcing",
      icon: Package,
      title: "Import & China Wholesale Sourcing",
      tagline: "Live 1688 product catalog scraping, automated translation & markup calculation.",
      desc: "Importers lose thousands of hours manually copying Chinese product details, recalculating RMB rates, and estimating shipping costs. Our automated 1688 API bridge auto-syncs wholesale listings, converts pricing, and enables 1-click cart checkouts.",
      solutions: [
        "Direct 1688 API product feed & automated title translation",
        "Custom RMB-to-Local currency exchange rate markup controls",
        "Automated freight weight & volume cost calculator",
        "Supplier rating verification & catalog filtering"
      ],
      productLink: "/products/1688-api",
      productName: "1688 API Sourcing Platform",
      badge: "Automation Core",
    },
    {
      id: "shipping",
      icon: Truck,
      title: "Shipping & Cargo Manifest Logistics",
      tagline: "End-to-end manifest logs, multi-carrier container tracking, and freight billing.",
      desc: "Logistics agencies require bulletproof manifest database models that coordinate air and sea cargo consignments across international clearing houses. We build custom cargo management systems tailored to your freight carrier routes.",
      solutions: [
        "Custom cargo manifest creation & automated PDF generation",
        "Real-time shipment status tracking portals for clients",
        "Customs manifest compliance & warehouse storage logs",
        "Multi-branch container weight & invoice reconciliation"
      ],
      productLink: "/products/shipping-management",
      productName: "Shipping Management System",
      badge: "Logistics Ready",
    },
    {
      id: "restaurant",
      icon: Utensils,
      title: "Restaurant Chains & Hospitality POS",
      tagline: "Local WebSocket POS thermal print scripting & instant QR table order routing.",
      desc: "Modern multi-branch restaurants require reliable table ordering with zero latency kitchen ticket printing. Our POS orders platform bridges web-based QR table menus directly to thermal ESC/POS kitchen hardware via local WebSocket connections.",
      solutions: [
        "Sub-second QR code table menu ordering system",
        "Direct thermal POS kitchen printer WebSocket bridge",
        "Real-time central inventory & ingredient stock deduction",
        "Multi-outlet sales telemetry & cashier audit reports"
      ],
      productLink: "/products/restaurant-management",
      productName: "Restaurant Chain POS",
      badge: "Zero Latency",
    },
    {
      id: "corporate",
      icon: Building,
      title: "Corporate Enterprises & Organizations",
      tagline: "Secure digital profile portals, investor relations, and internal workflow ERP.",
      desc: "Established corporations need authoritative, hyper-secure web platforms to communicate brand authority, present investor disclosures, and streamline employee department access. We design scalable corporate web platforms.",
      solutions: [
        "Enterprise-grade Headless CMS layout & security hardening",
        "Dynamic career portal & applicant review workflows",
        "Multi-language localization & regional domain routing",
        "Custom role-based admin access control (RBAC)"
      ],
      productLink: "/products/company-profile",
      productName: "Company Profile Portal",
      badge: "Enterprise Security",
    },
    {
      id: "retail",
      icon: ShoppingCart,
      title: "Retail & Omnichannel E-Commerce",
      tagline: "Decoupled online storefronts with instant payment gateways and stock sync.",
      desc: "Standard e-commerce templates fall short when handling large product catalogs and high checkout volumes. We deploy custom Next.js storefronts with instant cart updates, localized payment gateway bridges, and inventory sync.",
      solutions: [
        "High-performance Next.js custom checkout cart logic",
        "Integration with bKash, Nagad, SSLCommerz, and Stripe",
        "Automated stock sync across online and offline branches",
        "Integrated promo code & volume pricing engine"
      ],
      productLink: "/products/branded-ecommerce",
      productName: "Branded E-Commerce",
      badge: "High Conversion",
    },
    {
      id: "manufacturing",
      icon: Layers,
      title: "Manufacturing & Industrial Supply Chains",
      tagline: "Raw material tracking, automated procurement logs, and batch dashboards.",
      desc: "Industrial manufacturers struggle with fragmented spreadsheets for tracking raw materials and finished goods. We build custom ERP management platforms that provide complete visibility over batch production schedules.",
      solutions: [
        "Raw material stock tracking & reorder alert automation",
        "Batch manufacturing stage logs & quality assurance checkpoints",
        "Supplier purchase order generation & invoice matching",
        "Real-time plant productivity analytics dashboards"
      ],
      productLink: "/products",
      productName: "Custom ERP Platforms",
      badge: "Industrial Scale",
    },
  ];

  return (
    <div className="bg-light-secondary/40 py-12">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-dark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden border border-border-dark shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-4">
              Specialized Industry Vertical Expertise
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Engineering Platforms for High-Growth Industries
            </h1>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              From automated 1688 import portals to zero-latency restaurant POS thermal printing and enterprise media platforms, discover how Redmun Digitech builds software tailored to your industry.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary opacity-15 rounded-full blur-3xl" />
        </div>
      </section>

      {/* 2. Industry Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">
            Target Industries
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Purpose-Built Solutions for Every Sector
          </h2>
          <p className="text-sm text-text-secondary">
            Every business sector has unique operational workflows. We develop industry-specific platforms designed to eliminate manual labor and drive profit margin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {industries.map((ind) => {
            const IconComp = ind.icon;
            return (
              <div
                key={ind.id}
                id={ind.id}
                className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Info Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-brand/10 text-brand px-2.5 py-1 rounded-full">
                        {ind.badge}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-dark mt-1">
                        {ind.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm font-semibold text-primary">
                    {ind.tagline}
                  </p>

                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                    {ind.desc}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <Button variant="brand" size="sm" href={ind.productLink}>
                      Explore {ind.productName} <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                    <Button variant="outline" size="sm" href="/request-demo">
                      Request Industry Demo
                    </Button>
                  </div>
                </div>

                {/* Right Solutions List Column */}
                <div className="lg:col-span-5 bg-light-secondary/60 p-6 md:p-8 rounded-2xl border border-border space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-dark flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-brand" />
                    Core Platform Capabilities
                  </h4>
                  <ul className="space-y-3">
                    {ind.solutions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>
    </div>
  );
}
