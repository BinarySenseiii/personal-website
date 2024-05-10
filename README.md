<p align="center">
  <img alt="" src="https://res.cloudinary.com/dpcu6eyk8/image/upload/v1715346466/Screenshot_2024-05-10_170723_ovc1wu.png">
</p>

<h1 align="center">
  faisal-dev
</h1>

<p align="center">
  <a aria-label="Framework" href="https://nextjs.org">
    <img alt="" src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=Next.js&labelColor=000">
  </a>
  <img alt="" src="https://img.shields.io/github/languages/top/tszhong0411/honghong.me?style=for-the-badge&labelColor=000">
  <a aria-label="License" href="https://github.com/tszhong0411/honghong.me/blob/main/LICENSE">
    <img alt="" src="https://img.shields.io/github/license/tszhong0411/honghong.me?style=for-the-badge&labelColor=000">
  </a>
</p>

Welcome to my personal website! where I share my thoughts, projects, insights & blogs. Feel free to
explore and get inspired

## ✨ Features

- ⚡️ Next.js 14 with App Router (Turbo)
- 📝 MDX powered by <a href="https://velite.js.org/">velite</a>
- 🎨 Tailwind CSS - for styling
- 🌈 Shadcn UI - accessible UI components
- 🛡 Strict TypeScript and ESLint configuration
- 📱 Responsive design
- 📈 SEO optimized with meta tags and JSON-LD
- 📰 RSS feed
- 🗺 Sitemap
- 📊 Vercel Analytics
- 📝 Blog with comments, likes, and post views
- 🔎 Blog post search
- 📖 Table of contents for blog posts
- 📝 Code syntax highlighting - using Shiki
- 🎨 Animation - using Framer Motion
- 🏠 LightHouse score of nearly 100
- 💄 Prettier - code formatting
- 〰️ Prisma & Vercel Postgres
- 👷🏻‍♂️ t3-env - validate environment variables before building

## 🔨 Requirements

- Node, recommended `20.x`
- npm, recommended `10.5.0`
- PostgreSQL, recommended `14.x` check
  [https://vercel.com/storage/postgres](https://vercel.com/storage/postgres)
- Visual Studio Code [https://code.visualstudio.com/](https://code.visualstudio.com/)
- For the contact section, I'm using NoCode API [https://nocodeapi.com/](https://nocodeapi.com/).
  Simply create an account here and under the marketplace, enable the Excel Sheet API. Once enabled,
  you will receive a tabId and an API key.
- For the blog comments, I'm using the Giscus component. Set up your configuration
  [https://giscus.app/](https://giscus.app/).

## 👋 Getting Started

Follow these steps to run the project locally on your machine:

```bash
git clone https://github.com/BinarySenseiii/personal-website.git
cd personal-website
npm install
```

Create a `.env.local` file based on the provided `.env.example` file and fill in the necessary
variables.

OR you can skip this by modifying `src/constants/env.ts`:

```ts
export const env = createEnv({
  skipValidation: true,

  server: {
    // ...
  },
})
```

It will skip the validation of environment variables. And you may notice that some functionalities
will not work properly. But it's okay for learning.

Then generate prisma client:

```bash
npx prisma generate
npx migrate dev --name any
```

To run the app in development mode:

```bash
npm run dev
```

The app will be available at `localhost:3000`.

## ✈️ TODO

- ESM import { build } from 'velite' may be got a
  [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] warning generated during the next
  build process, which has little impact, refer to https://github.com/webpack/webpack/pull/15688

## ✍🏻 Author

- [@BinarySenseiii](https://github.com/BinarySenseiii)

## 🪪 License

This project is open source and available under the [GPL3 License](LICENSE).

<hr>
<p align="center">
Design & Developed by ❤️
</p>
