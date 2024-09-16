import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        gray: {
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          500: "#6B7280",
          700: "#374151",
          800: "#1F2937",
        },
        blue: {
          200: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
        },
        "dark-bg": "#101214",
        "dark-secondary": "#1D1F21",
        "dark-tertiary": "#3B3D40",
        "blue-primary": "#0275FF",
        "stroke-dark": "#2D3135",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
