"use client";

import React, { useState } from "react";
import { Check, MessageSquare, Calendar, AlertCircle } from "@/components/Icons";
import Button from "./Button";
import { sendContactEmail } from "@/utils/actions";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    subject: "1688-api",
    userMessage: "",
    company_website_url: "", // Honeypot field for bot prevention
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const dataPayload = new FormData();
      dataPayload.append("userName", formData.userName);
      dataPayload.append("userEmail", formData.userEmail);
      dataPayload.append("userPhone", formData.userPhone);
      dataPayload.append("subject", formData.subject);
      dataPayload.append("userMessage", formData.userMessage);
      dataPayload.append("company_website_url", formData.company_website_url);

      const res = await sendContactEmail(dataPayload);
      if (res.success) {
        setStatus("success");
        setFormData({
          userName: "",
          userEmail: "",
          userPhone: "",
          subject: "1688-api",
          userMessage: "",
          company_website_url: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(res.error || "Something went wrong while sending your message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("An unexpected network error occurred.");
    }
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
          {/* Honeypot field - invisible to real human users */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_website_url">Leave this empty</label>
            <input
              type="text"
              id="company_website_url"
              name="company_website_url"
              tabIndex={-1}
              autoComplete="off"
              value={formData.company_website_url}
              onChange={handleChange}
            />
          </div>

          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label htmlFor="userName" className="text-xs font-bold text-dark uppercase tracking-wider block">
                Full Name *
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                required
                value={formData.userName}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="e.g. Rahat Chowdhury"
                className="w-full px-4 py-3 text-sm rounded-xl bg-light-secondary border border-border text-dark placeholder-text-muted focus:outline-none focus:border-brand focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="userEmail" className="text-xs font-bold text-dark uppercase tracking-wider block">
                Work Email *
              </label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                required
                value={formData.userEmail}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="e.g. ops@company.com"
                className="w-full px-4 py-3 text-sm rounded-xl bg-light-secondary border border-border text-dark placeholder-text-muted focus:outline-none focus:border-brand focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label htmlFor="userPhone" className="text-xs font-bold text-dark uppercase tracking-wider block">
                Phone Number
              </label>
              <input
                type="tel"
                id="userPhone"
                name="userPhone"
                value={formData.userPhone}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="e.g. +880 1700-000000"
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
                <option value="news-portal">High-Speed News Portal</option>
                <option value="consulting">Custom Technical Consulting</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="userMessage" className="text-xs font-bold text-dark uppercase tracking-wider block">
              Project Brief *
            </label>
            <textarea
              id="userMessage"
              name="userMessage"
              required
              rows={4}
              value={formData.userMessage}
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
