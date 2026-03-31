"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Jeremiah showed up himself — I didn't expect the owner to be on my roof. He walked me through every step. The coating looks incredible and my house is noticeably cooler this summer.",
    name: "Michael R.",
    area: "Oro Valley",
    date: "August 2024",
  },
  {
    text: "We thought we needed a complete tear-off. Desert Sun restored our flat roof for a fraction of the cost. No nonsense, no upsell, no surprises. Exactly what they promised.",
    name: "Linda S.",
    area: "Catalina Foothills",
    date: "May 2024",
  },
  {
    text: "They found a leak with infrared testing that two other roofers had completely missed. Fixed it in one day. This is the only roofer we will ever call again.",
    name: "Dave & Kathy M.",
    area: "Marana",
    date: "October 2024",
  },
  {
    text: "Family business, BBB A+, owner on-site every day. Everything they say is exactly what you get. 18 years in Tucson and not a single negative review — that tells you everything.",
    name: "Patricia G.",
    area: "Sahuarita",
    date: "March 2024",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill="#FF7518" style={{ color: "#FF7518" }} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="reviews"
      ref={ref}
      className="py-24 lg:py-32 border-t min-h-screen"
      style={{ backgroundColor: "#FFF8E8", borderColor: "rgba(20,17,24,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.15em" }}
          >
            Homeowner Reviews
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 700,
                color: "#141118",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              What Tucson Homeowners
              <br />
              <em style={{ color: "#FF7518" }}>Are Saying</em>
            </h2>
            <div className="flex flex-col gap-2">
              <p
                className="text-sm"
                style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)" }}
              >
                100% 5-star reviews. No negative reviews. <strong>Ever.</strong>
              </p>
              <a
                href="https://g.page/r/CbDgfOORbB_WEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-sm self-start transition-all duration-200"
                style={{
                  backgroundColor: "#141118",
                  color: "#FFFDF8",
                  fontFamily: "var(--font-sora)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FF7518";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#141118";
                }}
              >
                <Star size={14} fill="#FFFDF8" style={{ color: "#FFFDF8" }} />
                Read 100+ Reviews on Google
              </a>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] } }}
              className="p-7 rounded-sm flex flex-col gap-4"
              style={{
                backgroundColor: "#FFFBF2",
                boxShadow: "0 2px 8px rgba(20,17,24,0.08), 0 8px 24px rgba(255,117,24,0.05)",
              }}
            >
              <StarRating />
              <p
                className="text-base leading-relaxed flex-1"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#1E1929",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "rgba(20,17,24,0.1)" }}>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#141118", fontFamily: "var(--font-sora)" }}
                  >
                    {r.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)" }}
                  >
                    {r.area}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)", fontSize: "11px" }}
                  >
                    ★★★★★&nbsp;&nbsp;Verified Google Review
                  </p>
                </div>
                <span
                  className="text-xs"
                  style={{ color: "rgba(138,122,142,0.6)", fontFamily: "var(--font-sora)" }}
                >
                  {r.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
