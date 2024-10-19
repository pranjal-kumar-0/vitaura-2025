/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // neongreen: '#C1FF43',
        // hotpink: '#F94AC9',

        // neongreen: "#FB1F67",
        // hotpink: "#03FDEF",

        // neongreen: "#03FDEF",
        // hotpink: "#FB1F67",

        // neongreen: "#FE0989",
        // hotpink: "#FE8A01",

        // neongreen: "#F4226B",
        // hotpink: "#25F6F8",

        // neongreen: "#F4226B",
        // hotpink: "#25F6F8",

        neongreen: "#F4226B",
        hotpink: "#F64C29",
        purple: "#492076",
      },
      fontFamily: {
        fluxbox: ["fluxbox"],
        spacemono: ["spacemono"],
      },
      backgroundImage: {
        "dot-pattern": "radial-gradient(circle, white 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-pattern": "20px 20px",
      },
    },
    plugins: [],
  },
};
