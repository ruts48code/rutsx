import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['sarabun'],
				serif: ['sarabun']
			}
		}
	},

	plugins: [typography, forms, containerQueries, daisyui],
	daisyui: {
		themes: ['light', 'dark', 'cupcake', 'bumblebee', 'retro', 'pastel', 'dim', 'coffee'],
		darkTheme: 'dark',
		base: true,
		styled: true,
		utils: true,
		prefix: '',
		logs: true,
		themeRoot: ':root'
	}
};
