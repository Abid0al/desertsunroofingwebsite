"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Tucson", "Oro Valley", "Catalina Foothills", "Marana",
  "Casas Adobes", "Vail", "Tanque Verde", "Green Valley",
  "Sahuarita", "Corona de Tucson",
];

export default function ServiceAreas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="areas"
      ref={ref}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#FFFDF8" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-80 shrink-0"
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.15em" }}
            >
              Service Areas
            </p>
            <h2
              className="leading-tight mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                color: "#141118",
                letterSpacing: "-0.02em",
              }}
            >
              Serving Greater{" "}
              <em style={{ color: "#FF7518" }}>Tucson</em>
            </h2>
            <p
              className="text-sm mb-6"
              style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)", lineHeight: 1.7 }}
            >
              No travel fees within our service zone. We cover the full Tucson metro area.
            </p>
            <div className="rounded-sm overflow-hidden" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
              <img
                src="/images/maps3.jpg"
                alt="Desert Sun Roofing service area map — Tucson metro"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right chips */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3"
          >
            {areas.map((area, i) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.15 + i * 0.04, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm text-sm font-medium"
                style={{
                  backgroundColor: "rgba(255,117,24,0.08)",
                  border: "1px solid rgba(255,117,24,0.2)",
                  color: "#141118",
                  fontFamily: "var(--font-sora)",
                }}
              >
                <MapPin size={12} style={{ color: "#FF7518" }} />
                {area}
              </motion.span>
            ))}
            {/* Edge-zone line */}
            <p
              className="w-full text-sm mt-1"
              style={{ color: "rgba(20,17,24,0.45)", fontFamily: "var(--font-sora)", fontSize: "13px" }}
            >
              Don&apos;t see your city? Call Jeremiah —{" "}
              <a
                href="tel:5203701039"
                style={{ color: "rgba(255,117,24,0.75)", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FF7518"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,117,24,0.75)"; }}
              >
                (520) 370-1039
              </a>
              {" "}— we may still be able to help.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
