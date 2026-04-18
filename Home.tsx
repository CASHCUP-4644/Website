/*
 * ServicesSection – Premium Apple-Adjacent Minimalism
 * Clean 3-column grid with image cards, frosted glass hover effects
 */
import { useEffect, useRef, useState } from "react";
import { Monitor, BatteryCharging, Smartphone, Camera, Wifi, Zap } from "lucide-react";

const SCREEN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566657100/U7RVzWPfapPUJFPZTAnezW/screen-repair-dMLkNt8KicSub5xkYjnCgs.webp";
const BATTERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566657100/U7RVzWPfapPUJFPZTAnezW/battery-repair-M5S8VBLPRDdtVPTwe43yNv.webp";
const BACK_GLASS_IMG = "https://www.eziphonerepair.nz/wp-content/uploads/2024/10/843392_0135aa77ff6d461aa8044756b0acf512mv2.png";
const CAMERA_IMG = "https://cdn.prod.website-files.com/5e83466828f0fa11a39d46ff/6644703554a91cd53d8467f4_camera.webp";
const CHARGING_PORT_IMG = "https://www.idoc.eu/guides/uploads/steps/manual467_teaser.jpg";
const SPEAKER_IMG = "https://guide-images.cdn.ifixit.com/igi/rIkfASP32xpYXJsb.full";

const services = [
  {
    icon: Monitor,
    title: "Screen Replacement",
    description:
      "Cracked or shattered display? We replace screens with OEM-quality OLED panels, restoring your iPhone to factory clarity.",
    image: SCREEN_IMG,
    highlight: true,
  },
  {
    icon: BatteryCharging,
    title: "Battery Replacement",
    description:
      "Restore your iPhone's battery health to 100%. We use genuine-grade cells that meet Apple's original specifications.",
    image: BATTERY_IMG,
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "Back Glass Repair",
    description:
      "Broken back glass? We replace it with precision-cut OEM panels, restoring your iPhone's sleek appearance and structural integrity.",
    image: BACK_GLASS_IMG,
    highlight: false,
  },
  {
    icon: Camera,
    title: "Camera Repair",
    description:
      "Blurry photos, black screen, or broken front camera? We replace front and rear camera modules with precision.",
    image: CAMERA_IMG,
    highlight: false,
  },
  {
    icon: Wifi,
    title: "Charging Port Repair",
    description:
      "Loose connector or won't charge? We clean or replace charging ports to restore reliable power delivery.",
    image: CHARGING_PORT_IMG,
    highlight: false,
  },
  {
    icon: Zap,
    title: "Speaker Repair",
    description:
      "No sound? We diagnose and replace audio components to restore full functionality.",
    image: SPEAKER_IMG,
    highlight: false,
  },
];

const iconBgColors = [
  "bg-blue-50 text-[#0A84FF]",
  "bg-green-50 text-green-600",
  "bg-purple-50 text-purple-600",
  "bg-orange-50 text-orange-600",
  "bg-red-50 text-red-600",
  "bg-indigo-50 text-indigo-600",
  "bg-yellow-50 text-yellow-600",
];

function ServiceCard({
  service,
  index,
  visible,
}: {
  service: (typeof services)[0];
  index: number;
  visible: boolean;
}) {
  const Icon = service.icon;
  const iconClass = iconBgColors[index % iconBgColors.length];

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden border border-black/6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${index * 80}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${index * 80}ms, box-shadow 0.3s ease, translate 0.3s ease`,
      }}
    >
      {/* Image or icon-only header */}
      {service.image ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl ${iconClass} flex items-center justify-center shadow-sm`}>
            <Icon className="w-5 h-5" />
          </div>
        </div>
      ) : (
        <div className="h-24 bg-gradient-to-br from-[#F8F8F6] to-[#EFEFED] flex items-center justify-start px-6">
          <div className={`w-12 h-12 rounded-xl ${iconClass} flex items-center justify-center`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#1C1C1E] mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
          {service.title}
        </h3>
        <p className="text-sm text-[#6C6C70] leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
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
    <section id="services" className="py-24 bg-[#F8F8F6]" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="pill-badge bg-[#0A84FF]/10 text-[#0A84FF] border border-[#0A84FF]/20 mb-4">
            Our Services
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-4 leading-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Every repair, done right.
          </h2>
          <p className="text-lg text-[#6C6C70] leading-relaxed mb-6">
            From cracked screens to complex back glass repairs, our trusted technicians
            handle every iPhone issue with precision and care.
          </p>
          <div className="bg-[#0A84FF]/8 border border-[#0A84FF]/25 rounded-xl p-4 inline-block">
            <p className="text-sm font-semibold text-[#0A84FF]">
               ⏱️ Most repairs completed within 10 days of receiving your device
            </p>
            <p className="text-xs text-[#0A84FF]/75 mt-1">
              Mail-in service only. Free shipping on return.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} visible={visible} />
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-[#0A84FF]/5 to-[#0A84FF]/10 border border-[#0A84FF]/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#1C1C1E] mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
            How Our Mail-In Service Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-[#0A84FF] mb-2">1</div>
              <p className="text-sm text-[#6C6C70]"><strong>Ship Your Device</strong> — Pack your iPhone securely and drop it off.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0A84FF] mb-2">2</div>
              <p className="text-sm text-[#6C6C70]"><strong>Expert Repair</strong> — Our technicians diagnose and repair your device within 10 business days.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0A84FF] mb-2">3</div>
              <p className="text-sm text-[#6C6C70]"><strong>Return Shipping</strong> — Your repaired iPhone ships back free with full tracking and insurance valued at $300.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
