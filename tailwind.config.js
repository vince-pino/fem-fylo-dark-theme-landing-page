/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        "dark-blue-intro": "hsl(217, 28%, 15%)",
        "dark-blue-main": "hsl(218, 28%, 13%)",
        "dark-blue-footer": "hsl(216, 53%, 9%)",
        "dark-blue-testimonial": "hsl(219, 30%, 18%)",
        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        "light-red-error": "hsl(0, 100%, 63%)",
      },
    },
  },
  plugins: [],
};
