import React from "react";
import { ShieldCheck, Clock, Server, Database } from "@/components/Icons";
import CTASection from "@/components/CTASection";
import HeroScrollReveal from "@/components/HeroScrollReveal";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function SLAPage() {
  const slaStats = [
    { value: 99, suffix: ".9%", label: "Target Uptime SLA", desc: "Production edge node availability" },
    { value: 15, suffix: " min", label: "P1 Incident Response", desc: "Critical outage response SLA" },
    { value: 24, suffix: "/7", label: "Active Monitoring", desc: "Real-time edge & DB ping checks" },
    { value: 1, suffix: ".2s", label: "Max Global Render Latency", desc: "Edge-cached static page guarantee" },
  ];

  const severityTiers = [
    {
      level: "P1 — Critical Outage",
      target: "< 15 Minutes Response",
      desc: "Complete storefront rendering failure, checkout gateway down, or total database disconnection affecting all users.",
      action: "Immediate engineer dispatch, emergency bridge call, hourly status updates to client ops team.",
      color: "brand",
    },
    {
      level: "P2 — Major Degradation",
      target: "< 1 Hour Response",
      desc: "Partial API pipeline delay (e.g. 1688 price sync queue latency), background batch job delays, or single payment gateway failure.",
      action: "Senior backend developer assigned, queue rerouting, patch deployment within 4 hours.",
      color: "primary",
    },
    {
      level: "P3 — Minor Technical Bug",
      target: "< 4 Hours Response",
      desc: "Non-critical admin UI glitch, minor translation string formatting error, or secondary report export issue.",
      action: "Scheduled fix in next staging build release (within 24–48 hours).",
      color: "dark",
    },
    {
      level: "P4 — Feature Request / Query",
      target: "< 24 Hours Response",
      desc: "General technical questions, optional configuration tweaks, or new feature scoping discussions.",
      action: "Account architect review & scheduled consultation call.",
      color: "dark",
    },
  ];

  const slaSections = [
    {
      id: "uptime",
      navLabel: "1. 99.9% Uptime SLA",
      title: "1. 99.9% Uptime Guarantee & Infrastructure Scope",
      icon: Server,
      content:
        "Redmun Digitech guarantees a monthly operational uptime of 99.9% for all production Next.js storefronts and Headless WordPress API gateways hosted under our SLA cloud infrastructure agreements. Monthly uptime is calculated excluding scheduled maintenance windows.",
    },
    {
      id: "credits",
      navLabel: "2. Compensation Credits",
      title: "2. SLA Compensation Credits",
      icon: ShieldCheck,
      content:
        "In the event monthly uptime falls below 99.9% due to infrastructure or codebase issues under our direct management, clients are eligible for service credits applied to their next billing cycle according to the credit tier schedule:",
      table: [
        { uptime: "99.0% – 99.8%", credit: "10% Billing Credit" },
        { uptime: "95.0% – 98.9%", credit: "25% Billing Credit" },
        { uptime: "< 95.0%", credit: "50% Billing Credit" },
      ],
    },
    {
      id: "maintenance",
      navLabel: "3. Maintenance Windows",
      title: "3. Scheduled Maintenance Windows",
      icon: Clock,
      content:
        "Routine database index optimization, security patch application, and edge deployment updates are conducted during low-traffic maintenance windows (Sundays 2:00 AM – 4:00 AM GMT+6). Clients receive a minimum of 48 hours advance notice prior to any scheduled maintenance.",
    },
    {
      id: "disaster-recovery",
      navLabel: "4. Disaster Recovery",
      title: "4. Backup & Disaster Recovery (RPO & RTO)",
      icon: Database,
      content:
        "Database automated snapshots are taken every 6 hours and stored in geo-redundant encrypted storage buckets. Our Recovery Point Objective (RPO) is 6 hours maximum data delta, and Recovery Time Objective (RTO) is 2 hours maximum restoration time.",
    },
  ];

  return (
    <div className="bg-light-secondary/40">

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-dark text-white min-h-[55vh] flex items-center">
        <div className="absolute inset-0 line-grid pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-brand opacity-10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary opacity-10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 w-full">
          <HeroScrollReveal className="max-w-3xl space-y-6">
            <span className="reveal-item opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest glass text-brand">
              <ShieldCheck className="w-4 h-4" />
              Service Level Commitment
            </span>

            <h1 className="reveal-item opacity-0 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              SLA <span className="text-gradient-brand">Agreement</span>
            </h1>

            <p className="reveal-item opacity-0 text-base md:text-lg text-text-muted leading-relaxed">
              Our 99.9% uptime commitment, incident response severity protocols, disaster recovery targets, and credit compensation guarantees.
            </p>

            <div className="reveal-item opacity-0 text-xs text-text-tertiary">
              Active Standard: SLA Tier Enterprise 2026
            </div>
          </HeroScrollReveal>
        </div>
      </section>

      {/* 2. STATS COUNTER ROW */}
      <section className="relative bg-white border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {slaStats.map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left">
                <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-2">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                    className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight"
                  />
                </div>
                <p className="text-sm font-bold text-brand uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-xs text-text-tertiary">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INCIDENT SEVERITY MATRIX */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto">
            <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-brand block mb-3">Incident Protocol</span>
            <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold text-dark mb-5 leading-tight">
              Response Severity <span className="text-gradient-primary">Tiers</span>
            </h2>
            <p className="sr-item opacity-0 text-text-secondary text-base leading-relaxed">
              How our technical operations team categorizes, responds to, and resolves system issues.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {severityTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className="sr-item opacity-0 bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-dark">{tier.level}</h3>
                      <span className="text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded-full">
                        {tier.target}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">{tier.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-bold text-dark uppercase tracking-wider mb-1">Response Protocol:</p>
                    <p className="text-xs text-text-muted leading-relaxed">{tier.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. SLA DETAILS WITH STICKY OUTLINE */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Sticky Index */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 min-w-0">
              <ScrollReveal>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-dark border-b border-border pb-3">
                    SLA Clauses
                  </h3>
                  <nav className="space-y-1">
                    {slaSections.map((sec) => (
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

                <div className="bg-dark text-white p-6 rounded-2xl border border-border-dark space-y-3 mt-6">
                  <div className="flex items-center gap-2 text-brand font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>SLA Guarantee</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Automatic billing credits are issued if monthly uptime commitments are missed.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right SLA Content */}
            <div className="lg:col-span-8 min-w-0">
              <ScrollReveal stagger={0.1} className="space-y-6 md:space-y-8">
                {slaSections.map((sec) => {
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

                      {/* Optional Credit Table */}
                      {sec.table && (
                        <div className="pt-4">
                          <div className="rounded-xl border border-border overflow-hidden">
                            <table className="w-full text-left text-xs">
                              <thead className="bg-light border-b border-border font-bold text-dark">
                                <tr>
                                  <th className="p-3">Monthly Uptime Range</th>
                                  <th className="p-3">Service Credit Granted</th>
                                </tr>
                              </thead>
                              <tbody>
                                {sec.table.map((row, rindex) => (
                                  <tr key={rindex} className="border-b border-border last:border-0">
                                    <td className="p-3 font-semibold text-text-secondary">{row.uptime}</td>
                                    <td className="p-3 font-bold text-brand">{row.credit}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTASection />
      </div>

    </div>
  );
}
