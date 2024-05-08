import { BiLogoPostgresql } from 'react-icons/bi'
import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs'
import { IconType } from 'react-icons/lib'
import {
  SiAngular,
  SiApollographql,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGatsby,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPrisma,
  SiPwa,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWebpack,
  SiWordpress,
} from 'react-icons/si'

export type stacksProps = Record<
  string,
  {
    Icon: IconType
    className: string
  }
>

export const FRONTEND_STACKS: stacksProps = {
  JavaScript: { Icon: SiJavascript, className: 'text-yellow-400' },
  TypeScript: { Icon: SiTypescript, className: 'text-blue-400' },
  'Next.js': { Icon: SiNextdotjs, className: '' },
  'React.js': { Icon: SiReact, className: 'text-sky-500' },
  TailwindCSS: { Icon: SiTailwindcss, className: 'text-cyan-300' },
  Bootstrap: { Icon: BsFillBootstrapFill, className: 'text-purple-500' },
  WordPress: { Icon: SiWordpress, className: '' },
  'Material UI': { Icon: SiMui, className: 'text-sky-400' },
  Angular: { Icon: SiAngular, className: 'text-red-500' },
  'Vue.js': { Icon: SiVuedotjs, className: 'text-green-500' },
  'Nuxt.js': { Icon: SiNuxtdotjs, className: 'text-green-400' },
  Gatsby: { Icon: SiGatsby, className: 'text-purple-600' },
  Redux: { Icon: SiRedux, className: 'text-purple-500' },
  Webpack: { Icon: SiWebpack, className: 'text-blue-500' },
  'Styled Components': { Icon: SiStyledcomponents, className: 'text-pink-500' },
  PWA: { Icon: SiPwa, className: 'text-amber-600' },
  Jest: { Icon: SiJest, className: 'text-red-600' },
  Storybook: { Icon: SiStorybook, className: 'text-amber-500' },
  CSS: { Icon: SiCss3, className: 'text-blue-300' },
}

export const BACKEND_STACKS = {
  postgreSql: { Icon: BiLogoPostgresql, className: 'text-blue-500' },
  PHP: { Icon: SiPhp, className: 'text-blue-500' },
  GraphQL: { Icon: SiGraphql, className: 'text-pink-600' },
  Apollo: { Icon: SiApollographql, className: '' },
  WordPress: { Icon: SiWordpress, className: '' },
  Laravel: { Icon: SiLaravel, className: 'text-red-500' },
  Prisma: { Icon: SiPrisma, className: 'text-emerald-500' },
  'Node.js': { Icon: SiNodedotjs, className: 'text-green-600' },
  Firebase: { Icon: SiFirebase, className: 'text-yellow-500' },
  'Artificial Intelligence': { Icon: BsRobot, className: 'text-rose-500' },
  Nginx: { Icon: SiNginx, className: 'text-green-500' },
  Socket: { Icon: SiSocketdotio, className: '' },
  Express: { Icon: SiExpress, className: '' },
}
