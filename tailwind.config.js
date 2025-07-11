/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb", // This defines border-border to work
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827"
        },
        blue: {
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6"
        },
        yellow: {
          400: "#fbbf24",
          500: "#f59e0b"
        }
      },
      fontFamily: {
        sans: ["-apple-system", "SF Pro Display", "system-ui", "sans-serif"]
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};