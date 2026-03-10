import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'LM250 Solutions \u2014 AI Infrastructure for Realtors',
  description:
    'The AI infrastructure that triples realtor revenue while cutting admin costs by 70%. Transform from hope-based to data-driven real estate.',
  keywords: ['real estate AI', 'realtor automation', 'lead generation', 'LM250'],
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
