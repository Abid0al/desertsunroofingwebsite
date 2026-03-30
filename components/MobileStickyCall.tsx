"use client";

export default function MobileStickyCall() {
  return (
    <>
      <a
        href="tel:5203701039"
        aria-label="Call Jeremiah at Desert Sun Roofing"
        className="md:hidden fixed bottom-0 left-0 right-0 z-[9999] flex items-center justify-center gap-3 min-h-[56px] px-5 py-2.5 no-underline"
        style={{
          backgroundColor: "#FF7518",
          boxShadow: "0 -4px 20px rgba(255,117,24,0.35)",
        }}
      >
        <span className="flex flex-col leading-tight">
          <strong
            className="font-bold"
            style={{ fontSize: "15px", color: "#141118", fontFamily: "var(--font-sora)" }}
          >
            Call Jeremiah Now
          </strong>
          <span
            style={{ fontSize: "13px", color: "rgba(20,17,24,0.7)", fontFamily: "var(--font-sora)" }}
          >
            (520) 370-1039
          </span>
        </span>
        <span
          className="ml-auto rounded-md px-3.5 py-1.5 font-semibold whitespace-nowrap"
          style={{
            backgroundColor: "rgba(20,17,24,0.18)",
            fontSize: "13px",
            color: "#141118",
            fontFamily: "var(--font-sora)",
          }}
        >
          Tap to Call
        </span>
      </a>
      {/* Spacer so content isn't hidden behind the bar on mobile */}
      <div className="md:hidden h-14" aria-hidden="true" />
    </>
  );
}
