"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./Button";

/**
 * Redmun Digitech Premium CTA Section
 * 
 * @param {Object} props
 * @param {string} [props.title] - Large section title
 * @param {string} [props.subtitle] - Text badge above title
 * @param {string} [props.description] - Description text
 * @param {string} [props.className=''] - Extra classes
 */
export default function CTASection({
  title = "Let's Build Your Next Digital Platform",
  subtitle = "Ready to scale?",
  description = "Partner with Redmun Digitech to engineer custom shipping systems, automated sourcing portals, and enterprise e-commerce solutions tailored precisely to your operational workflow.",
  className = "",
}) {
  const containerRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useGSAP(
    () => {
      // 1. Stagger entrance animation for content elements
      gsap.fromTo(
        ".anim-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      // 2. Continuous slow drifting & pulsating for background decorative orbs
      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          x: "random(-30, 30)",
          y: "random(-30, 30)",
          scale: "random(0.9, 1.2)",
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          x: "random(-20, 20)",
          y: "random(-20, 20)",
          scale: "random(0.8, 1.1)",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1,
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden bg-dark text-text-inverse rounded-3xl py-20 px-8 md:px-16 lg:py-28 my-16 shadow-xl border border-border-dark ${className}`}
    >
      {/* Decorative Blur Orbs */}
      <div
        ref={orb1Ref}
        className="absolute -top-12 -left-12 w-64 h-64 bg-brand opacity-15 rounded-full blur-3xl pointer-events-none"
      />
      <div
        ref={orb2Ref}
        className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary opacity-20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtitle Badge */}
        <span className="anim-item opacity-0 inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-dark-tertiary border border-border-dark text-brand mb-6">
          {subtitle}
        </span>

        {/* Heading */}
        <h2 className="anim-item opacity-0 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
          {title.split(" ").map((word, i) => {
            // Give specific words premium coloring
            if (word.toLowerCase() === "next" || word.toLowerCase() === "digital") {
              return (
                <span key={i} className="text-gradient-brand mr-2 md:mr-3 inline-block">
                  {word}
                </span>
              );
            }
            if (word.toLowerCase() === "platform") {
              return (
                <span key={i} className="text-gradient-primary mr-2 md:mr-3 inline-block">
                  {word}
                </span>
              );
            }
            return <span key={i} className="mr-2 md:mr-3 inline-block">{word}</span>;
          })}
        </h2>

        {/* Description */}
        <p className="anim-item opacity-0 text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="anim-item opacity-0 flex flex-wrap gap-4 justify-center">
          <Button variant="brand" size="lg" href="/contact">
            Let's Collaborate
          </Button>
          <Button variant="outline" size="lg" className="border-border-dark text-white hover:bg-dark-tertiary" href="/products">
            Explore Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
