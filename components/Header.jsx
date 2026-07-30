"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "@/components/Icons";
import Button from "./Button";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'blog' | null
  const pathname = usePathname();

  const products = [
    { name: "News Portal", href: "/products/news-portal" },
    { name: "Company Profile", href: "/products/company-profile" },
    { name: "General E-Commerce", href: "/products/ecommerce" },
    { name: "1688 API Sourcing", href: "/products/1688-api" },
    { name: "Shipping Management", href: "/products/shipping-management" },
    { name: "Custom Branded E-Commerce", href: "/products/branded-ecommerce" },
    { name: "Restaurant Chain Management", href: "/products/restaurant-management" },
  ];

  const blogCategories = [
    { name: "1688", href: "/blog/category/1688" },
    { name: "Digital Business", href: "/blog/category/digital-business" },
    { name: "Ecommerce", href: "/blog/category/ecommerce" },
    { name: "Import Business", href: "/blog/category/import-business" },
    { name: "News Portal", href: "/blog/category/news-portal" },
    { name: "Restaurant Tech", href: "/blog/category/restaurant-tech" },
    { name: "SEO", href: "/blog/category/seo" },
    { name: "Website", href: "/blog/category/website" },
  ];

  const mainNav = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products", dropdown: products, type: "products" },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog", dropdown: blogCategories, type: "blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleDropdownHover = (type) => {
    setActiveDropdown(type);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center shrink-0 py-2">
            <Image
              src="/Redmun-final.svg"
              alt="Redmun Digitech"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Main Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNav.map((item) => {
              if (item.dropdown) {
                const isOpen = activeDropdown === item.type;
                return (
                  <div
                    key={item.name}
                    className="relative py-2"
                    onMouseEnter={() => handleDropdownHover(item.type)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="inline-flex items-center gap-0.5">
                      <Link
                        href={item.href}
                        className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                          isActive(item.href) || isOpen
                            ? "text-brand bg-light"
                            : "text-text-secondary hover:text-dark hover:bg-light/60"
                        }`}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveDropdown(isOpen ? null : item.type);
                        }}
                        aria-label={`Toggle ${item.name} menu`}
                        className={`p-1 rounded-md transition-colors cursor-pointer ${
                          isOpen ? "text-brand" : "text-text-secondary hover:text-dark"
                        }`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Desktop Dropdown Panel */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full w-64 bg-white border border-border rounded-xl shadow-lg py-2 transition-all duration-200 origin-top ${
                        isOpen
                          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                          : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                      }`}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2.5 h-2.5 rotate-45 bg-white border-t border-l border-border" />
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={handleDropdownLeave}
                          className={`block px-4 py-2 text-sm font-medium hover:bg-light transition-colors ${
                            pathname === subItem.href
                              ? "text-brand"
                              : "text-text-secondary hover:text-dark"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive(item.href)
                      ? "text-brand bg-light"
                      : "text-text-secondary hover:text-dark hover:bg-light/60"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA / Action Button */}
          <div className="hidden lg:flex items-center">
            <Button variant="brand" size="md" href="/request-demo">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-text-secondary hover:text-dark hover:bg-light/80 border border-transparent hover:border-border transition-all"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden border-t border-border bg-white transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[85vh] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-3 overflow-y-auto max-h-[80vh]">
          {mainNav.map((item) => {
            if (item.dropdown) {
              const isSectionOpen = activeDropdown === item.type;
              return (
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-bold transition-colors ${
                        isActive(item.href)
                          ? "text-brand"
                          : "text-text-secondary hover:text-dark"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={() => setActiveDropdown(isSectionOpen ? null : item.type)}
                      className="p-1 rounded-md text-text-secondary hover:text-dark"
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          isSectionOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div
                    className={`pl-4 border-l-2 border-border space-y-1 overflow-hidden transition-all duration-200 ${isSectionOpen ? "max-h-96 opacity-100 py-1" : "max-h-0 opacity-0"
                      }`}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 text-sm font-semibold ${pathname === subItem.href ? "text-brand" : "text-text-secondary hover:text-dark"
                          }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-bold transition-colors ${isActive(item.href) ? "text-brand" : "text-text-secondary hover:text-dark"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="pt-6 border-t border-border">
            <Button variant="brand" size="lg" className="w-full" href="/request-demo" onClick={() => setMobileMenuOpen(false)}>
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
