import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Mail } from 'lucide-react';
import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import { CONTACT } from '@/lib/constants';

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

        <footer className="relative bg-slate-950 py-12">
          {/* Gold divider top */}
          <div className="divider-gold absolute top-0 inset-x-0" />
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
              {/* Brand */}
              <div>
                <p className="text-sm font-bold tracking-[0.08em] text-white">
                  LM<span className="text-gradient-gold">250</span>{' '}
                  <span className="text-[10px] font-medium tracking-[0.2em] text-warm-500 uppercase">Solutions</span>
                </p>
                <p className="mt-1 text-[11px] text-slate-600">
                  &copy; {new Date().getFullYear()} All rights reserved.
                </p>
              </div>

              {/* Social + email links */}
              <div className="flex items-center gap-2">
                {[
                  {
                    href: `mailto:${CONTACT.email}`,
                    title: 'Email',
                    icon: <Mail className="h-3.5 w-3.5" />,
                    external: false,
                  },
                  {
                    href: CONTACT.instagram,
                    title: 'Instagram',
                    external: true,
                    icon: (
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    href: CONTACT.linkedin,
                    title: 'LinkedIn',
                    external: true,
                    icon: (
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                ].map(({ href, title, icon, external }) => (
                  <a
                    key={title}
                    href={href}
                    title={title}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(180,151,90,0.15)] bg-[rgba(180,151,90,0.04)] text-warm-500 transition-all duration-200 hover:border-gold-500/40 hover:bg-[rgba(180,151,90,0.1)] hover:text-gold-400"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
