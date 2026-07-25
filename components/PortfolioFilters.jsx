"use client";

import React, { useState } from "react";
import Button from "./Button";

export default function PortfolioFilters() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Cases" },
    { id: "corporate", label: "Corporate" },
    { id: "restaurant", label: "Restaurant" },
    { id: "shipping", label: "Shipping" },
    { id: "news", label: "News" },
    { id: "ecommerce", label: "Ecommerce" },
    { id: "china", label: "China Import" },
  ];

  const projects = [
    {
      title: "FastExpress Global Cargo Manifest",
      desc: "An automated cargo routing matrix that compiles freight lists, tracks coordinates, and schedules manifests behind Cloudflare edge nodes.",
      category: "shipping",
      tag: "Shipping Logistics",
    },
    {
      title: "SinoCargo 1688 Sourcing Portal",
      desc: "Bulk supplier integration system syncing wholesale inventories, item translation arrays, and direct order placements.",
      category: "china",
      tag: "China Sourcing",
    },
    {
      title: "DineSmart Central POS Engine",
      desc: "Kitchen workflow POS software synchronization system with ESC/POS printer driver triggers for national restaurant chains.",
      category: "restaurant",
      tag: "Restaurant Tech",
    },
    {
      title: "DailyChronicle Media Portal",
      desc: "AMP-optimized publishing portal capable of managing 10M monthly views with direct Algolia search integrations.",
      category: "news",
      tag: "News Editorial",
    },
    {
      title: "Zenith Luxury Apparel Cart",
      desc: "Bespoke checkout layout designed for jewelry and luxury retailers. Features sub-second payment gateways.",
      category: "ecommerce",
      tag: "Retail E-Commerce",
    },
    {
      title: "Apex Logistics Corporate Brand",
      desc: "Corporate branding portal with multi-language setups, structured SEO schema, and customer booking panels.",
      category: "corporate",
      tag: "Corporate Profile",
    },
    {
      title: "YumChain Kitchen Tickets",
      desc: "Real-time orders queue display panels mapped to central databases with instant SMS delivery notices for customers.",
      category: "restaurant",
      tag: "Restaurant Tech",
    },
    {
      title: "Beijing Wholesale Direct Gateway",
      desc: "Marginal markup automator pulling item specs from 1688 and converting pricing logs directly into local rates.",
      category: "china",
      tag: "China Sourcing",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-12">
      {/* Filters Navigation Panel */}
      <div className="flex flex-wrap gap-2.5 justify-center md:justify-start border-b border-border pb-6">
        {categories.map((cat) => {
          const isActive = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "bg-brand text-white shadow-sm"
                  : "bg-white text-text-secondary border border-border hover:border-dark hover:text-dark"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-between bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/5 px-2.5 py-1 rounded-full mb-6">
                {proj.tag}
              </span>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-brand transition-colors">
                {proj.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {proj.desc}
              </p>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              View Case Study
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
