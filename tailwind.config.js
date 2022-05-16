module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#176F6B",

          secondary: "#FFC000",

          accent: "#FFEDD5",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#FA5C5C",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
