import React from "react";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";

export default function ContactPage() {
  return (
    <div className="bg-light-secondary/40 py-12">
      
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-dark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden border border-border-dark shadow-lg">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-4">Operations Console</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Contact Engineering</h1>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Have an enterprise integration project, custom shipping portal, or wholesale catalog query? Get in touch with our operations desk.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary opacity-15 rounded-full blur-3xl" />
        </div>
      </section>

      {/* 2. Content Grid (Server Left Info, Client Right Form) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
        
        {/* Left Information Panel (RSC) */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block">Scoping Support</span>
            <h2 className="text-2xl md:text-3xl font-bold text-dark">Technical Operations Desk</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              We schedule 15-minute scoping calls to review technical requirements, check API scopes, and prepare database integration budgets.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 p-4 rounded-xl bg-white border border-border">
              <div className="text-xl">📞</div>
              <div>
                <h4 className="text-xs font-bold text-dark uppercase tracking-wider mb-1">Direct Call</h4>
                <p className="text-sm text-text-secondary font-bold">+880 1700-000000</p>
                <p className="text-[10px] text-text-tertiary">Sunday to Thursday, 9:00 AM - 6:00 PM (GMT+6)</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-white border border-border">
              <div className="text-xl">📍</div>
              <div>
                <h4 className="text-xs font-bold text-dark uppercase tracking-wider mb-1">Office Address</h4>
                <p className="text-sm text-text-secondary font-bold">Redmun Digitech HQ</p>
                <p className="text-xs text-text-tertiary leading-relaxed">Sector 11, Uttara, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="h-64 bg-white border border-border rounded-3xl overflow-hidden shadow-sm flex items-center justify-center text-xs font-semibold text-text-muted">
            [ Interactive Location Map Container ]
          </div>

        </div>

        {/* Right Client Form (RSC Leaf) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </section>

      {/* 3. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>

    </div>
  );
}
