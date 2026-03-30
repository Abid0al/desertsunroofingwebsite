"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  "Premium Roof Coating",
  "Roof Restoration Systems",
  "Roof Maintenance & Repair",
  "Leak Detection & Waterproofing",
  "Skylight Repair & Replacement",
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#FFFDF8", borderTop: "1px solid rgba(20,17,24,0.1)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <div>
              <img
                src="/logo-horizontal.svg"
                alt="Desert Sun Roofing"
                style={{ height: "38px", width: "auto" }}
              />
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)", lineHeight: 1.7 }}
            >
              Family-owned flat roof specialists serving Tucson since 2007.
              Owner Jeremiah Nidey on every job.
            </p>
            {/* Google Business Profile link */}
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
                  color: "rgba(20,17,24,0.5)",
                  fontFamily: "var(--font-sora)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,117,24,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#FF7518";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,117,24,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(20,17,24,0.5)";
                }}
              >
                G{/* TODO: replace with direct GBP URL from client */}
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.12em" }}
            >
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li
                  key={s}
                  className="text-sm"
                  style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)" }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#FF7518", fontFamily: "var(--font-sora)", letterSpacing: "0.12em" }}
            >
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2.5">
                <Phone size={13} style={{ color: "#FF7518", flexShrink: 0 }} />
                <a
                  href="tel:5203701039"
                  className="text-sm transition-colors duration-150"
                  style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF7518")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A7A8E")}
                >
                  (520) 370-1039
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} style={{ color: "#FF7518", flexShrink: 0 }} />
                <a
                  href="mailto:jeremiah@desertsunroofing.com"
                  className="text-sm transition-colors duration-150 break-all"
                  style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF7518")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A7A8E")}
                >
                  jeremiah@desertsunroofing.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={13} style={{ color: "#FF7518", flexShrink: 0, marginTop: "3px" }} />
                <span
                  className="text-sm"
                  style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)" }}
                >
                  5210 E Pima St Suite 200B<br />
                  Tucson, AZ 85712
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={13} style={{ color: "#FF7518", flexShrink: 0 }} />
                <span
                  className="text-sm"
                  style={{ color: "#8A7A8E", fontFamily: "var(--font-sora)" }}
                >
                  Mon–Sun · 7AM–6PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(20,17,24,0.08)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(20,17,24,0.35)", fontFamily: "var(--font-sora)" }}
          >
            © 2025 Desert Sun Roofing & Reflective Coatings LLC · ROC #229958 / #347187 · All Rights Reserved
          </p>
          <p
            className="text-xs italic"
            style={{ color: "rgba(20,17,24,0.30)", fontFamily: "var(--font-sora)", maxWidth: "420px" }}
          >
            Note: We are not affiliated with any Phoenix-area company using a similar name.
            Desert Sun Roofing is a Tucson-only company.
          </p>
        </div>
      </div>
    </footer>
  );
}
