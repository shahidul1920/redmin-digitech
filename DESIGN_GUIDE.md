# Redmun Digitech — Brand Design System & Guide

This design guide defines the UI, color palette, typography hierarchy, and animation patterns for the Redmun Digitech platform. All custom components should adhere to these principles to maintain a premium, cohesive enterprise experience.

---

## 1. Typography & Font Pairing
We use two Google Fonts imported via `next/font/google` in [layout.js](file:///c:/Users/theGreatPotato/Documents/GitHub/redmin-digitech/app/layout.js):

* **Headings**: `Plus Jakarta Sans` (`font-heading`)
  * Used for headers, titles, and section headlines. It offers a modern, geometric, clean style.
* **Body & UI**: `Inter` (`font-sans`)
  * Used for body copy, buttons, labels, and microcopy. It provides excellent legibility at small sizes.

---

## 2. Color Palette & Profiles
Colors are registered as custom Tailwind utility classes and CSS variables in [globals.css](file:///c:/Users/theGreatPotato/Documents/GitHub/redmin-digitech/app/globals.css).

### Brand & Accent (Identity)
* **Brand Red**: `#FF0000` (derived from the "Red" and dot in the RedMun logo)
  * CSS variable: `--color-brand`
  * Tailwind classes: `bg-brand`, `text-brand`, `border-brand`
* **Primary Blue**: `#0057FF` (used as the primary action/interactive color)
  * CSS variable: `--color-primary`
  * Tailwind classes: `bg-primary`, `text-primary`, `border-primary`

### Neutral Colors
* **Dark (Enterprise Dark)**: `#0B1220` (derived from the "Mun." text in the logo)
  * CSS variable: `--color-dark`
  * Tailwind classes: `bg-dark`, `text-dark`, `border-dark`
* **Light (Background)**: `#F7F9FC`
  * CSS variable: `--color-light`
  * Tailwind classes: `bg-light`, `text-light`, `border-light`

### Typography Colors
* **Text Primary**: `text-dark` (`#0B1220`)
* **Text Secondary**: `text-text-secondary` (`#4A5568`)
* **Text Muted**: `text-text-muted` (`#A0AEC0`)
* **Text Inverse**: `text-text-inverse` (`#F7F9FC`)

---

## 3. UI Components & Layout Guidelines

### Spacing Scale
Utilize standard Tailwind margin and padding spacing:
* `mb-6` / `pb-6` (24px) for standard item spacing
* `mb-10` / `pb-10` (40px) for layout separations
* `py-32` / `py-20` for section padding blocks

### Borders & Radius
* Standard border color: `border-border` (`#E2E7EF`)
* Large border radius: `rounded-lg` (8px) or `rounded-xl` (12px) for UI cards and premium buttons

---

## 4. Animation Guidelines with GSAP
Redmun Digitech leverages **GSAP (GreenSock Animation Platform)** for premium, smooth interactive elements.

### Rules for using GSAP in Next.js / React:
1. **Use `"use client"`**: All files that initiate GSAP animations must run on the client side.
2. **Use `@gsap/react`**: Always import `useGSAP` from `@gsap/react` instead of standard `useEffect`. It handles automatic cleanup when components unmount, preventing memory leaks and duplicate timeline runs.
   ```javascript
   import { useGSAP } from "@gsap/react";
   import gsap from "gsap";
   ```
3. **Scoping**: Always scope your selectors using refs to prevent finding matching elements elsewhere on the page.
   ```javascript
   const container = useRef(null);
   useGSAP(() => {
     gsap.from(".anim-target", { opacity: 0, y: 30, stagger: 0.2 });
   }, { scope: container });
   ```
4. **Easing**: Use natural easing functions like `power2.out`, `power3.out`, or custom spring behaviors for interactive feel. Avoid linear transitions for structural changes.
