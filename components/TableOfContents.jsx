"use client";

import React, { useState, useEffect } from "react";
import { BookOpen } from "@/components/Icons";

export default function TableOfContents({ headings = [] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const handleScroll = () => {
      // Find all heading elements by ID
      const headingElements = headings
        .map((h) => document.getElementById(h.id))
        .filter(Boolean);

      if (headingElements.length === 0) return;

      const scrollPosition = window.scrollY + 120; // Offset for sticky navbar

      // Determine which heading is currently active
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveId(headings[i].id);
          return;
        }
      }

      // Default to first heading if near top
      if (headingElements.length > 0) {
        setActiveId(headings[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  const scrollToHeading = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <nav className="bg-white rounded-3xl p-5 border border-border shadow-sm space-y-4">
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-dark flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-brand" /> Article Outline
        </h3>
      </div>

      <ul className="space-y-1.5 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 text-xs">
        {headings.map((item) => {
          const isActive = activeId === item.id;

          // Padding based on heading level (h2, h3, h4)
          const indentClass =
            item.level === 3
              ? "pl-4"
              : item.level === 4
                ? "pl-7 text-[11px]"
                : "pl-2 font-medium";

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                title={item.text}
                onClick={(e) => scrollToHeading(e, item.id)}
                className={`block py-1.5 pr-2 rounded-lg transition-all duration-200 truncate ${indentClass} ${isActive
                    ? "text-brand font-bold bg-brand/10 border-l-2 border-brand pl-2 sm:pl-3"
                    : "text-text-secondary hover:text-dark hover:bg-light/60"
                  }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
