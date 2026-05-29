import './globals.css'

import '@/styles/theme.css'
import '@/styles/scrollbar.css'

import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import Container from '@/components/common/Container'
import ScrollToTop from '@/components/common/ScrollToTop'
import ToastProvider from '@/components/common/ToastProvider'

import Providers from './providers'

export const metadata = {
  title: 'BuySwift',
  description:
    'Modern Ecommerce Platform built with Next.js 16',
}

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <ToastProvider />

          <Navbar />

          <Container>
            <main className="min-h-screen py-6">
              {children}
            </main>
          </Container>

          <Footer />

          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}