import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#efefef",
        transwhite: "rgba(239, 239, 239, 0.7)",
        moretranswhite: "rgba(239, 239, 239, 0.1)",
        black: "#252525",
        transblack: "rgba(37, 37, 37, 0.7)",
        moretransblack: "rgba(37, 37, 37, 0.1)",
        gray: "#6b6b6b",
        highlight: "#e5ffc3",
        red: "#e4002b",
        green: "#24d05a",
        pink: "#eb4888",
        blue: "#10a2f5",
        yellow: "#e9bc3f",
      },
      fontFamily: {
        mono: ["iA Writer Mono", "monospace"],
      },
    },
  },
  plugins: [typography],
};
