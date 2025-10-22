import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Burger Qatar - Top Burger Restaurants in Doha',
  description: 'Discover and vote for the best burger restaurants in Doha, Qatar. Featuring top-rated burger joints, gourmet burgers, and local favorites.',
  keywords: 'burgers, Doha, Qatar, restaurants, food, dining, best burgers, burger ranking',
  authors: [{ name: 'Burger Qatar' }],
  openGraph: {
    title: 'Burger Qatar - Top Burger Restaurants in Doha',
    description: 'Discover and vote for the best burger restaurants in Doha, Qatar.',
    url: 'https://burgerqa.com',
    siteName: 'Burger Qatar',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burger Qatar - Top Burger Restaurants in Doha',
    description: 'Discover and vote for the best burger restaurants in Doha, Qatar.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
