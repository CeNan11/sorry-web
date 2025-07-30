// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#ffe4e6',
        },
        yellow: {
          100: '#fef9c3',
        },
      },
      animation: {
        floating: "floating 6s ease-in-out infinite",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-50px)" },
        },
      },
    },
  },
  plugins: [],
};
