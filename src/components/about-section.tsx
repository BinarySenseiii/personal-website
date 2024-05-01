import Image from 'next/image'
import config from '~/config'

import binanceStanding from '~/assets/images/f-binance.webp'
import dubaiCon from '~/assets/images/f-dubai-police.webp'
import main from '~/assets/images/f-main.webp'

const AboutSection = () => {
  return (
    <section className="space-y-3 text-[15px]" aria-label="About">
      <p className="text-muted-foreground text-left">{config.appDescription}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 !my-5">
        <Image
          alt="Me standing on Binance Stall at Expo"
          src={binanceStanding}
          priority
          className="rounded-md h-full object-cover"
          placeholder="blur"
        />

        <Image
          alt="Me standing on stage at Dubai police station delivering the presentation"
          src={dubaiCon}
          priority
          className="rounded-md h-full object-cover "
          placeholder="blur"
        />

        <Image
          alt="Me standing at Dubai Expo"
          src={main}
          priority
          className="rounded-md h-full object-cover hidden sm:block"
          placeholder="blur"
        />
      </div>
      <p className="text-muted-foreground text-left">
        I began learning web development with a strong understanding of design
        basics that I learned during my education. I earned a degree in Web
        Development from Cisco Networking Academy. During my time there, I not
        only learned technical skills but also gained a deep understanding of
        how aesthetics and functionality work together in web design.
      </p>
      <p className="text-muted-foreground text-left">
        In recent months, I&apos;ve been active on my blogs, focusing on
        simplicity in my writing. I discuss topics related to the technologies
        as well as my personal growth and learning experiences in my career.
      </p>
    </section>
  )
}

export default AboutSection
