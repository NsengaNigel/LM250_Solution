export const ROI_CONFIG = {
  REVENUE_MULTIPLIER: 3,
  COST_REDUCTION_PERCENT: 0.70,
  HOURLY_ADMIN_RATE: 50,
} as const;

export const CALENDLY_URL = 'https://calendly.com/nigel-lm250solution-lm/30min';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
] as const;

export const PILLARS = [
  {
    id: 'revenue',
    title: 'Revenue Engine',
    description:
      'AI-powered lead qualification and nurturing that turns cold prospects into closed deals — automatically, 24/7.',
    icon: 'TrendingUp',
  },
  {
    id: 'cost',
    title: 'Cost Elimination',
    description:
      'Automate the administrative work that drains hours from your week. Stop paying for tasks a system can do better.',
    icon: 'Scissors',
  },
  {
    id: 'market',
    title: 'Market Domination',
    description:
      'Real-time market intelligence and hyper-personalized outreach that keeps you two steps ahead of every competitor.',
    icon: 'Globe',
  },
] as const;
