import type {Metadata} from 'next'
import Script from 'next/script'
import config from '~/config'

export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: Metadata & {
  canonicalUrlRelative?: string
  extraTags?: Record<string, any>
} = {}) => {
  return {
    title: title || config.appName,
    description: description || config.appDescription,
    keywords: keywords || [
      'portfolio',
      'personal portfolio',
      'web developer',
      'software engineer',
      'front-end developer',
      'creative',
      'coder',
      'programmer',
      'developer',
      'portfolio website',
    ],
    applicationName: config.appName,

    metadataBase: new URL(
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/'
        : `https://${config.domainName}/`,
    ),

    openGraph: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: openGraph?.title || config.appName,
      locale: 'en_US',
      type: 'website',
    },

    twitter: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      card: 'summary_large_image',
      creator: '@FaisalTari78554',
    },

    ...(canonicalUrlRelative && {
      alternates: {canonical: canonicalUrlRelative},
    }),

    ...extraTags,
  }
}

export const renderSchemaTags = () => {
  return (
    <Script
      id="schemaTags"
      strategy="afterInteractive"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'ProfilePage',
          name: config.appName,
          description: config.appDescription,
          image: `https://${config.domainName}/icon.png`,
          url: `https://${config.domainName}/`,

          dateCreated: '2022-12-23T12:34:00-05:00',
          dateModified: '2023-12-26T14:53:00-05:00',
          mainEntity: {
            '@type': 'Person',
            name: 'Faisal Tariq',
            alternateName: 'faisal_griz',
            identifier: '123475623',
            interactionStatistic: [
              {
                '@type': 'InteractionCounter',
                interactionType: 'https://schema.org/FollowAction',
                userInteractionCount: 1,
              },
              {
                '@type': 'InteractionCounter',
                interactionType: 'https://schema.org/LikeAction',
                userInteractionCount: 5,
              },
            ],
          },
          applicationCategory: 'ProfilePage',
          agentInteractionStatistic: {
            '@type': 'InteractionCounter',
            interactionType: 'https://schema.org/WriteAction',
            userInteractionCount: 2346,
          },
        }),
      }}
    />
  )
}
