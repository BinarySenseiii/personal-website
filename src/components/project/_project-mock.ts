import {createId} from '@paralleldrive/cuid2'
import {ChainGpt, LumaIcon} from '~/assets/svg'
import {MintKuto, PodPortal, PowerUp, worldRank} from './project-icons'

// Project cover images
import lumaCover from '~/assets/images/cover/luma.png'
import chainGptCover from '~/assets/images/cover/chain-gpt.png'
import powerUpCover from '~/assets/images/cover/power-up.png'
import worldRankCover from '~/assets/images/cover/world-ranks.png'
import podPortalCover from '~/assets/images/cover/podportal.png'
import mintKutoCover from '~/assets/images/cover/mint-kuto.png'

const projects = [
  {
    id: createId(),
    Icon: LumaIcon,
    title: `Luma - Delightful events start here.`,
    description:
      'Find Luma events, join groups, or start your own. Make new friends and connect with like-minded people. Meet people near you who share your interests.',
    deployedURL: 'https://lu.ma/',
    cover: lumaCover,
    stacks: ['Next.js', 'Typescript', 'Stripe', 'CSS-in-JS solution'],
    isRepo: false,
  },

  {
    id: createId(),
    Icon: ChainGpt,
    title: `ChainGPT -  The Power of Blockchain AI`,
    description:
      'The premiere AI-powered dashboard for Web3. Featuring advanced Crypto AI tools for traders, NFT creators, developers, and the crypto community.',
    deployedURL: 'https://app.chaingpt.org/',
    cover: chainGptCover,
    stacks: [
      'React',
      'Node.js',
      'Web3',
      'Ethers',
      'GraphQL',
      'TypeScript',
      'Chakra-UI',
    ],
    isRepo: false,
  },
  {
    id: createId(),
    Icon: PowerUp,
    title: `PowerUp - Brain Battles`,
    description:
      'Thrilling and mind-bending knowledge games offer the perfect opportunity for you to showcase your expertise and win big by competing in fast-paced rounds against other players.',
    deployedURL: 'https://nftpowerup.io/',
    cover: powerUpCover,
    stacks: ['Next.js', 'Ether.js', 'APis', 'TailwindCSS'],
    isRepo: false,
  },

  {
    id: createId(),
    Icon: PodPortal,
    title: `Pod Portal - Your Gateway to Endless Audio Adventures`,
    description:
      'Dive into a world of captivating stories, insightful discussions, and entertaining conversations with our curated selection of podcasts',
    deployedURL: 'https://podcast-ten-beta.vercel.app/explore',
    cover: podPortalCover,
    stacks: ['Next.js', 'TypeScript', 'Itunes APi', 'Emotion JS'],
    isRepo: true,
    repoUrl: 'https://github.com/BinarySenseiii/podcast',
  },

  {
    id: createId(),
    Icon: MintKuto,
    title: `ManyLives - The Potential of Kuto Digital Characters`,
    description:
      'Step into the world of Kuto, where you can mint your own digital assets and unlock endless opportunities for creativity and innovation.',
    deployedURL: 'https://mintkuto.manylives.io/',
    cover: mintKutoCover,
    stacks: ['Solidity', 'React', 'Redux', 'Web3.js', 'Sass'],
    isRepo: false,
  },

  {
    id: createId(),
    Icon: worldRank,
    title: `World Ranks - Ultimate source for country rankings`,
    description:
      'Explore comprehensive currency and population data worldwide with World Ranks. Stay informed, make smarter decisions, and broaden your global understanding',
    deployedURL: 'https://world-ranks-murex.vercel.app/',
    cover: worldRankCover,
    stacks: ['React', 'D3.js', 'Node.js', 'Country APi'],
    isRepo: true,
    repoUrl: 'https://github.com/BinarySenseiii/world-ranks',
  },
]

export default projects
export type TProject = (typeof projects)[0]
