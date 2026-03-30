import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#C4521A",
          "primary-dk": "#9E3E0E",
          dark: "#1C1A17",
          "dark-2": "#2A2520",
          sand: "#F5EDE0",
          "sand-2": "#FAF7F2",
          brown: "#8B5E3C",
          muted: "#7A6354",
          white: "#FEFCF9",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(28,26,23,0.08), 0 8px 24px rgba(196,82,26,0.06)",
        raised: "0 4px 16px rgba(28,26,23,0.12), 0 16px 40px rgba(196,82,26,0.10)",
        float: "0 8px 32px rgba(196,82,26,0.30)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      letterSpacing: {
        eyebrow: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
