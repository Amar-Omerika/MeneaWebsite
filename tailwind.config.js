/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
    extend : {		
      colors: {
          'gray' : '#bcc4db',
          'beige' : '#c0a9b0',
          'purple' : '#7880b5',
          'blue' : '#6987c9',
          'lightBlue': '#6bbaec',
          'white' : '#fff',
      },
    }
	},
	plugins: [],
};
