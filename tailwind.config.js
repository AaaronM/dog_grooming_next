/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extend: {
    backgroundImage: {
      "hero-pattern": "url('./app/IMG/5.png')",
      "footer-texture": "url('/img/footer-texture.png')",
    },
  },
};
