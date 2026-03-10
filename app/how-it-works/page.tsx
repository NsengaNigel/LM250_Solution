import Link from 'next/link';
import { ArrowRight, ClipboardList, Plug, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Discovery & Audit',
    duration: 'Week 1',
    description:
      'We map your current revenue pipeline, admin workflows, and market positioning. You leave with a clear picture of where you are losing money and time.',
    deliverables: ['Full business audit report', 'Revenue leak analysis', 'Custom AI roadmap'],
  },
  {
    number: '02',
    icon: Plug,
    title: 'AI System Build & Integration',
    duration: 'Weeks 2-3',
    description:
      'Our team configures your AI stack, connects your CRM, MLS, and communication tools, and builds the automation workflows tailored to your business.',
    deliverables: [
      'CRM & MLS integration',
      'Lead qualification AI live',
      'Nurture sequences activated',
    ],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Onboarding',
    duration: 'Week 4',
    description:
      'Go live with a dedicated launch session. We train you and your team, run live tests on real leads, and ensure every system is firing correctly.',
    deliverables: ['Live system walkthrough', 'Team training session', 'First lead through automation'],
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Optimize & Scale',
    duration: 'Ongoing',
    description:
      'Monthly performance reviews, A/B testing, and continuous model tuning keep your results compounding. We grow with you as your business scales.',
    deliverables: ['Monthly ROI reporting', 'Continuous AI model tuning', 'Quarterly strategy sessions'],
  },
];

const faqs = [
  {
    q: 'How long until I see results?',
    a: 'Most clients see measurable lead response improvement within the first 2 weeks. Full revenue impact typically compounds over 60 to 90 days as the AI learns your pipeline.',
  },
  {
    q: 'Do I need to replace my existing CRM?',
    a: 'No. We integrate with the tools you already use including Follow Up Boss, Kvcore, HubSpot, and most major real estate CRMs.',
  },
  {
    q: 'How much of my time does setup require?',
    a: 'We do the heavy lifting. You will need roughly 3 to 4 hours for discovery and onboarding sessions. After that, the system runs autonomously.',
  },
  {
    q: 'What if it does not work for my market?',
    a: 'We offer a results guarantee. If you do not see measurable improvement within 90 days, you get a full refund — no questions asked.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Live in{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              14 Days.
            </span>{' '}
            Results in 30.
          </h1>
          <p className="mt-5 text-lg text-slate-400">
            A battle-tested four-step process that gets your AI revenue engine up and running fast
            with zero guesswork.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-blue-600/50 via-slate-700 to-transparent md:block" />
            <div className="space-y-10">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative flex gap-6 md:gap-10">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-600/10 text-blue-400 shadow-lg shadow-blue-600/10">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="flex-1 rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 pb-7">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="text-3xl font-extrabold text-slate-700">{step.number}</span>
                        <span className="rounded-full border border-slate-600 px-3 py-0.5 text-xs font-medium text-slate-400">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                      <p className="mb-5 text-sm leading-relaxed text-slate-400">{step.description}</p>
                      <ul className="space-y-1.5">
                        {step.deliverables.map((d) => (
                          <li key={d} className="flex items-center gap-2.5 text-sm text-slate-300">
                            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-800 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-slate-700/50 bg-slate-900/40 p-5 sm:p-6"
              >
                <h3 className="mb-2 font-semibold text-white">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-white">Start Your 14-Day Setup</h2>
          <p className="mt-4 text-slate-400">
            Book a discovery call and we will have your AI system live before the end of the month.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 active:scale-95"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
