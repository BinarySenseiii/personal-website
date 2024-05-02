import Image from 'next/image'
import config from '~/config'

import dubaiCon from '~/assets/images/f-dubai-police.webp'

const AboutSection = () => {
  return (
    <section
      className="space-y-3 grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-center"
      aria-label="About"
    >
      <div className="space-y-3 md:col-span-2">
        <p className=" text-left">{config.appDescription}</p>

        <p className=" text-left">
          In recent months, I&apos;ve been active on my blogs, focusing on
          simplicity in my writing. I discuss topics related to the technologies
          as well as my personal growth and learning experiences in my career.
        </p>
      </div>
      <Image
        alt="Me standing on stage at Dubai police station delivering the presentation"
        src={dubaiCon}
        priority
        className="rounded-md h-full object-cover "
        placeholder="blur"
      />
    </section>
  )
}

export default AboutSection
