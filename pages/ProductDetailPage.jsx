import React from "react";
import {
  Check,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Zap,
  ShieldCheck,
  Layers,
  Clock,
  Database,
  Activity,
  CheckCircle,
  Cpu,
} from "@/components/Icons";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProductDetailPage({ slug }) {
  // Database for dynamic product detail rendering across all 7 products
  const productData = {
    "1688-api": {
      title: "1688 API Sourcing Platform",
      tagline: "China Import Automation",
      desc: "Connect your digital store directly to China's leading wholesale catalog with instant translations, automated currency calculation, and live inventory syncs.",
      status: "ONLINE",
      statusMetrics: { label: "API Calls: 120,400 / hr", sub: "Latency: 45ms" },
      problem: "Wholesalers and digital store owners waste hours manually downloading product sheets, translating Chinese titles, converting RMB exchange rates, and coping with unexpected stock depletion from suppliers.",
      solution: "Our automated API pipeline hooks directly into the 1688 catalog, downloading specs, translating Chinese attributes to English/Bengali, updating base costs into local currency, and modifying inventories in real-time.",
      features: [
        { name: "Live Catalog Sync", desc: "Monitors Chinese inventory limits and automatically syncs pricing margins hourly." },
        { name: "Language Translation Engine", desc: "Transforms product descriptors, specifications, and options cleanly into English and Bengali." },
        { name: "Currency Calibration", desc: "Calculates markup rules based on active exchange rates automatically." },
        { name: "Automated Orders", desc: "Generates wholesale buy requests directly into vendor consoles upon checkout." },
      ],
      workflow: [
        { step: "Supplier", desc: "Wholesale vendor in China lists catalog details" },
        { step: "API Bridge", desc: "Redmun pipeline extracts catalog variables" },
        { step: "Storefront", desc: "Next.js storefront renders translated data" },
        { step: "Order", desc: "Customer places order on localized portal" },
        { step: "Shipping", desc: "Logistics system prepares customs manifest" },
        { step: "Customer", desc: "Package arrives at destination address" },
      ],
      mockups: [
        { badge: "Dashboard View", title: "Active Imports Monitoring", metric: "4,280 Units", sub: "Synchronized 15m ago" },
        { badge: "Admin Workspace", title: "Margin Rules Calibrator", metric: "USD/BDT Sync", sub: "Automated conversion triggers" },
        { badge: "Customer Portal", title: "Localized Checkout Options", metric: "One-Click Buy", sub: "Automated freight manifest hooks" },
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
      faqs: [
        { q: "How fast are product details updated from 1688?", a: "Our system runs background synchronization jobs that update pricing and stock levels hourly, ensuring your storefront never displays out-of-date prices or depleted stock." },
        { q: "Can we add custom markup percentages?", a: "Yes. You can configure flexible profit margin rules by product category, price tier, or individual vendor directly inside the administrative control panel." },
        { q: "How are Chinese product attributes translated?", a: "Our NLP translation engine automatically parses Chinese specifications, color names, and product descriptions into clean English and Bengali options." },
      ],
    },
    "shipping-management": {
      title: "Shipping & Logistics Management System",
      tagline: "Freight & Logistics Control",
      desc: "End-to-end cargo manifest trackers, custom dispatch alerts, multi-warehouse barcode readers, and dynamic freight tariff calculation matrices.",
      status: "ACTIVE",
      statusMetrics: { label: "Active Parcels: 45,200+", sub: "Manifest Processing: < 100ms" },
      problem: "Logistics operators face untracked parcel losses, manual weight and volumetric freight calculation errors, fragmented warehouse communication, and frustrated customers calling for delivery updates.",
      solution: "A unified cargo intelligence system that automates parcel scanning at receipt, computes dynamic volumetric tariffs, tracks containers in real-time, and fires automated SMS/Email delivery updates.",
      features: [
        { name: "Barcode & Parcel Scanner", desc: "Handheld scanner webhooks for instant warehouse intake, sorting, and manifest creation." },
        { name: "Dynamic Tariff Engine", desc: "Calculates air & sea cargo costs based on weight, volumetric calculations, and destination tier." },
        { name: "Real-Time Tracking Portal", desc: "White-labeled status portal for clients with milestone progress bars and courier coordinates." },
        { name: "SMS & Email Dispatch", desc: "Automated push notifications sent at customs clearance, sorting, and last-mile dispatch." },
      ],
      workflow: [
        { step: "Receipt", desc: "Warehouse receives parcel & scans barcode" },
        { step: "Manifest", desc: "System assigns lot ID & calculates freight tariff" },
        { step: "Transit", desc: "Real-time air/sea cargo container tracking" },
        { step: "Customs", desc: "Automated clearance documentation & alerts" },
        { step: "Sorting", desc: "Hub sorting & last-mile courier assignment" },
        { step: "Delivery", desc: "Parcel delivered with digital proof of delivery" },
      ],
      mockups: [
        { badge: "Logistics Console", title: "Live Parcel Tracking Monitor", metric: "12,450 Tracked", sub: "99.9% Scanning accuracy" },
        { badge: "Manifest Admin", title: "Freight Tariff Calibrator", metric: "Air/Sea Rules", sub: "Dynamic volumetric calculation" },
        { badge: "Client Portal", title: "White-Labeled Tracking", metric: "Live Status", sub: "Automated SMS alerts trigger" },
      ],
      benefits: [
        { title: "Full Visibility", desc: "End-to-end parcel journey tracking from warehouse intake to final customer doorstep." },
        { title: "95% Speed Boost", desc: "Barcode scanner webhooks eliminate manual entry in cargo manifest creation." },
        { title: "Tariff Accuracy", desc: "Automated volumetric pricing prevents revenue loss from undercharging shipping fees." },
        { title: "Customer Trust", desc: "Proactive SMS and email alerts dramatically reduce customer support inquiries." },
      ],
      pricing: [
        { name: "Starter", price: "$79", desc: "For boutique freight forwarders", features: ["Up to 2,500 monthly shipments", "Barcode scanning module", "SMS alert integration", "Standard support"] },
        { name: "Business", price: "$199", desc: "For growing logistics companies", features: ["Up to 15,000 monthly shipments", "Multi-warehouse management", "Dynamic volumetric tariff matrix", "Priority support"] },
        { name: "Enterprise", price: "$499", desc: "For global courier networks", features: ["Unlimited monthly shipments", "Custom carrier API integrations", "Custom white-labeled portal", "Dedicated logistics engineer"] },
      ],
      faqs: [
        { q: "Can we integrate local delivery couriers?", a: "Yes. Built-in API hooks connect seamlessly with leading local courier services as well as international carriers for last-mile delivery updates." },
        { q: "How does volumetric weight calculation work?", a: "The tariff engine automatically calculates standard volumetric weight (L x W x H / Divisor) and applies whichever rate (actual vs volumetric) is higher based on your rules." },
        { q: "Is offline barcode scanning supported?", a: "Yes. Warehouse staff can scan barcodes offline in low-connectivity areas; data synchronizes automatically once connected." },
      ],
    },
    "restaurant-management": {
      title: "Restaurant Chain Management Platform",
      tagline: "Multi-Outlet POS & Kitchen Automation",
      desc: "POS terminals, live kitchen display screens (KDS), multi-outlet inventory controls, thermal print hooks, and custom digital menu portals.",
      status: "ONLINE",
      statusMetrics: { label: "KDS Response: < 30ms", sub: "Multi-Branch Sync: Live" },
      problem: "Restaurant chains struggle with table order bottlenecks, paper kitchen ticket loss, ingredient theft, untracked inventory waste, and lack of real-time multi-branch revenue reporting.",
      solution: "An integrated restaurant management suite combining high-speed POS registers, digital Kitchen Display Systems (KDS), automated recipe ingredient deduction, thermal printer routing, and central cloud control.",
      features: [
        { name: "Multi-Terminal POS", desc: "Touch-optimized fast billing, floor table management, split payments, and instant discount rules." },
        { name: "Live Kitchen Display (KDS)", desc: "Routes orders to kitchen prep stations with color-coded timers to eliminate paper ticket clutter." },
        { name: "Thermal Printer Hook", desc: "Direct ESC/POS network printing for kitchen tickets (KOT) and customer receipts." },
        { name: "Recipe Inventory System", desc: "Deduct exact ingredient quantities per dish ordered to stop stock leakage." },
      ],
      workflow: [
        { step: "POS / QR", desc: "Waiter or customer places order on digital menu" },
        { step: "KDS Routing", desc: "Order instantly appears on kitchen prep screen" },
        { step: "Station Prep", desc: "Chefs prepare items with live color timer tracking" },
        { step: "Printer Hook", desc: "Thermal printer prints receipt & dispatch ticket" },
        { step: "Runner Service", desc: "Runner delivers order to table or takeaway counter" },
        { step: "Stock Sync", desc: "Central inventory deducts raw ingredients" },
      ],
      mockups: [
        { badge: "POS Register", title: "Touch Billing & Floor Layout", metric: "Sub-Sec Billing", sub: "Table split payments ready" },
        { badge: "Kitchen Display", title: "KDS Station Prep Screen", metric: "0 Paper Tickets", sub: "Color-coded order timers" },
        { badge: "Central Admin", title: "Multi-Outlet Control Hub", metric: "Real-time Sales", sub: "Recipe ingredient deduction" },
      ],
      benefits: [
        { title: "40% Faster Prep", desc: "Kitchen display screens accelerate order preparation and eliminate lost tickets." },
        { title: "Zero Ticket Miscommunication", desc: "Orders transfer directly from POS or QR code menus straight to the kitchen screen." },
        { title: "Ingredient Control", desc: "Automated recipe deduction exposes stock theft and reduces food waste." },
        { title: "Central Command", desc: "Monitor sales, revenue, and popular menu items across all restaurant branches in real-time." },
      ],
      pricing: [
        { name: "Starter", price: "$59", desc: "For single restaurant locations", features: ["1 POS register license", "1 KDS kitchen screen", "Thermal printer driver", "Standard reports"] },
        { name: "Business", price: "$129", desc: "For multi-outlet restaurant chains", features: ["Up to 5 POS registers / outlet", "Multi-station KDS routing", "Recipe ingredient inventory", "Priority support"] },
        { name: "Enterprise", price: "$299", desc: "For major restaurant franchises", features: ["Unlimited POS & KDS terminals", "Central franchise dashboard", "Food aggregator API sync", "Dedicated account engineer"] },
      ],
      faqs: [
        { q: "Will the POS work if internet connectivity drops?", a: "Yes. The POS operates in offline mode for billing and printing receipts, then automatically syncs orders with the cloud once network connectivity is restored." },
        { q: "Can we connect thermal kitchen printers?", a: "Our software includes native ESC/POS hardware drivers for LAN, USB, and Bluetooth thermal receipt printers." },
        { q: "Does it support food delivery aggregators?", a: "Yes. Integrations are available to consolidate orders from food aggregators directly into your POS and Kitchen Display System." },
      ],
    },
    "news-portal": {
      title: "Enterprise News Portal Platform",
      tagline: "High-Traffic Editorial CMS",
      desc: "Editorial CMS networks optimized for instant Google indexing, high-concurrent reads, live analytics dashboards, and AMP/PWA standards.",
      status: "DEPLOYED",
      statusMetrics: { label: "Concurrent Readers: 100k+", sub: "TTFB: 28ms" },
      problem: "Digital news publishers suffer server crashes during breaking news traffic spikes, slow page load speeds that penalize Google News rankings, cumbersome multi-editor workflows, and unoptimized ad monetization.",
      solution: "A Next.js static & edge-rendered media platform paired with Headless WordPress. Serves millions of requests effortlessly, supports instant Google News indexing, Algolia search, and flexible ad placement units.",
      features: [
        { name: "Edge Concurrency Engine", desc: "Handles millions of pageviews using Next.js edge caching and CDN distribution." },
        { name: "Instant Google Indexing", desc: "Structured News Schema markup and auto-pinging ensure breaking news ranks immediately." },
        { name: "Algolia Fast Search", desc: "Instant full-text search across vast article archives in under 20 milliseconds." },
        { name: "Dynamic Ad Manager", desc: "Flexible header, inline, sidebar, and sticky ad placements with Google AdManager support." },
      ],
      workflow: [
        { step: "Journalist", desc: "Reporter creates article draft with rich media" },
        { step: "Editor", desc: "Editor reviews, fact-checks, and approves draft" },
        { step: "One-Click Publish", desc: "Article published to Headless WP backend" },
        { step: "Edge CDN", desc: "Next.js generates static edge pages globally" },
        { step: "Instant Index", desc: "News sitemap & indexation ping Google News" },
        { step: "Reader Access", desc: "Millions of readers load page in milliseconds" },
      ],
      mockups: [
        { badge: "Editorial Console", title: "Multi-User CMS Workspace", metric: "Fast Drafting", sub: "Role-based workflow approval" },
        { badge: "Traffic Engine", title: "Live Reader Analytics", metric: "100k+ Concurrency", sub: "Edge CDN cache hit: 99.4%" },
        { badge: "Ad Monetization", title: "Dynamic Ad Placement Hub", metric: "+45% CPM", sub: "Header, inline & sticky units" },
      ],
      benefits: [
        { title: "Zero Crash Spikes", desc: "Edge CDN caching guarantees 100% uptime even during viral breaking news events." },
        { title: "Sub-Second Speed", desc: "Blazing fast page loads boost Core Web Vitals and reader engagement." },
        { title: "Google News Priority", desc: "Optimized News Schema and automated sitemap updates speed up Google indexation." },
        { title: "Higher Ad Revenue", desc: "Strategic viewable ad placements maximize CPM earnings without slowing page loads." },
      ],
      pricing: [
        { name: "Starter", price: "$69", desc: "For niche blogs & regional news", features: ["Up to 500k monthly pageviews", "Instant Google News Schema", "Standard editorial roles", "Standard CDN"] },
        { name: "Business", price: "$149", desc: "For mid-size digital newspapers", features: ["Up to 5M monthly pageviews", "Algolia fast search integration", "Dynamic ad space manager", "Priority support"] },
        { name: "Enterprise", price: "$399", desc: "For major national news media", features: ["Unlimited pageviews & concurrency", "Custom editorial workflow hooks", "Dedicated CDN edge cluster", "24/7 dedicated engineer"] },
      ],
      faqs: [
        { q: "How does the platform handle massive traffic spikes?", a: "By combining Headless WordPress with Next.js edge caching, static pages are cached globally on CDN nodes, completely insulating your server from traffic spikes." },
        { q: "Can we set custom editorial access permissions?", a: "Yes. Flexible role-based permissions allow configuring custom access for reporters, photojournalists, sub-editors, editors-in-chief, and admins." },
        { q: "Is the portal compliant with Google News standards?", a: "Yes. The platform includes auto-updating Google News XML sitemaps, structured NewsArticle JSON-LD schema, and AMP ready layouts." },
      ],
    },
    "ecommerce": {
      title: "General E-Commerce Platform",
      tagline: "Scalable Multi-Channel Commerce",
      desc: "Speed-tuned shopping systems featuring multi-gateway cash payments, merchant interfaces, discount rules, and custom email dispatch.",
      status: "ONLINE",
      statusMetrics: { label: "Checkout Time: < 1.2s", sub: "Downtime: 0%" },
      problem: "Traditional e-commerce templates become sluggish as order volume grows, break during flash sales, lack native local payment gateways, and limit multi-vendor scalability.",
      solution: "A decoupled headless commerce engine decoupling shopping UI from backend catalog administration. Delivers sub-second checkout, native bKash/Nagad/SSLCommerz/Stripe payment hooks, vendor consoles, and automated inventory sync.",
      features: [
        { name: "Multi-Gateway Payments", desc: "Integrated with bKash, Nagad, Rocket, SSLCommerz, Stripe, and Cash on Delivery." },
        { name: "Merchant Vendor Panels", desc: "Multi-vendor marketplace support with independent vendor dashboards and payout rules." },
        { name: "Dynamic Promotion Engine", desc: "Flexible discount matrix supporting buy-X-get-Y, coupon codes, and tiered basket rules." },
        { name: "Sub-Second Checkout", desc: "Optimized Next.js catalog rendering for instant page transitions and low cart abandonment." },
      ],
      workflow: [
        { step: "Catalog", desc: "Vendor lists products in Headless WP backend" },
        { step: "Cart", desc: "Customer adds items with instant state updates" },
        { step: "Checkout", desc: "Customer inputs shipping details & selects gateway" },
        { step: "Payment", desc: "Instant automated payment verification callback" },
        { step: "Fulfillment", desc: "Merchant receives order & packs shipment" },
        { step: "Dispatch", desc: "Automated SMS/Email notification sent to buyer" },
      ],
      mockups: [
        { badge: "Speed Storefront", title: "Sub-second Shopping Catalog", metric: "Fast Loading", sub: "Instant cart & filter reactions" },
        { badge: "Commerce Hub", title: "Order & Vendor Console", metric: "Multi-Vendor", sub: "Automated payout calculations" },
        { badge: "Payment Gateway", title: "Localized Payment Callbacks", metric: "bKash / Stripe", sub: "Instant payment verification" },
      ],
      benefits: [
        { title: "3x Conversion Rate", desc: "Ultra-fast page loads and simplified one-page checkout significantly reduce cart abandonment." },
        { title: "Flash Sale Ready", desc: "Decoupled architecture guarantees zero downtime during high-volume promo events." },
        { title: "Localized Payments", desc: "Native local mobile wallets and card gateway integration increase successful order completions." },
        { title: "Multi-Vendor Scale", desc: "Seamlessly expand into a marketplace with separate merchant accounts and commission tracking." },
      ],
      pricing: [
        { name: "Starter", price: "$39", desc: "For single online store owners", features: ["Up to 2,500 catalog items", "bKash & COD payments", "Standard promotional engine", "Standard support"] },
        { name: "Business", price: "$89", desc: "For growing retail commerce brands", features: ["Up to 25,000 catalog items", "All local & international gateways", "Advanced promo discount rules", "Priority support"] },
        { name: "Enterprise", price: "$229", desc: "For multi-vendor marketplaces", features: ["Unlimited catalog items & vendors", "Multi-vendor payout engine", "Custom ERP API integration", "Dedicated account engineer"] },
      ],
      faqs: [
        { q: "What payment gateways are supported out-of-the-box?", a: "Native support includes bKash, Nagad, Rocket, SSLCommerz, Stripe, and Cash on Delivery with instant webhook confirmation." },
        { q: "Can the platform handle thousands of simultaneous buyers during flash sales?", a: "Yes. The Next.js frontend is decoupled from the backend database, ensuring shopping browsing remains lightning fast during sales events." },
        { q: "How are products managed?", a: "Product catalogs, prices, inventory, and categories are conveniently managed inside your secure Headless WordPress admin panel." },
      ],
    },
    "branded-ecommerce": {
      title: "Custom Branded E-Commerce Solution",
      tagline: "Bespoke Luxury & Fashion Commerce",
      desc: "Tailored checkouts, smooth micro-animations, and high-ticket customer panels configured for boutique fashion, jewellery, and luxury stores.",
      status: "ONLINE",
      statusMetrics: { label: "SLA Uptime: 99.99%", sub: "Animation FPS: 60" },
      problem: "Luxury and high-end fashion brands look cheap when forced into generic template frameworks, failing to convey brand value, prestige, or bespoke craftsmanship to discerning customers.",
      solution: "A boutique luxury digital experience combining GSAP animations, 360-degree product showcases, custom VIP loyalty portals, white-glove checkout flows, and guaranteed 99.99% SLA infrastructure.",
      features: [
        { name: "Micro-Animations & 360 Views", desc: "GSAP smooth interactive transitions and full 360-degree product viewports." },
        { name: "VIP Loyalty & Concierge", desc: "Exclusive member tiers, early collection access, and private concierge chat options." },
        { name: "Tailored Luxury Checkout", desc: "Frictionless bespoke checkout designed to preserve brand aesthetic and boost conversion." },
        { name: "High-Availability SLA Hosting", desc: "Dedicated cloud infrastructure with 99.99% uptime guarantee and white-glove monitoring." },
      ],
      workflow: [
        { step: "Brand Discovery", desc: "Define bespoke visual identity & UX design goals" },
        { step: "Tailored UI", desc: "Custom component design with GSAP animations" },
        { step: "Engineering", desc: "Bespoke Next.js front-end development" },
        { step: "Integration", desc: "Custom payment gateway & VIP portal setup" },
        { step: "Tuning", desc: "Core Web Vitals performance tuning & testing" },
        { step: "SLA Launch", desc: "Dedicated cloud deployment with 99.99% SLA" },
      ],
      mockups: [
        { badge: "Luxury Showcase", title: "360 Interactive Product View", metric: "60 FPS Motion", sub: "GSAP micro-animation suite" },
        { badge: "VIP Atelier", title: "Private Concierge & Loyalty", metric: "VIP Portal", sub: "Exclusive collection access" },
        { badge: "Custom Checkout", title: "High-Ticket Bespoke Checkout", metric: "White-Glove", sub: "Tailored luxury checkout funnel" },
      ],
      benefits: [
        { title: "Elevated Brand Value", desc: "Exquisite visual aesthetics and motion design elevate luxury brand positioning." },
        { title: "45% Higher AOV", desc: "Bespoke product presentation and curated cross-selling drive higher average order value." },
        { title: "Unmatched Speed", desc: "Silky smooth 60fps animations coupled with sub-second page transitions." },
        { title: "99.99% SLA Uptime", desc: "Dedicated enterprise hosting ensures your high-ticket store is always accessible." },
      ],
      pricing: [
        { name: "Starter", price: "$149", desc: "For boutique fashion & designer labels", features: ["Bespoke brand UI theme", "GSAP micro-animations", "Custom checkout design", "Standard SLA hosting"] },
        { name: "Business", price: "$349", desc: "For established luxury & jewellery brands", features: ["Full 360 product viewport", "VIP member loyalty portal", "Private concierge chat hook", "99.9% Uptime SLA"] },
        { name: "Enterprise", price: "$799", desc: "For flagship luxury global houses", features: ["Tailor-made custom architecture", "Dedicated Cloud edge cluster", "99.99% SLA Uptime Guarantee", "24/7 White-glove concierge"] },
      ],
      faqs: [
        { q: "How is the design tailored for our brand?", a: "Every single component, color palette, typography pair, and animation curve is custom-crafted to mirror your exact brand guidelines and luxury vision." },
        { q: "Can we migrate existing store data?", a: "Yes. Our team handles seamless migration of historical customer profiles, product catalogs, and order records from legacy platforms." },
        { q: "What SLA guarantees do you provide?", a: "Enterprise plans include a binding 99.99% Uptime SLA with 24/7 dedicated engineering support and real-time infrastructure monitoring." },
      ],
    },
    "company-profile": {
      title: "Company Profile System",
      tagline: "Headless CMS + Next.js / WordPress Corporate Web Solution",
      desc: "We build high-impact company profiles using either traditional WordPress or decoupled Headless CMS paired with Next.js, React.js, and fluid GSAP animations for maximum speed, SEO ranking, and brand impression.",
      status: "ONLINE",
      statusMetrics: { label: "Lighthouse Score: 98/100", sub: "Motion: 60 FPS GSAP" },
      problem: "Legacy corporate websites suffer from slow load times, outdated templates, rigid layouts, poor mobile optimization, and difficulty scaling content without breaking site styling or SEO performance.",
      solution: "We deliver tailored company profile platforms using traditional WordPress for rapid deployment or a decoupled Headless CMS architecture powered by Next.js, React.js, and GSAP micro-animations for sub-second page loads, custom brand storytelling, and top Google rankings.",
      features: [
        { name: "Headless Next.js + React Core", desc: "Blazing fast server-side rendering (SSR) and static generation for sub-second page loads." },
        { name: "GSAP Fluid Micro-Animations", desc: "Smooth, interactive entrance reveals and scroll-triggered animations using GSAP." },
        { name: "WordPress CMS Management", desc: "Easy administration for non-technical staff to update team pages, services, blogs, and media." },
        { name: "SEO & i18n Multi-Language", desc: "Semantic HTML5 markup, structured JSON-LD schema, and seamless multi-language translation support." },
      ],
      workflow: [
        { step: "Stack Selection", desc: "Choose traditional WordPress or Headless Next.js + GSAP" },
        { step: "UI/UX Design", desc: "Craft custom brand design tokens & interactive wireframes" },
        { step: "GSAP & React", desc: "Build Next.js frontend with fluid 60fps micro-animations" },
        { step: "CMS Setup", desc: "Configure Headless WordPress admin & custom fields" },
        { step: "SEO Tuning", desc: "Core Web Vitals optimization & structured schema injection" },
        { step: "Global Launch", desc: "Deploy on high-speed CDN edge network with SSL & domain setup" },
      ],
      mockups: [
        { badge: "Headless Next.js + GSAP", title: "Sub-Second Interactive Showcase", metric: "98 Lighthouse", sub: "Fluid 60 FPS GSAP animations" },
        { badge: "WordPress Admin", title: "Headless CMS Content Management", metric: "Easy Control", sub: "Intuitive publishing interface" },
        { badge: "Smart Lead Engine", title: "Dynamic Lead Capture & Routing", metric: "CRM Integration", sub: "Automated instant email alert" },
      ],
      benefits: [
        { title: "Flexible Architecture", desc: "Choose standard WordPress for rapid launch or Headless Next.js + GSAP for high-end enterprise branding." },
        { title: "Silky Smooth Motion", desc: "Fluid GSAP micro-animations elevate corporate prestige and client engagement." },
        { title: "Top Core Web Vitals", desc: "Sub-second load speeds boost Google rankings and lower mobile bounce rates." },
        { title: "Empowered Team", desc: "Non-technical staff easily publish updates and manage inquiries via WordPress CMS." },
      ],
      pricing: [
        { name: "Starter (WordPress)", price: "$29", desc: "Fast, customizable corporate website built on managed WordPress", features: ["WordPress CMS platform", "SEO-optimized template", "Contact lead forms", "Standard support"] },
        { name: "Business (Headless Next.js)", price: "$69", desc: "Decoupled Headless CMS with Next.js, React, and GSAP animations", features: ["Next.js + React.js frontend", "Headless WordPress CMS", "GSAP micro-animations suite", "Priority support"] },
        { name: "Enterprise (Custom i18n)", price: "$179", desc: "Multi-language Headless portal with custom CRM integrations & SLA", features: ["Multi-language (i18n) engine", "Custom CRM & webhook sync", "99.99% SLA hosting", "Dedicated account manager"] },
      ],
      faqs: [
        { q: "Should we choose traditional WordPress or Headless Next.js + GSAP?", a: "Traditional WordPress is ideal for fast setup and modest budgets. Headless Next.js + React + GSAP is recommended for enterprise brands requiring ultra-fast speeds, custom animations, and top-tier SEO performance." },
        { q: "Can non-technical team members edit content on a Headless site?", a: "Yes! Content is edited inside the familiar WordPress dashboard, which automatically feeds the Next.js frontend in real-time." },
        { q: "Is GSAP animation included for interactive effects?", a: "Yes. Our React/Next.js builds leverage GSAP and @gsap/react for smooth, high-performance interactive animations." },
      ],
    },
  };

  // Fallback to 1688 API content if slug matching fails
  const product = productData[slug] || productData["1688-api"];

  return (
    <div className="bg-light-secondary/40">

      {/* ═══════ 1. BREADCRUMB & TOP NAV BAR ═══════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" href="/products" className="text-xs font-bold text-brand hover:text-dark pl-0">
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Products Catalog
          </Button>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-brand/10 text-brand px-3 py-1 rounded-full border border-brand/20">
            <Activity className="w-3 h-3" />
            {product.status || "PRODUCTION READY"}
          </span>
        </div>
      </div>

      {/* ═══════ 2. HERO BANNER ═══════ */}
      <section className="relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden border border-border-dark shadow-xl">
            {/* Decorative Orbs & Dot Grid */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand opacity-15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 dot-grid-dark pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3.5 py-1.5 rounded-full border border-brand/20">
                  {product.tagline}
                </span>
                {product.statusMetrics && (
                  <span className="inline-flex items-center gap-1 text-xs text-text-muted bg-dark-tertiary px-3 py-1 rounded-full border border-border-dark">
                    <Zap className="w-3 h-3 text-brand" />
                    {product.statusMetrics.label}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {product.title}
              </h1>

              <p className="text-text-muted leading-relaxed text-base md:text-lg mb-8 max-w-3xl">
                {product.desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="brand" size="lg" href="#pricing">
                  Explore Pricing Tiers <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button variant="outline" size="lg" className="border-border-dark text-white hover:bg-dark-tertiary" href="/contact">
                  Schedule Technical Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 3. PROBLEM & SOLUTION COMPARISON ═══════ */}
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="sr-item opacity-0 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-border shadow-sm flex flex-col justify-between relative overflow-hidden group glow-border-brand">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand" />
            <div>
              <span className="inline-block text-[10px] font-bold text-brand uppercase tracking-widest bg-brand/5 px-3 py-1 rounded-full mb-4">
                Operational Bottleneck
              </span>
              <h2 className="text-2xl font-bold text-dark mb-4">What problems do businesses currently face?</h2>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">{product.problem}</p>
            </div>
          </div>

          {/* Solution Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-dark text-white border border-border-dark shadow-xl flex flex-col justify-between relative overflow-hidden group glow-border-primary">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
            <div className="absolute inset-0 dot-grid-dark pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block text-[10px] font-bold text-primary-light uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-4">
                Engineering Solution
              </span>
              <h2 className="text-2xl font-bold text-white mb-4">How Redmun Digitech Solves It</h2>
              <p className="text-text-muted leading-relaxed text-sm md:text-base">{product.solution}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════ 4. KEY FEATURES & MODULES ═══════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ScrollReveal>
          <div className="sr-item opacity-0 mb-12 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">Technical Capabilities</span>
            <h2 className="text-2xl md:text-4xl font-bold text-dark mb-3">Key Modules & Features</h2>
            <p className="text-text-secondary text-sm md:text-base">Custom integrations engineered to eliminate manual friction and scale operations effortlessly.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.1} scale={true}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.features.map((feat, idx) => (
              <div key={idx} className="sr-item opacity-0 bg-white p-8 rounded-2xl border border-border flex gap-5 hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand/5 border border-brand/15 flex items-center justify-center font-extrabold text-brand text-lg group-hover:bg-brand group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-2 text-lg group-hover:text-brand transition-colors">{feat.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ═══════ 5. AUTOMATED WORKFLOW PIPELINE ═══════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ScrollReveal>
          <div className="sr-item opacity-0 mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">Execution Flow</span>
            <h2 className="text-2xl md:text-4xl font-bold text-dark mb-2">Automated Workflow Pipeline</h2>
            <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto">End-to-end data pipeline from initial request to final customer fulfillment.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {product.workflow.map((item, idx) => (
              <div key={idx} className="sr-item opacity-0 bg-white p-6 rounded-2xl border border-border text-center flex flex-col justify-between shadow-xs hover:border-brand hover:shadow-sm transition-all group">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-brand uppercase block mb-3 bg-brand/5 py-1 rounded-full">
                    STEP 0{idx + 1}
                  </span>
                  <h3 className="font-bold text-dark mb-2 text-base group-hover:text-brand transition-colors">{item.step}</h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ═══════ 6. OPERATIONAL INTERFACES & MOCKUPS ═══════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ScrollReveal>
          <div className="sr-item opacity-0 mb-12 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">User Interfaces</span>
            <h2 className="text-2xl md:text-4xl font-bold text-dark mb-3">Operational Dashboards & Views</h2>
            <p className="text-text-secondary text-sm md:text-base">Optimized administrative control centers, client portals, and real-time analytics hubs.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.1} scale={true}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.mockups.map((mock, idx) => (
              <div key={idx} className="sr-item opacity-0 bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <div className="bg-light px-6 py-4 border-b border-border flex items-center justify-between">
                  <span className="font-bold text-xs text-dark uppercase tracking-wider">{mock.badge}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />
                </div>
                <div className="p-8 flex flex-col justify-between bg-white space-y-6">
                  <div>
                    <span className="text-xs text-text-secondary font-medium block mb-2">{mock.title}</span>
                    <span className="text-3xl font-extrabold text-dark block group-hover:text-brand transition-colors">{mock.metric}</span>
                  </div>
                  <div className="pt-4 border-t border-border flex items-center gap-2 text-xs text-text-muted">
                    <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                    <span>{mock.sub}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ═══════ 7. BUSINESS ROI & BENEFITS ═══════ */}
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="sr-item opacity-0 py-16 px-8 md:px-12 bg-dark text-white rounded-3xl border border-border-dark relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 dot-grid-dark pointer-events-none" />
          <div className="relative z-10">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">Measurable Impact</span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Proven Business ROI</h2>
              <p className="text-text-muted text-sm md:text-base">Direct operational advantages realized upon deploying our solution.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {product.benefits.map((ben, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-dark-secondary border border-border-dark hover:border-brand/40 transition-colors">
                  <h3 className="font-bold text-brand mb-2 text-lg">{ben.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{ben.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════ 8. PRICING TIERS ═══════ */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ScrollReveal>
          <div className="sr-item opacity-0 mb-12 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">Transparent Pricing</span>
            <h2 className="text-2xl md:text-4xl font-bold text-dark mb-3">Implementation Plans</h2>
            <p className="text-text-secondary text-sm md:text-base">Flexible tiers structured to scale alongside your enterprise growth.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.12} scale={true}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.pricing.map((tier, idx) => {
              const isFeatured = tier.name.toLowerCase().includes("business");
              return (
                <div
                  key={idx}
                  className={`sr-item opacity-0 bg-white rounded-3xl border p-8 shadow-sm flex flex-col justify-between relative transition-all duration-300 ${
                    isFeatured ? "border-brand border-2 md:-translate-y-2 shadow-xl" : "border-border hover:shadow-md"
                  }`}
                >
                  {isFeatured && (
                    <span className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full text-[10px] font-bold bg-brand text-white uppercase tracking-widest shadow-sm">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">{tier.name}</h3>
                    <p className="text-xs text-text-secondary mb-6 leading-relaxed">{tier.desc}</p>
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-4xl font-extrabold text-dark">{tier.price}</span>
                      <span className="text-xs text-text-tertiary font-medium">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-start gap-3 text-xs text-text-secondary">
                          <Check className="w-4 h-4 text-brand mt-0.5 shrink-0 font-bold" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant={isFeatured ? "brand" : "outline"} size="md" className="w-full" href="/contact">
                    Select Plan
                  </Button>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* ═══════ 9. PRODUCT-SPECIFIC FAQS ═══════ */}
      {product.faqs && product.faqs.length > 0 && (
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 mb-24">
          <div className="sr-item opacity-0 text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">Need Clarity?</span>
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">Frequently Asked Questions</h2>
            <p className="text-text-secondary text-sm">Everything you need to know about deployment, integration, and security.</p>
          </div>
          <div className="space-y-4">
            {product.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="sr-item opacity-0 group bg-white rounded-2xl border border-border overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm"
              >
                <summary className="flex items-center justify-between p-6 font-semibold text-dark cursor-pointer select-none group-open:bg-light transition-colors">
                  <span className="text-sm md:text-base">{faq.q}</span>
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
        </ScrollReveal>
      )}

      {/* ═══════ 10. CLOSING CTA ═══════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTASection />
      </section>

    </div>
  );
}
