import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const BASE_URL = 'https://lm250solutions.com';

export const viewport: Viewport = {
  themeColor: '#020617',        // slate-950 — matches the dark background
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'LM250 Solutions \u2014 AI Infrastructure for Realtors',
    template: '%s \u2014 LM250 Solutions',
  },
  description:
    'The AI infrastructure that triples realtor revenue while cutting admin costs by 70%. Transform from hope-based to data-driven real estate.',
  keywords: ['real estate AI', 'realtor automation', 'lead generation', 'LM250', 'AI revenue engine'],
  authors: [{ name: 'LM250 Solutions', url: BASE_URL }],
  creator: 'LM250 Solutions',
  publisher: 'LM250 Solutions',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'LM250 Solutions',
    title: 'LM250 Solutions \u2014 AI Infrastructure for Realtors',
    description:
      'The AI infrastructure that triples realtor revenue while cutting admin costs by 70%.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LM250 Solutions — AI Infrastructure for Realtors',
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'LM250 Solutions \u2014 AI Infrastructure for Realtors',
    description:
      'The AI infrastructure that triples realtor revenue while cutting admin costs by 70%.',
    images: ['/og-image.png'],
    creator: '@lm250solutions',
  },

  // Favicon / icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-slate-950 text-slate-100 antialiased min-h-screen`}
      >
        <Navbar />
        <main>{children}</main>

        <footer className="border-t border-slate-800 bg-slate-950 py-10 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} LM250 Solutions. All rights reserved.</p>
          <p className="mt-1">
            Built to 3x your revenue.{' '}
            <a href="/contact" className="text-blue-500 hover:text-blue-400 transition-colors">
              Let&apos;s talk.
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
