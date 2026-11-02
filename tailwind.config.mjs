/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF8F2",
        paper: "#F4EEE3",
        sand: "#E8DDC9",
        ink: "#101828",
        muted: "#586074",
        brand: {
          blue: "#2B5BA8",
          deep: "#1B3F7E",
          amber: "#F5A623",
          soft: "#FDE9BD",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
        road: {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-48" },
        },
        scrollCue: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        float: "float 7s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.2s cubic-bezier(0.2, 0.6, 0.3, 1) infinite",
        road: "road 1.2s linear infinite",
        "scroll-cue": "scrollCue 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
