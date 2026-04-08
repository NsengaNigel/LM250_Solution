'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, CALENDLY_URL } from '@/lib/constants';

export default function Navbar() {
  const pathname  = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? 'pt-2' : 'pt-4'
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled
              ? 'border border-[rgba(180,151,90,0.18)] bg-[rgba(2,6,23,0.88)] shadow-gold-md backdrop-blur-2xl'
              : 'border border-[rgba(180,151,90,0.10)] bg-[rgba(2,6,23,0.5)] backdrop-blur-xl'
          }`}
        >
          {/* ── Logo ──────────────────────────────────── */}
          <Link href="/" className="group flex items-center gap-3">
            {/* Monogram mark */}
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-[rgba(180,151,90,0.35)] bg-[rgba(180,151,90,0.08)]">
              <span className="text-xs font-black tracking-tight text-gradient-gold">LM</span>
              <span className="absolute inset-0 shimmer-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </span>
            <span className="text-sm font-bold tracking-[0.06em] text-white">
              LM<span className="text-gradient-gold">250</span>
              <span className="ml-1 text-[10px] font-medium tracking-[0.2em] text-warm-500 uppercase">Solutions</span>
            </span>
          </Link>

          {/* ── Desktop links ──────────────────────────── */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-xs font-semibold tracking-[0.1em] uppercase transition-colors duration-200 ${
                      active ? 'text-gold-400' : 'text-slate-500 hover:text-warm-300'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── CTA ───────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border border-gold-500/40 bg-[rgba(180,151,90,0.06)] px-5 py-2 text-xs font-bold tracking-[0.1em] uppercase text-gold-400 transition-all duration-300 hover:border-gold-400/60 hover:bg-[rgba(180,151,90,0.12)] hover:text-gold-300 hover:shadow-gold-sm active:scale-95"
            >
              <span className="relative z-10">Book a Call</span>
              <span className="absolute inset-0 shimmer-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>

          {/* ── Mobile toggle ──────────────────────────── */}
          <button
            className="md:hidden rounded-lg p-2 text-slate-500 transition-colors hover:text-warm-300"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* ── Mobile menu ────────────────────────────── */}
        {mobileOpen && (
          <div className="mt-2 rounded-2xl border border-[rgba(180,151,90,0.15)] bg-[rgba(2,6,23,0.95)] px-4 py-4 shadow-gold-md backdrop-blur-2xl">
            <ul className="flex flex-col gap-1 mb-4">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold tracking-[0.1em] uppercase transition-colors ${
                        active ? 'text-gold-400' : 'text-slate-500 hover:text-warm-300'
                      }`}
                    >
                      {active && <span className="h-1 w-1 rounded-full bg-gold-500" />}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="divider-gold mb-4" />
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-lg border border-gold-500/40 bg-[rgba(180,151,90,0.08)] px-4 py-3 text-center text-xs font-bold tracking-[0.12em] uppercase text-gold-400 transition-colors hover:bg-[rgba(180,151,90,0.15)]"
            >
              Book a Discovery Call
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
