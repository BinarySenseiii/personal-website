import {ConfigProps} from './types/config'

const config = {
  appName: 'FAISAL TARIQ',
  appDesignation: 'Frontend React Specialist',
  appDescription: `Hi, I'm Faisal, a frontend developer from the UAE. Skilled in
  HTML, CSS, JavaScript, and React. I create pixel-perfect, cross-browser
  interfaces with optimal performance`,

  domainName: 'personal-website-phi-five.vercel.app',

  colors: {
    theme: 'dark',
  },

  social: {
    github: 'https://github.com/BinarySenseiii',
    linkedin: 'https://www.linkedin.com/in/faisal-tariq1/',
    instagram: 'https://www.instagram.com/faisal_griz/',
    discord: 'https://discord.gg/cAbzWNQw',
  },

  auth: {
    loginUrl: '/api/auth/signin',
    callbackUrl: '/dashboard',
  },
} as ConfigProps

export default config
