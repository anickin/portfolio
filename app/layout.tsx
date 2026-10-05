import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { withBasePath } from '@/lib/site-config'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'NickolasInIT — Network Engineering, Automation & AI',
  description:
    'A grounded portfolio of network-engineering labs, automation workflows, and AI-assisted knowledge tools.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: withBasePath('/icon-light-32x32.png'), media: '(prefers-color-scheme: light)' },
      { url: withBasePath('/icon-dark-32x32.png'), media: '(prefers-color-scheme: dark)' },
      { url: withBasePath('/icon.svg'), type: 'image/svg+xml' },
    ],
    apple: withBasePath('/apple-icon.png'),
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080d17',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
