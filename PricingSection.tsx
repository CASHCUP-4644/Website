/*
 * ContactSection – Premium Apple-Adjacent Minimalism
 * Booking form + store info side-by-side layout
 */
import { useState } from "react";
import { MapPin, Clock, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const services = [
  "Screen Replacement",
  "Battery Replacement",
  "Back Glass Repair",
  "Camera Repair",
  "Charging Port Repair",
  "Speaker Repair",
  "Other",
];

const storeInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Pakenham, Victoria",
    sub: "",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sun: 9am – 6pm",
    sub: "",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0452 187 322",
    sub: "Text anytime",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Crackinphonerepairs@gmail.com",
    sub: "We reply within 2 hours",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Booking request sent! We'll confirm within 1 hour.");
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F8F6]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div>
            <div className="pill-badge bg-[#0A84FF]/10 text-[#0A84FF] border border-[#0A84FF]/20 mb-4">
              Book a Repair
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-4 leading-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Get your iPhone fixed.
            </h2>
            <p className="text-lg text-[#6C6C70] mb-8">
              Fill in the form and we'll confirm your booking within 3 hours.
            </p>

            {submitted ? (
              <div className="bg-white rounded-2xl border border-green-100 p-10 text-center shadow-sm">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-[#1C1C1E] mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                  Booking Request Received!
                </h3>
                <p className="text-[#6C6C70] text-sm">
                  Thanks, <strong>{form.name}</strong>! We'll send a confirmation to{" "}
                  <strong>{form.email}</strong> within 2 hours.
                </p>
                <Button
                  className="mt-6 bg-[#0A84FF] hover:bg-[#0066CC] text-white rounded-xl"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-black/6 shadow-sm p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#3A3A3C] mb-1.5">
                      Full Name <span className="text-[#0A84FF]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#F8F8F6] text-sm text-[#1C1C1E] placeholder-[#8E8E93] focus:outline-none focus:ring-2 focus:ring-[#0A84FF]/30 focus:border-[#0A84FF] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3A3A3C] mb-1.5">
                      Email <span className="text-[#0A84FF]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#F8F8F6] text-sm text-[#1C1C1E] placeholder-[#8E8E93] focus:outline-none focus:ring-2 focus:ring-[#0A84FF]/30 focus:border-[#0A84FF] transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#3A3A3C] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#F8F8F6] text-sm text-[#1C1C1E] placeholder-[#8E8E93] focus:outline-none focus:ring-2 focus:ring-[#0A84FF]/30 focus:border-[#0A84FF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3A3A3C] mb-1.5">
                      iPhone Model
                    </label>
                    <input
                      type="text"
                      name="model"
                      value={form.model}
                      onChange={handleChange}
                      placeholder="e.g. iPhone 15 Pro"
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#F8F8F6] text-sm text-[#1C1C1E] placeholder-[#8E8E93] focus:outline-none focus:ring-2 focus:ring-[#0A84FF]/30 focus:border-[#0A84FF] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3A3A3C] mb-1.5">
                    Service Required <span className="text-[#0A84FF]">*</span>
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#F8F8F6] text-sm text-[#1C1C1E] focus:outline-none focus:ring-2 focus:ring-[#0A84FF]/30 focus:border-[#0A84FF] transition-all"
                    required
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3A3A3C] mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe the issue with your iPhone..."
                    className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#F8F8F6] text-sm text-[#1C1C1E] placeholder-[#8E8E93] focus:outline-none focus:ring-2 focus:ring-[#0A84FF]/30 focus:border-[#0A84FF] transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#0A84FF] hover:bg-[#0066CC] text-white font-semibold py-3.5 rounded-xl text-base shadow-lg shadow-[#0A84FF]/25 hover:shadow-[#0A84FF]/35 transition-all duration-300 group"
                >
                  Send Booking Request
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </div>

          {/* Right: Store info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-black/6 shadow-sm p-8">
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
                Visit Our Store
              </h3>
              <div className="space-y-5">
                {storeInfo.map(({ icon: Icon, label, value, sub }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0A84FF]/8 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#0A84FF]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#8E8E93] uppercase tracking-wide mb-0.5">
                        {label}
                      </div>
                      <div className="text-sm font-semibold text-[#1C1C1E]">{value}</div>
                      <div className="text-xs text-[#8E8E93]">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl border border-black/6 shadow-sm overflow-hidden flex-1 min-h-[220px]">
              <div className="h-full bg-gradient-to-br from-[#E8F0FE] to-[#D2E3FC] flex flex-col items-center justify-center p-8 text-center min-h-[220px]">
                <MapPin className="w-10 h-10 text-[#0A84FF] mb-3" />
                <p className="text-sm font-semibold text-[#1C1C1E]">Pakenham, Victoria</p>
                <p className="text-xs text-[#6C6C70] mt-1">Mail-in service only</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs font-semibold text-[#0A84FF] hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
