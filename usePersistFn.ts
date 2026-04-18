/*
 * Navbar – Premium Apple-Adjacent Minimalism
 * Frosted glass sticky header, electric-blue CTA, smooth scroll links
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566657100/U7RVzWPfapPUJFPZTAnezW/crackin_logo-1_beadc4a8.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <img
              src={LOGO_URL}
              alt="CracKinf iPhone Repairs"
              className="h-12 w-auto group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-[#3A3A3C] hover:text-[#0A84FF] rounded-lg hover:bg-[#0A84FF]/8 transition-all duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-[#0A84FF] hover:bg-[#0066CC] text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm"
            >
              Book a Repair
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-black/5 bg-white/95 backdrop-blur-xl">
            <ul className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-[#3A3A3C] hover:text-[#0A84FF] hover:bg-[#0A84FF]/8 rounded-lg transition-all duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 px-4">
                <Button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full bg-[#0A84FF] hover:bg-[#0066CC] text-white font-semibold rounded-xl"
                >
                  Book a Repair
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
