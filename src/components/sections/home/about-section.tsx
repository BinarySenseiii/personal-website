import Link from 'next/link'
import {Button} from '~/components/ui/button'
import config from '~/config'

const AboutSection = () => {
  return (
    <section className="space-y-4" aria-label="About">
      <p className="text-muted-foreground text-left">{config.appDescription}</p>
      <div className="flex items-center gap-2 flex-wrap">
        <Button size="sm" asChild>
          <Link href="/contact" aria-label="contact me">
            Contact me
          </Link>
        </Button>
        <Button size="sm" variant="outline" asChild>
          <a href="/resume.pdf" download aria-label="download resume">
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  )
}

export default AboutSection
