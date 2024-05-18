import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { EB_Garamond } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/styles/theme-provider'
import StarsCanvas from '@/components/star-background'

const inter = EB_Garamond({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artesano web',
  description: 'web artesano',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <StarsCanvas />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
