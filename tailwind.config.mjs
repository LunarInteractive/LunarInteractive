/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {	
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
				{
					dark: {
				"primary": "#33539E",
				"secondary": "#9E77BF",
				"neutral": "#C695B0",
				"info": "#7D6CB5",
				"accent": "#EAB0A2",
				"warning": "EAC880",
				"base-100": "#16181D",
				"base-200": "#F5F0FF",
		},
	},
	]
	}
}
