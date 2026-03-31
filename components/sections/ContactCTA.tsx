"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, Clock, MapPin, CreditCard, ArrowRight } from "lucide-react";

const infoCards = [
  {
    icon: Phone,
    label: "Call or Text",
    value: "520-370-1039",
    href: "tel:5203701039",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jeremiah@desertsunroofing.com",
    href: "mailto:jeremiah@desertsunroofing.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday – Sunday, 7 AM – 6 PM",
    href: null,
  },
  {
    icon: MapPin,
    label: "Office",
    value: "5210 E Pima St Suite 200B\nTucson, AZ 85712",
    href: "https://maps.google.com/?q=5210+E+Pima+St+Suite+200B+Tucson+AZ+85712",
  },
  {
    icon: CreditCard,
    label: "Financing Available",
    value: "Flexible payment options available via PayPal Credit. Ask Jeremiah about financing during your free inspection.",
    href: null,
  },
];

export default function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `tel:5203701039`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="grain-overlay relative py-24 lg:py-32 overflow-hidden min-h-screen flex flex-col justify-center border-t"
      style={{ backgroundColor: "#FFF8E8", borderColor: "rgba(20,17,24,0.08)" }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,117,24,0.08) 0%, transparent 65%)
          `,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          {/* Eyebrow with lines */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12" style={{ backgroundColor: "#FF7518" }} />
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.2em" }}
            >
              Get Started
            </p>
            <div className="h-px w-12" style={{ backgroundColor: "#FF7518" }} />
          </div>

          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              color: "#141118",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Get your{" "}
            <em style={{ color: "#FF7518" }}>free inspection</em>
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)", lineHeight: 1.7 }}
          >
            No obligation. No pressure. Jeremiah will personally assess
            your roof and give you an honest evaluation.
          </p>
          <p
            className="mt-4 text-sm"
            style={{ color: "rgba(20,17,24,0.45)", fontFamily: "var(--font-sora)" }}
          >
            💳 Financing available — ask Jeremiah about flexible payment options during your inspection.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* Left — form card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-sm"
            style={{
              backgroundColor: "#FFFBF2",
              border: "1px solid rgba(20,17,24,0.1)",
              boxShadow: "0 8px 40px rgba(20,17,24,0.08)",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium"
                  style={{ color: "rgba(20,17,24,0.75)", fontFamily: "var(--font-sora)" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-sm text-sm outline-none transition-all duration-200"
                  style={{
                    backgroundColor: "rgba(20,17,24,0.03)",
                    border: "1px solid rgba(20,17,24,0.12)",
                    color: "#141118",
                    fontFamily: "var(--font-sora)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,117,24,0.4)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(20,17,24,0.12)")}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium"
                  style={{ color: "rgba(20,17,24,0.75)", fontFamily: "var(--font-sora)" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(520) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-sm text-sm outline-none transition-all duration-200"
                  style={{
                    backgroundColor: "rgba(20,17,24,0.03)",
                    border: "1px solid rgba(20,17,24,0.12)",
                    color: "#141118",
                    fontFamily: "var(--font-sora)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,117,24,0.4)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(20,17,24,0.12)")}
                />
              </div>

              {/* Issue */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium"
                  style={{ color: "rgba(20,17,24,0.75)", fontFamily: "var(--font-sora)" }}
                >
                  Describe your roof issue{" "}
                  <span style={{ color: "rgba(20,17,24,0.4)", fontWeight: 400 }}>(optional)</span>
                </label>
                <textarea
                  placeholder="e.g. flat roof leak after monsoon, need coating, looking for an estimate..."
                  rows={4}
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="w-full px-4 py-3 rounded-sm text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    backgroundColor: "rgba(20,17,24,0.03)",
                    border: "1px solid rgba(20,17,24,0.12)",
                    color: "#141118",
                    fontFamily: "var(--font-sora)",
                    lineHeight: 1.6,
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,117,24,0.4)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(20,17,24,0.12)")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-sm font-semibold text-base transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor: "#FF7518",
                  color: "#141118",
                  fontFamily: "var(--font-sora)",
                  boxShadow: "0 6px 28px rgba(255,117,24,0.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#CC5500";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(255,117,24,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FF7518";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 28px rgba(255,117,24,0.35)";
                }}
              >
                Get My Free Inspection
                <ArrowRight size={17} />
              </button>

              <p
                className="text-xs text-center"
                style={{ color: "rgba(20,17,24,0.35)", fontFamily: "var(--font-sora)" }}
              >
                No spam. No obligation. Jeremiah will respond personally.
              </p>
            </form>
          </motion.div>

          {/* Right — info cards */}
          <div className="flex flex-col gap-3">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 p-5 rounded-sm"
                style={{
                  backgroundColor: "#FFFBF2",
                  border: "1px solid rgba(20,17,24,0.08)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    backgroundColor: "rgba(255,117,24,0.1)",
                    border: "1px solid rgba(255,117,24,0.18)",
                  }}
                >
                  <card.icon size={15} style={{ color: "#FF7518" }} />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-xs font-medium mb-1"
                    style={{ color: "rgba(20,17,24,0.4)", fontFamily: "var(--font-sora)" }}
                  >
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium transition-colors duration-150 break-all"
                      style={{ color: "#141118", fontFamily: "var(--font-sora)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#FF7518")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#141118")}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p
                      className="text-sm font-medium"
                      style={{
                        color: "#141118",
                        fontFamily: "var(--font-sora)",
                        whiteSpace: "pre-line",
                        lineHeight: 1.6,
                      }}
                    >
                      {card.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
