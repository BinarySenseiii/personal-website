'use client'
import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {annotate, annotationGroup} from 'rough-notation'
import dubaiCon from '~/assets/images/f-dubai-police.webp'
import {RoughAnnotationConfig, RoughAnnotationGroup} from 'rough-notation/lib/model'
import {useMediaQuery} from '@uidotdev/usehooks'

const annotationsConfig = [
  {ref: 'a1Ref', type: 'underline', color: 'white', multiline: true, iterations: 1},
  {ref: 'a2Ref', type: 'underline', color: 'white', multiline: true, iterations: 1},
  {ref: 'a3Ref', type: 'underline', color: 'white', multiline: true, iterations: 1},
  {ref: 'a4Ref', type: 'underline', color: 'white', multiline: true, iterations: 1},
]

const AboutSection = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 500px)')
  const hireRef = useRef<HTMLAnchorElement>(null)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const annotationRefs = annotationsConfig.map(() => useRef<HTMLSpanElement>(null))

  useEffect(() => {
    const annotations = annotationsConfig.map((config, index) => {
      const {ref, ...options} = config
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
      <div className="space-y-3 md:col-span-2">
        <h1 className="font-semibold text-lg sm:text-xl font-ubuntu">
          Hi, I&apos;m Faisal, Frontend developer from the UAE
        </h1>

        <p className="text-muted-foreground">
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

        <p className="text-muted-foreground">
          I earned a Web Development degree from Cisco Networking Academy, where I honed both
          technical expertise and a keen eye for design principles.
        </p>

        <p className="text-muted-foreground">
          Through these experiences, I had the opportunity to work with both small and large,
          specialized and cross-function teams across different time zones and developed a working
          style that leans towards{' '}
          <span ref={annotationRefs[2]} className="text-white">
            flexibility, clarity
          </span>{' '}
          and{' '}
          <span ref={annotationRefs[3]} className="text-white">
            collaboration.
          </span>
        </p>

        <p className="text-muted-foreground">
          I&apos;m currently looking for a new role as a developer.{' '}
          <Link
            ref={hireRef}
            href="/contact"
            aria-label="Hire me"
            className="text-ring el-focus-styles"
          >
            Hire me?
          </Link>
        </p>
      </div>
      <Image
        alt="Me standing on stage at Dubai police station delivering the presentation"
        src={dubaiCon}
        priority
        className="rounded-md h-full hidden md:block object-cover !m-0"
        placeholder="blur"
      />
    </section>
  )
}

export default AboutSection
