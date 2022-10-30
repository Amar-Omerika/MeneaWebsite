/** @type {import('tailwindcss').Config} */
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
			},
			screens: {
				tablet: "640px",
				// => @media (min-width: 640px) { ... }

				laptop: "1024px",
				// => @media (min-width: 1024px) { ... }

				desktop: "1280px",
				// => @media (min-width: 1280px) { ... }
			},
		},
	},
	plugins: [],
};
