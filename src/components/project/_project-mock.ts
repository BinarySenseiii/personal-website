import { createId } from '@paralleldrive/cuid2'
import { ChainGpt, LumaIcon } from '~/assets/svg'
import { MintKuto, NftConnect, PodPortal, PowerUp, worldRank } from './project-icons'

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
    title: `ChainGPT -  The Power of Blockchain AI`,
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
  {
    id: createId(),
    Icon: MintKuto,
    title: `ManyLives - Unlocking the Potential of Kuto Digital Characters`,
    description:
      'Step into the world of Kuto, where you can mint your own digital assets and unlock endless opportunities for creativity and innovation.',
    deployedURL: 'https://mintkuto.manylives.io/',
  },
  {
    id: createId(),
    Icon: NftConnect,
    title: `NFTConnect.ai - All in one for events`,
    description:
      'Brings people together through live experiences. Discover events that match your passions, or create your own with online ticketing tools.',
    deployedURL: 'https://nftconnect.ai/',
  },
  {
    id: createId(),
    Icon: PodPortal,
    title: `Pod Portal - Your Gateway to Endless Audio Adventures`,
    description:
      'Dive into a world of captivating stories, insightful discussions, and entertaining conversations with our curated selection of podcasts',
    deployedURL: 'https://podcast-ten-beta.vercel.app/explore',
  },

  {
    id: createId(),
    Icon: worldRank,
    title: `World Ranks - Ultimate source for country rankings`,
    description:
      'Explore comprehensive currency and population data worldwide with World Ranks. Stay informed, make smarter decisions, and broaden your global understanding',
    deployedURL: 'https://world-ranks-murex.vercel.app/',
  },
]

export default projects
export type TProject = (typeof projects)[0]
