import { Analytics } from '@vercel/analytics/next'
import { Lora, Plus_Jakarta_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const lora = Lora({ subsets: ['latin'], variable: '--font-heading' })
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: {
    default: 'TAPAS | Pillai University',
    template: '%s | TAPAS',
  },
  description: 'TAPAS, the Heartfulness Meditation and Wellness Club at Pillai University, New Panvel.',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#eaf6ff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${lora.variable} ${plusJakartaSans.variable} antialiased`}
        style={{ fontFamily: 'var(--font-body), sans-serif' }}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
