"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedCounter — animates a number from 0 to the target value when it enters viewport.
 *
 * @param {Object} props
 * @param {number} props.target - The final number to count to
 * @param {string} [props.suffix=""] - Suffix text (e.g., "+", "%")
 * @param {string} [props.prefix=""] - Prefix text (e.g., "$")
 * @param {number} [props.duration=2] - Animation duration in seconds
 * @param {string} [props.className=""] - Extra classes on the wrapper span
 */
export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}) {
  const counterRef = useRef(null);
  const proxy = useRef({ val: 0 });

  useGSAP(
    () => {
      gsap.to(proxy.current, {
        val: target,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (counterRef.current) {
            const val = Math.round(proxy.current.val);
            counterRef.current.textContent = `${prefix}${val.toLocaleString()}${suffix}`;
          }
        },
      });
    },
    { scope: counterRef }
  );

  return (
    <span ref={counterRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
