'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Temel',
    id: 'tier-basic',
    price: '₺299',
    description: 'Bireysel öğrenciler için temel öğrenme paketi.',
    features: [
      'Temel içeriklere erişim',
      '5GB depolama alanı',
      'Temel destek',
      'Temel analitikler',
      'Proje yönetim araçları',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    price: '₺599',
    description: 'Gelişmiş özellikler ve özel destek ile tam öğrenme deneyimi.',
    features: [
      'Tüm içeriklere sınırsız erişim',
      '50GB depolama alanı',
      'Öncelikli destek',
      'Gelişmiş analitikler',
      'Gelişmiş güvenlik',
      'Özel alan adı',
      'API erişimi',
    ],
    featured: true,
  },
  {
    name: 'Kurumsal',
    id: 'tier-enterprise',
    price: 'Özel',
    description: 'Kurumlar için özelleştirilmiş çözümler.',
    features: [
      'Sınırsız kullanıcı',
      'Sınırsız depolama',
      '7/24 özel destek',
      'Kurumsal analitikler',
      'Gelişmiş güvenlik',
      'Özel entegrasyonlar',
      'SLA garantisi',
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
            Kayıt
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            İhtiyacınıza en uygun planı seçin ve öğrenmeye hemen başlayın.
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
                className="mt-6 w-full"
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
      </div>
    </main>
  );
}