import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VOSU AI - AI Video Creation Platform',
  description: 'Create stunning AI-powered videos in seconds. Turn your ideas into professional videos with no cameras, no crews—just AI bringing your vision to life.',
  keywords: 'AI video, video creation, artificial intelligence, video generator, content creation',
  authors: [{ name: 'VOSU AI' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Instrument+Sans:400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Clash+Grotesk:400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}