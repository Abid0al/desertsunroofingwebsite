"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const VIDEO_ID = "RsMEo2t4oNY";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="grain-overlay relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#141118" }}
    >
      {/* YouTube video background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=0`}
          allow="autoplay; encrypted-media"
          className="absolute"
          style={{
            /* Oversized so edges are never visible regardless of aspect ratio */
            top: "50%",
            left: "50%",
            width: "177.78vh",   /* 16/9 × 100vh */
            height: "56.25vw",   /* 9/16 × 100vw */
            minWidth: "100%",
            minHeight: "100%",
            transform: "translate(-50%, -50%)",
            border: "none",
          }}
          title="Desert Sun Roofing background video"
        />
      </div>

      {/* Dark overlay — keeps text readable over the video */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "transparent" }}
      />

      {/* Mountain peaks watermark — ties to logo motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/mountain-peaks-bg.svg"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full"
          style={{ opacity: 0.07, height: "55%", objectFit: "cover" }}
        />
      </div>

      {/* Atmospheric glow — amber sunrise from below, purple sky upper-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 100%, rgba(255,117,24,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 45% 45% at 85% 10%, rgba(127,0,255,0.15) 0%, transparent 65%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left content — 3/5 */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Eyebrow */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-sm"
                style={{
                  backgroundColor: "rgba(255,117,24,0.15)",
                  color: "#FF7518",
                  border: "1px solid rgba(255,117,24,0.3)",
                  fontFamily: "var(--font-sora)",
                  letterSpacing: "0.15em",
                }}
              >
                ✦ Tucson&apos;s Flat Roof Specialists — Monsoon Season Ready
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="leading-none"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(52px, 7vw, 92px)",
                fontWeight: 700,
                color: "#FFFDF8",
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
                textShadow: "0 2px 20px rgba(0,0,0,0.7)",
              }}
            >
              No Leaks. No Subcontractors.{" "}
              <span style={{ fontStyle: "italic", color: "#FF7518" }}>
                Jeremiah
              </span>
              <span style={{ display: "block" }}>On Every Job.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg leading-relaxed max-w-xl"
              style={{
                color: "rgba(255,248,232,0.90)",
                fontFamily: "var(--font-sora)",
                lineHeight: 1.7,
                textShadow: "0 1px 12px rgba(0,0,0,0.6)",
              }}
            >
              Most Tucson homeowners have been burned by a crew that sent strangers, cut
              corners, and disappeared. Desert Sun is the exception — same crew, same owner,
              same standard, every time.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base rounded-sm transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor: "#FF7518",
                  color: "#FFFDF8",
                  fontFamily: "var(--font-sora)",
                  boxShadow: "0 6px 28px rgba(255,117,24,0.40)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "#CC5500";
                  el.style.boxShadow = "0 8px 32px rgba(255,117,24,0.50)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "#FF7518";
                  el.style.boxShadow = "0 6px 28px rgba(255,117,24,0.40)";
                }}
              >
                Get Free Roof Inspection
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => scrollTo("#gallery")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-base rounded-sm transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFDF8",
                  border: "1px solid rgba(255,253,248,0.30)",
                  fontFamily: "var(--font-sora)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "#FF7518";
                  el.style.color = "#FF7518";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "rgba(255,253,248,0.30)";
                  el.style.color = "#FFFDF8";
                }}
              >
                See How We Saved One Homeowner $11,000 →
              </button>
            </motion.div>

            {/* Trust micro-line */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {["⭐ 5.0 Google (100+ Reviews)", "BBB A+ Since 2007", "ROC Licensed #229958", "500+ Tucson Roofs Completed"].map((item, i) => (
                <span
                  key={i}
                  className="text-xs font-medium"
                  style={{ color: "rgba(255,248,232,0.70)", fontFamily: "var(--font-sora)", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
                >
                  {i > 0 && (
                    <span style={{ marginRight: "1rem", color: "rgba(255,117,24,0.5)" }}>·</span>
                  )}
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right card — 2/5 (desktop only) */}
          <motion.div
            className="lg:col-span-2 hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="p-8 rounded-sm flex flex-col gap-6"
              style={{
                backgroundColor: "rgba(20,17,24,0.75)",
                border: "1px solid rgba(255,117,24,0.25)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
              }}
            >
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.12em" }}
                >
                  Serving Tucson Since 2007
                </p>
                <p
                  className="text-2xl font-bold leading-tight"
                  style={{ fontFamily: "var(--font-cormorant)", color: "#FFFDF8", fontSize: "1.6rem" }}
                >
                  &ldquo;18 years. 500+ Tucson roofs. Not one unresolved complaint.&rdquo;
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "The crew you meet is the crew that does the work",
                  "13-step hand application — coatings that last 10–15 years",
                  "500+ Tucson roofs. Zero ROC complaints. Ever.",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span style={{ color: "#FF7518", flexShrink: 0, marginTop: "3px" }}>✓</span>
                    <span
                      className="text-sm"
                      style={{ color: "rgba(255,248,232,0.75)", fontFamily: "var(--font-sora)", lineHeight: 1.55 }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:5203701039"
                className="flex items-center gap-3 pt-4 border-t"
                style={{ borderColor: "rgba(255,117,24,0.2)" }}
              >
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#FF7518" }}
                >
                  <Phone size={15} style={{ color: "#FFFDF8" }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "rgba(255,248,232,0.5)", fontFamily: "var(--font-sora)" }}>
                    Call Jeremiah Directly
                  </p>
                  <p className="text-base font-semibold" style={{ color: "#FFFDF8", fontFamily: "var(--font-sora)" }}>
                    (520) 370-1039
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #141118)" }}
      />
    </section>
  );
}
