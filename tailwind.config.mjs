// tailwind.config.js
module.exports = {
	content: [
	  "./src/**/*.{astro,js,ts,jsx,tsx}",
	  "./public/**/*.{html,js}",
	  "./node_modules/flowbite/**/*.js"
	],
	theme: {
	  extend: {
		backgroundImage: {
		  'custom-bg': "url('/fondodia.png')",
		},
	  },
	},
	plugins: [
	  require('flowbite/plugin')
	],
  }
  
  
