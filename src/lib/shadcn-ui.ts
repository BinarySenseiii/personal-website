import animatePlugin from 'tailwindcss-animate'
import plugin from 'tailwindcss/plugin'
import {fontFamily} from 'tailwindcss/defaultTheme'
import type {Config} from 'tailwindcss'

const shadcnPlugin = plugin(
  function ({addBase}) {
    addBase({
      ':root': {
        '--background': '240 10% 3.9%',
        '--foreground': '0 0% 98%',
        '--card': '240 10% 3.9%',
        '--card-foreground': '0 0% 98%',
        '--popover': '240 10% 3.9%',
        '--popover-foreground': '0 0% 98%',
        '--primary': '0 0% 98%',
        '--primary-foreground': '240 5.9% 10%',
        '--secondary': '240 3.7% 15.9%',
        '--secondary-foreground': '0 0% 98%',
        '--muted': '240 3.7% 15.9%',
        '--muted-foreground': '240 5% 64.9%',
        '--accent': '240 3.7% 15.9%',
        '--accent-foreground': '0 0% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '240 3.7% 15.9%',
        '--input': '240 3.7% 15.9%',
        '--ring': '182.7 100.0% 35.5%',
        '--radius': '0.5rem',
      },
    }),
      addBase({
        '*': {
          '@apply border-border': {},
        },
        body: {
          '@apply bg-background text-foreground': {},
        },
      })
  },

  {
    theme: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '57rem',
        },
      },
      extend: {
        typography: {
          DEFAULT: {
            css: {
              maxWidth: '100ch',
            },
          },
        },
        fontFamily: {
          sans: ['var(--font-sans)', ...fontFamily.sans],
          ubuntu: 'var(--font-ubuntu)',
          dank: 'var(--font-dank)',
        },
        screens: {
          xs: '380px',
          sm: '500px',
        },
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
          'accordion-down': {
            from: {height: '0'},
            to: {height: 'var(--radix-accordion-content-height)'},
          },
          'accordion-up': {
            from: {height: 'var(--radix-accordion-content-height)'},
            to: {height: '0'},
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
  },
)

export const shadcnPreset = {
  prefix: '',
  darkMode: ['selector'],
  content: [],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config
