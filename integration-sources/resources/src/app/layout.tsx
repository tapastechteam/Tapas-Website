import type { Metadata } from 'next';
import SiteLayout from '@/components/SiteLayout';
import './globals.css';

export const metadata: Metadata = {
  title: 'TAPAS-PCE | Heartfulness Tapas Meditation and Wellness Club',
  description:
    'Heartfulness Tapas Meditation and Wellness Club, Pillai College of Engineering, New Panvel',
  icons: {
    icon: '/images/tapas-logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-tapas-bg text-tapas-text antialiased min-h-screen">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
