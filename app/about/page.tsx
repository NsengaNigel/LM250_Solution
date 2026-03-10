import Link from 'next/link';
import { ArrowRight, Target, Heart, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results Over Promises',
    description:
      'We measure success in revenue added and hours saved, not slide decks. Every feature we build ties directly to your bottom line.',
  },
  {
    icon: Lightbulb,
    title: 'Relentless Innovation',
    description:
      'The AI landscape moves fast. We stay ahead so your competitive edge never dulls. New models, new automations, new advantages continuously.',
  },
  {
    icon: Heart,
    title: 'Partnership, Not Vendor',
    description:
      'When you win, we win. Our model is built around your long-term growth, which is why we offer guarantees that most SaaS companies refuse to touch.',
  },
];

const stats = [
  { value: '3x', label: 'Average Revenue Increase' },
  { value: '70%', label: 'Admin Cost Reduction' },
  { value: '14 days', label: 'Average Time to Live' },
  { value: '90-day', label: 'Results Guarantee' },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Built by Operators,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              for Realtors
            </span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            LM250 was founded on a simple observation: real estate agents are entrepreneurial,
            driven, and talented but buried in work that software should be doing. We built the
            system we wished existed.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 sm:p-12">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-blue-400">
              Our Mission
            </p>
            <blockquote className="mt-4 text-center text-2xl font-bold leading-snug text-white sm:text-3xl">
              &ldquo;To give every realtor access to the AI infrastructure that was previously only
              available to the top 1% of brokerages.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-slate-800 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-700/50 bg-slate-900/40 p-5 text-center"
              >
                <div className="text-3xl font-extrabold text-white sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-slate-800 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-8 text-3xl font-extrabold text-white">The Story Behind LM250</h2>
          <div className="space-y-5 leading-relaxed text-slate-400">
            <p>
              Real estate is one of the most relationship-driven industries in the world but
              somewhere along the way, agents started drowning in administrative tasks, chasing cold
              leads, and manually following up with hundreds of contacts.
            </p>
            <p>
              The agents who were thriving had something the others did not: systems. Automated
              workflows, intelligent lead routing, consistent follow-up. They were not working
              harder, they were working with leverage.
            </p>
            <p>
              LM250 was created to democratize that leverage. We built an AI infrastructure layer
              that plugs directly into any realtor's existing business with no technical knowledge
              required and no six-figure tech budget needed.
            </p>
            <p>
              The name LM250 stands for our core belief:{' '}
              <span className="font-semibold text-white">
                leverage multiplied by 250 working hours a year
              </span>{' '}
              is how you build a business that does not depend on you being available every minute
              of every day.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-slate-800 py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-white">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 sm:p-7"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 ring-1 ring-blue-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-bold text-white">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-white">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-slate-400">
            A 30-minute call is all it takes to see if LM250 is the right fit for your business.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 active:scale-95"
          >
            Book Discovery Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
