import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0092ff",
        "bg-dark": "#1b1b1e",
        "bg-darker": "#16161b",
        "border-dark": "#242425",
        "border-darker": "#2b3740",
        "text-secondary": "#949fa8",
        "status-live": "rgba(78,244,103,0.3)",
        "status-ended": "rgba(244,78,78,0.3)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        'sidebar': 'clamp(200px, 15vw, 280px)',
        'sidebar-sm': 'clamp(60px, 8vw, 80px)',
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
export default config;

