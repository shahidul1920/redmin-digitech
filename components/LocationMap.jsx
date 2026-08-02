import React from "react";

export default function LocationMap({ className = "w-full h-full min-h-[300px] rounded-2xl" }) {
  return (
    <div className={`relative overflow-hidden border border-brand/20 shadow-md rounded-2xl group ${className}`}>
      {/* Google Maps iframe in Normal Street / Roadmap View (!5e0) */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d685.0808076161294!2d90.39560806390179!3d23.863019846156657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c421847c2407%3A0xbbf05372ca4a5614!2sHouse%2020%20Rd%20No.%2012%2C%20Dhaka%201230%2C%20Bangladesh!5e0!3m2!1sen!2ssg!4v1785663906045!5m2!1sen!2ssg"
        width="100%"
        height="100%"
        style={{
          border: 0,
          filter: "contrast(1.05) saturate(1.1)",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Redmun Digitech HQ Location Map"
        className="w-full h-full min-h-[280px] rounded-2xl"
      />

      {/* Reddish Brand Overlay Filters */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 via-brand/10 to-red-500/15 mix-blend-color pointer-events-none" />
      <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 border border-brand/20 rounded-2xl pointer-events-none" />
    </div>
  );
}
