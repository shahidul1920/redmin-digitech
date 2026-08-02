import React from "react";
import { Phone, MapPin, Mail } from "@/components/Icons";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import CopyableText from "@/components/CopyableText";
import LocationMap from "@/components/LocationMap";

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

          <div className="space-y-4">
            <div className="flex gap-4 p-5 rounded-2xl bg-white border border-border items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-dark uppercase tracking-wider mb-1">Direct Phone</h4>
                <CopyableText text="+880 1711 994608" valueToCopy="+8801711994608" className="text-base text-dark font-bold hover:text-brand transition-colors block" />
                <p className="text-xs text-text-tertiary mt-0.5">11:00 AM - 8:00 PM (Saturday - Thursday)</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-white border border-border items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-dark uppercase tracking-wider mb-1">Office Address</h4>
                <p className="text-base text-dark font-bold">Redmun Digitech HQ</p>
                <p className="text-xs text-text-secondary leading-relaxed">House 20, Road 12, Sector 03, Uttara, Dhaka</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-white border border-border items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-dark uppercase tracking-wider mb-1">Email Desk</h4>
                <CopyableText text="contact@redmun.com" className="text-base text-dark font-bold hover:text-brand transition-colors block" />
                <p className="text-xs text-text-tertiary mt-0.5">Guaranteed 24-hour response SLA</p>
              </div>
            </div>
          </div>

          {/* Interactive Google Map */}
          <LocationMap className="w-full h-80 rounded-3xl" />

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
