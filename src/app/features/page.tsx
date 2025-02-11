'use client';

import { Check, Zap, Shield, Cloud, Cpu, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Built on Next.js for optimal performance and SEO.',
    icon: Zap,
  },
  {
    name: 'Secure by Default',
    description: 'Enterprise-grade security with automatic updates.',
    icon: Shield,
  },
  {
    name: 'Cloud Native',
    description: 'Seamlessly deploy to any cloud platform.',
    icon: Cloud,
  },
  {
    name: 'Modern Stack',
    description: 'Using the latest web technologies and best practices.',
    icon: Code2,
  },
  {
    name: 'AI-Powered',
    description: 'Intelligent features powered by machine learning.',
    icon: Cpu,
  },
];

const tiers = [
  {
    name: 'Basic Features',
    features: [
      'Server-side Rendering',
      'Static Site Generation',
      'API Routes',
      'TypeScript Support',
      'CSS Modules',
    ],
  },
  {
    name: 'Advanced Features',
    features: [
      'Incremental Static Regeneration',
      'Middleware Support',
      'Image Optimization',
      'Internationalization',
      'Analytics',
    ],
  },
];

export default function Features() {
  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Eğitim
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Modern öğrenme yöntemleri ve eğitim materyalleri ile kendinizi geliştirin.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded-2xl bg-muted p-8"
              >
                <div className="mb-6">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{feature.name}</h3>
                <p className="mt-2 text-xl text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl bg-muted p-8"
              >
                <h3 className="text-2xl font-semibold">{tier.name}</h3>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-xl">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}