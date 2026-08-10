import React from "react";
import { Award, Globe, ArrowRight } from "@/components/Icons";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      client: "Astha News & Freebird Digest",
      title: "Scaling Breaking News Portals to 10M+ Readers",
      tag: "Media & Publishing",
      problem: "During breaking news cycles, massive traffic spikes overwhelmed legacy servers, leading to database crashes, slow load times (> 8 seconds) that penalized Google News rankings, and lost ad revenue from dropped viewability.",
      solution: "Engineered a decoupled Headless CMS architecture pairing Next.js edge-rendered frontends with WordPress. Implemented instant Google News XML schema pinging, next-gen image optimization, and dynamic responsive ad placement slots.",
      tech: "Next.js 16, Headless WordPress GraphQL API, Vercel Edge CDN, Tailwind CSS, Google AdManager Hooks",
      result: "Page load times dropped to 28ms TTFB, achieving 100/100 Core Web Vitals score, 100% uptime during breaking news events, and a 45% increase in ad CPM revenue.",
      feedback: "Redmun Digitech gave us an enterprise media portal that never crashes during breaking news. Our reader engagement and ad revenue skyrocketed overnight.",
      author: "Editorial & Tech Team, Astha News & Freebird Digest",
      liveUrl: "https://astha.news",
    },
    {
      client: "Astha Creatives & Corporate Brands",
      title: "High-Performance Corporate Website Redesign & Brand Architecture",
      tag: "Corporate & Brand",
      problem: "Legacy corporate websites suffered from outdated visual design tokens, heavy plugin dependencies causing security vulnerabilities, slow mobile loading speeds, and low lead inquiry form conversions.",
      solution: "Rebuilt the corporate web platform utilizing Next.js, React.js, Node.js, and GSAP 60fps micro-animations. Implemented structured JSON-LD organization schema, fast dynamic lead capture forms, and an intuitive Headless WordPress dashboard for non-technical team updates.",
      tech: "React.js, Next.js, GSAP Animations, Node.js, Express, MongoDB, Headless WordPress",
      result: "Mobile lead conversions increased by 65%, page load speed improved by 80%, and corporate brand perception ratings rose significantly.",
      feedback: "The GSAP micro-animations and sub-second page loads transformed our corporate image into a modern, high-end digital identity that impresses clients instantly.",
      author: "Strategic Director, Astha Creatives",
      liveUrl: "https://asthacreatives.com",
    },
    {
      client: "Omnichannel Restaurant Management Ecosystem",
      title: "Omnichannel POS & Recipe Ingredient Control Platform",
      tag: "Restaurant & POS",
      problem: "Multi-outlet food establishments struggled with kitchen order prep delays, paper ticket losses, unmonitored ingredient leakage, fragmented sales channels (Dine-in, Takeaway, Online, Delivery partners), and lack of real-time multi-branch reporting.",
      solution: "Developed an all-in-one custom web application (Node.js, Express, React) unifying front-of-house POS billing, live Kitchen Display Systems (KDS) with color prep timers, ESC/POS thermal printer hooks, automated recipe ingredient stock deduction, and central finance/HRM dashboards.",
      tech: "React.js, Node.js, Express.js, MongoDB, WebSockets, ESC/POS Hardware Drivers, Tailwind CSS",
      result: "Kitchen preparation times accelerated by 40%, ticket loss dropped to 0%, raw food waste decreased by 32%, and multi-outlet managers gained live 24/7 sales visibility.",
      feedback: "Redmun Digitech's complete restaurant operating system eliminated paper ticket chaos and gave us total control over our raw ingredient inventory across all locations.",
      author: "Head of Operations, Restaurant Management Ecosystem",
      liveUrl: "/products/restaurant-management",
    },
    {
      client: "Wholesale Hub & 1688 Import Network",
      title: "Automating Wholesale Sourcing & Dual-Warehouse Tracking",
      tag: "China Import & Logistics",
      problem: "Importing teams spent over 14 hours daily manually copying product data from China's 1688.com catalog, translating Chinese item attributes, converting RMB exchange markups, and managing stockouts across China and Bangladesh warehouses.",
      solution: "Engineered an automated 1688 API sourcing engine with automated price/stock syncing, dual-warehouse mobile barcode scanning, QC inspection routines, reseller panels with OTP phone verification, and Facebook Conversion API integrations.",
      tech: "Next.js, Node.js, Express, MongoDB, 1688 Open API, Barcode Webhooks, Facebook Conversion API",
      result: "Sourcing overhead reduced by 90%, zero out-of-stock ordering errors, and parcel processing velocity doubled across China & BD hubs.",
      feedback: "Our import operations scale effortlessly now. We track parcels from China warehouse intake through BD customs straight to final delivery with complete accuracy.",
      author: "Supply Chain Operations Manager, Wholesale Hub BD",
      liveUrl: "https://wholesalehub.com.bd",
    },
  ];

  return (
    <div className="bg-light-secondary/40 py-12">
      
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-dark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden border border-border-dark shadow-lg">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-4">Engineering Proofs</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Enterprise Case Studies</h1>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Detailed operational analyses of systems engineered by Redmun Digitech across media publishing, corporate platforms, restaurant management ecosystems, and China wholesale sourcing networks.
            </p>
            <div className="mt-8 p-4 rounded-xl bg-dark-secondary border border-border-dark inline-flex items-center gap-2 text-xs font-semibold text-brand tracking-wide">
              <Award className="w-4 h-4 text-brand" />
              <span>Engineering Standard: Robust, documented case studies for every custom platform we engineer.</span>
            </div>
          </div>
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary opacity-15 rounded-full blur-3xl" />
        </div>
      </section>

      {/* 2. Detailed Case Studies List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-24">
        {caseStudies.map((cs, idx) => {
          const isExternal = cs.liveUrl && cs.liveUrl.startsWith("http");
          return (
            <div key={idx} className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              
              {/* Case Study Top Title Bar */}
              <div className="p-8 border-b border-border bg-light/35 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-1">{cs.client}</span>
                  <h2 className="text-2xl font-bold text-dark">{cs.title}</h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary/5 text-primary border border-primary/10 uppercase tracking-widest">
                    {cs.tag}
                  </span>
                  {isExternal ? (
                    <a
                      href={cs.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-brand/10 text-brand hover:bg-brand hover:text-white transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Live Site
                    </a>
                  ) : (
                    <Button variant="ghost" size="sm" href={cs.liveUrl} className="text-xs font-semibold text-brand">
                      System Details <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Case Study Core Flow Grid */}
              <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* 1. Client Problem */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand mb-2">1. Operational Bottleneck</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{cs.problem}</p>
                  </div>

                  {/* 2. Our Solution */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">2. Custom Engineering Solution</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{cs.solution}</p>
                  </div>

                  {/* 3. Tech Stack */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-dark mb-2">3. Implemented Stack & Architecture</h3>
                    <p className="text-xs font-mono text-text-secondary bg-light border border-border p-3.5 rounded-xl">{cs.tech}</p>
                  </div>

                </div>

                {/* Sidebar Results & Feedback */}
                <div className="lg:col-span-4 space-y-6 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
                  
                  {/* Result */}
                  <div className="p-6 rounded-2xl bg-light border border-border text-center lg:text-left">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Operational Results</h3>
                    <p className="text-sm font-bold text-dark mb-2">Key Outcome:</p>
                    <p className="text-xs text-text-secondary leading-relaxed">{cs.result}</p>
                  </div>

                  {/* Feedback */}
                  <div className="relative">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Client Feedback</h3>
                    <blockquote className="text-xs text-text-secondary leading-relaxed italic mb-4">
                      "{cs.feedback}"
                    </blockquote>
                    <cite className="block text-[10px] not-italic font-bold text-dark uppercase tracking-wider">
                      {cs.author}
                    </cite>
                  </div>

                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* 3. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>

    </div>
  );
}
