"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollReveal — wraps child elements and reveals them when they enter the viewport.
 * 
 * Mark children you want animated with className "sr-item" and "opacity-0".
 * Supports staggered entrances, directional slides, and optional scale effects.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {"up"|"down"|"left"|"right"} [props.direction="up"] - Slide direction
 * @param {number} [props.distance=60] - Distance in pixels
 * @param {number} [props.stagger=0.12] - Stagger between child animations
 * @param {number} [props.duration=0.9] - Animation duration
 * @param {string} [props.ease="power3.out"] - GSAP easing
 * @param {boolean} [props.scale=false] - Whether to animate scale from 0.9
 * @param {string} [props.start="top 88%"] - ScrollTrigger start position
 */
export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  distance = 60,
  stagger = 0.12,
  duration = 0.9,
  ease = "power3.out",
  scale = false,
  start = "top 88%",
}) {
  const containerRef = useRef(null);

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  useGSAP(
    () => {
      const items = containerRef.current.querySelectorAll(".sr-item");
      if (items.length === 0) return;

      const fromVars = {
        opacity: 0,
        ...directionMap[direction],
        ...(scale ? { scale: 0.92 } : {}),
      };

      const toVars = {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        stagger,
        ease,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: "play none none none",
        },
      };

      gsap.fromTo(items, fromVars, toVars);
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
