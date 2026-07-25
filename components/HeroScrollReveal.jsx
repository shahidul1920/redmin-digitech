"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * HeroScrollReveal is a Client Component wrapper that handles GSAP entrance reveals.
 * This keeps the parent pages/routes as clean Server Components for maximum SEO.
 * 
 * Simply wrap your hero text/links in this component and mark the elements you want
 * to animate with the class "reveal-item" and "opacity-0".
 */
export default function HeroScrollReveal({ children, className = "" }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const items = containerRef.current.querySelectorAll(".reveal-item");
      if (items.length === 0) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.15,
          ease: "power4.out",
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
