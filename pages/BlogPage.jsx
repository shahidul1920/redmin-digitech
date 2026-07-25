import React from "react";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export default function BlogPage() {
  const categories = [
    { name: "News Portal Tech", count: "8 articles", desc: "Scaling high-concurrency editorial portals, cache configurations, and ad integration strategies." },
    { name: "Ecommerce Automation", count: "12 articles", desc: "Developing decoupled cart checkout pages, checkout logic, and shipping integration bridges." },
    { name: "1688 Sourcing Bridges", count: "14 articles", desc: "Integrating live 1688 product search feeds, automating translation, and calculating markups." },
    { name: "Import Business Logistics", count: "9 articles", desc: "Managing customs manifestations, freight shipping logs, and warehouse inventory databases." },
    { name: "Restaurant Tech & POS", count: "6 articles", desc: "Thermal POS printer connection setups, low-latency ticketing panels, and ordering tables." },
    { name: "SEO & Speed Guidelines", count: "10 articles", desc: "Optimizing Next.js metadata structures, static site regeneration speeds, and clean markup layouts." },
    { name: "Website Architecture", count: "15 articles", desc: "Decoupled headless WordPress deployments, GraphQL database routing, and AWS host parameters." },
    { name: "Digital Business Systems", count: "11 articles", desc: "Building secure, automated workflows to reduce administration manual labor hours." },
  ];

  const articles = [
    {
      title: "Eliminating Sourcing Bottlenecks: Automating 1688 API Translations",
      tag: "1688 Sourcing Bridges",
      desc: "Learn how we built an automated database scraping connector that fetches Chinese item lists, translates titles, and converts wholesale cost calculations.",
      date: "July 24, 2026",
    },
    {
      title: "Decoupling WordPress: Why Enterprise Brands Choose Next.js",
      tag: "Website Architecture",
      desc: "An in-depth look at how Headless WordPress separations eliminate admin panel security risks while delivering sub-second loading speeds to customers.",
      date: "July 18, 2026",
    },
    {
      title: "Connecting Local receipt POS Hardware to Client Storefronts",
      tag: "Restaurant Tech & POS",
      desc: "A technical guide to setting up local WebSocket service bridges to route table QR order print commands directly to thermal kitchen printers.",
      date: "June 29, 2026",
    },
    {
      title: "Structuring Cargo Manifest Databases for Multi-Carrier Sync",
      tag: "Import Business Logistics",
      desc: "How to design database schema models that sync logistics coordinates and compile manifest preparation reports for global dispatch bureaus.",
      date: "June 12, 2026",
    },
  ];

  return (
    <div className="bg-light-secondary/40 py-12">
      
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-dark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden border border-border-dark shadow-lg">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-4">Redmun Resource Hub</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Articles & Sourcing Guides</h1>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Technical documentations, system blueprints, and digital supply guides written by our software developers and logistics architects.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary opacity-15 rounded-full blur-3xl" />
        </div>
      </section>

      {/* 2. Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">Resource Categories</h2>
          <p className="text-text-secondary text-sm">Browse structured guides across our core integration fields.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-border flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-bold text-brand uppercase tracking-wider block mb-1">{cat.count}</span>
                <h3 className="font-bold text-dark mb-2">{cat.name}</h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-6">{cat.desc}</p>
              </div>
              <Button variant="ghost" size="sm" href="#" className="justify-start pl-0 text-brand text-xs font-bold">
                View Articles &rarr;
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Articles List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">Latest Insights</h2>
          <p className="text-text-secondary text-sm">Read the latest technical writeups from our engineering team.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2.5 py-1 rounded-full">
                    {art.tag}
                  </span>
                  <span className="text-xs text-text-tertiary">{art.date}</span>
                </div>
                <h3 className="text-lg font-bold text-dark mb-3 leading-snug hover:text-brand transition-colors cursor-pointer">
                  {art.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-6">
                  {art.desc}
                </p>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Read Article
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>

    </div>
  );
}
