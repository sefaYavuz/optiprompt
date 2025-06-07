import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#ffffff",
          dark: "#0d1117",
        },
        foreground: {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        primary: {
          DEFAULT: "#0B1D51", // navy as primary
          light: "#1a2d6a",
          dark: "#081640",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#725CAD", // purple as secondary
          light: "#8670bd",
          dark: "#5d4b8e",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#8CCDEB", // sky blue as accent
          light: "#a3d7ef",
          dark: "#75c0e3",
          foreground: "#000000",
        },
        warning: {
          DEFAULT: "#FFE3A9", // amber as warning/highlight
          light: "#ffe9bb",
          dark: "#ffd987",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#f3f4f6",
          foreground: {
            DEFAULT: "#6b7280",
            dark: "#8DD8FF"
          },
          dark: "#1a1f2a",
        },
        border: {
          DEFAULT: "rgb(229 231 235 / 0.2)",
          dark: "rgb(78 113 255 / 0.2)",
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #0B1D51, #725CAD)",
        "button-gradient": "linear-gradient(to right, #725CAD 0%, #0B1D51 100%)",
        "accent-gradient": "linear-gradient(to right, #8CCDEB 0%, #725CAD 100%)",
        "hover-gradient": "linear-gradient(to right, #725CAD 0%, #8CCDEB 100%)",
        "text-gradient": "linear-gradient(to right bottom, #8CCDEB, #725CAD)",
        "card-gradient": "linear-gradient(135deg, #0B1D51 0%, #725CAD 50%, #8CCDEB 100%)",
        "pricing-gradient": "linear-gradient(170deg, rgba(140,205,235,0.1) 0%, rgba(114,92,173,0.1) 50%, rgba(11,29,81,0.1) 100%)",
        "pricing-border": "linear-gradient(170deg, #8CCDEB 0%, #725CAD 50%, #0B1D51 100%)",
      },
    },
  },
  plugins: [],
}

export default config
