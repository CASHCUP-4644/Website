/*
 * StatsBar – Premium Apple-Adjacent Minimalism
 * Horizontal stats strip between hero and services
 */
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "500+", label: "Repairs Completed" },
  { value: "4.9★", label: "Average Rating" },
  { value: "10 days", label: "Average Repair Time" },
  { value: "90 days", label: "Parts Warranty" },
  { value: "98%", label: "Customer Satisfaction" },
];

export default function StatsBar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white border-y border-black/6 py-8" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 divide-x divide-black/6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center px-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.45s ease ${i * 60}ms, transform 0.45s ease ${i * 60}ms`,
              }}
            >
              <div
                className="text-2xl md:text-3xl font-bold text-[#0A84FF] mb-1"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-[#8E8E93] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
