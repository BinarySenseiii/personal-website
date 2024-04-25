import config from '~/config'

const AboutSection = () => {
  return (
    <section className="mt-5" aria-label="About">
      <p className="text-muted-foreground  text-center sm:text-left">
        {config.appDescription}
      </p>
    </section>
  )
}

export default AboutSection
