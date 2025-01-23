import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic';
import { Suspense } from 'react'

const Header = dynamic(() => import('@/components/layout/Header'), {
  ssr: false,
  loading: () => <div style={{ height: '64px' }} />
});

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  ssr: false,
  loading: () => null
});

export const metadata: Metadata = {
  title: 'Referans',
  description: 'Modern eğitim teknolojileri ve yenilikçi öğrenme yöntemleriyle geleceğin eğitim sistemini inşa ediyoruz',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning className="!scroll-smooth font-sans">
      <head>
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
        />
      </head>
      <body className={cn("relative min-h-screen bg-background antialiased pt-0")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">
            <Header />
            <Suspense fallback={<div className="min-h-screen" />}>
              {children}
            </Suspense>
            <Footer />
          </div> 
        </ThemeProvider>
      </body>
    </html>
  )
}