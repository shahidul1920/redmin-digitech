import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import Image from "next/image";

// Custom high-quality SVG icons to match the lifecycle stages
const DiscoveryIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3" />
  </svg>
);

const StrategyIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const DesignIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8 9 3 3-3 3m5 0h3M5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
  </svg>
);

const QAIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const LaunchIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 0M12 11v6m0-6-3-3m3 3 3-3m2 11a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0-5.656L11.293 7.05M3 12h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function ProjectLifecycle() {
  const steps = [
    {
      num: "01",
      name: "Requirement Discovery",
      desc: "We understand your business goals, audience, and requirements in depth.",
      icon: DiscoveryIcon,
      color: "from-blue-500 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.15)",
      borderColor: "border-blue-500/30",
      image: "/Requirement-Discovery.png"
    },
    {
      num: "02",
      name: "Planning & Strategy",
      desc: "We analyze, plan, and create a strategic roadmap tailored to your objectives.",
      icon: StrategyIcon,
      color: "from-emerald-500 to-teal-500",
      glowColor: "rgba(16, 185, 129, 0.15)",
      borderColor: "border-emerald-500/30",
      image: "/Planning-&-Strategy.png"
    },
    {
      num: "03",
      name: "UI/UX Design",
      desc: "We design intuitive, engaging, and user-focused interfaces that delight users.",
      icon: DesignIcon,
      color: "from-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.15)",
      borderColor: "border-purple-500/30",
      image: "/UI-UX-Design.png"
    },
    {
      num: "04",
      name: "Development",
      desc: "Our expert developers build clean, scalable, and high-performance solutions.",
      icon: CodeIcon,
      color: "from-red-500 to-rose-500",
      glowColor: "rgba(239, 68, 68, 0.15)",
      borderColor: "border-red-500/30",
      image: "/Development-png.png"
    },
    {
      num: "05",
      name: "Testing & QA",
      desc: "We rigorously test every feature to ensure security, performance, and reliability.",
      icon: QAIcon,
      color: "from-amber-500 to-orange-500",
      glowColor: "rgba(245, 158, 11, 0.15)",
      borderColor: "border-amber-500/30",
      image: "/Testing-&-QA.png"
    },
    {
      num: "06",
      name: "Deployment",
      desc: "We deploy your platform seamlessly to ensure a smooth and successful launch.",
      icon: LaunchIcon,
      color: "from-blue-600 to-indigo-600",
      glowColor: "rgba(79, 70, 229, 0.15)",
      borderColor: "border-blue-600/30",
      image: "/Deployment.png"
    },
    {
      num: "07",
      name: "Support & Growth",
      desc: "We provide ongoing support and continuous improvements to help you grow.",
      icon: SupportIcon,
      color: "from-cyan-500 to-blue-500",
      glowColor: "rgba(6, 182, 212, 0.15)",
      borderColor: "border-cyan-500/30",
      image: "/Support-&-Growth.png"
    }
  ];

  return (
    <section className="py-24 lg:py-36 bg-dark text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 line-grid pointer-events-none opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <ScrollReveal className="mb-20 text-center max-w-3xl mx-auto">
          <span className="sr-item opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/10 text-brand mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            OUR PROCESS
          </span>
          <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold mb-6 leading-tight">
            A Proven Process That <br className="hidden md:block" />
            Turns Ideas Into <span className="text-gradient-brand">Powerful Platforms</span>
          </h2>
          <p className="sr-item opacity-0 text-text-muted text-base md:text-lg leading-relaxed">
            We follow a transparent, collaborative, and agile process to deliver high-quality software that drives real business results.
          </p>
        </ScrollReveal>

        {/* Steps Grid / Horizontal flow on large screens */}
        <div className="relative">
          <ScrollReveal stagger={0.08} scale>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 lg:gap-4 items-stretch relative">
              {steps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div key={idx} className="relative flex flex-col justify-between">
                    <div
                      className={`sr-item opacity-0 group flex flex-col justify-between h-full p-5 rounded-2xl border ${step.borderColor} bg-dark-secondary/60 hover:bg-dark-secondary transition-all duration-500`}
                      style={{ boxShadow: `0 10px 30px -10px ${step.glowColor}` }}
                    >
                      <div>
                        {/* Circle step number & Icon */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md bg-gradient-to-r ${step.color} text-white`}>
                            {step.num}
                          </span>
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                            <StepIcon />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-brand transition-colors duration-300">
                          {step.name}
                        </h3>

                        {/* Description */}
                        <p className="text-[11px] text-text-muted leading-relaxed mb-4">
                          {step.desc}
                        </p>
                      </div>

                      {/* Card Bottom 3D Illustration */}
                      <div className="mt-auto pt-3 flex items-center justify-center border-t border-white/5">
                        <div className="relative w-full h-24 rounded-xl overflow-hidden bg-white/90 shadow-inner group-hover:scale-105 transition-transform duration-300 flex items-center justify-center p-1.5">
                          <Image
                            src={step.image}
                            alt={step.name}
                            fill
                            className="object-contain p-1 mix-blend-multiply"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Connecting arrow for larger screens */}
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-2.5 -translate-y-1/2 z-20 items-center justify-center w-5 h-5 rounded-full bg-dark-tertiary border border-white/10 text-text-muted shadow-md">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Tagline */}
        <div className="text-center mt-12 mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-text-muted italic">
            Every Step. Every Detail. Focused on <span className="text-brand border-b border-brand/40 pb-0.5 font-bold">Your Success.</span>
          </p>
        </div>

        {/* Bottom Horizontal Stats Bar */}
        <ScrollReveal>
          <div className="sr-item opacity-0 p-6 sm:p-8 rounded-3xl border border-white/10 bg-dark-secondary/80 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

              {/* Left explanation column */}
              <div className="lg:col-span-4 flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.371 1.24.588 1.81l-3.97 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.887a1 1 0 00-1.17 0l-3.97 2.887c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.97-2.888c-.784-.57-.38-1.81.588-1.81h4.906a1 1 0 00.95-.69l1.519-4.674z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-medium">
                  We follow industry best practices and agile methodologies to deliver projects <span className="text-brand font-bold">on time, every time.</span>
                </p>
              </div>

              {/* Stats column with progress meters */}
              <div className="lg:col-span-8 flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-6 sm:gap-8 items-center justify-between">

                {/* Metric 1 */}
                <div className="w-full sm:w-auto text-left">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white">98%</span>
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-text-muted mb-1.5">On-Time Delivery</p>
                  <div className="w-24 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "98%" }} />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="w-full sm:w-auto text-left">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white">100%</span>
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-text-muted mb-1.5">Quality Commitment</p>
                  <div className="w-24 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="w-full sm:w-auto text-left">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white">300+</span>
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-text-muted mb-1.5">Projects Delivered</p>
                  <div className="w-24 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="w-full sm:w-auto text-left">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white">50+</span>
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-text-muted mb-1.5">Expert Team Members</p>
                  <div className="w-24 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>

                {/* CTA Button */}
                <div className="w-full sm:w-auto shrink-0 pt-4 sm:pt-0">
                  <Button variant="brand" size="md" href="/contact" className="w-full sm:w-auto">
                    Let's Build Together →
                  </Button>
                </div>

              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
