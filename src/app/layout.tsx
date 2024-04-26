import {ViewTransitions} from 'next-view-transitions'
import {fontSans} from '~/components/ui/fonts'
import {getSEOTags, renderSchemaTags} from '~/lib/seo'
import {cn} from '~/lib/utils'
import RootProviders from '~/providers'
import '~/styles/globals.css'

export const viewport = {
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 3,
  userScalable: true,
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: 'white'},
    {media: '(prefers-color-scheme: dark)', color: 'black'},
  ],
}

export const metadata = getSEOTags()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
          )}
        >
          {renderSchemaTags()}
          <a href="#main-content" className="sr-only">
            Skip to main content
          </a>
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ViewTransitions>
  )
}
