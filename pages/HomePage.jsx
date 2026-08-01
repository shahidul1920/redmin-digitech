import React from "react";
import {
  Newspaper,
  Building2,
  ShoppingCart,
  Globe,
  Truck,
  Gem,
  UtensilsCrossed,
  Radio,
  Landmark,
  Package,
  Store,
  Factory,
  Check,
  ArrowRight,
  ChevronDown,
  Activity,
  Cpu,
  Layers,
  Sparkles,
  Zap,
} from "@/components/Icons";
import Image from "next/image";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import HeroScrollReveal from "@/components/HeroScrollReveal";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxSection from "@/components/ParallaxSection";
import ProjectLifecycle from "@/components/ProjectLifecycle";

export default function HomePage() {
  /* ──────────────────── Data ──────────────────── */

  const stats = [
    { value: 250, suffix: "+", label: "Projects Delivered", desc: "Production-grade systems shipped" },
    { value: 35, suffix: "+", label: "Business Clients", desc: "Active enterprise accounts" },
    { value: 7, suffix: "", label: "Core Products", desc: "Specialized SaaS platforms" },
    { value: 99, suffix: ".9%", label: "Platform Uptime", desc: "SLA-backed availability" },
  ];

  const products = [
    {
      title: "News Portal Platform",
      desc: "Engage your audience with fast, modern and SEO-optimized news portals.",
      href: "/products/news-portal",
      solutionTag: "Content Solution",
      tag: "Media",
      Icon: Newspaper,
      image: "/1-lap-web.png",
      features: [
        "Real-time News Management",
        "SEO Optimized & Fast",
        "Multi-category & Author System",
        "Responsive & Ad Ready",
      ],
    },
    {
      title: "Company Profile System",
      desc: "Professional websites that represent your brand and build trust instantly.",
      href: "/products/company-profile",
      solutionTag: "Brand Solution",
      tag: "Corporate",
      Icon: Building2,
      image: "/company-profile.png",
      features: [
        "Modern & Unique Design",
        "SEO & Speed Optimized",
        "Company, Team & Career Pages",
        "Multi-language Support",
      ],
    },
    {
      title: "General E-Commerce",
      desc: "Fully functional e-commerce platforms to sell anything, anywhere.",
      href: "/products/ecommerce",
      solutionTag: "Ecommerce Solution",
      tag: "Retail",
      Icon: ShoppingCart,
      image: "/general-e-commerce.png",
      features: [
        "Product & Inventory Management",
        "Multiple Payment Gateway",
        "Customer & Order Management",
        "Discount, Coupon & Tax System",
      ],
    },
    {
      title: "1688 API Sourcing Portal",
      desc: "Automate sourcing from 1688 with real-time data, orders, and tracking.",
      href: "/products/1688-api",
      solutionTag: "China Sourcing Solution",
      tag: "Import",
      Icon: Globe,
      image: "/1688-api-intragration.png",
      features: [
        "1688 API Real-time Integration",
        "Product Import & Auto Update",
        "Order & Tracking Management",
        "Supplier & Price Management",
      ],
    },
    {
      title: "Shipping Management System",
      desc: "Streamline your logistics, shipments, and deliveries in one platform.",
      href: "/products/shipping-management",
      solutionTag: "Logistics Solution",
      tag: "Logistics",
      Icon: Truck,
      features: [
        "Shipment & Tracking Management",
        "Courier & Route Optimization",
        "Real-time Tracking & Notifications",
        "Reports & Performance Analytics",
      ],
    },
    {
      title: "Custom Branded E-Commerce",
      desc: "White-label e-commerce platform tailored to your brand and business model.",
      href: "/products/branded-ecommerce",
      solutionTag: "Custom Solution",
      tag: "Retail",
      Icon: Gem,
      features: [
        "Custom Design & Branding",
        "Multi-vendor Support",
        "Advanced Analytics",
        "Scalable & Secure Architecture",
      ],
    },
    {
      title: "Restaurant Chain Management",
      desc: "Manage outlets, orders, menus, and customers from a single digital platform.",
      href: "/products/restaurant-management",
      solutionTag: "Restaurant Solution",
      tag: "Hospitality",
      Icon: UtensilsCrossed,
      features: [
        "Multi-outlet Management",
        "Digital Menu & Ordering",
        "Kitchen & Inventory Management",
        "Sales & Performance Reports",
      ],
    },
  ];

  const industries = [
    { name: "Media & Publishing", desc: "High-concurrency editorial tools for national outlets", Icon: Radio },
    { name: "Corporate Enterprise", desc: "Secure portals, intranets, and investor dashboards", Icon: Landmark },
    { name: "Import & Wholesale", desc: "Cross-border sourcing & catalog automation", Icon: Package },
    { name: "Shipping & Freight", desc: "Fleet tracking, manifests & customs compliance", Icon: Truck },
    { name: "Restaurant & F&B", desc: "POS systems, kitchen displays & reservation engines", Icon: UtensilsCrossed },
    { name: "Retail & D2C", desc: "Omnichannel storefronts with analytics pipelines", Icon: Store },
    { name: "Manufacturing", desc: "Production planning, supply chain & ERP interfaces", Icon: Factory },
    { name: "Healthcare & Pharma", desc: "Medical inventory control, pharma distribution & SLA compliance", Icon: Activity },
  ];

  const valueChecklist = [
    { title: "Industry-Optimized Architecture", desc: "Pre-configured database schemas and workflows tailored to your sector — not generic templates." },
    { title: "Enterprise Security Standards", desc: "Decoupled frontend eliminates direct DB exposure. HTTPS-only, encrypted APIs, and role-based access controls." },
    { title: "Sub-Second Performance", desc: "Server-side rendering, edge caching, and code splitting deliver loading speeds under 1.2 seconds globally." },
    { title: "SEO-First Engineering", desc: "Semantic HTML, structured data, dynamic meta tags, and server-rendered pages for maximum search visibility." },
    { title: "Responsive by Default", desc: "Every component built mobile-first with fluid scaling across phones, tablets, laptops, and 4K displays." },
    { title: "Infinite Scalability", desc: "Serverless deployments on Vercel and AWS. Auto-scale to handle traffic spikes without infrastructure management." },
    { title: "ERP & CRM Integration", desc: "Pre-built connectors for inventory systems, SAP modules, billing engines, and custom internal tools." },
    { title: "Open API Architecture", desc: "RESTful endpoints and webhook hooks for seamless third-party integrations and data exchange pipelines." },
  ];

  const techStack = [
    { name: "Next.js 16", desc: "Server Components & SSR", color: "brand" },
    { name: "WordPress API", desc: "Headless CMS Engine", color: "primary" },
    { name: "GSAP 3", desc: "Premium Motion Physics", color: "brand" },
    { name: "Tailwind v4", desc: "Utility-First Styling", color: "primary" },
    { name: "MySQL / REST", desc: "Relational Data Layer", color: "brand" },
    { name: "Cloudflare", desc: "CDN & Edge Protection", color: "primary" },
  ];

  const faqs = [
    { q: "What is a Headless WordPress architecture?", a: "It separates the backend content editor (WordPress) from the frontend display layer (Next.js). Editors get the familiar WordPress admin panel, while visitors experience a lightning-fast, ultra-secure React interface with zero WordPress vulnerabilities exposed." },
    { q: "How does the 1688 API platform automate product sourcing?", a: "Our system pulls raw product data — images, specifications, and pricing — directly from 1688.com's API, translates everything automatically using premium language models, applies your margin rules, and publishes catalog-ready listings in seconds." },
    { q: "Can the Shipping Management System integrate with courier APIs?", a: "Yes. It supports plug-in integrations with DHL, FedEx, Aramex, and custom freight APIs. Tracking coordinates, delivery statuses, and customer notifications are updated in real-time across all carriers." },
    { q: "Do you offer flexible pricing for growing businesses?", a: "Absolutely. Every platform is modular — you can launch with core features and incrementally unlock advanced modules (analytics, multi-warehouse, API access) as your operations scale." },
    { q: "Is every platform fully mobile responsive?", a: "All components are built mobile-first using fluid grid systems and tested across iOS, Android, tablets, and high-DPI desktop displays. Touch interactions and viewport scaling are tuned for each breakpoint." },
    { q: "How secure are your deployed platforms?", a: "By decoupling the frontend from the database via server-side rendering, direct SQL injection vectors are eliminated. All communication uses HTTPS with encrypted API handshakes, and admin panels are IP-restricted." },
    { q: "What is a typical project timeline?", a: "A corporate profile site takes 2–3 weeks. A complex 1688 sourcing platform or shipping ERP takes 6–8 weeks. Enterprise custom builds with multiple integrations typically take 10–14 weeks." },
    { q: "Can restaurant orders print to thermal receipt printers?", a: "Yes. Our restaurant management system integrates directly with ESC/POS thermal printers over local network gateways, supporting instant kitchen ticket printing and receipt generation." },
    { q: "Do you provide hosting and post-launch maintenance?", a: "We deploy to modern cloud infrastructure (Vercel, AWS, or Docker hosts) and offer tiered SLA support packages including uptime monitoring, security patches, and feature iterations." },
    { q: "Can existing website content be migrated without losing SEO?", a: "Yes. We write custom migration scripts that safely transfer databases, media assets, and URL structures while preserving existing search rankings through proper 301 redirect mapping." },
  ];

  /* ──────────────────── Render ──────────────────── */

  return (
    <div className="bg-light-secondary/40">

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-dark text-white min-h-[90vh] flex items-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 line-grid pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-brand opacity-10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary opacity-10 rounded-full blur-[140px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.04] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left — Copy */}
            <HeroScrollReveal className="lg:col-span-6 space-y-8">
              <span className="reveal-item opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/5 border border-white/10 text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Next-Gen Enterprise Software
              </span>

              <h1 className="reveal-item opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.08] tracking-tight">
                Build Smarter.{" "}
                <span className="text-gradient-brand">Ship Faster.</span>
                <br />
                <span className="text-text-muted text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium mt-2 block">
                  Enterprise Platforms That Scale.
                </span>
              </h1>

              <p className="reveal-item opacity-0 text-base md:text-lg text-text-muted max-w-xl leading-relaxed">
                Redmun Digitech engineers high-performance headless platforms — from automated 1688 sourcing portals and shipping ERPs to custom branded e-commerce systems — designed to eliminate operational bottlenecks and accelerate revenue growth.
              </p>

              <div className="reveal-item opacity-0 flex flex-wrap gap-4">
                <Button variant="brand" size="lg" href="/contact">
                  Request a Demo
                </Button>
                <Button variant="outline" size="lg" href="/products" className="border-border-dark text-white hover:bg-dark-tertiary">
                  Explore Products
                </Button>
              </div>

              {/* Trust bar */}
              <div className="reveal-item opacity-0 pt-8 border-t border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4">Trusted by industry leaders</p>
                <div className="flex flex-wrap gap-6 items-center">
                  {["SINO CARGO GROUP", "PRO LOGISTICS BD", "NEWSNET INC.", "RETAILGRID CO."].map((name, i) => (
                    <span key={i} className="text-xs font-bold text-white/25 tracking-wider uppercase">{name}</span>
                  ))}
                </div>
              </div>
            </HeroScrollReveal>

            {/* Right — Hero Showcase Image (Responsive on Mobile, Tablet & Desktop) */}
            <div className="lg:col-span-6 relative mt-12 lg:mt-0 block">
              <ParallaxSection speed={-20}>
                <div className="relative w-full max-w-lg lg:max-w-2xl mx-auto lg:ml-auto">
                  {/* Ultra Intense Red Ambient Glow (Fluid Scaling) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px] xl:w-[800px] xl:h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand via-brand/80 to-transparent blur-[60px] sm:blur-[80px] opacity-100 pointer-events-none z-0 animate-pulse-glow" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-brand-light blur-[40px] sm:blur-[55px] opacity-90 pointer-events-none z-0" />

                  {/* Large Showcase Image */}
                  <div className="relative z-10 w-full lg:w-[115%] xl:w-[130%] lg:-ml-6 xl:-ml-12 overflow-visible">
                    <Image
                      src="/heroImageN.png"
                      alt="Dashboard Preview"
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(255,0,0,0.3)] sm:drop-shadow-[0_30px_70px_rgba(255,0,0,0.35)] transform-gpu transition-transform duration-500 hover:scale-[1.02]"
                      priority
                    />
                  </div>

                  {/* Floating card */}
                  <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 bg-dark-secondary/95 border border-white/10 rounded-xl p-2.5 sm:p-3.5 shadow-2xl animate-float z-20 backdrop-blur-md">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/20 flex items-center justify-center text-primary-light font-bold text-xs sm:text-sm">
                        <Cpu className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      </div>
                      <div>
                        <p className="text-[11px] sm:text-xs font-bold text-white">1688 Sync Active</p>
                        <p className="text-[9px] sm:text-[10px] text-text-muted">2,847 products synced</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating metric */}
                  <div className="absolute -top-4 right-2 sm:-top-6 sm:-right-6 bg-dark-secondary/95 border border-white/10 rounded-xl p-2.5 sm:p-3.5 shadow-2xl animate-float z-20 backdrop-blur-md" style={{ animationDelay: "3s" }}>
                    <div className="text-center">
                      <p className="text-base sm:text-lg font-bold text-white">99.9%</p>
                      <p className="text-[9px] sm:text-[10px] text-text-muted">Uptime SLA</p>
                    </div>
                  </div>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 2 — STATS COUNTER BAR
          ═══════════════════════════════════════════ */}
      <section className="relative bg-white border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left group">
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
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 3 — SPECIALIZED PRODUCTS GRID
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-20 text-center max-w-3xl mx-auto">
            <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-brand block mb-3">Our Product Suite</span>
            <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold text-dark mb-5 leading-tight">
              Seven Specialized Platforms.{" "}
              <span className="text-text-tertiary">One Engineering Team.</span>
            </h2>
            <p className="sr-item opacity-0 text-text-secondary text-base md:text-lg leading-relaxed">
              Purpose-built software systems designed to automate operations, control supply chains, and scale digital revenue — not generic templates.
            </p>
          </ScrollReveal>

          {/* Product Card — reusable renderer */}
          {(() => {
            const renderCard = (prod, idx) => {
              const ProdIcon = prod.Icon;
              return (
                <div
                  key={idx}
                  className="sr-item opacity-0 group relative flex flex-col p-0 rounded-2xl border border-border bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Illustration mockup area — full width at top with overlays */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <div className="img-placeholder w-full aspect-[16/10] overflow-hidden rounded-t-2xl bg-gray-50 relative">
                      <Image src={prod?.image} alt={prod.title} fill className="object-cover" />
                    </div>

                    {/* Icon badge (overlay) */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <ProdIcon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Solution tag (overlay) */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest text-brand bg-brand/8 px-3 py-1.5 rounded-full whitespace-nowrap">
                        {prod.solutionTag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-dark mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
                      {prod.title}
                    </h3>

                    {/* Short description */}
                    <p className="text-xs text-text-secondary leading-relaxed mb-5">
                      {prod.desc}
                    </p>

                    {/* Feature checklist */}
                    <ul className="space-y-2.5 mb-6">
                    {prod.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-dark">
                        <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>

                    {/* Learn More link */}
                    <div className="mt-auto">
                      <Button variant="ghost" size="sm" href={prod.href} className="justify-start pl-0 text-primary font-bold text-xs group-hover:translate-x-1 transition-transform duration-200">
                        Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            };

            return (
              <>
                {/* Row 1 — Top 4 cards */}
                <ScrollReveal stagger={0.08} scale>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {products.slice(0, 4).map(renderCard)}
                  </div>
                </ScrollReveal>

                {/* Row 2 — Bottom 3 cards, centered */}
                <ScrollReveal stagger={0.08} scale>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[900px] lg:max-w-none mx-auto">
                    {products.slice(4, 7).map((prod, idx) => renderCard(prod, idx + 4))}
                  </div>
                </ScrollReveal>
              </>
            );
          })()}
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 4 — FEATURED PRODUCT (1688 API)
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-dark pointer-events-none" />
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-brand opacity-8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-primary opacity-8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left — Copy */}
              <div className="lg:col-span-5 space-y-6">
                <span className="sr-item opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest glass text-brand">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  Featured Pipeline
                </span>

                <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold leading-tight">
                  1688 API{" "}
                  <span className="text-gradient-brand">Sourcing</span>{" "}
                  <span className="text-gradient-primary">Ecommerce</span>
                </h2>

                <p className="sr-item opacity-0 text-text-muted leading-relaxed">
                  Connect directly to China's largest wholesale marketplace. Automate what used to take your team days — product discovery, translation, pricing, and catalog publishing — into a single seamless workflow.
                </p>

                <div className="sr-item opacity-0 space-y-5 pt-6 border-t border-white/10">
                  <div>
                    <h4 className="text-sm font-bold text-brand uppercase tracking-wider mb-1.5">The Problem</h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      Manually sourcing products from Chinese sites takes days of copy-pasting, translating, and price-calculating. Stock levels go stale within hours, and margin errors cost thousands.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-light uppercase tracking-wider mb-1.5">The Solution</h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      An automated API bridge that syncs product images, specifications, weight-based shipping rates, and translated descriptions — with live margin calculations and one-click catalog publishing.
                    </p>
                  </div>
                </div>

                <div className="sr-item opacity-0 pt-4">
                  <Button variant="brand" size="md" href="/products/1688-api">
                    View Full Platform Details
                  </Button>
                </div>
              </div>

              {/* Right — Workflow visualization */}
              <div className="lg:col-span-7 sr-item opacity-0">
                <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
                  <h3 className="text-lg font-bold text-white mb-8">Automated Pipeline</h3>

                  <div className="space-y-4">
                    {[
                      { step: "1", label: "1688 Product Search", detail: "Live API data pull", accent: "brand" },
                      { step: "2", label: "Auto Translation Engine", detail: "CN → EN/BN conversion", accent: "primary" },
                      { step: "3", label: "Margin & Pricing Calculator", detail: "Weight-based cost formulas", accent: "brand" },
                      { step: "4", label: "Catalog Publishing", detail: "One-click storefront sync", accent: "primary" },
                      { step: "5", label: "Order → Supplier Bridge", detail: "Automated order routing", accent: "brand" },
                    ].map((item, idx) => {
                      const accentClasses = item.accent === "brand"
                        ? "bg-brand/20 text-brand"
                        : "bg-primary/20 text-primary";
                      return (
                        <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition-all duration-300 group">
                          <div className={`w-10 h-10 rounded-lg ${accentClasses} flex items-center justify-center font-bold text-sm shrink-0`}>
                            {item.step}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-bold text-white">{item.label}</p>
                            <p className="text-[11px] text-text-muted">{item.detail}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-white transition-colors shrink-0" />
                        </div>
                      );
                    })}
                  </div>

                  {/* Decorative ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/[0.02] rounded-full pointer-events-none" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 5 — INDUSTRIES WE SERVE
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto">
            <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-brand block mb-3">Targeted Domains</span>
            <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold text-dark mb-5 leading-tight">
              Industries We{" "}
              <span className="text-gradient-primary">Engineer For</span>
            </h2>
            <p className="sr-item opacity-0 text-text-secondary text-base md:text-lg leading-relaxed">
              We don't build generic websites. We build sector-specific platforms configured for your industry's compliance requirements, operational patterns, and scaling trajectories.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={0.06} direction="up" scale>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {industries.map((ind, idx) => {
                const IndIcon = ind.Icon;
                return (
                  <div key={idx} className="sr-item opacity-0 group p-6 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-500">
                    <div className="w-12 h-12 rounded-xl bg-light flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                      <IndIcon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">{ind.name}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{ind.desc}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 6 — WHY CHOOSE US (STICKY SPLIT)
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-white border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col">
              <ScrollReveal className="flex flex-col h-full justify-between space-y-6">
                <div>
                  <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-brand block mb-3">Core Strengths</span>
                  <h2 className="sr-item opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-5">
                    Why Enterprise Clients{" "}
                    <span className="text-gradient-brand">Choose Redmun</span>
                  </h2>
                  <p className="sr-item opacity-0 text-text-secondary leading-relaxed text-base">
                    We don't build simple brochure sites. We engineer secure, automated platforms that reduce operational overhead, integrate with your existing systems, and scale without limits.
                  </p>
                </div>

                {/* Image placeholder for office/team — flex-1 fills vertical height */}
                <div className="sr-item opacity-0 img-placeholder rounded-2xl flex-1 min-h-[240px] border border-border overflow-hidden shadow-sm flex items-center justify-center p-6">
                  <Image src="/team.svg" alt="Our Team" className="w-full h-full object-cover" fill />
                  {/* <span>[ Team / Office Image ]</span> */}
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Checklist Grid */}
            <div className="lg:col-span-7">
              <ScrollReveal stagger={0.08}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {valueChecklist.map((item, idx) => (
                    <div key={idx} className="sr-item opacity-0 flex gap-4 p-5 rounded-xl border border-border bg-light/50 hover:bg-white hover:shadow-sm transition-all duration-300 group">
                      <div className="mt-0.5 flex-shrink-0">
                        <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white group-hover:scale-110 transition-all duration-300">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-dark mb-1 text-sm">{item.title}</h3>
                        <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 7 — DEVELOPMENT PROCESS (TIMELINE)
          ═══════════════════════════════════════════ */}
      <ProjectLifecycle />


      {/* ═══════════════════════════════════════════
          SECTION 8 — PORTFOLIO SNIPPET
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-brand block mb-3">Selected Work</span>
              <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold text-dark leading-tight">
                Recent{" "}
                <span className="text-gradient-primary">Projects</span>
              </h2>
            </div>
            <div className="sr-item opacity-0">
              <Button variant="outline" size="md" href="/portfolio">
                View All Projects <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.1} scale>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Sino Cargo Shipping Portal", industry: "Logistics & Freight", desc: "Multi-carrier tracking dashboard with automated manifest generation and customs documentation workflows." },
                { title: "BanglaPress News Network", industry: "Media & Publishing", desc: "High-traffic editorial CMS serving 500K+ daily readers with real-time content indexing and ad optimization." },
                { title: "DragonMart BD Sourcing", industry: "Import & Wholesale", desc: "1688 API-integrated wholesale catalog with auto-translation, margin calculators, and bulk order management." },
              ].map((project, idx) => (
                <div key={idx} className="sr-item opacity-0 group rounded-2xl border border-border overflow-hidden bg-white hover:shadow-xl transition-all duration-500">
                  {/* Project Image Placeholder */}
                  <div className="img-placeholder aspect-[16/10] border-b border-border">
                    <span>[ {project.title} Mockup ]</span>
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{project.industry}</span>
                    <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{project.desc}</p>
                    <Button variant="ghost" size="sm" href="/portfolio" className="pl-0 text-primary font-bold">
                      View Case <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 9 — TECHNOLOGY STACK
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 line-grid pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-brand block mb-4">Built With Modern Tools</span>
            <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Server Components.{" "}
              <span className="text-gradient-primary">Decoupled Backends.</span>
            </h2>
            <p className="sr-item opacity-0 text-text-muted max-w-2xl mx-auto leading-relaxed">
              Every platform is engineered on a battle-tested stack optimized for security, speed, and developer velocity.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={0.08} direction="up" scale>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((tech, idx) => (
                <div key={idx} className="sr-item opacity-0 glass rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/[0.08] transition-all duration-300 group">
                  <span className="font-bold text-sm text-white mb-1 group-hover:text-brand transition-colors">{tech.name}</span>
                  <span className="text-[10px] text-text-muted">{tech.desc}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 10 — FAQ ACCORDION
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="mb-16 text-center">
            <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-brand block mb-3">Help Center</span>
            <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold text-dark mb-5 leading-tight">
              Frequently Asked{" "}
              <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="sr-item opacity-0 text-text-secondary text-base leading-relaxed max-w-xl mx-auto">
              Get instant answers to common queries about our architecture, integrations, timelines, and support structures.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={0.06}>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="sr-item opacity-0 group bg-white rounded-2xl border border-border overflow-hidden [&_summary::-webkit-details-marker]:hidden hover:border-primary/30 transition-colors duration-300"
                >
                  <summary className="flex items-center justify-between p-6 font-semibold text-dark cursor-pointer select-none group-open:bg-light/60 transition-colors">
                    <span className="pr-4">{faq.q}</span>
                    <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-light flex items-center justify-center group-open:bg-primary/10 transition-all duration-300">
                      <ChevronDown className="w-4 h-4 text-text-secondary transition-transform duration-300 group-open:rotate-180 group-open:text-primary" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm text-text-secondary leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 11 — FINAL CTA
          ═══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>

    </div>
  );
}
