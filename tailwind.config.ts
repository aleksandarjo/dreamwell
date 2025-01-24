import { plugin } from "postcss";
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '1rem',
  			lg: '0'
  		},
  		screens: {
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1620px'
  		}
  	},
  	extend: {
  		colors: {
  			primary: '#19CF79',
  			gray: '#636363',
  			light: {
  				gray: '#F5F5F5'
  			},
  			dark: {
  				blue: '#152046'
  			}
  		},
  		boxShadow: {
  			main: '0 4px 20px 0 rgba(21, 32, 70, 0.07);',
  			hover: '0 4px 60px 0 rgba(21, 32, 70, 0.15);',
  			button: '0 4px 20px 0 rgba(25, 207, 121, 0.2);'
  		},
  		screens: {
  			xs: '420px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
