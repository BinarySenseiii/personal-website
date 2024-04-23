import {fontSans} from '~/components/ui/fonts'
import {cn} from '~/lib/utils'
import RootProviders from '~/providers'
import '~/styles/globals.css'
import {ViewTransitions} from 'next-view-transitions'
import {Metadata} from 'next'
import site from '~/config/site'

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

export const metadata: Metadata = {
  title: site.appName,
  description: site.appDescription,
}

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
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ViewTransitions>
  )
}
