"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does a roof coating last in Tucson's heat?",
    a: "Our elastomeric coatings typically last 10–15 years in Arizona's desert climate. We recommend re-coating every 3–5 years for optimal protection against UV degradation and monsoon water intrusion. The Tucson Rubberized Coatings #10000 topcoat is formulated specifically for extreme desert conditions.",
  },
  {
    q: "Is restoration really cheaper than replacement?",
    a: "Yes — significantly. A full tear-off and replacement typically runs $8,000–$20,000+ depending on roof size and material. Restoration with our hand-applied poly-membrane process typically costs 30–60% less, while adding 10+ years to the roof's life. Jeremiah will give you an honest comparison during his inspection.",
  },
  {
    q: "Do you work on commercial roofs as well as residential?",
    a: "Yes. We serve both residential homeowners and commercial property managers across the Tucson metro area — from single-family homes to retail and light industrial buildings. All under the same ownership and same in-house crew.",
  },
  {
    q: "What happens if it rains right after my coating is applied?",
    a: "We plan every job around the weather forecast and Arizona's climate patterns. Our coatings require a dry cure window that we always account for in scheduling. We never rush a job — if monsoon weather is approaching, we reschedule rather than risk the work quality.",
  },
  {
    q: "Is Jeremiah really on every job?",
    a: "Yes. That's not marketing copy — it's our operating model. Jeremiah personally supervises every single project. If you're getting a quote, you're talking to the person who will be on your roof. This is how we've maintained 100% 5-star reviews and zero ROC complaints in 18 years.",
  },
  {
    q: "Are you licensed, bonded, and insured?",
    a: "Yes. We're licensed with the Arizona Registrar of Contractors under ROC #229958 / #347187 (CR-42 classification), bonded, and fully insured. Our BBB A+ accreditation and 18-year track record with zero AZ ROC complaints reflects the standard we hold ourselves to on every job.",
  },
];

function FAQItem({ item, delay }: { item: typeof faqs[0]; delay: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="border-b"
      style={{ borderColor: "rgba(20,17,24,0.12)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 gap-4 text-left cursor-pointer"
      >
        <span
          className="text-base font-semibold"
          style={{ color: "#141118", fontFamily: "var(--font-sora)" }}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0"
          style={{ color: "#FF7518" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-5 text-sm leading-relaxed"
              style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)", lineHeight: 1.7 }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="py-24 lg:py-32 min-h-screen flex flex-col justify-center"
      style={{ backgroundColor: "#FFF8E8" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.15em" }}
          >
            Common Questions
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 700,
              color: "#141118",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Questions We Hear All the Time
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} item={faq} delay={i * 0.06} />
          ))}
        </div>

        {/* Footer nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-10 text-center text-sm"
          style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)" }}
        >
          Don&apos;t see your question?{" "}
          <a
            href="tel:5203701039"
            className="font-semibold underline"
            style={{ color: "#FF7518" }}
          >
            Call Jeremiah directly.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
