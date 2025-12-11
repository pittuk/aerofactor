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
        primary: {
          900: '#021442',
          600: '#0064CC',
          DEFAULT: '#0064CC',
        },
        accent: {
          500: '#FC420A',
          600: '#E33B09',
          DEFAULT: '#FC420A',
        },
        neutral: {
          800: '#1E1E1E',
          600: '#5A6772',
          100: '#F5F6F7',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          700: '#374151',
        },
      },
    },
  },
  plugins: [],
};
export default config;
