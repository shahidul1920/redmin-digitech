"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, Zap, AlertCircle } from "@/components/Icons";
import Button from "./Button";
import { sendDemoRequestEmail } from "@/utils/actions";

export default function DemoRequestForm() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    companyName: "",
    productScope: "1688-api",
    teamSize: "10-50",
    userMessage: "",
    company_website_url: "", // Honeypot
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
      dataPayload.append("companyName", formData.companyName);
      dataPayload.append("productScope", formData.productScope);
      dataPayload.append("teamSize", formData.teamSize);
      dataPayload.append("userMessage", formData.userMessage);
      dataPayload.append("company_website_url", formData.company_website_url);

      const res = await sendDemoRequestEmail(dataPayload);
      if (res.success) {
        setStatus("success");
        setFormData({
          userName: "",
          userEmail: "",
          userPhone: "",
          companyName: "",
          productScope: "1688-api",
          teamSize: "10-50",
          userMessage: "",
          company_website_url: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(res.error || "Failed to submit demo request.");
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
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-md space-y-8">
      {status === "success" ? (
        <div className="text-center py-16 space-y-6">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Check className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-dark">Demo Request Submitted!</h3>
            <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
              Thank you! A Redmun Digitech solutions architect will contact you within 24 hours to schedule your personalized live demo session.
            </p>
          </div>
          <div className="pt-4">
            <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
              Submit Another Request
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
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
              <label htmlFor="demo-userName" className="text-xs font-bold text-dark uppercase tracking-wider block">
                Full Name *
              </label>
              <input
                type="text"
                id="demo-userName"
                name="userName"
                required
                value={formData.userName}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="e.g. Rahat Chowdhury"
                className="w-full px-4 py-3 text-sm rounded-xl bg-light-secondary border border-border text-dark placeholder-text-muted focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="demo-userEmail" className="text-xs font-bold text-dark uppercase tracking-wider block">
                Work Email *
              </label>
              <input
                type="email"
                id="demo-userEmail"
                name="userEmail"
                required
                value={formData.userEmail}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="e.g. rahat@company.com"
                className="w-full px-4 py-3 text-sm rounded-xl bg-light-secondary border border-border text-dark placeholder-text-muted focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label htmlFor="demo-userPhone" className="text-xs font-bold text-dark uppercase tracking-wider block">
                Phone Number
              </label>
              <input
                type="tel"
                id="demo-userPhone"
                name="userPhone"
                value={formData.userPhone}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="e.g. +880 1700-000000"
                className="w-full px-4 py-3 text-sm rounded-xl bg-light-secondary border border-border text-dark placeholder-text-muted focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="demo-companyName" className="text-xs font-bold text-dark uppercase tracking-wider block">
                Company Name
              </label>
              <input
                type="text"
                id="demo-companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="e.g. Apex Global Trade Ltd."
                className="w-full px-4 py-3 text-sm rounded-xl bg-light-secondary border border-border text-dark placeholder-text-muted focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label htmlFor="demo-productScope" className="text-xs font-bold text-dark uppercase tracking-wider block">
                Product Interest
              </label>
              <select
                id="demo-productScope"
                name="productScope"
                value={formData.productScope}
                onChange={handleChange}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 text-sm rounded-xl bg-light-secondary border border-border text-dark focus:outline-none focus:border-primary focus:bg-white transition-all cursor-pointer"
              >
                <option value="1688-api">1688 API China Sourcing Platform</option>
                <option value="shipping-management">Shipping Manifest & Cargo ERP</option>
                <option value="restaurant-management">Restaurant Chain POS System</option>
                <option value="branded-ecommerce">Custom Branded E-Commerce Platform</option>
                <option value="news-portal">High-Speed News Portal Engine</option>
                <option value="company-profile">Corporate Profile & Portal</option>
                <option value="general-ecommerce">General Multi-Vendor E-Commerce</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="demo-teamSize" className="text-xs font-bold text-dark uppercase tracking-wider block">
                Company Scale
              </label>
              <select
                id="demo-teamSize"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 text-sm rounded-xl bg-light-secondary border border-border text-dark focus:outline-none focus:border-primary focus:bg-white transition-all cursor-pointer"
              >
                <option value="1-10">1 - 10 Employees</option>
                <option value="10-50">10 - 50 Employees</option>
                <option value="50-200">50 - 200 Employees</option>
                <option value="200+">200+ Enterprise Scale</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="demo-userMessage" className="text-xs font-bold text-dark uppercase tracking-wider block">
              Specific Questions or Requirements
            </label>
            <textarea
              id="demo-userMessage"
              name="userMessage"
              rows={4}
              value={formData.userMessage}
              onChange={handleChange}
              disabled={status === "submitting"}
              placeholder="Describe your workflow challenges, current software stack, or target launch timeline..."
              className="w-full px-4 py-3 text-sm rounded-xl bg-light-secondary border border-border text-dark placeholder-text-muted focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
            />
          </div>

          <Button variant="brand" size="lg" type="submit" className="w-full shadow-lg shadow-brand/20" loading={status === "submitting"}>
            <Zap className="w-5 h-5 mr-2" /> Request Live Demo
          </Button>

          <div className="flex items-center justify-center gap-4 text-[11px] text-text-muted pt-2 border-t border-border">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Enterprise NDA Protection</span>
            <span>•</span>
            <span>Zero Commitment Scoping</span>
          </div>
        </form>
      )}
    </div>
  );
}
