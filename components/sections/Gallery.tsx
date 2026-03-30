"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    type: "Flat Roof Coating",
    area: "Catalina Foothills",
    outcome: "12-year estimated lifespan, energy costs reduced",
    before: "/images/roof-restoration-in-tucson.jpg",
    after: "/images/1-scaled.jpg",
  },
  {
    type: "Leak Detection + Waterproofing",
    area: "Marana",
    outcome: "3 hidden moisture pockets found via infrared testing",
    before: "/images/roof-restoration-image.jpg",
    after: "/images/2-scaled.jpg",
  },
  {
    type: "Roof Restoration",
    area: "Oro Valley",
    outcome: "Saved homeowner $11,000 vs. full replacement",
    before: "/images/roof-restoration-before-after.jpg",
    after: "/images/3-scaled.jpg",
  },
  {
    type: "Skylight Replacement",
    area: "Tucson",
    outcome: "Energy-efficient triple-pane — reduced glare and heat gain",
    before: "/images/skylight-repair-photo.jpg",
    after: "/images/IMG_1419.jpg",
  },
];

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const [showing, setShowing] = useState<"before" | "after">("after");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-sm overflow-hidden"
      style={{
        backgroundColor: "#FFFBF2",
        boxShadow: "0 4px 16px rgba(20,17,24,0.08)",
      }}
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        {/* Before image */}
        <img
          src={project.before}
          alt={`Before — ${project.type} in ${project.area}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: showing === "before" ? 1 : 0 }}
        />
        {/* After image */}
        <img
          src={project.after}
          alt={`After — ${project.type} in ${project.area}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: showing === "after" ? 1 : 0 }}
        />
        {/* Toggle pills */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {(["before", "after"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setShowing(tab)}
              className="text-xs font-semibold px-3 py-1 rounded-sm capitalize transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: showing === tab ? "#FF7518" : "rgba(20,17,24,0.75)",
                color: "#141118",
                fontFamily: "var(--font-sora)",
                backdropFilter: "blur(4px)",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Metadata */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3
            className="text-lg font-bold"
            style={{ fontFamily: "var(--font-cormorant)", color: "#141118", fontSize: "1.2rem" }}
          >
            {project.type}
          </h3>
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-sm shrink-0"
            style={{
              backgroundColor: "rgba(255,117,24,0.12)",
              color: "#FF7518",
              fontFamily: "var(--font-sora)",
              border: "1px solid rgba(255,117,24,0.2)",
            }}
          >
            {project.area}
          </span>
        </div>
        <p
          className="text-sm"
          style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)", lineHeight: 1.55 }}
        >
          {project.outcome}
        </p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#FFF8E8" }}
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
            Our Work
          </p>
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
            Real Tucson Roofs.
            <br />
            <em style={{ color: "#FF7518" }}>Real Results.</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.type} project={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
