"use client";

import React from "react";
import Link from "next/link";
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
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-dark text-text-inverse border-t border-border-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Logo & Newsletter Form */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Link href="/" className="flex items-center gap-1 font-heading text-2xl font-bold tracking-tight text-white select-none">
              <span className="text-brand">Red</span>Mun<span className="text-brand text-3xl leading-none">.</span>
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
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-brand transition-colors p-2 rounded-lg bg-dark-secondary border border-border-dark hover:border-brand"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
