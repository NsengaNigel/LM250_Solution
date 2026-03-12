import ROICalculator from '@/components/shared/ROI-Calculator';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { CALENDLY_URL } from '@/lib/constants';

const guarantees = [
  '3x revenue target based on real client data',
  '70% admin cost reduction, verified by time audits',
  'Results or full refund within 90 days',
];

export default function ROICalculatorPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gold-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            See Your{' '}
            <span className="bg-gradient-to-r from-warm-400 to-warm-600 bg-clip-text text-transparent">
              Real Numbers
            </span>
          </h1>
          <p className="mt-5 text-lg text-slate-400">
            Adjust the sliders to model your exact situation. These projections are based on
            averages from our active client base.
          </p>
        </div>
      </section>

      {/* Calculator + context */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Main calculator */}
            <div className="lg:col-span-3">
              <ROICalculator />
            </div>

            {/* Supporting context */}
            <div className="flex flex-col gap-5 lg:col-span-2">
              <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6">
                <h3 className="mb-4 font-bold text-white">How We Calculate This</h3>
                <div className="space-y-4 text-sm text-slate-400">
                  <div>
                    <p className="font-semibold text-slate-200">3x Revenue Multiplier</p>
                    <p className="mt-1">
                      Based on the average revenue lift our clients achieve within 12 months of
                      going live with our AI qualification and nurture system.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">70% Cost Reduction</p>
                    <p className="mt-1">
                      Calculated from the admin hours automated, valued at $50/hr which is the
                      average outsourcing rate for real estate admin tasks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-warm-500/20 bg-warm-500/5 p-6">
                <h3 className="mb-4 font-bold text-white">Our Guarantees</h3>
                <ul className="space-y-3">
                  {guarantees.map((g) => (
                    <li key={g} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-400" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6">
                <h3 className="mb-2 font-bold text-white">Not sure about your numbers?</h3>
                <p className="mb-4 text-sm text-slate-400">
                  Book a discovery call and we will run a free audit of your current pipeline to
                  give you precise projections with no guesswork.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gold-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-gold-600/25 transition-all hover:bg-gold-500 active:scale-95"
                >
                  Book Discovery Call <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
