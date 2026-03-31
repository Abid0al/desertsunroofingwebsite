"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";

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

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const numVariants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.06 + 0.1,
      type: "spring" as const,
      stiffness: 280,
      damping: 18,
    },
  }),
};

type StepCardProps = {
  step: { num: string; label: string };
  index: number;
  inView: boolean;
  isSkipped?: boolean;
};

function StepCard({ step, index, inView, isSkipped = false }: StepCardProps) {
  const bgDefault = isSkipped ? "rgba(255,117,24,0.06)" : "#FFFBF2";
  const bgHover = isSkipped ? "rgba(255,117,24,0.12)" : "#FFF3DC";
  const labelColor = isSkipped ? "#141118" : "#8A7A8E";
  const borderColor = isSkipped
    ? "rgba(255,117,24,0.15)"
    : "rgba(20,17,24,0.08)";

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className="p-5 flex flex-col gap-2 cursor-default"
      style={{
        backgroundColor: bgDefault,
        borderRight: `1px solid ${borderColor}`,
        borderBottom: `1px solid ${borderColor}`,
        transition: "background-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = bgHover;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = bgDefault;
      }}
    >
      <motion.span
        custom={index}
        variants={numVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-3xl font-bold leading-none"
        style={{ fontFamily: "var(--font-cormorant)", color: "#FF7518", display: "block" }}
      >
        {step.num}
      </motion.span>

      <span
        className="text-xs font-medium leading-snug"
        style={{ color: labelColor, fontFamily: "var(--font-sora)" }}
      >
        {step.label}
      </span>

      {isSkipped && (
        <motion.span
          initial={{ opacity: 0, x: -6 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.06 + 0.25, duration: 0.35, ease: "easeOut" }}
          className="text-xs font-semibold self-start px-1.5 py-0.5 rounded-sm"
          style={{
            backgroundColor: "rgba(255,117,24,0.18)",
            border: "1px solid rgba(255,117,24,0.35)",
            color: "#FF7518",
            fontFamily: "var(--font-sora)",
            fontSize: "10px",
            letterSpacing: "0.04em",
          }}
        >
          Often skipped
        </motion.span>
      )}
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });
  const progressScaleX = useSpring(scrollYProgress, { stiffness: 70, damping: 22 });

  return (
    <section
      id="process"
      ref={ref}
      className="py-24 lg:py-32 overflow-hidden min-h-screen flex flex-col justify-center"
      style={{ backgroundColor: "#FFFDF8" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
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
              color: "#141118",
              letterSpacing: "-0.02em",
            }}
          >
            Our 13-Step Roof Coating Process
          </h2>
          <p
            className="text-base max-w-lg"
            style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)", lineHeight: 1.7 }}
          >
            Not every roofer does it this way. Most skip steps 3–7.
          </p>
        </motion.div>

        {/* Scroll-driven progress bar */}
        <div
          className="relative mb-8 overflow-hidden rounded-full"
          style={{ height: "2px", backgroundColor: "rgba(20,17,24,0.07)" }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-full origin-left rounded-full"
            style={{ backgroundColor: "#FF7518", scaleX: progressScaleX }}
          />
        </div>

        {/* Steps 01–02 */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px"
          style={{ border: "1px solid rgba(20,17,24,0.1)" }}
        >
          {steps.slice(0, 2).map((step, i) => (
            <StepCard key={step.num} step={step} index={i} inView={inView} />
          ))}
        </div>

        {/* Steps 03–07 — "most roofers skip" group */}
        <div
          className="relative mt-0"
          style={{ border: "1px solid rgba(255,117,24,0.35)", borderTop: "none" }}
        >
          {/* Banner */}
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{
              backgroundColor: "rgba(255,117,24,0.12)",
              borderBottom: "1px solid rgba(255,117,24,0.25)",
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.18, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.12em" }}
            >
              ⚠ Most roofers skip these 5 steps
            </motion.span>

            {/* Animated pulse dot */}
            <motion.span
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: "#FF7518" }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px">
            {steps.slice(2, 7).map((step, i) => (
              <StepCard
                key={step.num}
                step={step}
                index={i + 2}
                inView={inView}
                isSkipped
              />
            ))}
          </div>
        </div>

        {/* Steps 08–13 + final card */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px"
          style={{ border: "1px solid rgba(20,17,24,0.1)", borderTop: "none" }}
        >
          {steps.slice(7).map((step, i) => (
            <StepCard key={step.num} step={step} index={i + 7} inView={inView} />
          ))}

          {/* Final CTA card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 13 * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="p-5 flex flex-col gap-2 justify-center"
            style={{
              backgroundColor: "#FF7518",
              borderRight: "1px solid rgba(255,117,24,0.1)",
              borderBottom: "1px solid rgba(255,117,24,0.1)",
              cursor: "default",
            }}
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,253,248,0.7)", fontFamily: "var(--font-sora)", letterSpacing: "0.1em" }}
            >
              Every Job
            </span>
            <span
              className="font-bold leading-snug"
              style={{ color: "#FFFDF8", fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
            >
              All 13 steps. No exceptions.
            </span>
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.5, ease: "easeOut" }}
          className="mt-6 text-xs text-center"
          style={{ color: "rgba(20,17,24,0.35)", fontFamily: "var(--font-sora)" }}
        >
          Using Tucson Rubberized Coatings #7000 &amp; #10000 — manufactured locally for Arizona&apos;s desert climate
        </motion.p>
      </div>
    </section>
  );
}
