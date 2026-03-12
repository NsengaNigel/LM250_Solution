import { ArrowRight, TrendingUp, Scissors, Globe, CheckCircle } from 'lucide-react';
import { PILLARS, CALENDLY_URL } from '@/lib/constants';

const pillarIcons = {
  TrendingUp,
  Scissors,
  Globe,
} as const;

const PROBLEMS = [
  'Chasing unqualified leads that waste days of your week',
  'Drowning in admin work instead of closing deals',
  'Losing listings to competitors who respond faster',
  'Revenue that is unpredictable, not scalable',
];

const SOLUTIONS = [
  'AI qualifies and nurtures leads on autopilot, 24/7',
  '70% of admin tasks automated — reclaim 20+ hours/week',
  'Instant, personalized follow-up the moment a lead appears',
  'Predictable, data-driven growth you can count on',
];

const STATS = [
  { value: '3x', label: 'Revenue Increase', color: 'text-gold-400' },
  { value: '70%', label: 'Cost Reduction', color: 'text-warm-400' },
  { value: '14 days', label: 'Time to Live', color: 'text-gold-400' },
  { value: '90-day', label: 'Guarantee', color: 'text-warm-400' },
];

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gold-600/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400">
            AI-Powered Real Estate Infrastructure
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            The AI Infrastructure That{' '}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              3x&apos;s Realtor Revenue
            </span>{' '}
            While Cutting Costs{' '}
            <span className="bg-gradient-to-r from-warm-400 to-warm-600 bg-clip-text text-transparent">
              70%
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Transform from hope-based to data-driven real estate. LM250 plugs an AI revenue engine
            directly into your business — so you close more, spend less, and scale without burning
            out.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-gold-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold-600/25 transition-all hover:bg-gold-500 hover:shadow-gold-500/30 active:scale-95"
            >
              Book Free Discovery Call <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-warm-500" /> No contracts
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-warm-500" /> Live in 14 days
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-warm-500" /> Results or refund
            </span>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-700/50 bg-slate-900/40 px-4 py-5"
              >
                <div className={`text-3xl font-extrabold ${s.color}`}>{s.value}</div>
                <div className="mt-1 text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem / Solution ───────────────────────────────────────────── */}
      <section className="border-t border-slate-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              The Real Estate Trap — And the Exit
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Most realtors are stuck in a cycle of grinding and hoping. LM250 replaces that with
              systems that work while you sleep.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">
              <h3 className="mb-5 text-lg font-bold text-red-400">Without LM250</h3>
              <ul className="space-y-3">
                {PROBLEMS.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 flex-shrink-0 rounded-full bg-red-500/20 p-0.5 text-red-400">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-warm-500/20 bg-warm-500/5 p-6 sm:p-8">
              <h3 className="mb-5 text-lg font-bold text-warm-400">With LM250</h3>
              <ul className="space-y-3">
                {SOLUTIONS.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 Pillars ────────────────────────────────────────────────────── */}
      <section className="border-t border-slate-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Three Pillars. One Outcome.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              LM250 is built on a proven framework that attacks revenue, cost, and competitive
              advantage simultaneously.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {PILLARS.map((pillar, i) => {
              const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons];
              return (
                <div
                  key={pillar.id}
                  className="group relative rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 transition-all hover:border-gold-500/40 hover:bg-slate-900/70 sm:p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-600/10 text-gold-400 ring-1 ring-gold-500/20 transition-colors group-hover:bg-gold-600/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Pillar {i + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="border-t border-slate-800 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to 3x Your Revenue?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Join realtors who replaced hope with a system. Book a free discovery call and see your
            custom growth roadmap in 30 minutes.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-gold-600/25 transition-all hover:bg-gold-500 hover:shadow-gold-500/30 active:scale-95"
          >
            Book My Free Discovery Call <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
