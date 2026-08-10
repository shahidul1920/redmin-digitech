"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Globe } from "@/components/Icons";
import Button from "./Button";

export default function PortfolioFilters() {
  const projects = [
    {
      title: "Wholesale Hub BD",
      tag: "China Import & 1688 Sourcing",
      desc: "Automated wholesale product sourcing platform connected directly to China's 1688.com catalog with real-time stock sync and dual-warehouse tracking.",
      url: "https://wholesalehub.com.bd",
      image: "/1688-api-intragration (1).png",
    },
    {
      title: "Deal Ghor",
      tag: "China Sourcing & Wholesale",
      desc: "Smart import platform with automated currency conversion, item spec translations, and Bangladesh warehouse barcode tracking.",
      url: "https://dealghor.com",
      image: "/1688-api-intragration (1).png",
    },
    {
      title: "Freebird Digest",
      tag: "News & Media Portal",
      desc: "High-traffic digital editorial media platform powered by Next.js SSR/SSG and Headless CMS for sub-second page loads and instant Google News indexation.",
      url: "https://freebird digest.com",
      image: "/mockup-laptop---.png",
    },
    {
      title: "Astha News",
      tag: "Digital Newspaper & Media",
      desc: "Lightning-fast digital newsroom handling high reader concurrency with structured NewsArticle JSON-LD schema and dynamic monetization ad spaces.",
      url: "https://astha.news",
      image: "/mockup-laptop---.png",
    },
    {
      title: "BDeshi Shop",
      tag: "General E-Commerce",
      desc: "High-performance single-vendor e-commerce application built on Node.js, Next.js, and MongoDB with Pathao/Steadfast courier API dispatch.",
      url: "https://bdeshishop.com",
      image: "/general-e-commerce--.png",
    },
    {
      title: "SellMart BD",
      tag: "Retail E-Commerce",
      desc: "Scalable e-commerce storefront featuring abandoned cart recovery, server-side Facebook Conversion API tracking, and bulk SMS messaging.",
      url: "https://sellmart.com.bd",
      image: "/general-e-commerce--.png",
    },
    {
      title: "Cell Phone Repair",
      tag: "Corporate Profile",
      desc: "Corporate website redesign built with Next.js, React, and GSAP micro-animations for high conversion and modern brand positioning.",
      url: "https://cellphonerepair.com",
      image: "/company-profile1.png",
    },
    {
      title: "Astha Creatives",
      tag: "Corporate Brand System",
      desc: "Bespoke corporate branding portal with multi-language setups, structured SEO schema, and fast-loading team & service portfolio showcases.",
      url: "https://asthacreatives.com",
      image: "/company-profile1.png",
    },
    {
      title: "Sky Force Shipping",
      tag: "Shipping Logistics",
      desc: "International freight forwarding portal supporting dual product sourcing and logistics-only cargo booking workflows from China to BD.",
      url: "https://skyforceshipping.com",
      image: "/shipping-management.png",
    },
    {
      title: "China Doting",
      tag: "Wholesale Sourcing",
      desc: "Automated 1688 API order placement system with integrated user panels, reseller margin rules, and OTP phone verification.",
      url: "https://chinadoting.com",
      image: "/1688-api-intragration (1).png",
    },
    {
      title: "LumiSea BD",
      tag: "Single-Vendor Commerce",
      desc: "Modern e-commerce platform with intuitive customer checkout, multi-gateway payments, and automated courier parcel creation.",
      url: "https://lumiseabd.com",
      image: "/general-e-commerce--.png",
    },
    {
      title: "Omnichannel Restaurant Ecosystem",
      tag: "Restaurant Chain POS",
      desc: "All-in-one POS, digital Kitchen Display System (KDS), automated recipe ingredient stock deduction, and multi-outlet central dashboard.",
      url: "/products/restaurant-management",
      image: "/Restaurant-Chain-Management.png",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Portfolio Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => {
          const isExternal = proj.url && proj.url.startsWith("http");
          return (
            <div
              key={idx}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-light mb-6 border border-border/60">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={600}
                    height={340}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-brand/20 shadow-xs">
                      {proj.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-brand transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {proj.desc}
                </p>
              </div>

              {/* Action Button */}
              <div>
                {isExternal ? (
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl border border-border text-xs font-bold text-dark hover:text-brand hover:border-brand hover:bg-light transition-all"
                  >
                    <Globe className="w-3.5 h-3.5 text-brand" />
                    Visit Live Site ({proj.url.replace(/^https?:\/\//, '')})
                    <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                  </a>
                ) : (
                  <Button variant="outline" size="sm" className="w-full" href={proj.url}>
                    View System Details <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
