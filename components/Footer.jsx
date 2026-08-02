"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram, Check, Phone, MapPin, Mail, Clock } from "@/components/Icons";
import Button from "./Button";
import CopyableText from "./CopyableText";
import { subscribeNewsletter } from "@/utils/actions";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showCookieModal, setShowCookieModal] = React.useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [botHoneypot, setBotHoneypot] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("idle"); // 'idle' | 'submitting' | 'success'
  const [cookiePreferences, setCookiePreferences] = React.useState({
    essential: true,
    analytics: true,
    performance: true,
  });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus("submitting");

    try {
      const dataPayload = new FormData();
      dataPayload.append("userEmail", newsletterEmail);
      dataPayload.append("company_website_url", botHoneypot);

      const res = await subscribeNewsletter(dataPayload);
      if (res.success) {
        setNewsletterStatus("success");
        setNewsletterEmail("");
      } else {
        setNewsletterStatus("idle");
      }
    } catch {
      setNewsletterStatus("idle");
    }
  };

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

  const blogLinks = [
    { name: "Import Business Blog", href: "/blog/category/import-business" },
    { name: "SEO Optimization Guide", href: "/blog/category/seo" },
    { name: "Ecommerce Insights", href: "/blog/category/ecommerce" },
    { name: "1688 Integration Docs", href: "/blog/category/1688" },
    { name: "Restaurant Tech Articles", href: "/blog/category/restaurant-tech" },
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
      name: "Facebook",
      href: "https://www.facebook.com/redmundigitech",
      Icon: Facebook,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/redmundigitech/",
      Icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/redmun.dtc/",
      Icon: Instagram,
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

            {/* Office Contact Info */}
            <div className="space-y-2 text-xs text-text-muted border-t border-border-dark pt-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand shrink-0" />
                <span>House 20, Road 12, Sector 03, Uttara, Dhaka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand shrink-0" />
                <CopyableText text="+880 1711 994608" valueToCopy="+8801711994608" className="hover:text-white transition-colors" />
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand shrink-0" />
                <CopyableText text="contact@redmun.com" className="hover:text-white transition-colors" />
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-brand shrink-0" />
                <span>11AM - 8PM [Sat - Thu] | Friday [Closed]</span>
              </div>
            </div>
            
            {/* Subscription Form */}
            <div className="space-y-3 max-w-sm mt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand">Stay Updated</h4>
              {newsletterStatus === "success" ? (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Subscribed! Check your inbox for updates.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="text"
                    name="company_website_url"
                    tabIndex={-1}
                    autoComplete="off"
                    value={botHoneypot}
                    onChange={(e) => setBotHoneypot(e.target.value)}
                    className="hidden"
                  />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter work email"
                    disabled={newsletterStatus === "submitting"}
                    className="w-full px-4 py-2 text-sm rounded-lg bg-dark-secondary border border-border-dark text-white placeholder-text-muted focus:outline-none focus:border-brand transition-colors"
                  />
                  <Button variant="brand" size="sm" type="submit" loading={newsletterStatus === "submitting"} className="shrink-0 px-4 py-2">
                    Join
                  </Button>
                </form>
              )}
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

            {/* Blog column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">Blog</h3>
              <ul className="space-y-2.5">
                {blogLinks.map((link) => (
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
                    {link.name === "Cookie Settings" ? (
                      <button
                        onClick={() => setShowCookieModal(true)}
                        className="text-sm text-text-muted hover:text-white transition-colors cursor-pointer text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link href={link.href} className="text-sm text-text-muted hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    )}
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

      {/* Cookie Preferences Modal */}
      {showCookieModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-dark text-white rounded-3xl border border-white/10 p-6 md:p-8 max-w-md w-full space-y-6 shadow-2xl animate-float" style={{ animationDuration: "0.4s" }}>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold">Cookie Preferences</h3>
              <button
                onClick={() => setShowCookieModal(false)}
                className="text-text-muted hover:text-white text-xs font-bold uppercase tracking-wider"
              >
                Close ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div>
                  <p className="font-bold text-white mb-0.5">Essential Session Cookies</p>
                  <p className="text-text-muted text-[10px]">Required for login & security webhooks.</p>
                </div>
                <span className="text-[10px] font-bold text-brand uppercase tracking-wider bg-brand/20 px-2 py-1 rounded">Always On</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div>
                  <p className="font-bold text-white mb-0.5">Analytics Telemetry</p>
                  <p className="text-text-muted text-[10px]">Anonymous page load & speed metrics.</p>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.analytics}
                  onChange={(e) => setCookiePreferences((p) => ({ ...p, analytics: e.target.checked }))}
                  className="w-4 h-4 accent-brand cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div>
                  <p className="font-bold text-white mb-0.5">Edge Speed Calibration</p>
                  <p className="text-text-muted text-[10px]">Regional CDN caching preferences.</p>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.performance}
                  onChange={(e) => setCookiePreferences((p) => ({ ...p, performance: e.target.checked }))}
                  className="w-4 h-4 accent-brand cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <Button
                variant="brand"
                size="sm"
                className="w-full"
                onClick={() => setShowCookieModal(false)}
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
