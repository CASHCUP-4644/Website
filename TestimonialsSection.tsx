/*
 * HeroSection – Premium Apple-Adjacent Minimalism
 * Full-bleed image background, frosted glass overlay, asymmetric layout
 */
import { ArrowRight, ShieldCheck, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566657100/U7RVzWPfapPUJFPZTAnezW/hero-repair-dg7TKqiJxZhhuHbW3vmJLn.webp";

const trustBadges = [
  { icon: ShieldCheck, label: "90-Day Warranty" },
  { icon: Clock, label: "10 Day Repairs" },
  { icon: Star, label: "500+ 5-Star Reviews" },
];

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0D0F]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="iPhone repair technician at work"
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0F] via-[#0D0D0F]/80 to-[#0D0D0F]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Pill label */}
          <div
            className="pill-badge bg-[#0A84FF]/15 text-[#0A84FF] border border-[#0A84FF]/25 mb-6 fade-in-up"
            style={{ animationDelay: "0ms" }}
          >
            Professional iPhone Repair
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 fade-in-up"
            style={{ animationDelay: "80ms", fontFamily: "'Sora', sans-serif" }}
          >
            Your iPhone,
            <br />
            <span className="gradient-text">Fixed Fast.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-white/65 leading-relaxed mb-8 max-w-xl fade-in-up"
            style={{ animationDelay: "160ms" }}
          >
            Expert repairs for cracked screens, dead batteries, charging port failure, and more.
            Most repairs completed within 10 days with premium parts.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 mb-14 fade-in-up"
            style={{ animationDelay: "240ms" }}
          >
            <Button
              onClick={scrollToContact}
              className="bg-[#0A84FF] hover:bg-[#0066CC] text-white font-semibold px-8 py-3.5 rounded-xl text-base shadow-xl shadow-[#0A84FF]/30 hover:shadow-[#0A84FF]/40 transition-all duration-300 group"
            >
              Book a Repair
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              onClick={scrollToServices}
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-semibold px-8 py-3.5 rounded-xl text-base transition-all duration-300 bg-white/5"
            >
              View Services
            </Button>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-4 fade-in-up"
            style={{ animationDelay: "320ms" }}
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-2"
              >
                <Icon className="w-4 h-4 text-[#0A84FF]" />
                <span className="text-sm font-medium text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F8F6] to-transparent" />
    </section>
  );
}
