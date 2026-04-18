/*
 * Footer – Premium Apple-Adjacent Minimalism
 * Clean dark footer with links and brand identity
 */
import { Facebook, Instagram, Twitter } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566657100/U7RVzWPfapPUJFPZTAnezW/crackin_logo-1_beadc4a8.png";

const footerLinks = {
  Services: [
    "Screen Replacement",
    "Battery Replacement",
    "Water Damage Recovery",
    "Logic Board Repair",
    "Camera Repair",
    "Charging Port Repair",
  ],
  Company: ["About Us", "Our Technicians", "Warranty Policy", "Privacy Policy", "Terms of Service"],
  Support: ["Book a Repair", "Track Your Repair", "FAQ", "Contact Us", "Careers"],
};

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src={LOGO_URL}
                alt="CracKinf iPhone Repairs"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Professional iPhone repair specialists. Fast, reliable, and backed by a 90-day warranty.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/8 hover:bg-[#0A84FF] rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-white/60 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                      onClick={(e) => e.preventDefault()}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} iFixIt iPhone Repair. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-white/35">Open today · 9am – 6pm</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
