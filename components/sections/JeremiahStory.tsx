"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, CheckCircle } from "lucide-react";

const bullets = [
  "Native Tucsonan — knows the desert climate better than anyone",
  "25+ years of hands-on roofing experience",
  "Family business — founded by Jeremiah & Janae Nidey in 2007",
];

export default function JeremiahStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="story"
      ref={ref}
      className="py-24 lg:py-0 overflow-hidden"
      style={{ backgroundColor: "#FFF8E8" }}
    >
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        {/* Left — image panel (3/5) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-3 relative"
          style={{ minHeight: "520px" }}
        >
          <div className="relative h-full" style={{ minHeight: "520px" }}>
            <img
              src="/images/IMG_1096bbccc.png"
              alt="Jeremiah Nidey applying roof coating on a Tucson flat roof at dusk"
              className="w-full h-full object-cover"
              style={{ minHeight: "520px" }}
            />
            {/* Warm treatment */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(127,0,255,0.25) 0%, transparent 60%)",
                mixBlendMode: "multiply",
              }}
            />
            {/* Since 2007 badge */}
            <div
              className="absolute top-8 left-8 px-5 py-3 rounded-sm"
              style={{
                backgroundColor: "#FF7518",
                boxShadow: "0 6px 24px rgba(255,117,24,0.40)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                style={{ color: "rgba(255,253,248,0.7)", fontFamily: "var(--font-sora)", letterSpacing: "0.12em" }}
              >
                Serving Tucson
              </p>
              <p
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-cormorant)", color: "#FFFDF8" }}
              >
                Since 2007
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right — story content (2/5) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2 flex flex-col justify-center px-6 lg:px-12 py-16"
        >
          {/* Eyebrow */}
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.15em" }}
          >
            Meet Your Roofer
          </p>

          {/* Headline */}
          <h2
            className="mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              color: "#141118",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Jeremiah Has Been
            <br />
            <em style={{ color: "#FF7518" }}>On Roofs Since 2001</em>
          </h2>

          {/* Pull quote */}
          <blockquote
            className="mb-8 pl-5"
            style={{
              borderLeft: "3px solid #FF7518",
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(16px, 2vw, 20px)",
              fontStyle: "italic",
              color: "#1E1929",
              lineHeight: 1.55,
            }}
          >
            &ldquo;I started this company because I was tired of seeing homeowners get burned
            by crews that didn&apos;t show up, didn&apos;t care, and didn&apos;t stand behind their work.
            That&apos;s not how we operate.&rdquo;
          </blockquote>

          {/* Bullets */}
          <ul className="flex flex-col gap-3 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  style={{ color: "#FF7518", flexShrink: 0, marginTop: "3px" }}
                />
                <span
                  className="text-sm"
                  style={{ color: "#1E1929", fontFamily: "var(--font-sora)", lineHeight: 1.6 }}
                >
                  {b}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="tel:5203701039"
            className="inline-flex items-center gap-3 self-start px-6 py-3 rounded-sm font-semibold text-sm transition-all duration-200"
            style={{
              backgroundColor: "#141118",
              color: "#FFFDF8",
              fontFamily: "var(--font-sora)",
              boxShadow: "0 4px 16px rgba(20,17,24,0.15)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FF7518";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(255,117,24,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#141118";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(20,17,24,0.15)";
            }}
          >
            <Phone size={15} />
            Talk to Jeremiah — (520) 370-1039
          </a>
        </motion.div>
      </div>
    </section>
  );
}
