/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				customfont: ["Rajdhani", "sans-serif"],
			},
			colors: {
				gray: "#bcc4db",
				beige: "#c0a9b0",
				purple: "#7880b5",
				blue: "#6987c9",
				lightBlue: "#6bbaec",
				white: "#fff",
        logoBlue: "#188AFC",
			},
			screens: {
				tablet: "640px",
				// => @media (min-width: 640px) { ... }

				laptop: "1024px",
				// => @media (min-width: 1024px) { ... }

				desktop: "1280px",
				// => @media (min-width: 1280px) { ... }
			},
			animation: {
				ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scroll: "scroll 6s ease-in-out",
			},
      keyframes: {
        pulse: {
          "0%, 100": {opacity: 1},
          "50%": {opacity: 0.9},
        },
      }
		},
	},
	plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/line-clamp"),
    plugin(function({ addUtilities }) {
      addUtilities({
        /* Hide scrollbar for Chrome, Safari and Opera */
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },

        /* Hide scrollbar for IE, Edge and Firefox */
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        }

      })
    })
  ],
};
