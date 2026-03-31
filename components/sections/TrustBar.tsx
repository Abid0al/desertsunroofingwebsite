"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Shield, Clock, Award, CheckCircle } from "lucide-react";

const credentials = [
  { icon: Star, label: "100+ Five-Star Reviews", sub: "100% — no exceptions" },
  { icon: Shield, label: "BBB A+", sub: "Accredited Since 2007" },
  { icon: Clock, label: "18 Years", sub: "Serving Tucson Since 2007" },
  { icon: CheckCircle, label: "ROC Licensed", sub: "#229958 / #347187" },
  { icon: Award, label: "Best Roofers", sub: "Tucson 2021–2025" },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "#FFFDF8" }}
      className="py-6 border-t border-b"
      id="trust"
    >
      <style>{`#trust { border-color: rgba(20,17,24,0.1); }`}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 lg:gap-0">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 px-4"
            >
              {/* Divider (not on first) */}
              {i > 0 && (
                <div
                  className="hidden lg:block w-px h-8 mr-4"
                  style={{ backgroundColor: "rgba(255,117,24,0.2)" }}
                />
              )}
              <cred.icon
                size={18}
                style={{ color: "#FF7518", flexShrink: 0 }}
              />
              <div>
                <p
                  className="text-sm font-semibold leading-tight"
                  style={{ color: "#141118", fontFamily: "var(--font-sora)" }}
                >
                  {cred.label}
                </p>
                <p
                  className="text-xs leading-tight mt-0.5"
                  style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)" }}
                >
                  {cred.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
