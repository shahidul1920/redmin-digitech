"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Github } from "@/components/Icons";
import Button from "./Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "News Portal", href: "/products/news-portal" },
    { name: "Company Profile", href: "/products/company-profile" },
    { name: "General E-Commerce", href: "/products/ecommerce" },
    { name: "1688 API Sourcing", href: "/products/1688-api" },
    { name: "Shipping Management", href: "/products/shipping-management" },
    { name: "Restaurant Management", href: "/products/restaurant-management" },
  ];

  const solutionLinks = [
    { name: "Import & Logistics", href: "/solutions/import-logistics" },
    { name: "Media & Editorial", href: "/solutions/media-editorial" },
    { name: "Restaurant Chains", href: "/solutions/restaurant-chains" },
    { name: "Corporate ERP", href: "/solutions/corporate-erp" },
    { name: "Retail Automation", href: "/solutions/retail-automation" },
  ];

  const resourceLinks = [
    { name: "Import Business Blog", href: "/resources/import-business" },
    { name: "SEO Optimization Guide", href: "/resources/seo" },
    { name: "Ecommerce Insights", href: "/resources/ecommerce" },
    { name: "1688 Integration Docs", href: "/resources/1688" },
    { name: "Restaurant Tech Articles", href: "/resources/restaurant-tech" },
  ];

  const companyLinks = [
    { name: "About Redmun", href: "/about" },
    { name: "Our Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing Tiers", href: "/pricing" },
    { name: "Contact Support", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "SLA Agreement", href: "/legal/sla" },
    { name: "Cookie Settings", href: "#" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      Icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      Icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com",
      Icon: Github,
    },
  ];

  return (
    <footer className="bg-dark text-text-inverse border-t border-border-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Logo & Newsletter Form */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Link href="/" className="inline-flex items-center shrink-0">
              <Image
                src="/Redmun-final.svg"
                alt="Redmun Digitech"
                width={160}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-text-muted max-w-sm leading-relaxed">
              Enterprise management platforms built for growing businesses. Custom shipping modules, API automation portals, and high-performance architecture.
            </p>
            
            {/* Subscription Form */}
            <div className="space-y-3 max-w-sm mt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand">Stay Updated</h4>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter work email"
                  className="w-full px-4 py-2 text-sm rounded-lg bg-dark-secondary border border-border-dark text-white placeholder-text-muted focus:outline-none focus:border-brand transition-colors"
                />
                <Button variant="brand" size="sm" type="submit" className="shrink-0 px-4 py-2">
                  Join
                </Button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
            {/* Products column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">Products</h3>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-text-muted hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">Solutions</h3>
              <ul className="space-y-2.5">
                {solutionLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-text-muted hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">Resources</h3>
              <ul className="space-y-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-text-muted hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">Company</h3>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-text-muted hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">Legal</h3>
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-text-muted hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border-dark flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-muted leading-relaxed">
            © {currentYear} Redmun Digitech. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const SocialIcon = social.Icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-brand transition-colors p-2 rounded-lg bg-dark-secondary border border-border-dark hover:border-brand"
                  aria-label={social.name}
                >
                  <SocialIcon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
