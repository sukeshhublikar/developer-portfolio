import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'Sukesh Hublikar | Senior Fullstack Developer',
  description: 'Senior Fullstack Developer with 9+ years experience in React, Next.js, Node.js, AI integration, and modern web technologies. Based in Bengaluru, India.',
  keywords: 'sukesh hublikar, fullstack developer, react developer, nextjs developer, nodejs developer, ai developer, javascript, typescript, bengaluru developer',
  authors: [{ name: 'Sukesh Hublikar' }],
  openGraph: {
    title: 'Sukesh Hublikar | Senior Fullstack Developer',
    description: 'Senior Fullstack Developer with 9+ years experience specializing in React, Next.js, Node.js, AI integration, and end-to-end web development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sukesh Hublikar | Senior Fullstack Developer',
    description: 'Senior Fullstack Developer with 9+ years experience in React, Next.js, Node.js, AI integration, and modern web technologies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}