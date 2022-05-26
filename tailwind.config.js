module.exports = {
  content: ["./pages/**/*.{tsx,ts}"],
  theme: {
    extend: {
      aspectRatio: {
        "2/1": "2 / 1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
