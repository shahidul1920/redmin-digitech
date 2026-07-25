import React from "react";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export default function ProductDetailPage({ slug }) {
  // Mock content database for dynamic product rendering
  const productData = {
    "1688-api": {
      title: "1688 API Sourcing Platform",
      tagline: "China Import Automation",
      desc: "Connect your digital store directly to China's leading wholesale catalog with instant translations and inventory syncs.",
      problem: "Wholesalers and digital store owners waste hours manually downloading product sheets, translating titles, converting exchange rates, and coping with unexpected stock depletion from suppliers.",
      solution: "Our automated API pipeline hooks directly into the 1688 catalog, downloading specs, translating Chinese attributes to English, updating base costs into local currency, and modifying inventories.",
      features: [
        { name: "Live Catalog Sync", desc: "Monitors Chinese inventory limits and automatically syncs pricing margins hourly." },
        { name: "Language Translation Engine", desc: "Transforms product descriptors, specifications, and options cleanly." },
        { name: "Currency Calibration", desc: "Calculates markup rules based on active exchange rates automatically." },
        { name: "Automated Orders", desc: "Generates wholesale buy requests directly into vendor consoles upon checkout." },
      ],
      workflow: [
        { step: "Supplier", desc: "Wholesale vendor in China lists catalog details" },
        { step: "API", desc: "Redmun bridge extracts catalog variables" },
        { step: "Website", desc: "Next.js storefront renders translated data" },
        { step: "Order", desc: "Customer places order on localized portal" },
        { step: "Shipping", desc: "Logistics system prepares customs manifest" },
        { step: "Customer", desc: "Package arrives at destination address" },
      ],
      benefits: [
        { title: "Time Saving", desc: "Reduce bulk catalog listing from days of manual labor to single clicks." },
        { title: "Automation", desc: "Hourly inventory checking avoids selling out-of-stock items." },
        { title: "Profit Guard", desc: "Automatic currency margin adjustments secure markup margins." },
        { title: "Accuracy", desc: "Direct ordering eliminates manual copy-paste typing mistakes." },
      ],
      pricing: [
        { name: "Starter", price: "$49", desc: "For growing import businesses", features: ["1,000 active listings", "Daily price synchronization", "English translation module", "Email support"] },
        { name: "Business", price: "$99", desc: "Optimized for active retail brands", features: ["10,000 active listings", "Hourly inventory synchronization", "Advanced margin calculation tables", "Priority support"] },
        { name: "Enterprise", price: "$249", desc: "For global shipping and supply chains", features: ["Unlimited active listings", "Real-time query actions", "Custom warehouse API mappings", "Dedicated account engineer"] },
      ],
    },
  };

  // Fallback to 1688 API content if details not found
  const product = productData[slug] || productData["1688-api"];

  return (
    <div className="bg-light-secondary/40 py-12">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white border border-border rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm">
          <div className="flex-1 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand/5 px-3.5 py-1.5 rounded-full">
              {product.tagline}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-dark">{product.title}</h1>
            <p className="text-text-secondary leading-relaxed text-base md:text-lg">{product.desc}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="brand" size="lg" href="#pricing">
                View Pricing Tiers
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full bg-light border border-border rounded-2xl p-6 h-64 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="font-bold text-dark text-sm">System Pipeline status</span>
              <span className="px-2.5 py-1 text-[10px] bg-brand text-white rounded-full font-bold">ONLINE</span>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-brand rounded-full" />
              </div>
              <div className="flex justify-between text-xs text-text-secondary">
                <span>API Calls: 120,400 / hr</span>
                <span>Latency: 45ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Problem & Solution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
          <h2 className="text-lg font-bold text-brand uppercase tracking-wider mb-4">What problems do businessmen currently face?</h2>
          <p className="text-text-secondary leading-relaxed">{product.problem}</p>
        </div>
        <div className="p-8 rounded-2xl bg-dark text-white border border-border-dark shadow-sm">
          <h2 className="text-lg font-bold text-primary-light uppercase tracking-wider mb-4">How we solve it</h2>
          <p className="text-text-muted leading-relaxed">{product.solution}</p>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-dark mb-4">Core Functionalities</h2>
          <p className="text-text-secondary">Custom integrations designed to eliminate human processing errors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {product.features.map((feat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-border flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand/5 border border-brand/10 flex items-center justify-center font-bold text-brand">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-bold text-dark mb-2">{feat.name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Workflow Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-dark mb-2">Automated Sourcing Pipeline</h2>
          <p className="text-text-secondary">Step-by-step transaction flow from mainland suppliers to final customers.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          {product.workflow.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-border relative text-center flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-brand uppercase block mb-3">STEP {idx + 1}</span>
                <h3 className="font-bold text-dark mb-2">{item.step}</h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Interface Screenshots Mockups */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-dark mb-4">Operational Interfaces</h2>
          <p className="text-text-secondary">Fully optimized administrative tools, customer checkouts, and dashboard analytics panels.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="bg-light p-4 border-b border-border font-bold text-xs text-text-secondary uppercase tracking-wider">Dashboard View</div>
            <div className="p-8 h-48 flex flex-col justify-between bg-white">
              <span className="text-xs text-text-secondary font-semibold">Active Imports Monitoring</span>
              <span className="text-3xl font-extrabold text-brand">4,280 Units</span>
              <span className="text-[10px] text-text-muted">Synchronized 15m ago</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="bg-light p-4 border-b border-border font-bold text-xs text-text-secondary uppercase tracking-wider">Admin Workspace</div>
            <div className="p-8 h-48 flex flex-col justify-between bg-white">
              <span className="text-xs text-text-secondary font-semibold">Margin Rules Calibrator</span>
              <span className="text-3xl font-extrabold text-primary">USD/BDT Sync</span>
              <span className="text-[10px] text-text-muted">Automated conversion triggers</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="bg-light p-4 border-b border-border font-bold text-xs text-text-secondary uppercase tracking-wider">Customer Portal</div>
            <div className="p-8 h-48 flex flex-col justify-between bg-white">
              <span className="text-xs text-text-secondary font-semibold">Localized Checkout Options</span>
              <span className="text-3xl font-extrabold text-dark">One-Click Buy</span>
              <span className="text-[10px] text-text-muted">Automated freight manifest hooks</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 py-16 bg-dark text-white rounded-3xl border border-border-dark relative overflow-hidden shadow-md">
        <div className="relative z-10">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Performance Metrics</h2>
            <p className="text-text-muted">Direct business improvements after launching our customized sourcing pipelines.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.benefits.map((ben, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-dark-secondary border border-border-dark">
                <h3 className="font-bold text-brand mb-2">{ben.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand opacity-5 rounded-full blur-3xl" />
      </section>

      {/* 7. Pricing Tiers */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-dark mb-4">Flexible Sourcing Plans</h2>
          <p className="text-text-secondary">Select an operational tier structured to sync listings, calculate exchange rates, and run securely.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {product.pricing.map((tier, idx) => {
            const isFeatured = tier.name === "Business";
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl border p-8 shadow-sm flex flex-col justify-between relative ${
                  isFeatured ? "border-brand border-2 md:-translate-y-2 shadow-md" : "border-border"
                }`}
              >
                {isFeatured && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full text-[10px] font-bold bg-brand text-white uppercase tracking-widest">
                    Recommended
                  </span>
                )}
                <div>
                  <h3 className="text-lg font-bold text-dark mb-2">{tier.name}</h3>
                  <p className="text-xs text-text-secondary mb-6 leading-relaxed">{tier.desc}</p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold text-dark">{tier.price}</span>
                    <span className="text-xs text-text-tertiary">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-3 text-xs text-text-secondary">
                        <svg className="w-4 h-4 text-brand mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant={isFeatured ? "brand" : "outline"} size="md" className="w-full" href="/contact">
                  Choose Plan
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>

    </div>
  );
}
