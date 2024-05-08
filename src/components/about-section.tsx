'use client'
import { useEffect, useRef } from 'react'
import { annotate, annotationGroup } from 'rough-notation'
import { RoughAnnotationConfig, RoughAnnotationGroup } from 'rough-notation/lib/model'

import config from '~/config'
import { useMediaQuery } from '~/hooks'
import { cn } from '~/lib/utils'
import CardStackDemo from './profile-stack'
import { typo } from './ui/typograpghy'

const annotationsConfig = [
  {
    ref: 'a1Ref',
    type: 'underline',
    color: 'white',
    multiline: true,
    iterations: 1,
  },
  {
    ref: 'a2Ref',
    type: 'underline',
    color: 'white',
    multiline: true,
    iterations: 1,
  },
  {
    ref: 'a3Ref',
    type: 'underline',
    color: 'white',
    multiline: true,
    iterations: 1,
  },
  {
    ref: 'a4Ref',
    type: 'underline',
    color: 'white',
    multiline: true,
    iterations: 1,
  },
]

const AboutSection = () => {
  const isSmallDevice = useMediaQuery('(max-width: 500px)')
  const hireRef = useRef<HTMLAnchorElement>(null)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const annotationRefs = annotationsConfig.map(() => useRef<HTMLSpanElement>(null))

  useEffect(() => {
    const annotations = annotationsConfig.map((config, index) => {
      const { ref, ...options } = config
      return annotate(annotationRefs[index]!.current!, options as RoughAnnotationConfig)
    })

    if (hireRef.current) {
      annotations.push(
        annotate(hireRef.current, {
          type: 'circle',
          color: '#00adb5',
          strokeWidth: 1,
          padding: 6,
          iterations: 1,
        }),
      )
    }

    const annotationGroupInstance: RoughAnnotationGroup = annotationGroup(annotations)

    if (!isSmallDevice) {
      annotationGroupInstance.show()
    }

    return () => annotationGroupInstance.hide()
  }, [annotationRefs, isSmallDevice])

  return (
    <section className="space-y-3 grid md:grid-cols-3 gap-4" aria-label="About">
      <div className="space-y-3 sm:col-span-2">
        <h1 className="font-semibold text-lg sm:text-xl font-ubuntu">
          Hi, I&apos;m Faisal, Frontend developer from UAE
        </h1>

        <p className={typo({ variant: 'paragraph', font: 'sans' })}>
          I Love building tools that are{' '}
          <span ref={annotationRefs[0]} className="text-white">
            user friendly, simple
          </span>{' '}
          and{' '}
          <span ref={annotationRefs[1]} className="text-white">
            delightful
          </span>
          .
        </p>

        <p className={typo({ variant: 'paragraph', font: 'sans' })}>
          I got a Web Development degree from Cisco Networking Academy. It helped me get better at
          tech stuff and design.
        </p>

        <p className={typo({ variant: 'paragraph', font: 'sans' })}>
          Through these experiences, I had the opportunity to work with both small and large
          companies, as well as specialized and cross-functional teams across different time zones &
          developed a working style that prioritizes{' '}
          <span ref={annotationRefs[2]} className="text-white">
            flexibility, clarity
          </span>{' '}
          and{' '}
          <span ref={annotationRefs[3]} className="text-white">
            collaboration.
          </span>
        </p>

        <p className={cn(typo({ variant: 'paragraph', font: 'sans' }), '!mt-6')}>
          I&apos;m currently looking for a new role as a developer.{' '}
          <a
            ref={hireRef}
            href={`mailto:${config.social.email}`}
            aria-label="Hire me"
            className="text-ring el-focus-styles"
          >
            Hire me?
          </a>
        </p>
      </div>

      <div className="hidden sm:block relative h-full pt-4">
        <CardStackDemo />
      </div>
    </section>
  )
}

export default AboutSection
