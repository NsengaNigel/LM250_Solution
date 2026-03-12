import {
  ArrowRight,
  BrainCircuit,
  CalendarCheck,
  FileBarChart,
  MessageSquareText,
  PhoneCall,
  Users,
  Zap,
} from 'lucide-react';
import { CALENDLY_URL } from '@/lib/constants';

const solutions = [
  {
    icon: BrainCircuit,
    category: 'Revenue Engine',
    title: 'AI Lead Qualification',
    description:
      'Our AI scores every inbound lead in real time so your time goes to prospects who are ready to act, not those who are just browsing.',
    bullets: ['Behavioral intent scoring', 'Automated lead segmentation', 'Real-time CRM sync'],
    accent: 'gold',
  },
  {
    icon: MessageSquareText,
    category: 'Revenue Engine',
    title: 'Hyper-Personalized Nurture Sequences',
    description:
      'AI-crafted email and SMS sequences that adapt to each lead\'s behavior, timeline, and property preferences.',
    bullets: [
      'Dynamic message personalization',
      'Multi-channel drip campaigns',
      'Optimal send-time optimization',
    ],
    accent: 'gold',
  },
  {
    icon: CalendarCheck,
    category: 'Cost Elimination',
    title: 'Automated Scheduling & Follow-Up',
    description:
      'Never lose a lead to a missed follow-up. Our system books showings, sends reminders, and reschedules without you lifting a finger.',
    bullets: [
      'Two-way calendar integration',
      'Automated showing confirmations',
      'Smart rescheduling flows',
    ],
    accent: 'warm',
  },
  {
    icon: FileBarChart,
    category: 'Cost Elimination',
    title: 'Automated Reporting & Admin',
    description:
      'Replace hours of manual reporting with instant dashboards. Market stats, pipeline health, and client summaries generated automatically.',
    bullets: ['Daily performance dashboards', 'Automated CMA generation', 'Pipeline health alerts'],
    accent: 'warm',
  },
  {
    icon: PhoneCall,
    category: 'Market Domination',
    title: 'AI-Powered Outreach Engine',
    description:
      'Proactively target expired listings, FSBOs, and sphere-of-influence contacts with personalized, timely outreach at scale.',
    bullets: ['Expired & FSBO targeting', 'SOI re-engagement campaigns', 'Market shift alerts'],
    accent: 'warm',
  },
  {
    icon: Users,
    category: 'Market Domination',
    title: 'Referral & Reputation Automation',
    description:
      'Turn every closed deal into a referral machine. Automated review requests, referral nudges, and VIP client programs.',
    bullets: [
      'Google & Zillow review automation',
      'Referral tracking & attribution',
      'Client anniversary campaigns',
    ],
    accent: 'warm',
  },
];

const accentStyles = {
  gold: {
    badge: 'bg-gold-500/10 text-gold-400 border-gold-500/20',
    icon: 'bg-gold-600/10 text-gold-400 ring-gold-500/20',
    bullet: 'bg-gold-500',
    border: 'hover:border-gold-500/40',
  },
  warm: {
    badge: 'bg-warm-500/10 text-warm-400 border-warm-500/20',
    icon: 'bg-warm-600/10 text-warm-400 ring-warm-500/20',
    bullet: 'bg-warm-500',
    border: 'hover:border-warm-500/40',
  },
};

export default function SolutionsPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gold-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400">
            <Zap className="h-3.5 w-3.5" />
            Full-Stack AI Solutions
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Dominate Your Market
            </span>
          </h1>
          <p className="mt-5 text-lg text-slate-400">
            Six integrated AI modules that cover the entire growth equation from first lead touch to
            referral flywheel.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => {
              const style = accentStyles[s.accent as keyof typeof accentStyles];
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className={`group rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 transition-all ${style.border} hover:bg-slate-900/70 sm:p-7`}
                >
                  <div
                    className={`mb-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${style.badge}`}
                  >
                    {s.category}
                  </div>
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition-colors ${style.icon}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{s.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-400">{s.description}</p>
                  <ul className="space-y-1.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-xs text-slate-400">
                        <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${style.bullet}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-white">Ready to See It in Action?</h2>
          <p className="mt-4 text-slate-400">
            Book a 30-minute discovery call and we will build your custom AI roadmap free.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gold-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold-600/25 transition-all hover:bg-gold-500 active:scale-95"
          >
            Book Discovery Call <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
