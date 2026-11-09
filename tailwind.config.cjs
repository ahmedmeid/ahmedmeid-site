/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// IBM Plex: Sans for interface and headings, Serif for reading,
				// Mono for code and labels. Plex Sans Arabic matches for Arabic text.
				sans: ['"IBM Plex Sans"', '"IBM Plex Sans Arabic"', ...defaultTheme.fontFamily.sans],
				serif: ['"IBM Plex Serif"', ...defaultTheme.fontFamily.serif],
				mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		// The first theme is the default; the dark one is used automatically
		// when the visitor's device is in dark mode.
		themes: [
			{
				ahmedmeid: {
					"primary": "#2A5BD7",
					"primary-content": "#FFFFFF",
					"secondary": "#1E3A8A",
					"secondary-content": "#FFFFFF",
					"accent": "#1F47AE",
					"accent-content": "#FFFFFF",
					"neutral": "#16181D",
					"neutral-content": "#F7F8FA",
					"base-100": "#FCFCFB",
					"base-200": "#F3F6FD",
					"base-300": "#E3E9F7",
					"base-content": "#16181D",
					"info": "#2A5BD7",
					"success": "#1E6B3A",
					"warning": "#B45309",
					"error": "#B91C1C",
					"--rounded-box": "0.75rem",
					"--rounded-btn": "0.5rem",
					"--rounded-badge": "0.375rem",
				},
			},
			{
				"ahmedmeid-dark": {
					"primary": "#7EA2FF",
					"primary-content": "#0B1020",
					"secondary": "#A9BFFF",
					"secondary-content": "#0B1020",
					"accent": "#7EA2FF",
					"accent-content": "#0B1020",
					"neutral": "#E7EAF0",
					"neutral-content": "#0F1115",
					"base-100": "#0F1115",
					"base-200": "#151923",
					"base-300": "#232A3A",
					"base-content": "#E7EAF0",
					"info": "#7EA2FF",
					"success": "#6CCB8B",
					"warning": "#F0B45A",
					"error": "#F38B8B",
					"--rounded-box": "0.75rem",
					"--rounded-btn": "0.5rem",
					"--rounded-badge": "0.375rem",
				},
			},
		],
		darkTheme: "ahmedmeid-dark",
		logs: false,
	},
}
