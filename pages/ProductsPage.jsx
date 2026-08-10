import React from "react";
import { ChevronDown, Check, Minus, ArrowRight } from "@/components/Icons";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export default function ProductsPage() {
  const products = [
    {
      title: "1688 API Sourcing Portal",
      desc: "Automated product sourcing directly from China via 1688.com with real-time price & stock sync, dual China/BD warehouse barcode tracking, and CRM management.",
      href: "/products/1688-api",
      slug: "1688-api",
      features: ["Auto Sourcing Sync", "Dual Warehouse QC", "Reseller & OTP Panel"],
    },
    {
      title: "Shipping Management System",
      desc: "Comprehensive shipping & logistics platform for freight from China to Bangladesh with Full Sourcing and Logistics-Only workflows, parcel tracking, and custom portals.",
      href: "/products/shipping-management",
      slug: "shipping-management",
      features: ["Client Cargo Portal", "Air & Sea Freight", "Parcel Barcode Intake"],
    },
    {
      title: "Restaurant Chain Management",
      desc: "All-in-one operating system unifying omnichannel POS (dine-in, takeaway, online, delivery) with back-office inventory, raw ingredient deduction, and finance/HRM.",
      href: "/products/restaurant-management",
      slug: "restaurant-management",
      features: ["Central Dashboard", "Omnichannel POS", "Recipe Stock Control"],
    },
    {
      title: "News Portal Platform",
      desc: "Lightning-fast digital newsroom powered by Next.js & Headless CMS with top-tier SSR/SSG SEO, dynamic content taxonomies, and ad monetization.",
      href: "/products/news-portal",
      slug: "news-portal",
      features: ["Next.js SSR / SSG", "Headless CMS Sync", "Monetization Ready"],
    },
    {
      title: "General E-Commerce System",
      desc: "Single-vendor e-commerce platform built on Node.js, Next.js, and MongoDB with unlimited landing pages, abandoned cart recovery, and Courier APIs (Pathao/Steadfast).",
      href: "/products/ecommerce",
      slug: "ecommerce",
      features: ["Unlimited Landing Pages", "Courier API Hooks", "Cart Recovery & SMS"],
    },
    {
      title: "Custom Branded E-Commerce",
      desc: "Bespoke e-commerce web applications (React, Next.js, Node.js, Express, MongoDB) with custom GSAP visual engineering, enterprise scalability, and 3rd-party logistics.",
      href: "/products/branded-ecommerce",
      slug: "branded-ecommerce",
      features: ["Full-Stack Stack", "GSAP Visual Motion", "Enterprise Scalability"],
    },
    {
      title: "Company Profile System",
      desc: "Creating, redesigning, and rebuilding corporate websites utilizing Next.js, React, Node.js, and MongoDB with traditional or Headless WordPress CMS and GSAP motion.",
      href: "/products/company-profile",
      slug: "company-profile",
      features: ["Website Redesign", "Traditional / Headless", "GSAP Animation"],
    },
  ];

  const featuresList = [
    { name: "1688 Sourcing", api: true, shipping: false, pos: false, news: false, ecom: true },
    { name: "Shipping Tracks", api: true, shipping: true, pos: false, news: false, ecom: true },
    { name: "POS Printer Hook", api: false, shipping: false, pos: true, news: false, ecom: false },
    { name: "Live Translations", api: true, shipping: false, pos: false, news: true, ecom: true },
    { name: "SEO Optimization", api: true, shipping: true, pos: true, news: true, ecom: true },
    { name: "AWS Edge Hosting", api: true, shipping: true, pos: true, news: true, ecom: true },
  ];

  const faqs = [
    { q: "Can we combine the Sourcing Platform and Shipping Management?", a: "Yes. Our systems are built modularly. You can sync the 1688 API Sourcing portal directly with the Shipping Management system to calculate weight-based dispatch costs automatically for final deliveries." },
    { q: "How do we modify product details?", a: "All catalog data is saved securely in your decoupled Headless WordPress database. You can add new products, adjust margins, and edit text inside the WordPress Admin Dashboard. The updates appear instantly on the Next.js frontend." },
  ];

  return (
    <div className="bg-light-secondary/40 py-12">

      {/* 1. Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-dark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden border border-border-dark shadow-lg">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-4">Enterprise Catalog</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Our Specialized Products</h1>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              We design and implement production-ready digital architectures. Explore our core platforms built to automate workflows, logistics, and multi-channel retailing.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary opacity-15 rounded-full blur-3xl" />
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">Speed, Stability, and Full Control</h2>
        <p className="text-text-secondary leading-relaxed">
          Traditional all-in-one frameworks slow down as databases grow. By separating data administration from customer views using **Headless WordPress + Next.js**, our platforms load in milliseconds and remain secure, even under heavy search query surges.
        </p>
      </section>

      {/* 3. Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => (
            <div
              key={prod.slug}
              className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-dark mb-3 hover:text-brand transition-colors">
                  {prod.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {prod.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {prod.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[10px] font-bold text-text-secondary bg-light border border-border px-2.5 py-0.5 rounded-full"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
              <Button variant="brand" size="md" href={prod.href} className="w-full">
                Explore Product Details <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-dark mb-2">Feature Matrices</h2>
          <p className="text-text-secondary text-sm">Compare functionalities across our core modules.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-light border-b border-border">
                <th className="p-4 font-bold text-dark">Feature Capabilities</th>
                <th className="p-4 font-bold text-dark text-center">1688 API Sourcing</th>
                <th className="p-4 font-bold text-dark text-center">Shipping Management</th>
                <th className="p-4 font-bold text-dark text-center">Restaurant POS</th>
                <th className="p-4 font-bold text-dark text-center">News Editorial</th>
                <th className="p-4 font-bold text-dark text-center">General Ecom</th>
              </tr>
            </thead>
            <tbody>
              {featuresList.map((row, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-light/30 transition-colors">
                  <td className="p-4 font-semibold text-text-secondary">{row.name}</td>
                  <td className="p-4 text-center">{row.api ? <Check className="w-4 h-4 text-brand mx-auto font-bold" /> : <Minus className="w-4 h-4 text-text-tertiary mx-auto" />}</td>
                  <td className="p-4 text-center">{row.shipping ? <Check className="w-4 h-4 text-primary mx-auto font-bold" /> : <Minus className="w-4 h-4 text-text-tertiary mx-auto" />}</td>
                  <td className="p-4 text-center">{row.pos ? <Check className="w-4 h-4 text-dark mx-auto font-bold" /> : <Minus className="w-4 h-4 text-text-tertiary mx-auto" />}</td>
                  <td className="p-4 text-center">{row.news ? <Check className="w-4 h-4 text-brand mx-auto font-bold" /> : <Minus className="w-4 h-4 text-text-tertiary mx-auto" />}</td>
                  <td className="p-4 text-center">{row.ecom ? <Check className="w-4 h-4 text-primary mx-auto font-bold" /> : <Minus className="w-4 h-4 text-text-tertiary mx-auto" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Product FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center">Product Capabilities FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-xl border border-border overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-6 font-semibold text-dark cursor-pointer select-none group-open:bg-light transition-colors">
                <span>{faq.q}</span>
                <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="w-5 h-5 text-text-secondary" />
                </span>
              </summary>
              <div className="p-6 border-t border-border text-sm text-text-secondary leading-relaxed bg-white">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>

    </div>
  );
}
