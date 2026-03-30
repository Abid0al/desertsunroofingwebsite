"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
  { src: "/images/APOC-logo.jpg", alt: "APOC Coatings — Certified Applicator" },
  { src: "/images/tribuilt-1.png", alt: "Tribuilt — Approved Contractor" },
  { src: "/images/tucson-rubber-logo-1.jpg", alt: "Tucson Rubber & Gasket" },
  { src: "/images/master-applicator.jpg", alt: "Master Applicator Certified" },
];

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-10 border-b"
      style={{
        backgroundColor: "#FFFBF2",
        borderColor: "rgba(20,17,24,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest shrink-0"
            style={{ color: "#7F00FF", fontFamily: "var(--font-sora)", letterSpacing: "0.14em" }}
          >
            Certified By
          </motion.p>
          <div className="w-px h-6 hidden sm:block" style={{ backgroundColor: "rgba(20,17,24,0.15)" }} />
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-8 lg:gap-12">
            {partners.map((p, i) => (
              <motion.img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  height: "36px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "grayscale(30%)",
                  opacity: 0.85,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)";
                  (e.currentTarget as HTMLImageElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(30%)";
                  (e.currentTarget as HTMLImageElement).style.opacity = "0.85";
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
