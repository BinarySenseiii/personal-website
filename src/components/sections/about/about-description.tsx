import React from 'react'
import config from '~/config'

const AboutDescription = () => {
  return (
    <section aria-label="About me">
      <div className="space-y-2">
        <p className="text-muted-foreground">{config.appDescription}</p>

        <p className="text-muted-foreground">
          My journey into web development started with a solid foundation in
          design principles, cultivated during my education. I hold a degree in
          Web Development from Cisco Networking Academy, where I not only
          acquired technical skills but also developed a profound appreciation
          for the fusion of aesthetics and functionality.
        </p>

        <p className="text-muted-foreground">
          My expertise spans a wide array of technologies including HTML5, CSS3,
          JavaScript, and ReactJS. Additionally, I&apos;m proficient in various
          design tools such as Adobe Creative Suite and Figma. I&apos;m
          committed to staying ahead of the curve by continuously exploring
          emerging technologies and design trends to ensure that my work remains
          both timeless and cutting-edge.
        </p>
      </div>
    </section>
  )
}

export default AboutDescription
