'use client';

import { useState } from 'react';
import { ArrowRight, CalendarCheck, Clock, Mail, Shield } from 'lucide-react';

const benefits = [
  { icon: CalendarCheck, text: 'Custom AI roadmap built for your market' },
  { icon: Clock, text: '30 minutes — no fluff, pure strategy' },
  { icon: Shield, text: 'No pressure, no obligation' },
  { icon: Mail, text: 'Get a follow-up action plan via email' },
];

type FormState = 'idle' | 'submitting' | 'success';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    revenue: '',
    message: '',
  });
  const [status, setStatus] = useState<FormState>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    // Replace with real API call
    setTimeout(() => setStatus('success'), 1200);
  }

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

      {/* Form + benefits */}
      <section className="pb-28 sm:pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/5 px-8 py-16 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <CalendarCheck className="h-8 w-8" />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-white">
                    You&apos;re on the calendar!
                  </h2>
                  <p className="text-slate-400">
                    Check your inbox for a confirmation and calendar invite. We look forward to
                    talking soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 sm:p-8"
                >
                  <h2 className="mb-6 text-lg font-bold text-white">Your Details</h2>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-300">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-300">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@realty.com"
                        className="w-full rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-300">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-300">
                        Current Annual Revenue
                      </label>
                      <select
                        name="revenue"
                        value={form.revenue}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="" className="bg-slate-900">
                          Select range
                        </option>
                        <option value="<100k" className="bg-slate-900">
                          Under $100K
                        </option>
                        <option value="100k-250k" className="bg-slate-900">
                          $100K to $250K
                        </option>
                        <option value="250k-500k" className="bg-slate-900">
                          $250K to $500K
                        </option>
                        <option value="500k-1m" className="bg-slate-900">
                          $500K to $1M
                        </option>
                        <option value=">1m" className="bg-slate-900">
                          $1M+
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Biggest challenge right now
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current bottlenecks — lead quality, admin time, follow-up, etc."
                      className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/30 disabled:opacity-60 active:scale-95"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Booking...
                      </>
                    ) : (
                      <>
                        Book My Discovery Call <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="mt-3 text-center text-xs text-slate-500">
                    No spam. No sales pressure. Just strategy.
                  </p>
                </form>
              )}
            </div>

            {/* Benefits sidebar */}
            <div className="flex flex-col gap-5 lg:col-span-2">
              <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6">
                <h3 className="mb-5 font-bold text-white">What to Expect</h3>
                <ul className="space-y-4">
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

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
                  90-Day Guarantee
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  If you do not see measurable improvement in revenue or admin efficiency within 90
                  days of going live, we refund every dollar. Zero risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
