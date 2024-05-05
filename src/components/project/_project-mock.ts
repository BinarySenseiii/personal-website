import {createId} from '@paralleldrive/cuid2'
import {ChainGpt, LumaIcon} from '~/assets/svg'
import {PowerUp} from './project-icons'

const projects = [
  {
    id: createId(),
    Icon: LumaIcon,
    title: `Luma - Delightful events start here.`,
    description:
      'Find Luma events, join groups, or start your own. Make new friends and connect with like-minded people. Meet people near you who share your interests.',
    deployedURL: 'https://lu.ma/',
  },

  {
    id: createId(),
    Icon: ChainGpt,
    title: `ChainGPT - Unleash The Power of Blockchain AI`,
    description:
      'The premiere AI-powered dashboard for Web3. Featuring advanced Crypto AI tools for traders, NFT creators, developers, and the crypto community.',
    deployedURL: 'https://app.chaingpt.org/',
  },
  {
    id: createId(),
    Icon: PowerUp,
    title: `PowerUp - Brain Battles`,
    description:
      'Thrilling and mind-bending knowledge games offer the perfect opportunity for you to showcase your expertise and win big by competing in fast-paced rounds against other players.',
    deployedURL: 'https://nftpowerup.io/',
  },
]

export default projects
export type TProject = (typeof projects)[0]

// NOCODE_API_KEY="MRPzlTgmNGLYKjzb"
// NOCODE_TAB_ID="Sheet1"
