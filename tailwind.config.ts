import type {Config} from 'tailwindcss'
import {shadcnPreset} from './src/lib/shadcn-ui'

const config = {
  presets: [shadcnPreset],
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  plugins: [require('@tailwindcss/typography')],
} satisfies Config

export default config
