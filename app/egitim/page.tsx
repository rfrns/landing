'use client';

import { Check, Zap, Shield, Cloud, Cpu, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    name: 'Anlayarak Öğrenme',
    description: 'Modern öğrenme metodları ile kalıcı öğrenme deneyimi.',
    icon: Zap,
  },
  {
    name: 'Kişiselleştirilmiş',
    description: 'Her öğrencinin kendi hızında ilerleyebileceği özel programlar.',
    icon: Shield,
  },
  {
    name: 'Her Yerden Erişim',
    description: 'Bulut tabanlı sistem ile istediğiniz yerden çalışma imkanı.',
    icon: Cloud,
  },
  {
    name: 'Güncel İçerik',
    description: 'Sürekli güncellenen ve zenginleştirilen eğitim materyalleri.',
    icon: Code2,
  },
  {
    name: 'Yapay Zeka Destekli',
    description: 'Kişiselleştirilmiş öğrenme deneyimi için AI teknolojisi.',
    icon: Cpu,
  },
];

const tiers = [
  {
    name: 'Temel Özellikler',
    features: [
      'Konu anlatımları',
      'Örnek çözümleri',
      'Temel testler',
      'Mobil erişim',
      'Soru çözümleri',
    ],
  },
  {
    name: 'Gelişmiş Özellikler',
    features: [
      'Canlı dersler',
      'Birebir mentorluk',
      'İleri seviye içerikler',
      'Özel grup çalışmaları',
      'Proje desteği',
    ],
  },
];

export default function Egitim() {
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