/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFeatureSettings: {
        numeric: ["tnum", "salt", "ss02"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.05rem" }],
        sm: ["0.875rem", { lineHeight: "1.225rem" }],
        base: ["1rem", { lineHeight: "1.4rem" }],
        lg: ["1.125rem", { lineHeight: "1.575rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2.1rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.625rem" }],
        "4xl": ["2.25rem", { lineHeight: "3.15rem" }],
        "5xl": ["3rem", { lineHeight: "4.2rem" }],
      },
    },
  },
  plugins: [
    require("tailwindcss-font-inter")({
      a: -0.0223,
      b: 0.185,
      c: -0.1745,
      baseFontSize: 16,
      importFontFace: true,
    }),
  ],
};
