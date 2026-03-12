'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { navItems, CALENDLY_URL } from '@/lib/constants';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism bar */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="mt-3 flex items-center justify-between rounded-2xl border border-slate-700/50 bg-slate-950/70 px-5 py-3 shadow-lg backdrop-blur-md"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-600 shadow-md shadow-gold-600/30 group-hover:bg-gold-500 transition-colors">
              <Zap className="h-4 w-4 text-white" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              LM<span className="text-gold-500">250</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? 'bg-gold-600/20 text-gold-400'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gold-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-gold-600/30 transition-all hover:bg-gold-500 hover:shadow-gold-500/40 active:scale-95"
            >
              Book Discovery Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mt-2 rounded-2xl border border-slate-700/50 bg-slate-950/90 px-4 py-3 backdrop-blur-md shadow-lg">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                        active
                          ? 'bg-gold-600/20 text-gold-400'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 border-t border-slate-700/50 pt-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-lg bg-gold-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-gold-500 transition-colors"
              >
                Book Discovery Call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
