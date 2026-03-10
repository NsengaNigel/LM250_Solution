'use client';

import { useState } from 'react';
import { TrendingUp, DollarSign, ArrowRight } from 'lucide-react';
import { ROI_CONFIG } from '@/lib/constants';
import Link from 'next/link';

function formatCurrency(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  return `$${value.toLocaleString()}`;
}

export default function ROICalculator() {
  const [revenue, setRevenue] = useState(250_000);
  const [adminHours, setAdminHours] = useState(20);

  const projectedRevenue = revenue * ROI_CONFIG.REVENUE_MULTIPLIER;
  const revenueGain = projectedRevenue - revenue;
  const costSavings =
    adminHours * ROI_CONFIG.HOURLY_ADMIN_RATE * 52 * ROI_CONFIG.COST_REDUCTION_PERCENT;
  const totalImpact = revenueGain + costSavings;

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 backdrop-blur-sm sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">Your ROI Estimate</h3>
        <p className="mt-1 text-sm text-slate-400">
          Adjust the sliders to see your projected impact.
        </p>
      </div>

      {/* Sliders */}
      <div className="space-y-6">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-slate-300">Current Annual Revenue</label>
            <span className="text-sm font-semibold text-blue-400">{formatCurrency(revenue)}</span>
          </div>
          <input
            type="range"
            min={50_000}
            max={2_000_000}
            step={10_000}
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-700 accent-blue-500"
          />
          <div className="mt-1 flex justify-between text-xs text-slate-500">
            <span>$50K</span>
            <span>$2M</span>
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-slate-300">
              Weekly Admin Hours
            </label>
            <span className="text-sm font-semibold text-blue-400">{adminHours} hrs/wk</span>
          </div>
          <input
            type="range"
            min={5}
            max={60}
            step={1}
            value={adminHours}
            onChange={(e) => setAdminHours(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-700 accent-blue-500"
          />
          <div className="mt-1 flex justify-between text-xs text-slate-500">
            <span>5 hrs</span>
            <span>60 hrs</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
          <div className="mb-1 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-emerald-400">
            <TrendingUp className="h-3.5 w-3.5" />
            3x Revenue Target
          </div>
          <div className="text-3xl font-extrabold text-emerald-400">
            {formatCurrency(projectedRevenue)}
          </div>
          <div className="mt-1 text-xs text-slate-400">
            +{formatCurrency(revenueGain)} vs. today
          </div>
        </div>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
          <div className="mb-1 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-emerald-400">
            <DollarSign className="h-3.5 w-3.5" />
            Annual Cost Savings
          </div>
          <div className="text-3xl font-extrabold text-emerald-400">
            {formatCurrency(costSavings)}
          </div>
          <div className="mt-1 text-xs text-slate-400">70% of admin cost eliminated</div>
        </div>
      </div>

      {/* Total impact */}
      <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-blue-400">
          Total Annual Impact
        </p>
        <p className="mt-1 text-4xl font-extrabold text-white">{formatCurrency(totalImpact)}</p>
      </div>

      {/* CTA */}
      <Link
        href="/contact"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-95"
      >
        Book Discovery Call
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
