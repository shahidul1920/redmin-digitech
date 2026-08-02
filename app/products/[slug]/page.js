import ProductDetailPage from "@/pages/ProductDetailPage";

const metadataMap = {
  "1688-api": {
    title: "1688 API Sourcing Platform | Redmun Digitech",
    description: "Automate China wholesale imports with direct 1688 catalog API sync, automated English/Bengali translation, currency conversion, and automated checkout.",
  },
  "shipping-management": {
    title: "Shipping & Freight Management System | Redmun Digitech",
    description: "End-to-end cargo manifest tracking, multi-warehouse barcode readers, dynamic freight pricing matrices, and automated customer dispatch alerts.",
  },
  "restaurant-management": {
    title: "Restaurant Chain Management & POS Platform | Redmun Digitech",
    description: "Multi-outlet POS terminals, live kitchen display screens (KDS), thermal receipt printer drivers, central recipe inventory, and digital QR menu systems.",
  },
  "news-portal": {
    title: "Enterprise News Portal Platform | Redmun Digitech",
    description: "High-concurrency editorial CMS network built for sub-second page loads, instant Google News indexation, Algolia search, and dynamic ad placement.",
  },
  "ecommerce": {
    title: "General E-Commerce Platform | Redmun Digitech",
    description: "Decoupled Headless Commerce system with multi-gateway payments (bKash, Nagad, SSLCommerz, Stripe), vendor management panels, and flash-sale speed.",
  },
  "branded-ecommerce": {
    title: "Custom Branded E-Commerce Solution | Redmun Digitech",
    description: "Bespoke luxury and fashion storefronts with GSAP micro-animations, tailored checkout funnels, VIP customer loyalty portals, and 99.99% SLA uptime.",
  },
  "company-profile": {
    title: "Corporate Profile & Lead Generation System | Redmun Digitech",
    description: "SEO-optimized corporate web portal with multi-language i18n support, interactive lead capture forms, CRM integrations, and dynamic showcases.",
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const meta = metadataMap[slug];

  if (meta) {
    return {
      title: meta.title,
      description: meta.description,
    };
  }

  const formattedSlug = slug === "1688-api" ? "1688 API Sourcing" : slug.replace(/-/g, " ");
  const capitalized = formattedSlug.charAt(0).toUpperCase() + formattedSlug.slice(1);
  return {
    title: `${capitalized} Platform | Redmun Digitech`,
    description: `Enterprise digital platforms and custom software architectures by Redmun Digitech.`,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ProductDetailPage slug={slug} />;
}
