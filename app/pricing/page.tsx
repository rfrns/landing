'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    price: '$29',
    description: 'Perfect for small projects and individual developers.',
    features: [
      'Up to 5 team members',
      '5GB of storage',
      'Basic support',
      'Basic analytics',
      'Project management tools',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    price: '$99',
    description: 'Ideal for growing teams and businesses.',
    features: [
      'Up to 20 team members',
      '20GB of storage',
      'Priority support',
      'Advanced analytics',
      'Advanced security',
      'Custom domains',
      'API access',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    price: 'Custom',
    description: 'For large organizations with specific requirements.',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      '24/7 dedicated support',
      'Enterprise analytics',
      'Advanced security',
      'Custom integrations',
      'SLA guarantee',
      'Dedicated account manager',
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Choose the perfect plan for your needs. All plans include core features.
          </p>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 ring-border xl:p-10 ${
                tier.featured ? 'bg-primary text-primary-foreground' : 'bg-muted'
              }`}
            >
              <div className="flex items-center justify-between gap-x-4 mb-4">
                <h3 className="text-2xl font-semibold leading-8">{tier.name}</h3>
                {tier.featured && (
                  <span className="rounded-full bg-primary-foreground/10 px-3 py-1.5 text-lg font-semibold text-primary-foreground">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-4 text-xl leading-6 text-muted-foreground">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold">{tier.price}</span>
                {tier.price !== 'Custom' && (
                  <span className="text-xl font-semibold">/month</span>
                )}
              </p>
              <Button
                variant={tier.featured ? 'secondary' : 'default'}
                className="mt-6 w-full"
              >
                Get started
              </Button>
              <ul className="mt-8 space-y-4 text-xl leading-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}