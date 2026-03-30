"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Ban, Hand, MapPin } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Owner Shows Up",
    desc: "Jeremiah personally supervises every single job. You are not handed off to a crew manager you have never met.",
  },
  {
    icon: Ban,
    title: "No Subcontractors. Ever.",
    desc: "The team you hire is the team that shows up. Our in-house professionals handle every detail, start to finish.",
  },
  {
    icon: Hand,
    title: "Hand-Applied — Never Sprayed",
    desc: "Coatings are applied by hand using a 13-step process. There are no shortcuts, no spray guns, no cutting corners.",
  },
  {
    icon: MapPin,
    title: "Locally Made Materials",
    desc: "We use Tucson Rubberized Coatings formulated specifically for Arizona's desert climate — not generic national-brand product.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why"
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#141118" }}
    >
      {/* Background image */}
      <img
        src="/images/trucks3.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: "cover", objectPosition: "center 40%" }}
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(20,17,24,0.92) 0%, rgba(20,17,24,0.80) 60%, rgba(20,17,24,0.65) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Left — all content */}
        <div className="flex-1 py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.15em" }}
            >
              Why Desert Sun
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                color: "#FFFDF8",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Why Tucson Homeowners
              <br />
              <em style={{ color: "#FF7518" }}>Choose Us</em>
            </h2>
          </motion.div>

          {/* Featured quote — anchored below heading */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <blockquote
              className="max-w-2xl"
              style={{
                borderLeft: "3px solid #FF7518",
                paddingLeft: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(20px, 2.8vw, 34px)",
                  fontStyle: "italic",
                  color: "rgba(255,248,232,0.85)",
                  lineHeight: 1.4,
                }}
              >
                &ldquo;We have never received a negative review or had an AZ ROC complaint filed —
                a claim very few roofing companies in Arizona can make.&rdquo;
              </p>
              <cite
                className="not-italic block mt-3 text-sm"
                style={{ color: "rgba(255,248,232,0.45)", fontFamily: "var(--font-sora)" }}
              >
                — Jeremiah Nidey, Owner &amp; Founder
              </cite>
            </blockquote>
          </motion.div>

          {/* 2×2 grid */}
          <div className="grid sm:grid-cols-2 gap-px" style={{ border: "1px solid rgba(255,117,24,0.15)" }}>
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.09, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group p-7 lg:p-8 flex flex-col gap-4 transition-colors duration-300"
                style={{
                  backgroundColor: "#1E1929",
                  borderRight: i % 2 === 0 ? "1px solid rgba(255,117,24,0.15)" : "none",
                  borderBottom: i < 2 ? "1px solid rgba(255,117,24,0.15)" : "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "#251E35";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "#1E1929";
                }}
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center"
                  style={{ backgroundColor: "rgba(127,0,255,0.12)", border: "1px solid rgba(127,0,255,0.25)" }}
                >
                  <item.icon size={19} style={{ color: "#B380FF" }} />
                </div>
                <div>
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      color: "#FFFDF8",
                      fontSize: "1.35rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,248,232,0.6)", fontFamily: "var(--font-sora)", lineHeight: 1.7 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
