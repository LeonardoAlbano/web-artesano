import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/styles/theme-provider'
import StarsCanvas from '@/components/star-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create my portifolio',
  description: 'web artesano',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StarsCanvas />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
