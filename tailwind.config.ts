import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#68c7ac',
				primaryhover: '#58b59b',
				secondary: '#039be5',
				black: '#222222',
				white: '#ffffff',
				ghostWhite: '#f8f8ff',
				lightGrey: '#f9f9f9',
				mediumGrey: '#6e6869',
				red: '#fc5c65'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
}
export default config
