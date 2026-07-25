import React from "react";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export default function ProductsPage() {
  const products = [
    {
      title: "1688 API Sourcing Portal",
      desc: "Connect direct supply chains with live price synchronizations, automated English/Bengali product details translation, and single-click checkout features.",
      href: "/products/1688-api",
      slug: "1688-api",
      features: ["Auto-Translation", "Pricing Calculations", "Live Stock Sync"],
    },
    {
      title: "Shipping Management System",
      desc: "End-to-end manifest trackers, custom dispatch alerts, multi-warehouse barcode readers, and dynamic freight charge matrices.",
      href: "/products/shipping-management",
      slug: "shipping-management",
      features: ["Freight Pricing", "Real-Time Tracking", "SMS & Email Dispatch"],
    },
    {
      title: "Restaurant Chain Management",
      desc: "POS terminals, live kitchen display routes, multi-restaurant inventory controls, thermal print hooks, and custom digital menu portals.",
      href: "/products/restaurant-management",
      slug: "restaurant-management",
      features: ["Printer Drivers", "Central Inventory", "QR Menu Sinks"],
    },
    {
      title: "News Portal Platform",
      desc: "Editorial CMS networks optimized for instant google indexing, high-concurrent reads, live analytics dashboards, and AMP standards.",
      href: "/products/news-portal",
      slug: "news-portal",
      features: ["Algolia Search", "Instant Indexing", "Ad-Space Placements"],
    },
    {
      title: "General E-Commerce System",
      desc: "Speed-tuned shopping systems featuring multi-gateway cash payments, merchant interfaces, discount rules, and custom email dispatch.",
      href: "/products/ecommerce",
      slug: "ecommerce",
      features: ["Multi-Gateway", "Vendor Panels", "Stock Sync Actions"],
    },
    {
      title: "Custom Branded E-Commerce",
      desc: "Tailored checkouts, animations, and high-ticket customer panels configured for boutique fashion, jewellery, and luxury stores.",
      href: "/products/branded-ecommerce",
      slug: "branded-ecommerce",
      features: ["Advanced Animation", "Bespoke Checkout", "SLA Hosting"],
    },
    {
      title: "Company Profile System",
      desc: "Corporate branding templates, multi-language support, custom form submission grids, and responsive layouts built for search optimization.",
      href: "/products/company-profile",
      slug: "company-profile",
      features: ["SEO Optimization", "Dynamic Forms", "Translate Ready"],
    },
  ];

  const featuresList = [
    { name: "1688 Sourcing", api: "✓", shipping: "—", pos: "—", news: "—", ecom: "✓" },
    { name: "Shipping Tracks", api: "✓", shipping: "✓", pos: "—", news: "—", ecom: "✓" },
    { name: "POS Printer Hook", api: "—", shipping: "—", pos: "✓", news: "—", ecom: "—" },
    { name: "Live Translations", api: "✓", shipping: "—", pos: "—", news: "✓", ecom: "✓" },
    { name: "SEO Optimization", api: "✓", shipping: "✓", pos: "✓", news: "✓", ecom: "✓" },
    { name: "AWS Edge Hosting", api: "✓", shipping: "✓", pos: "✓", news: "✓", ecom: "✓" },
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
                Explore Product Details
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
                  <td className="p-4 text-center text-brand font-bold">{row.api}</td>
                  <td className="p-4 text-center text-primary font-bold">{row.shipping}</td>
                  <td className="p-4 text-center text-dark font-bold">{row.pos}</td>
                  <td className="p-4 text-center text-brand font-bold">{row.news}</td>
                  <td className="p-4 text-center text-primary font-bold">{row.ecom}</td>
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
                  <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
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
