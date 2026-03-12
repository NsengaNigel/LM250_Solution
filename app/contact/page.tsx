import { ArrowRight, CalendarCheck, Clock, Shield, Mail, Instagram, Linkedin } from 'lucide-react';
import { CALENDLY_URL, CONTACT } from '@/lib/constants';

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
          <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gold-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Book Your{' '}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
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
            <div className="rounded-2xl border border-gold-500/20 bg-gold-500/5 p-8 text-center sm:p-12">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-600/10 text-gold-400">
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
                className="inline-flex items-center gap-2 rounded-xl bg-gold-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gold-600/25 transition-all hover:bg-gold-500 hover:shadow-gold-500/30 active:scale-95"
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
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gold-600/10 text-gold-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="pt-1 text-sm text-slate-300">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reach Us Directly */}
            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 sm:p-8">
              <h3 className="mb-5 font-bold text-white">Reach Us Directly</h3>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/40 px-4 py-3.5 transition-colors hover:border-gold-500/30 hover:bg-slate-800/70"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold-600/10 text-gold-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email</p>
                    <span className="text-sm font-medium text-slate-200">{CONTACT.email}</span>
                  </div>
                </a>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/40 px-4 py-3.5 transition-colors hover:border-gold-500/30 hover:bg-slate-800/70"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold-600/10 text-gold-400">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Instagram</p>
                    <span className="text-sm font-medium text-slate-200">@lm250.solutions</span>
                  </div>
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/40 px-4 py-3.5 transition-colors hover:border-gold-500/30 hover:bg-slate-800/70"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold-600/10 text-gold-400">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                    <span className="text-sm font-medium text-slate-200">Nigel Nsenga</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Guarantee */}
            <div className="rounded-2xl border border-warm-500/20 bg-warm-500/5 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-warm-400">
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
