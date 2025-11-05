import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#F97316",
        accent: "#0EA5E9",
        ink: "#0F172A"
      },
      backgroundImage: {
        "soft-radial":
          "radial-gradient(circle at top left, rgba(124, 58, 237, 0.25), transparent 55%), radial-gradient(circle at center right, rgba(14, 165, 233, 0.25), transparent 55%)"
      },
      fontFamily: {
        heading: ["var(--font-manrope)"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
