module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    "./*.{js,jsx,ts,tsx}",
    "./UI/**/*.{js,jsx,ts,tsx}",
    "./UI/**/**/*.{js,jsx,ts,tsx}",
    "./Container/*.{js,jsx,ts,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      backgroundColor: {
        "custom-one": "#21262A",
        "custom-two": "#282D31",
      },
    },
  },
  plugins: [],
};
