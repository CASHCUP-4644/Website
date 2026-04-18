/*
 * PricingSection – Premium Apple-Adjacent Minimalism
 * Clean pricing table with model tabs and clear price display
 */
import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

type ModelKey = "iPhone 15 Series" | "iPhone 14 Series" | "iPhone 13 Series" | "iPhone 12 & Older";

const models: ModelKey[] = [
  "iPhone 15 Series",
  "iPhone 14 Series",
  "iPhone 13 Series",
  "iPhone 12 & Older",
];

const pricingData: Record<ModelKey, { service: string; price: string }[]> = {
  "iPhone 15 Series": [
    { service: "Screen Replacement", price: "$249" },
    { service: "Battery Replacement", price: "$99" },
    { service: "Back Glass Repair", price: "$149" },
    { service: "Charging Port", price: "$89" },
    { service: "Camera Repair", price: "$129" },
    { service: "Speaker Repair", price: "$79" },
  ],
  "iPhone 14 Series": [
    { service: "Screen Replacement", price: "$199" },
    { service: "Battery Replacement", price: "$89" },
    { service: "Back Glass Repair", price: "$129" },
    { service: "Charging Port", price: "$79" },
    { service: "Camera Repair", price: "$119" },
    { service: "Speaker Repair", price: "$69" },
  ],
  "iPhone 13 Series": [
    { service: "Screen Replacement", price: "$169" },
    { service: "Battery Replacement", price: "$79" },
    { service: "Back Glass Repair", price: "$109" },
    { service: "Charging Port", price: "$69" },
    { service: "Camera Repair", price: "$99" },
    { service: "Speaker Repair", price: "$59" },
  ],
  "iPhone 12 & Older": [
    { service: "Screen Replacement", price: "$129" },
    { service: "Battery Replacement", price: "$69" },
    { service: "Back Glass Repair", price: "$89" },
    { service: "Charging Port", price: "$59" },
    { service: "Camera Repair", price: "$79" },
    { service: "Speaker Repair", price: "$49" },
  ],
};

const guarantees = [
  "90-day parts & labour warranty",
  "OEM-quality components",
  "No fix, no fee policy",
  "Free diagnostic assessment",
];

export default function PricingSection() {
  const [activeModel, setActiveModel] = useState<ModelKey>("iPhone 15 Series");
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

  const rows = pricingData[activeModel];

  return (
    <section id="pricing" className="py-24 bg-white" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">
          {/* Left: Table */}
          <div>
            {/* Header */}
            <div className="mb-10">
              <div className="pill-badge bg-[#0A84FF]/10 text-[#0A84FF] border border-[#0A84FF]/20 mb-4">
                Transparent Pricing
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-4 leading-tight"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                No surprises. Ever.
              </h2>
              <p className="text-lg text-[#6C6C70]">
                Upfront pricing for every repair. Select your iPhone model below.
              </p>
            </div>

            {/* Info banner */}
            <div className="bg-[#0A84FF]/8 border border-[#0A84FF]/25 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-[#0A84FF]">
                📧 Mail-in service only — All repairs completed within 10 business days
              </p>
              <p className="text-xs text-[#0A84FF]/75 mt-1">
                Free prepaid shipping label and return shipping included
              </p>
            </div>

            {/* Model tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {models.map((model) => (
                <button
                  key={model}
                  onClick={() => setActiveModel(model)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeModel === model
                      ? "bg-[#0A84FF] text-white shadow-md shadow-[#0A84FF]/25"
                      : "bg-[#F2F2F0] text-[#6C6C70] hover:bg-[#E8E8E6] hover:text-[#1C1C1E]"
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>

            {/* Pricing table */}
            <div
              className="rounded-2xl border border-black/6 overflow-hidden shadow-sm"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F8F6] border-b border-black/6">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[#3A3A3C]">Service</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-[#3A3A3C]">Price</th>

                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.service}
                      className={`border-b border-black/5 last:border-0 hover:bg-[#F8F8F6] transition-colors ${
                        i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-[#1C1C1E]">{row.service}</td>
                      <td className="px-6 py-4 text-sm font-bold text-[#0A84FF] text-right">{row.price}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#8E8E93] mt-3">
              * Prices are indicative. Final quote provided after free diagnostic assessment.
            </p>
          </div>

          {/* Right: Guarantee card */}
          <div
            className="lg:sticky lg:top-24"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
            }}
          >
            <div className="bg-[#0A84FF] rounded-2xl p-8 text-white shadow-2xl shadow-[#0A84FF]/30">
              <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                Our Guarantee
              </h3>
              <p className="text-white/75 text-sm mb-6 leading-relaxed">
                Every repair comes with our comprehensive quality promise. We stand behind our work.
              </p>
              <ul className="space-y-3">
                {guarantees.map((g) => (
                  <li key={g} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-white/60 shrink-0" />
                    <span className="text-white/90">{g}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/60 text-xs">
                  Can't find your model? Text us for a custom quote.
                </p>
                <a
                  href="sms:+61452187322"
                  className="block mt-2 text-white font-bold text-lg hover:text-white/80 transition-colors"
                >
                  0452 187 322
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
