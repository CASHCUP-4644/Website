/*
 * HowItWorksSection – Premium Apple-Adjacent Minimalism
 * Step-by-step process with large step numbers and connecting line
 */
import { useEffect, useRef, useState } from "react";
import { ClipboardList, Search, Wrench, CheckCircle } from "lucide-react";

const SHOP_IMG = "https://i-station.com.au/cdn/shop/files/Apple-EU-Self-Service-repair-iPhone-e1670324694527_0a2d095e-7ea7-4ebb-bdf7-85a7c91ca83e_535x.webp?v=1746507315";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Submit Your Order",
    description:
      "Fill out our booking form with your device details and repair needs.",
  },
  {
    number: "02",
    icon: Search,
    title: "Ship Your iPhone",
    description:
      "Pack your device securely and drop it off at any shipping location.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Expert Repair (9 Business Days)",
    description:
      "Our trusted technicians diagnose and repair your iPhone using premium-grade parts. You'll receive status updates throughout the process.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Return Shipping",
    description:
      "Your repaired iPhone ships back free with full tracking, insurance of $300 compensation. Every repair includes our 90-day warranty.",
  },
];

export default function HowItWorksSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-24 bg-[#F8F8F6]" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Steps */}
          <div>
            <div className="pill-badge bg-[#0A84FF]/10 text-[#0A84FF] border border-[#0A84FF]/20 mb-4">
              How It Works
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-4 leading-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Mail-in repair in 4 simple steps.
            </h2>
            <p className="text-lg text-[#6C6C70] mb-4">
              Send us your iPhone, and we'll repair it within 9 business days and ship it back.
            </p>
            <div className="bg-[#0A84FF]/8 border border-[#0A84FF]/25 rounded-xl p-4 mb-8 inline-block">
              <p className="text-sm font-semibold text-[#0A84FF]">
                ⏱️ 9 business days from receipt to completion
              </p>
              <p className="text-xs text-[#0A84FF]/75 mt-1">
                Free returned shipping included
              </p>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-7 top-10 bottom-10 w-px bg-gradient-to-b from-[#0A84FF]/30 via-[#0A84FF]/15 to-transparent hidden sm:block" />

              <div className="space-y-8">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className="flex gap-5"
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateX(0)" : "translateX(-20px)",
                        transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
                      }}
                    >
                      {/* Step icon */}
                      <div className="relative shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-black/8 shadow-sm flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#0A84FF]" />
                        </div>
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#0A84FF] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                          {i + 1}
                        </span>
                      </div>
                      {/* Content */}
                      <div className="pt-1">
                        <h3 className="font-bold text-[#1C1C1E] mb-1.5" style={{ fontFamily: "'Sora', sans-serif" }}>
                          {step.title}
                        </h3>
                        <p className="text-sm text-[#6C6C70] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Shop image */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={SHOP_IMG}
                alt="iFixIt repair shop interior"
                className="w-full h-[480px] object-cover"
              />
              {/* Overlay stat card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-2xl p-5 flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0A84FF]" style={{ fontFamily: "'Sora', sans-serif" }}>
                      500+
                    </div>
                    <div className="text-xs text-[#6C6C70] mt-0.5">Happy Customers</div>
                  </div>
                  <div className="w-px bg-black/8" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0A84FF]" style={{ fontFamily: "'Sora', sans-serif" }}>
                      9 Day
                    </div>
                    <div className="text-xs text-[#6C6C70] mt-0.5">Avg. Repair Time</div>
                  </div>
                  <div className="w-px bg-black/8" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0A84FF]" style={{ fontFamily: "'Sora', sans-serif" }}>
                      98%
                    </div>
                    <div className="text-xs text-[#6C6C70] mt-0.5">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
