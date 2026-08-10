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
  Globe,
} from "@/components/Icons";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProductDetailPage({ slug }) {
  // Database for dynamic product detail rendering across all 7 products based on site serve.md
  const productData = {
    "1688-api": {
      title: "1688 API Sourcing Portal",
      tagline: "Automated China Import & Wholesale Sourcing",
      desc: "Redmun Digitech offers a comprehensive platform designed for automated product sourcing directly from China via 1688.com. This business-ready solution provides smart wholesale product tracking and seamless order management to scale your import operations.",
      status: "ONLINE",
      statusMetrics: { label: "API Calls: 120,400 / hr", sub: "Latency: 45ms" },
      problem: "Wholesalers and digital store owners waste hours manually downloading product sheets, translating Chinese titles, converting RMB exchange rates, and coping with untracked inventory or shipping delays.",
      solution: "Our automated 1688 sourcing engine hooks directly into China's wholesale catalogs, syncing real-time pricing and stock, managing dual China & BD warehouse logistics, and automating currency & translation workflows.",
      features: [
        { name: "Automated Sourcing & Syncing", desc: "Instantly sync real-time pricing, supplier data, and stock levels directly from 1688.com to keep your storefront accurate." },
        { name: "Complete Inventory Control", desc: "Manage your stock across both China and Bangladesh warehouses, utilizing mobile app barcode scanning for quick parcel tracking." },
        { name: "Quality Assurance & Logistics", desc: "Perform quality checks (QC) directly at the China warehouse, manage refund policies, and accurately track shipments through to final delivery." },
        { name: "Comprehensive Storefront Management", desc: "Provide a seamless experience with user and reseller panels, OTP verification, categorized product lists, cart systems, and integrated messaging APIs." },
        { name: "Business Operations & CRM", desc: "Includes a full CRM for employee and customer management, extensive financial and order reporting, customizable promotional campaigns, and API setups for Google Analytics and Facebook Conversion." },
      ],
      workflow: [
        { step: "1688 API Sync", desc: "Extract supplier catalog, prices & real-time inventory" },
        { step: "Translation & FX", desc: "Translate Chinese attributes & calculate markup currency" },
        { step: "Store Catalog", desc: "Render localized items with user & reseller panel controls" },
        { step: "Order Placement", desc: "Automated customer order routing with OTP verification" },
        { step: "China QC & Scan", desc: "Warehouse intake barcode scan & quality inspection" },
        { step: "Delivery Tracking", desc: "BD customs clearance & final door delivery updates" },
      ],
      mockups: [
        { badge: "1688 Sync Engine", title: "Real-Time Catalog Sync", metric: "120k+ Calls/hr", sub: "Automated RMB/BDT conversion" },
        { badge: "Dual Warehouse", title: "China & BD Inventory Hub", metric: "Barcode Scan", sub: "Mobile app parcel scanning ready" },
        { badge: "Operations Panel", title: "Full CRM & Reports Center", metric: "FB & Analytics", sub: "Conversion API & financial reports" },
      ],
      benefits: [
        { title: "Zero Manual Entry", desc: "Automated catalog syncing eliminates hours of manual product copy-pasting." },
        { title: "Dual Warehouse Tracking", desc: "Track stock movements seamlessly across both China and Bangladesh facilities." },
        { title: "Quality Protection", desc: "In-warehouse QC checks in China ensure only verified products ship out." },
        { title: "Reseller Network Ready", desc: "Built-in reseller dashboards and OTP authorization drive rapid business expansion." },
      ],
      pricing: [
        { name: "Starter", price: "$49", desc: "For growing import businesses", features: ["1,000 active 1688 listings", "Daily price synchronization", "English & Bengali translation module", "Email support"] },
        { name: "Business", price: "$99", desc: "Optimized for active retail brands", features: ["10,000 active 1688 listings", "Hourly inventory & price sync", "Dual warehouse barcode module", "Priority support"] },
        { name: "Enterprise", price: "$249", desc: "For global shipping & import networks", features: ["Unlimited active listings", "Full CRM & reporting suite", "FB Conversion & Analytics APIs", "Dedicated account engineer"] },
      ],
      faqs: [
        { q: "How does real-time 1688 API syncing work?", a: "Our system runs background synchronization tasks that fetch exact supplier costs, stock levels, and item variations directly from 1688.com, automatically converting RMB to BDT." },
        { q: "Can we track inventory across both China and BD warehouses?", a: "Yes. The platform includes a dual-warehouse barcode scanning system for intake, sorting, QC checks, and dispatch tracking." },
        { q: "Does it support reseller accounts?", a: "Yes. Built-in reseller panels allow sub-merchants to browse, order, and track shipments with custom pricing margins and OTP verification." },
      ],
      liveExamples: [
        { name: "Wholesale Hub BD", url: "https://wholesalehub.com.bd" },
        { name: "Deal Ghor", url: "https://dealghor.com" },
        { name: "Sky Force Shipping", url: "https://skyforceshipping.com" },
        { name: "China Doting", url: "https://chinadoting.com" },
      ],
      ctaType: "demo",
      ctaText: "Ready to automate your 1688 wholesale product sourcing and import operations?",
      ctaLink: "/request-demo",
      ctaButtonText: "Request Live Platform Demo",
    },
    "shipping-management": {
      title: "Shipping Management System",
      tagline: "International Cargo & Freight Control",
      desc: "Our Shipping Management System removes the complexity of international importing, offering secure and reliable freight from China to Bangladesh with end-to-end manifest tracking.",
      status: "ACTIVE",
      statusMetrics: { label: "Active Parcels: 45,200+", sub: "Manifest Processing: < 100ms" },
      problem: "Logistics operators face untracked parcel losses, manual weight and volumetric freight calculation errors, fragmented warehouse communication, and frustrated customers demanding live delivery updates.",
      solution: "A unified cargo intelligence platform supporting both end-to-end product sourcing and logistics-only cargo bookings, combined with real-time barcode scanning, customs clearance tracking, and customer portals.",
      features: [
        { name: "Full Product Sourcing (Order Request)", desc: "Ideal for customers who need end-to-end purchasing support. Simply submit a product link or image, and we find the supplier, verify pricing, purchase, inspect quality, clear customs, and deliver." },
        { name: "Logistics Only (Create Booking)", desc: "Designed for customers who have already purchased their goods. Send packages to our China warehouse where we verify shipments, calculate weight, manage Air/Sea freight, and handle BD customs clearance." },
        { name: "Streamlined Customer Portal", desc: "Customers easily log in to submit shipment details, generate shipping marks, track booking statuses, and pay shipping charges all in one place." },
        { name: "Barcode & Parcel Scanner", desc: "Handheld scanner webhooks for instant warehouse intake, sorting, and manifest creation across international hubs." },
      ],
      workflow: [
        { step: "Booking / Sourcing", desc: "Customer submits product link or creates cargo booking" },
        { step: "China Intake", desc: "China hub receives parcel, verifies weight & scans barcode" },
        { step: "Manifest Creation", desc: "System assigns shipping mark & calculates Air/Sea tariff" },
        { step: "Air/Sea Transit", desc: "Real-time cargo shipment container tracking" },
        { step: "Customs Clearance", desc: "Automated Bangladesh customs documentation & clearance" },
        { step: "Doorstep Delivery", desc: "Final parcel dispatch & digital payment settlement" },
      ],
      mockups: [
        { badge: "Client Logistics Portal", title: "Customer Booking & Tracking", metric: "Shipping Marks", sub: "Instant weight & tariff calculator" },
        { badge: "Logistics Hub", title: "Dual Workflow Control", metric: "Air & Sea Freight", sub: "Order request & booking routing" },
        { badge: "Customs Manifest", title: "Automated Parcel Intake", metric: "Barcode Scanner", sub: "Real-time SMS dispatch alerts" },
      ],
      benefits: [
        { title: "Two Flexible Workflows", desc: "Choose end-to-end purchasing support or logistics-only freight booking based on client needs." },
        { title: "Automated Tariffs", desc: "Instant weight and volumetric freight calculations eliminate manual billing mistakes." },
        { title: "Self-Service Portal", desc: "Clients generate shipping marks, view live milestone progress, and pay charges online." },
        { title: "Complete Visibility", desc: "Track every step from China warehouse intake through BD customs to doorstep delivery." },
      ],
      pricing: [
        { name: "Starter", price: "$79", desc: "For boutique freight forwarders", features: ["Up to 2,500 monthly shipments", "Client cargo tracking portal", "Barcode scanning module", "SMS alert integration"] },
        { name: "Business", price: "$199", desc: "For growing logistics companies", features: ["Up to 15,000 monthly shipments", "Full Sourcing & Booking workflows", "Dynamic volumetric tariff matrix", "Priority support"] },
        { name: "Enterprise", price: "$499", desc: "For global courier networks", features: ["Unlimited monthly shipments", "Custom carrier API integrations", "Custom white-labeled portal", "Dedicated logistics engineer"] },
      ],
      faqs: [
        { q: "What is the difference between Order Request and Create Booking?", a: "Order Request is for full product sourcing where we buy, inspect, clear customs, and deliver. Create Booking is for customers who bought items themselves and only need freight logistics from China to BD." },
        { q: "Can clients generate their own shipping marks?", a: "Yes. Inside the customer portal, clients can create shipping marks, track live statuses, and pay shipping fees directly." },
        { q: "How are shipping charges calculated?", a: "The system automatically calculates rates based on actual weight versus volumetric dimensions for both Air and Sea freight." },
      ],
      ctaType: "website",
      ctaText: "Need a custom freight & shipping management platform for your importing operations?",
      ctaLink: "/contact",
      ctaButtonText: "Talk to Our Logistics Engineers",
    },
    "restaurant-management": {
      title: "Restaurant Chain Management Platform",
      tagline: "Omnichannel POS & Kitchen Ecosystem",
      desc: "Redmun Digitech provides an all-in-one, comprehensive web application designed to run every aspect of a modern restaurant business. Engineered with our high-performance custom tech stack (Node.js, Express, React.js), this platform unifies POS operations with complete back-office management.",
      status: "ONLINE",
      statusMetrics: { label: "KDS Response: < 30ms", sub: "Multi-Branch Sync: Live" },
      problem: "Restaurant chains struggle with table order bottlenecks, paper kitchen ticket loss, ingredient theft, untracked inventory waste, and lack of real-time multi-branch revenue reporting.",
      solution: "An integrated operating system for food establishments combining real-time business dashboards, omnichannel POS billing, live Kitchen Display Systems (KDS), automated recipe ingredient deduction, and full finance/HRM modules.",
      features: [
        { name: "Centralized Business Dashboard", desc: "Monitor your entire business at a glance with real-time metrics tracking Total Sales, Active Orders, Daily Purchases and Expenses, and Employee counts across all outlets." },
        { name: "Omnichannel POS & Sales Management", desc: "Seamlessly process and categorize sales across multiple channels including Dine-In, Take Away, Online orders, and third-party Delivery Partners while tracking top foods." },
        { name: "End-to-End Inventory & Production", desc: "Maintain absolute control over supply chain and kitchen operations with dedicated modules for Food Management, Supplier tracking, Purchase orders, and Stock inventory." },
        { name: "Integrated Finance & HRM", desc: "Manage your bottom line and team in one place with built-in features for Asset tracking, Accounts, Transactions, Employee (HRM), and Customer management." },
        { name: "Marketing & Configurations", desc: "Keep customers engaged and operations smooth with built-in Promotion management, SMS notifications, and detailed business Reporting modules." },
      ],
      workflow: [
        { step: "Order Capture", desc: "Dine-in POS, Takeaway, Online, or Delivery Partner order" },
        { step: "KDS Prep", desc: "Instant kitchen display routing with color preparation timers" },
        { step: "Thermal Billing", desc: "ESC/POS receipt & KOT printing with table split payment" },
        { step: "Ingredient Deduction", desc: "Automated recipe stock deduction prevents raw food leakages" },
        { step: "Finance & Accounts", desc: "Real-time expense, daily purchase & transaction recording" },
        { step: "Central Dashboard", desc: "Multi-outlet sales analytics & employee management" },
      ],
      mockups: [
        { badge: "Central Dashboard", title: "Multi-Outlet Revenue Hub", metric: "Real-Time Sales", sub: "Active orders & expense tracking" },
        { badge: "Omnichannel POS", title: "Dine-In, Takeaway & Online", metric: "Fast Billing", sub: "Delivery aggregator sync ready" },
        { badge: "Kitchen Engine", title: "KDS & Recipe Inventory", metric: "0 Paper Tickets", sub: "Automated ingredient deduction" },
      ],
      benefits: [
        { title: "Single Central Dashboard", desc: "Real-time visibility over sales, active orders, purchases, expenses, and staff across all branches." },
        { title: "Zero Paper Ticket Lost", desc: "Digital Kitchen Display Systems (KDS) eliminate kitchen ticket clutter and speed up prep." },
        { title: "Ingredient Leakage Protection", desc: "Automated recipe deduction exposes stock theft and controls food cost percentages." },
        { title: "All-in-One Finance & HR", desc: "Unified assets, accounts, purchases, employee management, and marketing promotions." },
      ],
      pricing: [
        { name: "Starter", price: "$59", desc: "For single restaurant locations", features: ["1 POS register license", "1 KDS kitchen screen", "Centralized business dashboard", "Thermal printer drivers"] },
        { name: "Business", price: "$129", desc: "For multi-outlet restaurant chains", features: ["Up to 5 POS registers / outlet", "Multi-station KDS routing", "Recipe ingredient inventory", "Finance & HRM modules"] },
        { name: "Enterprise", price: "$299", desc: "For major restaurant franchises", features: ["Unlimited POS & KDS terminals", "Central franchise dashboard", "Food aggregator API sync", "Dedicated account engineer"] },
      ],
      faqs: [
        { q: "Can we track sales and expenses across multiple outlets?", a: "Yes! The Centralized Business Dashboard provides live metrics for sales, active orders, daily expenses, and staff counts across all branches." },
        { q: "How does recipe ingredient inventory deduction work?", a: "When a dish is ordered at the POS or online, the platform automatically deducts exact raw ingredient quantities (e.g. beef, flour, cheese) from your kitchen inventory." },
        { q: "Does it support third-party delivery partners?", a: "Yes. Orders from online delivery partners, takeaway counters, and dine-in tables are consolidated into a single POS & kitchen display system." },
      ],
      ctaType: "demo",
      ctaText: "Want to see how our complete Restaurant Ecosystem can run your food business?",
      ctaLink: "/request-demo",
      ctaButtonText: "Request Demo",
    },
    "news-portal": {
      title: "Enterprise News Portal Platform",
      tagline: "High-Traffic Next.js & Headless CMS Newsrooms",
      desc: "Redmun Digitech builds lightning-fast, high-traffic digital newsrooms powered by a modern Next.js frontend and Headless CMS architecture. Designed for publishers who need top-tier SEO, seamless reading experiences, and rapid content delivery without compromising on performance.",
      status: "DEPLOYED",
      statusMetrics: { label: "Concurrent Readers: 100k+", sub: "TTFB: 28ms" },
      problem: "Digital news publishers suffer server crashes during breaking news traffic spikes, slow page load speeds that penalize Google News rankings, cumbersome multi-editor workflows, and unoptimized ad monetization.",
      solution: "We build Next.js static & edge-rendered media portals paired with Headless CMS (WordPress). Easily handles millions of readers, ensures instant Google News indexation, optimizes media assets, and maximizes ad revenue.",
      features: [
        { name: "Next.js Performance Engine", desc: "Utilize Server-Side Rendering (SSR) and Static Site Generation (SSG) for ultra-fast page loads, ensuring your news site easily passes Core Web Vitals and ranks higher on search engines." },
        { name: "Headless CMS Integration", desc: "Decouple your backend (such as WordPress) from the frontend. This gives your editorial team familiar content management tools while the frontend remains secure and blazing fast." },
        { name: "Dynamic Content & Categorization", desc: "Easily manage complex content taxonomies (like Featured, Finance, Technology, Lifestyle, and Reviews) with dynamic, SEO-friendly routing that scales as your publication grows." },
        { name: "Advanced Media Optimization", desc: "Leverage built-in next-generation image optimization to handle heavy media libraries and high-resolution article thumbnails seamlessly without slowing down page loads." },
        { name: "Monetization Ready Layouts", desc: "Seamlessly integrate dedicated promotional banners, ad spaces, and integrated API functionalities directly into the layout without breaking the visual flow." },
      ],
      workflow: [
        { step: "Editorial Drafting", desc: "Journalist writes article draft in familiar Headless CMS" },
        { step: "Review & Approval", desc: "Sub-editor fact-checks & approves breaking news piece" },
        { step: "One-Click Publish", desc: "Content published to Headless WordPress backend" },
        { step: "Edge Generation", desc: "Next.js static site generation builds lightning-fast pages" },
        { step: "Google News Index", desc: "Structured News Schema pings Google News immediately" },
        { step: "Global Reader Access", desc: "Sub-second loading for 100k+ concurrent visitors" },
      ],
      mockups: [
        { badge: "Editorial Console", title: "Multi-User CMS Workspace", metric: "Fast Publishing", sub: "Familiar WordPress editorial tools" },
        { badge: "Performance Engine", title: "Next.js SSR & SSG Speed", metric: "28ms TTFB", sub: "100/100 Core Web Vitals score" },
        { badge: "Monetization Hub", title: "Dynamic Ad Space Manager", metric: "+45% CPM", sub: "Banner, inline & sticky ad slots" },
      ],
      benefits: [
        { title: "Zero Traffic Crash", desc: "Decoupled Next.js edge caching guarantees 100% uptime during breaking news spikes." },
        { title: "Top Google Rankings", desc: "Sub-second load times and automatic Google News XML schema boost search visibility." },
        { title: "Editorial Efficiency", desc: "Journalists use familiar WordPress editing tools without touching frontend code." },
        { title: "Maximum Ad Earnings", desc: "Pre-designed high-impact ad placements maximize CPM revenue without UX friction." },
      ],
      pricing: [
        { name: "Starter", price: "$69", desc: "For niche blogs & regional news", features: ["Up to 500k monthly pageviews", "Instant Google News Schema", "Next.js frontend + Headless WP", "Standard support"] },
        { name: "Business", price: "$149", desc: "For mid-size digital newspapers", features: ["Up to 5M monthly pageviews", "Dynamic ad space manager", "Media optimization engine", "Priority support"] },
        { name: "Enterprise", price: "$399", desc: "For major national news media", features: ["Unlimited pageviews & concurrency", "Custom editorial workflow hooks", "Dedicated CDN edge cluster", "24/7 dedicated engineer"] },
      ],
      faqs: [
        { q: "Why pair Next.js with Headless WordPress for news portals?", a: "Next.js provides sub-second page speeds, instant SEO rendering, and bulletproof security, while Headless WordPress gives editors the intuitive writing dashboard they already know." },
        { q: "How fast does Google index breaking news articles?", a: "Our platform includes auto-updating Google News XML sitemaps and structured JSON-LD NewsArticle markup, triggering immediate Google News indexation." },
        { q: "Can we integrate custom ad banners and monetization networks?", a: "Yes. The layout includes dedicated responsive slots for Google AdSense, AdManager, affiliate widgets, and sponsored content banners." },
      ],
      liveExamples: [
        { name: "Freebird Digest", url: "https://freebird digest.com" },
        { name: "Astha News", url: "https://astha.news" },
      ],
      ctaType: "website",
      ctaText: "Planning to build or upgrade a high-traffic news portal or digital magazine website?",
      ctaLink: "/contact",
      ctaButtonText: "Get a News Website Quote",
    },
    "ecommerce": {
      title: "General E-Commerce Platform",
      tagline: "High-Performance Single-Vendor E-Commerce",
      desc: "Launch a high-performance, single-vendor e-commerce platform built on a modern JavaScript tech stack, featuring a Node.JS backend and a fast Next.JS frontend backed by MongoDB. Redmun Digitech provides a fully optimized, ready-to-use application with intuitive Admin and Customer panels.",
      status: "ONLINE",
      statusMetrics: { label: "Checkout Time: < 1.2s", sub: "Downtime: 0%" },
      problem: "Traditional e-commerce templates become sluggish as order volume grows, break during flash sales, lack automated courier API hooks, and fail to track server-side sales events accurately.",
      solution: "A speed-tuned single-vendor e-commerce application powered by Next.js, Node.js, and MongoDB. Features unlimited landing pages, abandoned cart recovery, automated courier dispatch (Pathao/Steadfast), fraud protection, and bulk SMS marketing.",
      features: [
        { name: "Optimized Performance & Unlimited Pages", desc: "Build an unlimited number of fast-loading landing pages designed to maximize conversions without speed slowdowns." },
        { name: "Sales Recovery & Tracking", desc: "Recover lost revenue with abandoned cart recovery features and utilize direct server-side tracking via the Facebook Conversion API." },
        { name: "Automated Logistics Integrations", desc: "Integrate Courier APIs (such as Pathao and Steadfast) to enable bulk parcel sending and streamline your shipment workflow." },
        { name: "Security & Administration", desc: "Protect your business with a built-in fraud detection system and detailed user activity logs." },
        { name: "Customer Engagement & SMS", desc: "Manage your customer database easily and leverage built-in bulk SMS sending capabilities to keep buyers informed." },
      ],
      workflow: [
        { step: "Landing Page Build", desc: "Create high-converting landing pages inside admin panel" },
        { step: "Customer Browsing", desc: "Sub-second Next.js product catalog browsing & cart add" },
        { step: "Checkout & Fraud Log", desc: "One-page checkout with built-in fraud detection logs" },
        { step: "Server Tracking", desc: "Direct Facebook Conversion API & analytics event logging" },
        { step: "Courier Bulk API", desc: "One-click parcel creation via Pathao or Steadfast APIs" },
        { step: "SMS & Cart Recovery", desc: "Automated SMS notifications & lost cart recovery triggers" },
      ],
      mockups: [
        { badge: "Landing Page Builder", title: "Unlimited Custom Funnels", metric: "Fast Landing", sub: "High-converting promo pages" },
        { badge: "Courier Automation", title: "Pathao & Steadfast APIs", metric: "Bulk Sending", sub: "Automated parcel dispatch" },
        { badge: "Sales Recovery", title: "Abandoned Cart & FB Tracking", metric: "+30% Revenue", sub: "Server-side Conversion API" },
      ],
      benefits: [
        { title: "Unlimited Landing Pages", desc: "Launch unlimited promotion and product landing pages without extra hosting costs." },
        { title: "Recover Lost Sales", desc: "Automated abandoned cart notifications recover buyers who leave at checkout." },
        { title: "1-Click Courier Dispatch", desc: "Direct integrations with Pathao and Steadfast dispatch orders in seconds." },
        { title: "Fraud Guard & SMS", desc: "Protect your business with activity logging while keeping buyers updated via bulk SMS." },
      ],
      pricing: [
        { name: "Starter", price: "$39", desc: "For single online store owners", features: ["Unlimited landing pages", "Node.js + Next.js + MongoDB", "Courier API integration", "Standard support"] },
        { name: "Business", price: "$89", desc: "For growing retail commerce brands", features: ["Abandoned cart recovery engine", "Facebook Conversion API setup", "Fraud detection & user logs", "Priority support"] },
        { name: "Enterprise", price: "$229", desc: "For high-volume commerce enterprises", features: ["Bulk SMS marketing integration", "Custom ERP & warehouse hooks", "Dedicated server setup", "Dedicated account engineer"] },
      ],
      faqs: [
        { q: "What tech stack powers this single-vendor e-commerce platform?", a: "It is engineered on a modern full JavaScript stack: Next.js frontend for sub-second rendering, Node.js + Express backend, and MongoDB database." },
        { q: "Which courier APIs are integrated for automated shipping?", a: "Native API hooks are included for Pathao, Steadfast, and leading local logistics providers for bulk parcel creation." },
        { q: "How does abandoned cart recovery work?", a: "The system tracks unfinished checkout sessions and automatically triggers follow-up SMS or email reminders to convert lost visitors." },
      ],
      liveExamples: [
        { name: "BDeshi Shop", url: "https://bdeshishop.com" },
        { name: "SellMart BD", url: "https://sellmart.com.bd" },
        { name: "LumiSea BD", url: "https://lumiseabd.com" },
        { name: "Royale Mart", url: "https://royale-mart.com" },
      ],
      ctaType: "website",
      ctaText: "Want to launch a custom single-vendor e-commerce website for your business?",
      ctaLink: "/contact",
      ctaButtonText: "Get an E-Commerce Quote",
    },
    "branded-ecommerce": {
      title: "Custom Branded E-Commerce Solution",
      tagline: "Bespoke Full-Stack Web Architecture",
      desc: "Redmun Digitech specializes in engineering fully custom e-commerce web applications tailored specifically for established businesses that have outgrown standard, out-of-the-box platforms. We build comprehensive, scalable digital storefronts from the ground up to match your exact operational needs.",
      status: "ONLINE",
      statusMetrics: { label: "SLA Uptime: 99.99%", sub: "Animation FPS: 60" },
      problem: "Scaling businesses hit hard limits with standard off-the-shelf platforms—struggling with plugin conflicts, rigid checkout templates, slow frontend performance, and lack of custom ERP/logistics integrations.",
      solution: "We engineer bespoke full-stack e-commerce web apps using React.js, Next.js, Node.js, Express, and MongoDB. Combining Tailwind CSS with GSAP animations, we deliver unique fluid visual interfaces with enterprise scalability and deep API integrations.",
      features: [
        { name: "Bespoke Full-Stack Architecture", desc: "Powered by a modern, high-performance stack utilizing React.js and Next.js for lightning-fast frontends, securely integrated with robust Node.js and Express backend architectures and MongoDB databases." },
        { name: "Precision Visual Engineering", desc: "We bypass restrictive pre-built plugins and visual page builders. Combining Tailwind CSS with GSAP animations, we develop uniquely customized, fluid user interfaces that elevate your brand." },
        { name: "Enterprise-Level Scalability", desc: "Engineered to handle high-volume traffic, complex product catalogs, and intricate custom workflows unique to established, scaling businesses." },
        { name: "Advanced Third-Party Integrations", desc: "Seamlessly connect your custom web app with essential third-party logistics services, secure payment gateways, and custom internal data modules to streamline your sales pipeline." },
      ],
      workflow: [
        { step: "Architecture Blueprint", desc: "Custom schema design for React, Next.js & Node.js backend" },
        { step: "GSAP Visual Engineering", desc: "Bespoke Tailwind CSS layout with silky 60fps micro-animations" },
        { step: "API & DB Integration", desc: "Secure MongoDB indexing, Express APIs & payment gateways" },
        { step: "Logistics Sync", desc: "Connect custom internal modules & 3rd-party shipping pipelines" },
        { step: "Load & Security Audit", desc: "High-volume traffic stress testing & SLA validation" },
        { step: "Dedicated Deployment", desc: "Launch on dedicated cloud architecture with 99.99% SLA" },
      ],
      mockups: [
        { badge: "Full-Stack Architecture", title: "React + Next.js + Node + MongoDB", metric: "Sub-Sec Speed", sub: "Decoupled backend API architecture" },
        { badge: "Visual Engineering", title: "GSAP Motion + Tailwind CSS", metric: "60 FPS UI", sub: "Zero pre-built plugin restrictions" },
        { badge: "Enterprise Scale", title: "Custom Logistics & Gateway APIs", metric: "99.99% Uptime", sub: "Engineered for high-volume sales" },
      ],
      benefits: [
        { title: "No Plugin Bottlenecks", desc: "Custom full-stack code bypasses slow WordPress plugins and standard page builders." },
        { title: "Elevated Visual Branding", desc: "Tailwind CSS and GSAP animations deliver a fluid, high-end visual experience." },
        { title: "Unlimited Custom Workflows", desc: "Build tailored product configurators, custom checkout rules, and internal modules." },
        { title: "Enterprise Scalability", desc: "Engineered to handle high traffic surges and complex catalogs effortlessly." },
      ],
      pricing: [
        { name: "Starter", price: "$149", desc: "For boutique brands scaling up", features: ["Custom Next.js & React.js frontend", "Node.js & MongoDB backend", "GSAP micro-animations", "Standard SLA hosting"] },
        { name: "Business", price: "$349", desc: "For established high-volume brands", features: ["Bespoke operational workflows", "3rd-party logistics & payment APIs", "Custom internal data modules", "99.9% Uptime SLA"] },
        { name: "Enterprise", price: "$799", desc: "For major corporate e-commerce enterprises", features: ["Tailor-made custom architecture", "Dedicated Cloud edge cluster", "99.99% SLA Uptime Guarantee", "24/7 White-glove engineer"] },
      ],
      faqs: [
        { q: "Why choose a custom full-stack web application over Shopify or WooCommerce?", a: "Custom full-stack builds eliminate recurring plugin fees, platform limits, and slow page loads. You get complete ownership, 60fps GSAP animations, and custom integrations tailored to your exact business logic." },
        { q: "What backend and database technologies do you use?", a: "We use a high-performance stack combining Next.js and React.js on the frontend, securely connected to a Node.js / Express.js backend and MongoDB database." },
        { q: "Can custom logistics and internal business modules be integrated?", a: "Yes! We specialize in connecting custom web apps with third-party logistics APIs, payment gateways, and internal ERP/CRM data modules." },
      ],
      ctaType: "website",
      ctaText: "Need a fully custom e-commerce web application engineered for your growing brand?",
      ctaLink: "/contact",
      ctaButtonText: "Discuss Custom Project",
    },
    "company-profile": {
      title: "Company Profile System",
      tagline: "Corporate Website Creation & Strategic Redesign",
      desc: "Redmun Digitech specializes in creating, redesigning, and completely rebuilding corporate websites to elevate your brand's digital presence. Whether you need a fresh start or a modern upgrade, we engineer tailored web solutions that perfectly align with your company’s profile and business goals.",
      status: "ONLINE",
      statusMetrics: { label: "Lighthouse Score: 98/100", sub: "Motion: 60 FPS GSAP" },
      problem: "Outdated corporate websites convey a poor visual identity, load slowly on mobile devices, suffer from broken plugin dependencies, and fail to convert visiting prospects into quality business inquiries.",
      solution: "We engineer modern corporate web solutions powered by Next.js, React.js, Node.js, and MongoDB with traditional or Headless WordPress CMS management. We infuse GSAP visual animations to ensure your company profile stands out with a secure, SEO-optimized digital presence.",
      features: [
        { name: "Modern Full-Stack Engineering", desc: "We build robust, scalable, and lightning-fast websites utilizing industry-leading JavaScript frameworks, including Next.js, React.js, Node.js, and MongoDB." },
        { name: "Flexible Content Management", desc: "Choose from traditional WordPress setups or modern Headless WordPress architectures, allowing your team to seamlessly update content without sacrificing frontend performance." },
        { name: "Engaging Visual Development", desc: "We integrate high-performance animations and interactive elements using GSAP, ensuring your company profile stands out with a premium, dynamic user experience." },
        { name: "Strategic Redesign & Rebuilding", desc: "We transform outdated digital profiles into secure, SEO-optimized platforms that accurately reflect your brand identity and drive customer engagement." },
      ],
      workflow: [
        { step: "Brand Discovery", desc: "Analyze company goals, target audience & redesign scope" },
        { step: "Architecture Plan", desc: "Choose traditional WordPress or Headless Next.js + GSAP" },
        { step: "Visual Engineering", desc: "Craft bespoke UI layout with fluid GSAP micro-animations" },
        { step: "Full-Stack Build", desc: "Next.js, React, Node.js & MongoDB backend integration" },
        { step: "SEO & Schema Audit", desc: "Core Web Vitals tuning & structured JSON-LD schema setup" },
        { step: "Global Launch", desc: "Deploy on high-speed CDN with SSL & domain setup" },
      ],
      mockups: [
        { badge: "Full-Stack Stack", title: "Next.js + React + Node + MongoDB", metric: "98/100 Score", sub: "Sub-second corporate load times" },
        { badge: "CMS Choice", title: "Traditional or Headless WordPress", metric: "Easy Updates", sub: "Empower team content publishing" },
        { badge: "Visual Prestige", title: "GSAP Animation & Motion UI", metric: "60 FPS Motion", sub: "SEO-optimized corporate presence" },
      ],
      benefits: [
        { title: "Modern Brand Identity", desc: "Transform outdated sites into high-end, modern digital platforms that build instant client trust." },
        { title: "Flexible CMS Options", desc: "Select traditional WordPress for rapid deployment or Headless Next.js for ultimate speed." },
        { title: "60fps Visual Motion", desc: "GSAP micro-animations create an engaging, premium visual experience on every scroll." },
        { title: "SEO & Lead Conversion", desc: "Sub-second speed and semantic HTML structure maximize search rankings and lead inquiries." },
      ],
      pricing: [
        { name: "Starter (WordPress)", price: "$29", desc: "Fast, customizable corporate website built on managed WordPress", features: ["WordPress CMS platform", "SEO-optimized corporate layout", "Contact lead forms", "Standard support"] },
        { name: "Business (Headless Next.js)", price: "$69", desc: "Decoupled Headless CMS with Next.js, React, and GSAP animations", features: ["Next.js + React.js frontend", "Headless WordPress CMS", "GSAP micro-animations suite", "Priority support"] },
        { name: "Enterprise (Custom i18n)", price: "$179", desc: "Multi-language Headless portal with custom CRM integrations & SLA", features: ["Multi-language (i18n) engine", "Custom CRM & webhook sync", "99.99% SLA hosting", "Dedicated account manager"] },
      ],
      faqs: [
        { q: "Should we choose traditional WordPress or Headless Next.js + GSAP?", a: "Traditional WordPress is ideal for fast setup and modest budgets. Headless Next.js + React + GSAP is recommended for enterprise brands requiring ultra-fast speeds, custom animations, and top-tier SEO performance." },
        { q: "Can non-technical team members edit corporate content?", a: "Yes! Content is edited inside the familiar WordPress dashboard, which automatically feeds the Next.js frontend in real-time." },
        { q: "Do you handle complete website redesigns from legacy platforms?", a: "Yes! We specialize in redesigning and rebuilding outdated corporate websites into fast, secure, SEO-optimized digital platforms." },
      ],
      liveExamples: [
        { name: "Cell Phone Repair", url: "https://cellphonerepair.com" },
        { name: "Astha News", url: "https://astha.news" },
        { name: "Astha Creatives", url: "https://asthacreatives.com" },
        { name: "Freebird Digest", url: "https://freebirddigest.com" },
      ],
      ctaType: "website",
      ctaText: "Ready to create, redesign, or rebuild your company's corporate website?",
      ctaLink: "/contact",
      ctaButtonText: "Start Corporate Website Project",
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
                {product.ctaType === "demo" ? (
                  <>
                    <Button variant="brand" size="lg" href="/request-demo">
                      Request Live Demo <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-border-dark text-white hover:bg-dark-tertiary" href="#features">
                      Explore Capabilities
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="brand" size="lg" href="/contact">
                      Get a Custom Quote <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-border-dark text-white hover:bg-dark-tertiary" href="#features">
                      Explore Capabilities
                    </Button>
                  </>
                )}
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
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
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

      {/* ═══════ 6. LIVE EXAMPLES IN ACTION ═══════ */}
      {product.liveExamples && product.liveExamples.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <ScrollReveal>
            <div className="sr-item opacity-0 mb-8 text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">Proven Track Record</span>
              <h2 className="text-2xl md:text-4xl font-bold text-dark mb-3">Live Solutions in Action</h2>
              <p className="text-text-secondary text-sm md:text-base">Explore real-world platforms built and powered by Redmun Digitech engineering.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              {product.liveExamples.map((ex, idx) => (
                <a
                  key={idx}
                  href={ex.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sr-item opacity-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white border border-border font-semibold text-sm text-dark hover:text-brand hover:border-brand hover:shadow-md transition-all group"
                >
                  <Globe className="w-4 h-4 text-brand group-hover:scale-110 transition-transform" />
                  <span>{ex.name}</span>
                  <span className="text-xs text-text-tertiary font-mono">({ex.url.replace(/^https?:\/\//, '')})</span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-tertiary group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ═══════ 7. SPECIALIZED ACTION CTA CARD ═══════ */}
      {product.ctaText && (
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="sr-item opacity-0 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-brand/10 via-light to-primary/10 border border-brand/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="max-w-2xl text-center md:text-left">
              <span className="inline-block text-[10px] font-bold text-brand uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full mb-3 border border-brand/15">
                {product.ctaType === "website" ? "Website Engineering & Redesign" : "Live Product Demonstration"}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-dark mb-2">
                {product.ctaType === "website" ? "Need a Tailored Website Solution?" : "Want to See the Platform in Action?"}
              </h3>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                {product.ctaText}
              </p>
            </div>
            <Button variant="brand" size="lg" href={product.ctaLink} className="shrink-0 font-bold">
              {product.ctaButtonText} <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </ScrollReveal>
      )}

      {/* ═══════ 8. OPERATIONAL INTERFACES & MOCKUPS ═══════ */}
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

      {/* ═══════ 9. BUSINESS ROI & BENEFITS ═══════ */}
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


      {/* ═══════ 11. PRODUCT-SPECIFIC FAQS ═══════ */}
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

      {/* ═══════ 12. CLOSING CTA ═══════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTASection />
      </section>

    </div>
  );
}
