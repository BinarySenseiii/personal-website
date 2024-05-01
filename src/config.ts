import {ConfigProps} from './types/config'

const config = {
  appName: 'Faisal Tariq',
  appDesignation: 'Frontend React Specialist',
  appDescription: `Hi, I'm Faisal, Frontend developer from the UAE. Skilled in
  HTML, CSS, JavaScript, and React. I create pixel-perfect, cross-browser
  interfaces with optimal performance`,

  domainName: 'personal-website-black-eta.vercel.app',

  colors: {
    theme: 'dark',
  },

  social: {
    github: 'https://github.com/BinarySenseiii',
    linkedin: 'https://www.linkedin.com/in/faisal-tariq1/',
    instagram: 'https://www.instagram.com/faisal_griz/',
    discord: 'https://discord.gg/cAbzWNQw',
    email: 'faisaltariq1812@gmail.com',
  },

  auth: {
    loginUrl: '/api/auth/signin',
    callbackUrl: '/dashboard',
  },
} as ConfigProps

export default config
