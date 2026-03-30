"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", label: "3200 PSI Power Wash" },
  { num: "02", label: "Full Roof Inspection" },
  { num: "03", label: "Crack Sealing" },
  { num: "04", label: "Flashing Repairs" },
  { num: "05", label: "Primer Application" },
  { num: "06", label: "Rubberized Compound" },
  { num: "07", label: "Edge Detailing" },
  { num: "08", label: "Membrane Reinforcement" },
  { num: "09", label: "Surface Treatment" },
  { num: "10", label: "First Topcoat (#7000)" },
  { num: "11", label: "Quality Inspection" },
  { num: "12", label: "Final Topcoat (#10000)" },
  { num: "13", label: "Site Cleanup & Sign-off" },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#1A1628" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.15em" }}
          >
            Our Process
          </p>
          <h2
            className="leading-tight mb-4"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 700,
              color: "#FFFDF8",
              letterSpacing: "-0.02em",
            }}
          >
            Our 13-Step Roof Coating Process
          </h2>
          <p
            className="text-base max-w-lg"
            style={{ color: "rgba(255,248,232,0.55)", fontFamily: "var(--font-sora)", lineHeight: 1.7 }}
          >
            Not every roofer does it this way. Most skip steps 3–7.
          </p>
        </motion.div>

        {/* Steps grid — steps 01–02 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px"
          style={{ border: "1px solid rgba(255,117,24,0.15)", marginBottom: "0" }}>
          {steps.slice(0, 2).map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 flex flex-col gap-2 group transition-colors duration-200"
              style={{
                backgroundColor: "#141118",
                borderRight: "1px solid rgba(255,117,24,0.1)",
                borderBottom: "1px solid rgba(255,117,24,0.1)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "#1E1929"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "#141118"; }}
            >
              <span className="text-3xl font-bold leading-none"
                style={{ fontFamily: "var(--font-cormorant)", color: "#FF7518" }}>{step.num}</span>
              <span className="text-xs font-medium leading-snug"
                style={{ color: "rgba(255,248,232,0.7)", fontFamily: "var(--font-sora)" }}>{step.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Steps 03–07 — highlighted group */}
        <div className="relative mt-0" style={{ border: "1px solid rgba(255,117,24,0.35)", borderTop: "none" }}>
          {/* "Most roofers skip these" badge */}
          <div className="flex items-center gap-2 px-4 py-2"
            style={{ backgroundColor: "rgba(255,117,24,0.12)", borderBottom: "1px solid rgba(255,117,24,0.25)" }}>
            <span className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.12em" }}>
              ⚠ Most roofers skip these 5 steps
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px">
            {steps.slice(2, 7).map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: (i + 2) * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 flex flex-col gap-2 group transition-colors duration-200"
                style={{
                  backgroundColor: "rgba(255,117,24,0.06)",
                  borderRight: "1px solid rgba(255,117,24,0.15)",
                  borderBottom: "1px solid rgba(255,117,24,0.15)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255,117,24,0.12)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255,117,24,0.06)"; }}
              >
                <span className="text-3xl font-bold leading-none"
                  style={{ fontFamily: "var(--font-cormorant)", color: "#FF7518" }}>{step.num}</span>
                <span className="text-xs font-medium leading-snug"
                  style={{ color: "rgba(255,248,232,0.85)", fontFamily: "var(--font-sora)" }}>{step.label}</span>
                <span className="text-xs font-semibold self-start px-1.5 py-0.5 rounded-sm"
                  style={{
                    backgroundColor: "rgba(255,117,24,0.18)",
                    border: "1px solid rgba(255,117,24,0.35)",
                    color: "#FF7518",
                    fontFamily: "var(--font-sora)",
                    fontSize: "10px",
                    letterSpacing: "0.04em",
                  }}>
                  Often skipped
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps 08–13 + final card */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px"
          style={{ border: "1px solid rgba(255,117,24,0.15)", borderTop: "none" }}>
          {steps.slice(7).map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (i + 7) * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 flex flex-col gap-2 group transition-colors duration-200"
              style={{
                backgroundColor: "#141118",
                borderRight: "1px solid rgba(255,117,24,0.1)",
                borderBottom: "1px solid rgba(255,117,24,0.1)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "#1E1929"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "#141118"; }}
            >
              <span className="text-3xl font-bold leading-none"
                style={{ fontFamily: "var(--font-cormorant)", color: "#FF7518" }}>{step.num}</span>
              <span className="text-xs font-medium leading-snug"
                style={{ color: "rgba(255,248,232,0.7)", fontFamily: "var(--font-sora)" }}>{step.label}</span>
            </motion.div>
          ))}
          {/* Final "included" card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 13 * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 flex flex-col gap-2 justify-center"
            style={{
              backgroundColor: "#FF7518",
              borderRight: "1px solid rgba(255,117,24,0.1)",
              borderBottom: "1px solid rgba(255,117,24,0.1)",
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,253,248,0.7)", fontFamily: "var(--font-sora)", letterSpacing: "0.1em" }}>
              Every Job
            </span>
            <span className="text-sm font-bold leading-snug"
              style={{ color: "#FFFDF8", fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}>
              All 13 steps. No exceptions.
            </span>
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 text-xs text-center"
          style={{ color: "rgba(255,248,232,0.35)", fontFamily: "var(--font-sora)" }}
        >
          Using Tucson Rubberized Coatings #7000 &amp; #10000 — manufactured locally for Arizona&apos;s desert climate
        </motion.p>
      </div>
    </section>
  );
}
