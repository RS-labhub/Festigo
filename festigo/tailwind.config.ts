import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-page-hero': "url('/assets/images/main-page-hero.jpg')",
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans'],
      },
    },
  },
  plugins: [],
};

export default config;
