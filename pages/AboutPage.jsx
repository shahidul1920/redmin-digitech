import React from "react";
import {
  Zap,
  Bot,
  Lock,
  Rocket,
  Target,
  Globe,
  MapPin,
  Mail,
  Phone,
  Check,
  Award,
  Users,
  Clock,
  Server,
  Database,
  Building2,
  ArrowRight,
  ShieldCheck,
  Cpu,
} from "@/components/Icons";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import HeroScrollReveal from "@/components/HeroScrollReveal";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxSection from "@/components/ParallaxSection";

export default function AboutPage() {
  /* ──────────────────── Data ──────────────────── */

  const stats = [
    { value: 5, suffix: "+", label: "Years of Engineering", desc: "Building specialized digital platforms", icon: Clock },
    { value: 250, suffix: "+", label: "Systems Deployed", desc: "Production environments operating globally", icon: Server },
    { value: 99, suffix: ".9%", label: "Client SLA Uptime", desc: "Decoupled cloud infrastructure reliability", icon: ShieldCheck },
    { value: 14, suffix: "M+", label: "Data Records Processed", desc: "API payload & inventory sync records", icon: Database },
  ];

  const values = [
    {
      title: "Engineering Rigor",
      desc: "We build resilient, decoupled backend architectures that handle high-concurrency traffic surges and complex transactional loads without performance degradation.",
      Icon: Zap,
      tag: "Architecture",
    },
    {
      title: "Operational Automation",
      desc: "If a workflow is repetitive, we automate it. From live 1688 API catalog translations to automated cargo manifest compilation and thermal print driver triggers.",
      Icon: Cpu,
      tag: "Automation",
    },
    {
      title: "Data Sovereignty",
      desc: "By utilizing Headless WordPress, clients retain 100% ownership of their content and customer databases without proprietary platform lock-in.",
      Icon: Lock,
      tag: "Security",
    },
    {
      title: "Sub-Second Speed",
      desc: "Every platform is optimized for peak performance with edge node caching, dynamic static regeneration, and lightweight bundle delivery.",
      Icon: Rocket,
      tag: "Performance",
    },
  ];

  const milestones = [
    {
      year: "2024",
      name: "Core Engineering Inception",
      desc: "Founded with a clear mandate to eliminate manual supply chain bottlenecks for cross-border traders and high-volume logistics operators.",
      highlight: "Initial API Pipeline Architecture",
    },
    {
      year: "2025",
      name: "1688 API Platform Launch",
      desc: "Rolled out our proprietary 1688 China sourcing bridge, enabling instant product scraping, automated translation queues, and dynamic markup calculations.",
      highlight: "Processed 500k+ Wholesale Items",
    },
    {
      year: "2026",
      name: "Headless Decoupled Expansion",
      desc: "Upgraded our entire enterprise client base to Next.js 16 + Headless WordPress, achieving sub-second global rendering and zero WordPress vulnerability exposure.",
      highlight: "Next.js 16 + Cloudflare Edge Deployments",
    },
  ];

  const team = [
    {
      name: "Rahat Chowdhury",
      role: "Founder & Principal Architect",
      bio: "Ex-logistics systems lead specialized in wholesale data schemas, cross-border API protocols, and high-concurrency database design.",
      experience: "8+ Yrs Software Architecture",
    },
    {
      name: "Imran Hossain",
      role: "Head of Integrations & APIs",
      bio: "API specialist focused on high-volume data scraping queues, automated translation pipelines, and ESC/POS hardware print drivers.",
      experience: "6+ Yrs Backend Engineering",
    },
    {
      name: "Lina Tasnim",
      role: "Lead UI/UX Engineer",
      bio: "Design technologist dedicated to micro-interactions, responsive design systems, and semantic frontend performance optimization.",
      experience: "5+ Yrs Frontend Engineering",
    },
  ];

  /* ──────────────────── Render ──────────────────── */

  return (
    <div className="bg-light-secondary/40">

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-dark text-white min-h-[75vh] flex items-center">
        {/* Decorative Grid & Glows */}
        <div className="absolute inset-0 line-grid pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-brand opacity-10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary opacity-10 rounded-full blur-[140px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Copy */}
            <HeroScrollReveal className="lg:col-span-7 space-y-8">
              <span className="reveal-item opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest glass text-brand">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                Engineering Identity & History
              </span>

              <h1 className="reveal-item opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
                Architecting the{" "}
                <span className="text-gradient-brand">Future of Digital</span>{" "}
                <span className="text-gradient-primary">Commerce</span>
              </h1>

              <p className="reveal-item opacity-0 text-base md:text-lg text-text-muted max-w-xl leading-relaxed">
                Redmun Digitech is a specialized team of software engineers and API integrators. We design high-speed, decoupled digital platforms that automate complex business workflows for logistics, import, and enterprise retail.
              </p>

              <div className="reveal-item opacity-0 flex flex-wrap gap-4">
                <Button variant="brand" size="lg" href="/contact">
                  Talk to Our Team
                </Button>
                <Button variant="outline" size="lg" href="/portfolio" className="border-border-dark text-white hover:bg-dark-tertiary">
                  View Our Work
                </Button>
              </div>
            </HeroScrollReveal>

            {/* Right Image Placeholder */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <ParallaxSection speed={-25}>
                <div className="relative">
                  <div className="img-placeholder-dark rounded-3xl aspect-[4/3] border border-white/10 shadow-2xl overflow-hidden p-6 flex flex-col justify-between">
                    <span className="text-white/30 text-sm font-semibold tracking-wider text-center my-auto">
                      [ Corporate HQ & Engineering Lab Image ]
                    </span>
                  </div>
                  {/* Floating Metric Badge */}
                  <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 animate-float shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-brand font-bold">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white uppercase tracking-wider">Zero-Downtime Architecture</p>
                        <p className="text-[11px] text-text-muted">Edge-cached Next.js 16 deployments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxSection>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — IMPACT STATS COUNTER
          ═══════════════════════════════════════════ */}
      <section className="relative bg-white border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                      <StatIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-2">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                      className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight"
                    />
                  </div>
                  <p className="text-sm font-bold text-brand uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-xs text-text-tertiary">{stat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — MISSION & VISION SPLIT
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto">
            <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-brand block mb-3">Foundational Purpose</span>
            <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold text-dark mb-5 leading-tight">
              Driven by Operational{" "}
              <span className="text-gradient-primary">Efficiency</span>
            </h2>
            <p className="sr-item opacity-0 text-text-secondary text-base md:text-lg leading-relaxed">
              We bridge the gap between complex supply-chain logistics and modern web experiences.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={0.15}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Mission Card */}
              <div className="sr-item opacity-0 bg-white p-8 md:p-12 rounded-3xl border border-border shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between space-y-6 glow-border-brand">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">Our Mission</span>
                  <h3 className="text-2xl font-bold text-dark mb-4">Automating Sourcing & Logistics Overhead</h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6">
                    To eliminate manual administration in wholesale trade. By replacing copy-paste product catalog entries, manual currency conversion, and receipt sorting with automated API pipelines, we streamline operational efficiency for growing businesses.
                  </p>
                </div>

                {/* Mission Image Placeholder */}
                <div className="img-placeholder rounded-2xl aspect-[16/9] border border-border overflow-hidden">
                  <span>[ Automated API Architecture Diagram Placeholder ]</span>
                </div>
              </div>

              {/* Vision Card */}
              <div className="sr-item opacity-0 bg-white p-8 md:p-12 rounded-3xl border border-border shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between space-y-6 glow-border-primary">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Our Vision</span>
                  <h3 className="text-2xl font-bold text-dark mb-4">Frictionless Cross-Border Supply Systems</h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6">
                    We envision a digital ecosystem where importing wholesale products and managing cargo manifests requires a single click. Decoupled frontend interfaces render instantaneously while securely syncing backend inventories in real-time.
                  </p>
                </div>

                {/* Vision Image Placeholder */}
                <div className="img-placeholder rounded-2xl aspect-[16/9] border border-border overflow-hidden">
                  <span>[ Global Supply Chain Network Mockup Placeholder ]</span>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — CORE VALUES
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-white border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto">
            <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-brand block mb-3">Guiding Principles</span>
            <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold text-dark mb-5 leading-tight">
              Our Core Engineering{" "}
              <span className="text-gradient-brand">Values</span>
            </h2>
            <p className="sr-item opacity-0 text-text-secondary text-base md:text-lg leading-relaxed">
              The technical standards and engineering philosophy that dictate every system we construct.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={0.1} scale>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v, idx) => {
                const ValueIcon = v.Icon;
                return (
                  <div
                    key={idx}
                    className="sr-item opacity-0 group p-8 rounded-2xl border border-border bg-light/30 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <ValueIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/5 px-3 py-1 rounded-full">
                          {v.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-brand transition-colors">{v.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — TIMELINE & MILESTONES
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-20 text-center max-w-3xl mx-auto">
            <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-primary block mb-3">Milestone Progress</span>
            <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold text-dark mb-5 leading-tight">
              Corporate Evolution &{" "}
              <span className="text-gradient-primary">Growth</span>
            </h2>
            <p className="sr-item opacity-0 text-text-secondary text-base md:text-lg leading-relaxed">
              Key milestones in our history of building enterprise-scale business software integrations.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {milestones.map((mil, idx) => (
                <div
                  key={idx}
                  className="sr-item opacity-0 bg-white p-8 rounded-3xl border border-border relative shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-5xl font-extrabold text-brand/20 tracking-tighter">{mil.year}</span>
                      <span className="text-[10px] font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Phase {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">{mil.name}</h3>
                    <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-6">{mil.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-[11px] font-bold text-dark uppercase tracking-wider">{mil.highlight}</span>
                    <Check className="w-4 h-4 text-brand" />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — ENGINEERING TEAM
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 line-grid pointer-events-none" />
        <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] bg-brand opacity-8 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="mb-20 text-center max-w-3xl mx-auto">
            <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-brand block mb-3">Architects & Developers</span>
            <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Meet Our Core{" "}
              <span className="text-gradient-brand">Engineering Team</span>
            </h2>
            <p className="sr-item opacity-0 text-text-muted text-base md:text-lg leading-relaxed">
              The software architects, API integrators, and UI developers behind the Redmun Digitech platform.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={0.12} scale>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((t, idx) => (
                <div
                  key={idx}
                  className="sr-item opacity-0 glass p-8 rounded-3xl border border-white/10 hover:bg-white/[0.08] transition-all duration-500 flex flex-col justify-between text-center group"
                >
                  <div>
                    {/* Team Member Avatar Placeholder */}
                    <div className="w-24 h-24 img-placeholder-dark rounded-full border-2 border-brand/40 mx-auto mb-6 flex items-center justify-center font-bold text-brand text-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <span>[ {t.name.split(" ")[0]} Photo ]</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand transition-colors">{t.name}</h3>
                    <p className="text-xs text-brand font-semibold mb-4 uppercase tracking-wider">{t.role}</p>
                    <p className="text-xs text-text-muted leading-relaxed mb-6">{t.bio}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10 text-[11px] font-bold text-white/50 tracking-wider uppercase">
                    {t.experience}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — OFFICE HEADQUARTERS
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="sr-item opacity-0 bg-white p-8 md:p-16 rounded-3xl border border-border shadow-sm flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand block">Operational Base</span>
                <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
                  Central Operations & Tech Hub
                </h2>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  Our central office houses database managers, API sourcing specialists, and core developers. Visit us for technical scoping workshops or platform architecture reviews.
                </p>
                <div className="space-y-3 pt-2 text-sm font-semibold text-text-secondary">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-light flex items-center justify-center text-brand">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span>Road 13, Sector 14, Uttara, Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-light flex items-center justify-center text-brand">
                      <Mail className="w-4 h-4" />
                    </span>
                    <a href="mailto:contact@redmun.com" className="hover:text-brand transition-colors">contact@redmun.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-light flex items-center justify-center text-brand">
                      <Phone className="w-4 h-4" />
                    </span>
                    <a href="tel:+8801711994608" className="hover:text-brand transition-colors">+880 1711 994608</a>
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="brand" size="md" href="/contact">
                    Schedule Office Visit
                  </Button>
                </div>
              </div>

              {/* Interactive Office / Map Placeholder */}
              <div className="w-full lg:w-[480px] h-80 img-placeholder rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col items-center justify-center text-center p-6">
                <MapPin className="w-8 h-8 text-brand mb-2" />
                <span className="font-bold text-xs uppercase tracking-wider text-text-secondary">
                  [ Interactive HQ Office Map Container ]
                </span>
                <span className="text-[10px] text-text-tertiary mt-1">Road 13, Sector 14, Uttara, Dhaka | Open: 11AM-8PM (Sat-Thu)</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — CTA SECTION
          ═══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>

    </div>
  );
}
