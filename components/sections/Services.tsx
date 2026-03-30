"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Droplets, Zap, RefreshCw, Wrench, Sun, AlertTriangle } from "lucide-react";

const services = [
  {
    num: "00",
    icon: AlertTriangle,
    problem: "Damage from last night's storm?",
    service: "Emergency Roof Response",
    desc: "Same-day assessment for storm, monsoon, or wind damage. Jeremiah responds 7 days a week — we stop the damage before it spreads.",
    urgent: true,
  },
  {
    num: "01",
    icon: Droplets,
    problem: "Roof leaking after monsoon?",
    service: "Leak Detection & Waterproofing",
    desc: "Infrared testing and leak mapping finds moisture others miss. Complete waterproofing that lasts.",
  },
  {
    num: "02",
    icon: Sun,
    problem: "Fading, cracking, or rising energy bills?",
    service: "Premium Roof Coating",
    desc: "Our 13-step elastomeric coating process using locally made Tucson Rubberized Coatings — hand-applied, never sprayed.",
  },
  {
    num: "03",
    icon: RefreshCw,
    problem: "Thinking you need a full replacement?",
    service: "Roof Restoration Systems",
    desc: "Hand-applied poly-membrane restoration saves homeowners thousands compared to a full tear-off.",
    financing: true,
  },
  {
    num: "04",
    icon: Wrench,
    problem: "Damage from wind, debris, or age?",
    service: "Roof Maintenance & Repair",
    desc: "Shingle, tile, flashing, and structural repair with fast turnaround. No surprises, no pressure.",
  },
  {
    num: "05",
    icon: Zap,
    problem: "Skylight leaking or showing its age?",
    service: "Skylight Repair & Replacement",
    desc: "Seal, frame, and flashing repair — or a full energy-efficient triple-pane replacement.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#FFF8E8" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.15em" }}
          >
            What We Fix
          </p>
          <h2
            className="leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              color: "#141118",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            What Problem Are You <br />
            <em style={{ color: "#FF7518" }}>Dealing With?</em>
          </h2>
          <p
            className="mt-4 text-base max-w-lg"
            style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)", lineHeight: 1.7 }}
          >
            Every Tucson roof has a story. Here&apos;s how we solve the most common ones.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] } }}
              className="group relative p-7 rounded-sm flex flex-col gap-4 cursor-default"
              style={{
                backgroundColor: "#FFFBF2",
                boxShadow: "0 2px 8px rgba(20,17,24,0.08), 0 8px 24px rgba(255,117,24,0.06)",
                transition: "box-shadow 0.25s ease",
                borderLeft: (svc as typeof svc & { urgent?: boolean }).urgent
                  ? "3px solid #DC2626"
                  : undefined,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 16px rgba(20,17,24,0.12), 0 16px 40px rgba(255,117,24,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 8px rgba(20,17,24,0.08), 0 8px 24px rgba(255,117,24,0.06)";
              }}
            >
              {/* Urgent badge */}
              {(svc as typeof svc & { urgent?: boolean }).urgent && (
                <span
                  className="absolute top-4 right-5 text-xs font-semibold px-2 py-0.5 rounded-sm"
                  style={{
                    backgroundColor: "rgba(220,38,38,0.1)",
                    border: "1px solid rgba(220,38,38,0.3)",
                    color: "#DC2626",
                    fontFamily: "var(--font-sora)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Same-Day Response
                </span>
              )}

              {/* Number accent (hide for urgent card) */}
              {!(svc as typeof svc & { urgent?: boolean }).urgent && (
                <span
                  className="absolute top-5 right-6 text-5xl font-bold leading-none select-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "rgba(255,117,24,0.08)",
                  }}
                >
                  {svc.num}
                </span>
              )}

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center"
                style={{
                  backgroundColor: (svc as typeof svc & { urgent?: boolean }).urgent
                    ? "rgba(220,38,38,0.1)"
                    : "rgba(255,117,24,0.1)",
                }}
              >
                <svc.icon
                  size={20}
                  style={{
                    color: (svc as typeof svc & { urgent?: boolean }).urgent ? "#DC2626" : "#FF7518",
                  }}
                />
              </div>

              {/* Problem question */}
              <p
                className="text-sm font-semibold"
                style={{
                  color: (svc as typeof svc & { urgent?: boolean }).urgent ? "#DC2626" : "#FF7518",
                  fontFamily: "var(--font-sora)",
                }}
              >
                {svc.problem}
              </p>

              {/* Service name */}
              <h3
                className="text-xl font-bold leading-snug"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#141118",
                  fontSize: "1.3rem",
                }}
              >
                {svc.service}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)", lineHeight: 1.65 }}
              >
                {svc.desc}
              </p>

              {/* Financing badge */}
              {(svc as typeof svc & { financing?: boolean }).financing && (
                <span
                  className="self-start text-xs font-semibold px-2.5 py-1 rounded-sm"
                  style={{
                    backgroundColor: "rgba(255,117,24,0.12)",
                    border: "1px solid rgba(255,117,24,0.3)",
                    color: "#FF7518",
                    fontFamily: "var(--font-sora)",
                    fontSize: "11px",
                  }}
                >
                  Financing available
                </span>
              )}
            </motion.div>
          ))}

          {/* CTA card — the 6th slot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 5 * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-7 rounded-sm flex flex-col justify-between gap-6"
            style={{
              backgroundColor: "#FF7518",
              boxShadow: "0 8px 32px rgba(255,117,24,0.30)",
            }}
          >
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "rgba(255,253,248,0.7)", fontFamily: "var(--font-sora)", letterSpacing: "0.12em" }}
              >
                Not Sure?
              </p>
              <h3
                className="text-2xl font-bold leading-snug"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#FFFDF8",
                  fontSize: "1.7rem",
                }}
              >
                Get a free inspection. Jeremiah will tell you exactly what your roof needs.
              </h3>
            </div>
            <a
              href="tel:5203701039"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-sm self-start transition-all duration-200"
              style={{
                backgroundColor: "#141118",
                color: "#FFFDF8",
                fontFamily: "var(--font-sora)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1E1929";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#141118";
              }}
            >
              Call (520) 370-1039
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
