/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        verizonFont: ["VerizonFont", "sans-serif"],
        verizonBold: ["VerizonBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}
