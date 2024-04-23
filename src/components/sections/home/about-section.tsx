import React from 'react'
import site from '~/config/site'
import {Button} from '~/components/ui/button'
import {Link} from 'next-view-transitions'

const AboutSection = () => {
  return (
    <section className="mt-5" aria-label="About">
      <p className="text-muted-foreground  text-center sm:text-left">
        {site.appDescription}{' '}
        <Button className="w-full inline p-0" variant="link" asChild>
          <Link href="/about" aria-label="Read more about me">
            Read More
          </Link>
        </Button>
      </p>
    </section>
  )
}

export default AboutSection
