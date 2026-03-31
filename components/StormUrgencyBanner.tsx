"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StormUrgencyBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#FFF3DC",
        borderTop: "1px solid rgba(255,117,24,0.25)",
        borderBottom: "1px solid rgba(255,117,24,0.25)",
      }}
      className="relative overflow-hidden"
    >
      {/* Subtle noise texture layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,117,24,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-10">
          {/* Text block */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-bold mb-2 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(22px, 3vw, 34px)",
                color: "#141118",
                letterSpacing: "-0.01em",
              }}
            >
              ⛈ Storm Damage? Don&apos;t Wait.
            </h2>
            <p
              className="text-sm leading-relaxed max-w-xl"
              style={{
                color: "rgba(20,17,24,0.65)",
                fontFamily: "var(--font-sora)",
                lineHeight: 1.7,
              }}
            >
              Every hour a flat roof leaks, water works deeper into your home&apos;s structure.
              Mold begins within 24–48 hours. The longer you wait, the more it costs.
            </p>
          </motion.div>

          {/* CTA block */}
          <motion.div
            className="flex flex-col gap-3 shrink-0"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="tel:5203701039"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm font-semibold text-sm whitespace-nowrap transition-all duration-200"
              style={{
                backgroundColor: "#FF7518",
                color: "#FFFDF8",
                fontFamily: "var(--font-sora)",
                boxShadow: "0 4px 16px rgba(20,17,24,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#CC5500";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FF7518";
              }}
            >
              Call Jeremiah Now — (520) 370-1039
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="text-sm text-center cursor-pointer"
              style={{
                color: "rgba(20,17,24,0.55)",
                fontFamily: "var(--font-sora)",
                background: "none",
                border: "none",
                padding: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#141118";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(20,17,24,0.55)";
              }}
            >
              Or schedule a same-day free inspection →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
