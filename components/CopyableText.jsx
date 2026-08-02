"use client";

import React, { useState } from "react";
import { Check, Copy } from "@/components/Icons";

export default function CopyableText({
  text,
  valueToCopy,
  className = "",
  showIcon = true,
  iconPosition = "right",
  children,
}) {
  const [copied, setCopied] = useState(false);

  const textToCopy = valueToCopy || text;

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`Click to copy: ${textToCopy}`}
      className={`inline-flex items-center gap-1.5 cursor-pointer group/copy transition-all duration-200 relative ${className}`}
    >
      {showIcon && iconPosition === "left" && (
        <span className="flex-shrink-0 text-text-muted group-hover/copy:text-brand transition-colors">
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
        </span>
      )}

      <span className="transition-colors">
        {children || text}
      </span>

      {showIcon && iconPosition === "right" && (
        <span className="flex-shrink-0 text-text-muted group-hover/copy:text-brand transition-colors">
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
        </span>
      )}

      {/* Copied Tooltip Badge */}
      {copied && (
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-bold bg-dark text-white rounded-md shadow-lg z-30 pointer-events-none">
          Copied!
        </span>
      )}
    </button>
  );
}
