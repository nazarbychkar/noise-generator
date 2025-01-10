import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import daisyui from 'daisyui'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lfont: ['var(--font-lfont)', ...fontFamily.sans],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
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
  plugins: [daisyui],
} satisfies Config
