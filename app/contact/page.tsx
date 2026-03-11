import { ArrowRight, CalendarCheck, Clock, Shield, Mail } from 'lucide-react';
import { CALENDLY_URL } from '@/lib/constants';

const benefits = [
  { icon: CalendarCheck, text: 'Custom AI roadmap built for your market' },
  { icon: Clock, text: '30 minutes — no fluff, pure strategy' },
  { icon: Shield, text: 'No pressure, no obligation' },
  { icon: Mail, text: 'Get a follow-up action plan via email' },
];

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Book Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Free Discovery Call
            </span>
          </h1>
          <p className="mt-5 text-lg text-slate-400">
            In 30 minutes, we will identify exactly where your revenue is leaking and show you what
            your business looks like with LM250 running underneath it.
          </p>
        </div>
      </section>

      {/* CTA + benefits */}
      <section className="pb-28 sm:pb-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {/* Primary CTA card */}
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 text-center sm:p-12">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/10 text-blue-400">
                <CalendarCheck className="h-8 w-8" />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-white">Pick a Time That Works for You</h2>
              <p className="mb-7 text-slate-400">
                Click below to open our calendar and choose a 30-minute slot. We look forward to
                talking soon.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-95"
              >
                Schedule on Calendly <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-4 text-xs text-slate-500">
                Opens in a new tab · No spam · No sales pressure
              </p>
            </div>

            {/* Benefits */}
            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 sm:p-8">
              <h3 className="mb-5 font-bold text-white">What to Expect on the Call</h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {benefits.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="pt-1 text-sm text-slate-300">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantee */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-400">
                90-Day Guarantee
              </p>
              <p className="text-sm leading-relaxed text-slate-400">
                If you do not see measurable improvement in revenue or admin efficiency within 90
                days of going live, we refund every dollar. Zero risk.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
