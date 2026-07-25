"use client";

import React, { useState } from "react";
import { Check, MessageSquare, Calendar } from "@/components/Icons";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "1688-api",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate database submit delay
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "1688-api", message: "" });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-border shadow-sm space-y-8">
      {status === "success" ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-dark">Message Dispatched!</h3>
          <p className="text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
            Our technical operations team has received your scoping details. We will contact you within 24 hours via email.
          </p>
          <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
            Send another message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs font-bold text-dark uppercase tracking-wider block">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={status === "submitting"}
              placeholder="e.g. Rahat Chowdhury"
              className="w-full px-4 py-3 text-sm rounded-xl bg-light-secondary border border-border text-dark placeholder-text-muted focus:outline-none focus:border-brand focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-bold text-dark uppercase tracking-wider block">
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={status === "submitting"}
              placeholder="e.g. ops@company.com"
              className="w-full px-4 py-3 text-sm rounded-xl bg-light-secondary border border-border text-dark placeholder-text-muted focus:outline-none focus:border-brand focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="subject" className="text-xs font-bold text-dark uppercase tracking-wider block">
              Inquiry Scope
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="w-full px-4 py-3 text-sm rounded-xl bg-light-secondary border border-border text-dark focus:outline-none focus:border-brand focus:bg-white transition-all cursor-pointer"
            >
              <option value="1688-api">1688 API Sourcing Integration</option>
              <option value="shipping">Shipping Manifest ERP</option>
              <option value="restaurant">Restaurant POS Orders</option>
              <option value="ecommerce">Headless E-Commerce System</option>
              <option value="consulting">Custom Technical Consulting</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-xs font-bold text-dark uppercase tracking-wider block">
              Project Brief
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              disabled={status === "submitting"}
              placeholder="Please describe your operational requirements..."
              className="w-full px-4 py-3 text-sm rounded-xl bg-light-secondary border border-border text-dark placeholder-text-muted focus:outline-none focus:border-brand focus:bg-white transition-all resize-none"
            />
          </div>

          <Button variant="brand" size="lg" type="submit" className="w-full" loading={status === "submitting"}>
            Submit Brief
          </Button>
        </form>
      )}

      {/* WhatsApp & Meeting Quick Actions */}
      <div className="border-t border-border pt-6 grid grid-cols-2 gap-4">
        <a
          href="https://wa.me/8801700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 rounded-xl border border-border hover:border-brand bg-light-secondary/20 hover:bg-white text-center transition-all group"
        >
          <MessageSquare className="w-5 h-5 text-brand mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-bold text-dark uppercase tracking-wider group-hover:text-brand transition-colors">WhatsApp</span>
          <span className="text-[10px] text-text-tertiary mt-1">Instant Support</span>
        </a>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 rounded-xl border border-border hover:border-brand bg-light-secondary/20 hover:bg-white text-center transition-all group"
        >
          <Calendar className="w-5 h-5 text-primary mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-bold text-dark uppercase tracking-wider group-hover:text-brand transition-colors">Book Scoping</span>
          <span className="text-[10px] text-text-tertiary mt-1">15m Video Call</span>
        </a>
      </div>
    </div>
  );
}
