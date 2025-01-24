import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import daisyui from 'daisyui'

export default {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			lfont: [
  				'var(--font-lfont)',
                    ...fontFamily.sans
                ]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  daisyui: {
    themes: [
      {
        mytheme0: {
          primary: '#e879f9',
          secondary: '#d8b4fe',
          accent: '#f87171',
          neutral: '#292129',
          'base-100': '#fff2fd',
          info: '#22d3ee',
          success: '#34d399',
          warning: '#facc15',
          error: '#ef4444',
        },
        mytheme1: {
          primary: '#f60068',
          secondary: '#0000ff',
          accent: '#00bd00',
          neutral: '#242424',
          'base-100': '#fff2fd',
          info: '#00e5ff',
          success: '#00cf51',
          warning: '#b95d00',
          error: '#f40038',
        },
        mytheme2: {
          primary: '#00adff',
          secondary: '#004eff',
          accent: '#0032ff',
          neutral: '#262e25',
          'base-100': '#fff2ed',
          info: '#00c9ff',
          success: '#5bc031',
          warning: '#eb6100',
          error: '#e90003',
        },
      },
    ],
  },
  plugins: [daisyui, require("tailwindcss-animate")],
} satisfies Config
