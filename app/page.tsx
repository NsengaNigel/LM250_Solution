import { ArrowRight, TrendingUp, Scissors, Globe, CheckCircle, Minus } from 'lucide-react';
import { PILLARS, CALENDLY_URL, DEMO_URL } from '@/lib/constants';

const pillarIcons = { TrendingUp, Scissors, Globe } as const;

const PROBLEMS = [
  'Chasing unqualified leads that drain your week',
  'Buried in admin work instead of closing deals',
  'Losing listings to faster-responding competitors',
  'Revenue that is unpredictable and unscalable',
];

const SOLUTIONS = [
  'AI qualifies and nurtures every lead — 24/7',
  '70% of admin tasks eliminated automatically',
  'Instant personalised follow-up the moment leads arrive',
  'Predictable, data-driven pipeline growth',
];

const STATS = [
  { value: '3×',      label: 'Revenue Multiplier' },
  { value: '70%',     label: 'Cost Reduction'      },
  { value: '14 days', label: 'Time to Go Live'     },
  { value: '90-day',  label: 'Results Guarantee'   },
];

export default function HomePage() {
  return (
    <div className="pt-20 overflow-hidden">

      {/* ─────────────────────── HERO ─────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center">

        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/4 animate-glow-pulse"
            style={{ background: 'radial-gradient(ellipse, rgba(180,151,90,0.07) 0%, transparent 70%)' }}
          />
          <div
            className="absolute right-0 bottom-0 h-[400px] w-[500px] animate-glow-pulse"
            style={{ animationDelay: '2s', background: 'radial-gradient(ellipse, rgba(192,187,181,0.04) 0%, transparent 70%)' }}
          />
        </div>

        <div className="mx-auto w-full max-w-5xl px-4 py-28 text-center sm:px-6 sm:py-36 lg:px-8">

          {/* Tag */}
          <div className="tag-gold mb-8 mx-auto w-fit">
            <span className="h-1 w-1 rounded-full bg-gold-500 animate-glow-pulse" />
            AI-Powered Real Estate Infrastructure
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            The AI System That{' '}
            <span className="text-gradient-gold">3× Realtor Revenue</span>
            <br />
            <span className="text-4xl font-extrabold text-warm-300 sm:text-5xl lg:text-6xl">
              While Cutting Costs{' '}
              <span className="text-gradient-silver">70%</span>
            </span>
          </h1>

          {/* Divider line */}
          <div className="mx-auto mt-10 mb-8 divider-gold w-48" />

          {/* Subline */}
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Transform from hope-based hustle to a data-driven machine.
            LM250 plugs a full AI revenue engine into your business — so you
            close more, spend less, and scale without burning out.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 px-8 py-4 text-sm font-bold tracking-[0.08em] uppercase text-slate-950 shadow-gold-btn transition-all duration-300 hover:from-gold-400 hover:to-gold-500 hover:shadow-gold-lg active:scale-[0.97]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Free Discovery Call <ArrowRight className="h-4 w-4" />
              </span>
              <span className="absolute inset-0 shimmer-gold" />
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-warm-500/25 px-8 py-4 text-sm font-bold tracking-[0.08em] uppercase text-warm-400 transition-all duration-300 hover:border-warm-400/40 hover:text-warm-300 active:scale-[0.97]"
            >
              Watch Demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {['No contracts', 'Live in 14 days', 'Results or refund'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-slate-500">
                <CheckCircle className="h-3.5 w-3.5 text-gold-500/70" />
                {t}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="border-gold-gradient glow-gold group rounded-2xl bg-[rgba(2,6,23,0.6)] px-4 py-6 backdrop-blur-sm transition-all duration-300 hover:glow-gold-lg"
              >
                <div className="stat-number text-3xl font-black text-gradient-gold sm:text-4xl">{s.value}</div>
                <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-warm-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── PROBLEM / SOLUTION ─────────────── */}
      <section className="relative py-24 sm:py-32">
        <div className="divider-gold absolute top-0 inset-x-0" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="tag-gold mx-auto mb-4 w-fit">The Shift</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              The Real Estate Trap —{' '}
              <span className="text-gradient-gold">And the Exit</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Most realtors grind and hope. LM250 replaces that with systems
              that produce while you sleep.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {/* Without */}
            <div className="rounded-2xl border border-slate-700/40 bg-[rgba(2,6,23,0.6)] p-6 backdrop-blur-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-800" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-600">Without LM250</span>
                <div className="h-px flex-1 bg-slate-800" />
              </div>
              <ul className="space-y-3">
                {PROBLEMS.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-slate-500">
                    <Minus className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-700" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* With LM250 */}
            <div className="border-gold-gradient glow-gold rounded-2xl bg-[rgba(2,6,23,0.6)] p-6 backdrop-blur-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gold-500/20" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-gold-500">With LM250</span>
                <div className="h-px flex-1 bg-gold-500/20" />
              </div>
              <ul className="space-y-3">
                {SOLUTIONS.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── 3 PILLARS ───────────────────── */}
      <section className="relative py-24 sm:py-32">
        <div className="divider-gold absolute top-0 inset-x-0" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="tag-gold mx-auto mb-4 w-fit">Framework</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Three Pillars.{' '}
              <span className="text-gradient-gold">One Outcome.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Revenue, cost elimination, and market dominance — attacked simultaneously.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {PILLARS.map((pillar, i) => {
              const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons];
              return (
                <div
                  key={pillar.id}
                  className="border-gold-gradient glow-gold group relative overflow-hidden rounded-2xl bg-[rgba(2,6,23,0.65)] p-6 backdrop-blur-sm transition-all duration-500 hover:glow-gold-lg sm:p-8"
                >
                  {/* Large background number */}
                  <span className="absolute right-5 top-4 text-7xl font-black text-slate-800/60 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/6 text-gold-400 transition-all duration-300 group-hover:border-gold-400/40 group-hover:bg-gold-500/12">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-warm-500">
                      Pillar {i + 1}
                    </p>
                    <h3 className="mb-3 text-lg font-bold text-white">{pillar.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────── CTA BANNER ──────────────────── */}
      <section className="relative py-24 sm:py-32">
        <div className="divider-gold absolute top-0 inset-x-0" />

        {/* Glow */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 animate-glow-pulse"
          style={{ background: 'radial-gradient(ellipse at center, rgba(180,151,90,0.05) 0%, transparent 65%)' }}
        />

        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="tag-gold mx-auto mb-6 w-fit">Limited Availability</p>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Ready to{' '}
            <span className="text-gradient-gold">3× Your Revenue?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-500">
            Join realtors who replaced hope with a system. In 30 minutes we will map
            your exact growth roadmap — no obligation.
          </p>

          <div className="mx-auto mt-10 divider-gold w-32" />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex overflow-hidden rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 px-10 py-4 text-sm font-bold tracking-[0.1em] uppercase text-slate-950 shadow-gold-btn transition-all duration-300 hover:from-gold-400 hover:to-gold-500 hover:shadow-gold-lg active:scale-[0.97]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book My Free Discovery Call <ArrowRight className="h-4 w-4" />
              </span>
              <span className="absolute inset-0 shimmer-gold" />
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-warm-500/25 px-8 py-4 text-sm font-bold tracking-[0.1em] uppercase text-warm-400 transition-all duration-300 hover:border-warm-400/40 hover:text-warm-300 active:scale-[0.97]"
            >
              Watch Demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-5 text-xs text-slate-600 tracking-wide">
            Book · 30 min · Zero commitment
          </p>
        </div>
      </section>
    </div>
  );
}
