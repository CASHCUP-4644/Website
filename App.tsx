/*
 * TestimonialsSection – Premium Apple-Adjacent Minimalism
 * Star-rated review cards in a staggered grid layout
 */
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Downtown",
    rating: 5,
    text: "Dropped my iPhone 15 Pro and completely shattered the screen. Crackin' iPhone Repairs had it looking brand new in under 15 days. The quality of the replacement screen is indistinguishable from the original. Absolutely brilliant service.",
    service: "Screen Replacement",
    avatar: "SM",
    avatarBg: "bg-blue-100 text-blue-700",
  },
  {
    name: "James T.",
    location: "Westside",
    rating: 5,
    text: "My iPhone 14 fell into the pool. I thought it was done for. The team at iFixIt recovered it completely — everything works perfectly. They saved me from buying a new phone. Worth every penny.",
    service: "Water Damage Recovery",
    avatar: "JT",
    avatarBg: "bg-cyan-100 text-cyan-700",
  },
  {
    name: "Priya K.",
    location: "Northgate",
    rating: 5,
    text: "Battery was draining in 3 hours. After the replacement it lasts all day again. The technician was professional, explained everything clearly, and the price was exactly as quoted. No hidden fees.",
    service: "Battery Replacement",
    avatar: "PK",
    avatarBg: "bg-violet-100 text-violet-700",
  },
  {
    name: "Daniel R.",
    location: "Eastville",
    rating: 5,
    text: "My iPhone 13 with a charging port issue. Fixed in 40 minutes while I grabbed a coffee next door. The staff were friendly and knowledgeable. This is my go-to repair shop from now on.",
    service: "Charging Port Repair",
    avatar: "DR",
    avatarBg: "bg-green-100 text-green-700",
  },
  {
    name: "Olivia W.",
    location: "Southpark",
    rating: 5,
    text: "The front camera on my iPhone 15 was completely black. iFixIt diagnosed and replaced it in under an hour. The 90-day warranty gave me real peace of mind. Highly recommend to anyone.",
    service: "Camera Repair",
    avatar: "OW",
    avatarBg: "bg-amber-100 text-amber-700",
  },
  {
    name: "Marcus L.",
    location: "City Centre",
    rating: 5,
    text: "Logic board repair that two other shops refused to attempt. iFixIt fixed it in 24 hours. The micro-soldering work is exceptional. My iPhone 12 Pro is running perfectly. These guys are genuine experts.",
    service: "Logic Board Repair",
    avatar: "ML",
    avatarBg: "bg-rose-100 text-rose-700",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
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
    <section id="testimonials" className="py-24 bg-white" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="pill-badge bg-amber-50 text-amber-600 border border-amber-200 mb-4">
              Customer Reviews
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1C1C1E] leading-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Trusted by hundreds of iPhone owners.
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <div className="text-4xl font-bold text-[#1C1C1E]" style={{ fontFamily: "'Sora', sans-serif" }}>
                4.9
              </div>
              <div className="text-sm text-[#6C6C70]">Average Rating</div>
            </div>
            <div>
              <StarRating rating={5} />
              <div className="text-xs text-[#8E8E93] mt-1">500+ reviews</div>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-[#F8F8F6] rounded-2xl p-6 border border-black/5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease ${i * 70}ms, transform 0.5s ease ${i * 70}ms, box-shadow 0.3s ease`,
              }}
            >
              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Quote */}
              <p className="mt-4 text-sm text-[#3A3A3C] leading-relaxed">"{t.text}"</p>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${t.avatarBg} flex items-center justify-center text-xs font-bold`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1C1C1E]">{t.name}</div>
                    <div className="text-xs text-[#8E8E93]">{t.location}</div>
                  </div>
                </div>
                <span className="pill-badge bg-[#0A84FF]/8 text-[#0A84FF] text-[10px]">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
