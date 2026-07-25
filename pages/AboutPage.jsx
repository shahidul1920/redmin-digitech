import React from "react";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  const values = [
    { title: "Engineering Rigor", desc: "We don't build generic layouts. We design decoupled, robust systems that handle transaction surges without downtime." },
    { title: "Operational Automation", desc: "If a task is manual and repetitive, we automate it. We focus on catalog translation APIs, weight calculators, and print triggers." },
    { title: "Client Data Sovereignty", desc: "By using Headless WordPress, you maintain complete ownership of your database. No vendor lock-in or proprietary licensing dependencies." },
    { title: "Performance First", desc: "Every system is speed-optimized, running on high-performance edge nodes with sub-second page rendering guarantees." },
  ];

  const milestones = [
    { year: "2024", name: "Inception", desc: "Founded to build custom logistics and supply integrations for high-volume traders." },
    { year: "2025", name: "API Expansion", desc: "Launched our 1688 API Sourcing module, automating translations and ordering queues for 30+ clients." },
    { year: "2026", name: "Decoupled Era", desc: "Upgraded all client systems to Next.js 16 + Headless WordPress, establishing high security and speed." },
  ];

  const team = [
    { name: "Rahat Chowdhury", role: "Founder & Chief Architect", bio: "Ex-logistics engineer specialized in wholesale data mapping." },
    { name: "Imran Hossain", role: "Head of API Integrations", bio: "Database manager specialized in scraping, translation queues, and print drivers." },
    { name: "Lina Tasnim", role: "Lead UI Engineer", bio: "Frontend developer focused on semantic HTML layouts and fluid GSAP transitions." },
  ];

  return (
    <div className="bg-light-secondary/40 py-12">
      
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-dark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden border border-border-dark shadow-lg">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-4">Our History</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">About Redmun Digitech</h1>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              We are a team of software engineers, API integrators, and UI developers focused on engineering automated backends for shipping, import, and retail operations.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary opacity-15 rounded-full blur-3xl" />
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">Our Mission</span>
          <h2 className="text-2xl font-bold text-dark mb-4">Automating Sourcing Operations</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Our mission is to help companies reduce manual administration. By replacing manual copy-pasting, catalog translating, and receipt sorting with automated API pipelines, we reduce operational overhead and eliminate processing bottlenecks.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Our Vision</span>
          <h2 className="text-2xl font-bold text-dark mb-4">Secure & Frictionless Supply Chains</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            We envision a digital marketplace where importing wholesale goods and managing logistics cargo requires single-clicks. Decoupled frontend interfaces will pull data securely, update inventories automatically, and coordinate manifests instantly.
          </p>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-dark mb-4">Our Core Values</h2>
          <p className="text-text-secondary">The technical paradigms and operational principles that dictate our engineering work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-lg font-bold text-dark mb-3">{v.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Timeline Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-dark mb-4">Corporate Timeline</h2>
          <p className="text-text-secondary">Key milestones in our history of building high-volume business integrations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((mil, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-border relative shadow-sm">
              <span className="text-5xl font-extrabold text-brand/10 block mb-4">{mil.year}</span>
              <h3 className="font-bold text-dark mb-2">{mil.name}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{mil.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-dark mb-4">Our Engineering Team</h2>
          <p className="text-text-secondary">Meet the software developers and API architects building Redmun platforms.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <div className="w-20 h-20 bg-light rounded-full border border-border mx-auto mb-6 flex items-center justify-center font-bold text-brand text-2xl">
                {t.name.split(" ").map((w) => w[0]).join("")}
              </div>
              <h3 className="font-bold text-dark mb-1">{t.name}</h3>
              <p className="text-xs text-brand font-semibold mb-4 uppercase tracking-wider">{t.role}</p>
              <p className="text-xs text-text-secondary leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Office Location details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">Office Headquarters</span>
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">Operational Hub</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Our central office houses our database server managers, sourcing support staff, and core developers. Visit us for technical scoping workshops.
            </p>
            <div className="text-xs font-semibold text-text-secondary space-y-2">
              <p>📍 Sector 11, Uttara, Dhaka, Bangladesh</p>
              <p>✉️ ops@redmundigitech.com</p>
            </div>
          </div>
          <div className="w-full md:w-96 h-64 bg-light border border-border rounded-2xl flex items-center justify-center text-xs font-semibold text-text-muted">
            [ Interactive Office Map Placeholder ]
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>

    </div>
  );
}
