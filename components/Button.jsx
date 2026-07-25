"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * Redmun Digitech Premium Button Component
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.href] - Link destination (internal/external)
 * @param {string} [props.variant='primary'] - Style variant: 'brand' | 'primary' | 'secondary' | 'outline' | 'ghost'
 * @param {string} [props.size='md'] - Button size: 'sm' | 'md' | 'lg'
 * @param {boolean} [props.loading=false] - Loading state
 * @param {React.ReactNode} [props.icon] - Optional icon element
 * @param {string} [props.className=''] - Extra classes
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  className = "",
  onClick,
  ...props
}) {
  const buttonRef = useRef(null);

  // Reusable hover & active animations using GSAP
  useGSAP(
    () => {
      if (!buttonRef.current || loading) return;

      const el = buttonRef.current;

      const handleMouseEnter = () => {
        gsap.to(el, {
          scale: 1.03,
          y: -2,
          duration: 0.3,
          ease: "power2.out",
          boxShadow: variant === "brand" 
            ? "0 10px 20px -5px rgba(255, 0, 0, 0.3)"
            : variant === "primary"
            ? "0 10px 20px -5px rgba(0, 87, 255, 0.3)"
            : "0 10px 20px -5px rgba(11, 18, 32, 0.15)",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(el, {
          scale: 1.0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
        });
      };

      const handleMouseDown = () => {
        gsap.to(el, {
          scale: 0.97,
          y: 0,
          duration: 0.1,
          ease: "power1.out",
        });
      };

      const handleMouseUp = () => {
        gsap.to(el, {
          scale: 1.03,
          y: -2,
          duration: 0.1,
          ease: "power1.out",
        });
      };

      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.addEventListener("mousedown", handleMouseDown);
      el.addEventListener("mouseup", handleMouseUp);

      return () => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeEventListener("mousedown", handleMouseDown);
        el.removeEventListener("mouseup", handleMouseUp);
      };
    },
    { scope: buttonRef }
  );

  // Variant Classes
  const variantStyles = {
    brand: "bg-brand text-white border-2 border-transparent",
    primary: "bg-primary text-white border-2 border-transparent",
    secondary: "bg-dark text-white border-2 border-transparent hover:bg-dark-secondary",
    outline: "bg-transparent text-dark border-2 border-border hover:border-dark hover:text-dark",
    ghost: "bg-transparent text-text-secondary hover:bg-light hover:text-dark border-2 border-transparent",
  };

  // Size Classes
  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl",
  };

  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-wide transition-colors duration-200 focus:outline-none select-none cursor-pointer";

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    loading ? "opacity-75 cursor-not-allowed" : ""
  } ${className}`;

  const renderContent = () => (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {!loading && icon && <span className="mr-2 inline-flex">{icon}</span>}
      {children}
    </>
  );

  // Link vs Button tag rendering
  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} ref={buttonRef} className={buttonClasses} {...props}>
          {renderContent()}
        </Link>
      );
    }
    return (
      <a
        href={href}
        ref={buttonRef}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      className={buttonClasses}
      disabled={loading}
      onClick={onClick}
      {...props}
    >
      {renderContent()}
    </button>
  );
}
