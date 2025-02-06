'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Temel',
    id: 'tier-basic',
    price: '299₺',
    description: 'Bireysel öğrenciler için temel öğrenme planı',
    features: [
      'Temel içeriklere erişim',
      'Temel destek',
      'Kampüs erişimi*',
    ],
    featured: false,
  },
  {
    name: 'Özel',
    id: 'tier-premium',
    price: '599₺',
    description: 'Gelişmiş özellikler ve kişisel destek ile yepyeni bir öğrenme deneyimi',
    features: [
      'Tüm içeriklere sınırsız erişim',
      'Öncelikli destek',
      'Kampüs+ erişimi**',
      'İndirilebilir içerik',
    ],
    featured: true,
  },
  {
    name: 'Kurumsal',
    id: 'tier-enterprise',
    price: 'Özel',
    description: 'Kurumlar için özelleştirilmiş çözümler',
    features: [
      'Sınırsız kullanıcı',
      '7/24 özel destek',
      'Kurumsal analitikler',
      'Özel entegrasyonlar',
      'Özel hesap yöneticisi',
    ],
    featured: false,
  },
];

export default function Kayit() {
  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Planlar ve Ücretlendirme
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            İhtiyacına en uygun planı seç, <span className="marker2">öğrenmeye hemen başla.</span>
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
                    Popüler
                  </span>
                )}
              </div>
              <p className="mt-4 text-xl leading-6 text-muted-foreground">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold">{tier.price}</span>
                {tier.price !== 'Özel' && (
                  <span className="text-xl font-semibold">/ay</span>
                )}
              </p>
              <Button
                variant={tier.featured ? 'secondary' : 'default'}
                className="mt-6 px-8 py-6 text-xl w-full font-semibold"
              >
                Hemen Başla
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
        <div className="mx-auto max-w-7xl text-left">
          <p className="mt-8 text-sm leading-5 text-muted-foreground">
            *   Kampüs erişimi sayesinde diğer öğrenciler ile iletişim kurabilirsiniz.<br />
            ** Kampüs+ erişimi, eğitmen ve öğrenciler ile anlık iletişim kurmanızı sağlar.
          </p>
        </div>
      </div>
    </main>
  );
}