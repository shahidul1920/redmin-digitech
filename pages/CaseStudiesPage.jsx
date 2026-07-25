import React from "react";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      client: "SinoCargo Sourcing Logistics",
      title: "Automating Bulk Catalog Sourcing Pipelines",
      tag: "Supply Chain",
      problem: "Operational staff spent 12-16 hours daily copy-pasting Chinese catalog descriptions from 1688, manually converting currency markup adjustments, and updating stock sheets. Out-of-sync wholesale inventories caused frequent stockout order errors.",
      solution: "Developed an API-driven catalog scraper connected to Next.js servers. The engine automatically translates product specs into English/Bengali, adjusts local prices based on exchange rate buffers, and manages inventories.",
      tech: "Next.js 16, Headless WordPress API, MySQL, Custom Translation Engine, Cloudflare Edge",
      result: "Wholesale sourcing delays fell by 92%. Manual inventory copy-paste mistakes dropped to zero, and checkout conversions rose by 28%.",
      feedback: "Redmun Digitech transformed our manual sourcing bottlenecks into a streamlined, automated dashboard. We scaled active listings from 800 items to 12,000 without hiring additional staff.",
      author: "Rahat Chowdhury, Director of Operations, SinoCargo",
    },
    {
      client: "DineSmart Franchise Group",
      title: "Real-Time Kitchen Orders POS Network",
      tag: "Restaurant Tech",
      problem: "A franchise with 35+ restaurants suffered order ticketing latency. Table QR checkouts lagged, taking up to 4 minutes to print thermal printer receipts in the kitchens, leading to long preparation delays.",
      solution: "Engineered a low-latency print gateway bridge connecting client browsers directly to local network printers (ESC/POS protocol). Hooked table QR checkouts directly to local kitchen ticketing display panels.",
      tech: "Next.js, Node.js WebSocket Gateways, Headless WP POS API, Tailwind CSS",
      result: "Order ticket routing latency fell from 240 seconds to less than 1.5 seconds. Order preparation errors fell by 40%.",
      feedback: "Bottlenecks during busy weekend shifts disappeared overnight. Customer satisfaction ratings on checkout rose immediately.",
      author: "Tasnim Ahmed, Chief Operating Officer, DineSmart",
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
              We believe in documenting real results. Below are detailed operational analyses of systems we have successfully deployed for logistics and retail brands.
            </p>
            <div className="mt-8 p-4 rounded-xl bg-dark-secondary border border-border-dark inline-block text-xs font-semibold text-brand tracking-wide">
              ★ Engineering Standard: We build robust, documented case studies for every system we launch.
            </div>
          </div>
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary opacity-15 rounded-full blur-3xl" />
        </div>
      </section>

      {/* 2. Detailed Case Studies List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-24">
        {caseStudies.map((cs, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm">
            
            {/* Case Study Top Title */}
            <div className="p-8 border-b border-border bg-light/35 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-1">{cs.client}</span>
                <h2 className="text-2xl font-bold text-dark">{cs.title}</h2>
              </div>
              <span className="self-start md:self-auto px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary/5 text-primary border border-primary/10 uppercase tracking-widest">
                {cs.tag}
              </span>
            </div>

            {/* Case Study Core Flow Grid */}
            <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-6">
                
                {/* 1. Client Problem */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-brand mb-2">1. Client Operational Bottleneck</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{cs.problem}</p>
                </div>

                {/* 2. Our Solution */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">2. Our Custom Solution</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{cs.solution}</p>
                </div>

                {/* 3. Tech Stack */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-dark mb-2">3. Implemented Stack</h3>
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
                    — {cs.author}
                  </cite>
                </div>

              </div>
            </div>

          </div>
        ))}
      </section>

      {/* 3. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>

    </div>
  );
}
