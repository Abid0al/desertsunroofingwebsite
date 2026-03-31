"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  "Premium Roof Coating",
  "Roof Restoration Systems",
  "Roof Maintenance & Repair",
  "Leak Detection & Waterproofing",
  "Skylight Repair & Replacement",
];

const contactItems = [
  { icon: Phone, label: "(520) 370-1039", href: "tel:5203701039" },
  { icon: Mail, label: "jeremiah@desertsunroofing.com", href: "mailto:jeremiah@desertsunroofing.com" },
  { icon: MapPin, label: "5210 E Pima St Suite 200B\nTucson, AZ 85712", href: null },
  { icon: Clock, label: "Mon–Sun · 7AM–6PM", href: null },
];

const colVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      ref={ref}
      style={{ backgroundColor: "#141118", borderTop: "1px solid rgba(255,117,24,0.15)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Col 1 — Brand */}
          <motion.div
            custom={0}
            variants={colVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-5"
          >
            <div>
              <img
                src="/logo-horizontal.svg"
                alt="Desert Sun Roofing"
                style={{ height: "38px", width: "auto" }}
              />
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,248,232,0.5)", fontFamily: "var(--font-sora)", lineHeight: 1.7 }}
            >
              Family-owned flat roof specialists serving Tucson since 2007.
              Owner Jeremiah Nidey on every job.
            </p>
            <div className="flex gap-3">
              <a
                href="https://g.page/r/CbDgfOORbB_WEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Desert Sun Roofing on Google Maps"
                className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold transition-all duration-150"
                style={{
                  backgroundColor: "rgba(255,117,24,0.1)",
                  border: "1px solid rgba(255,117,24,0.2)",
                  color: "rgba(255,248,232,0.5)",
                  fontFamily: "var(--font-sora)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,117,24,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#FF7518";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,117,24,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,248,232,0.5)";
                }}
              >
                G{/* TODO: replace with direct GBP URL from client */}
              </a>
            </div>
          </motion.div>

          {/* Col 2 — Services */}
          <motion.div
            custom={1}
            variants={colVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.12em" }}
            >
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {services.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-sm"
                  style={{ color: "rgba(255,248,232,0.55)", fontFamily: "var(--font-sora)" }}
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Contact */}
          <motion.div
            custom={2}
            variants={colVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.12em" }}
            >
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              {contactItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-2.5"
                >
                  <item.icon size={13} style={{ color: "#FF7518", flexShrink: 0, marginTop: "3px" }} />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm transition-colors duration-150 break-all"
                      style={{ color: "rgba(255,248,232,0.55)", fontFamily: "var(--font-sora)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#FF7518")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,248,232,0.55)")}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span
                      className="text-sm"
                      style={{ color: "rgba(255,248,232,0.55)", fontFamily: "var(--font-sora)", whiteSpace: "pre-line" }}
                    >
                      {item.label}
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,248,232,0.06)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,248,232,0.3)", fontFamily: "var(--font-sora)" }}
          >
            © 2025 Desert Sun Roofing & Reflective Coatings LLC · ROC #229958 / #347187 · All Rights Reserved
          </p>
          <p
            className="text-xs italic"
            style={{ color: "rgba(255,248,232,0.25)", fontFamily: "var(--font-sora)", maxWidth: "420px" }}
          >
            Note: We are not affiliated with any Phoenix-area company using a similar name.
            Desert Sun Roofing is a Tucson-only company.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
