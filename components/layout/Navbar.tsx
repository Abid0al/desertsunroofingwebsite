"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#story", label: "Our Story" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(20,17,24,0.95)" : "transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
          backdropFilter: "none",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src="/logo-horizontal.svg"
                alt="Desert Sun Roofing"
                style={{ height: "40px", width: "auto" }}
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium transition-colors duration-200 cursor-pointer"
                  style={{ color: "#FFFDF8", opacity: 0.85, fontFamily: "var(--font-sora)" }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.color = "#FF7518";
                    (e.target as HTMLButtonElement).style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.color = "#FFFDF8";
                    (e.target as HTMLButtonElement).style.opacity = "0.85";
                  }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right side CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:5203701039"
                className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full border transition-all duration-200"
                style={{
                  color: "#FFFDF8",
                  borderColor: "rgba(255,253,248,0.3)",
                  fontFamily: "var(--font-sora)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#FF7518";
                  el.style.color = "#FF7518";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(255,253,248,0.3)";
                  el.style.color = "#FFFDF8";
                }}
              >
                <Phone size={14} />
                (520) 370-1039
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="text-sm font-semibold px-5 py-2.5 rounded-sm transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor: "#FF7518",
                  color: "#FFFDF8",
                  fontFamily: "var(--font-sora)",
                  boxShadow: "0 4px 16px rgba(255,117,24,0.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#CC5500";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FF7518";
                }}
              >
                Free Inspection
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-sm"
              style={{ color: "#FFFDF8" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(20,17,24,0.4)" }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="absolute top-16 left-0 right-0 p-6 flex flex-col gap-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{ backgroundColor: "#FFFDF8" }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-xl font-medium py-2 border-b cursor-pointer"
                  style={{
                    color: "#141118",
                    borderColor: "rgba(20,17,24,0.1)",
                    fontFamily: "var(--font-sora)",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:5203701039"
                className="flex items-center gap-2 text-lg font-semibold mt-2"
                style={{ color: "#FF7518", fontFamily: "var(--font-sora)" }}
              >
                <Phone size={18} />
                (520) 370-1039
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full text-center py-3 font-semibold rounded-sm mt-2 cursor-pointer"
                style={{ backgroundColor: "#FF7518", color: "#FFFDF8", fontFamily: "var(--font-sora)" }}
              >
                Get Free Inspection
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
