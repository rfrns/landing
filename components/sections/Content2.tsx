'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const features = [
  'Hedefini belirle',
  'Planını yap',
  'Kendi hızında öğren',
];

const Content2 = () => {
  return (
    <div className="overflow-hidden bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 relative">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-xl font-semibold leading-7 text-primary">UbD ve TfU metodları ile</h2>
              <p className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Kolayca öğren
              </p>
              <p className="mt-8 text-xl sm:text-2xl leading-relaxed text-muted-foreground">
                En güncel öğrenme yöntemleriyle, anlayarak öğren uygulamada başarıyı yakala
              </p>
              <dl className="mt-12 max-w-xl space-y-6 text-lg leading-relaxed text-muted-foreground lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature} className="relative">
                    <dt className="inline font-semibold text-foreground">
                      <CheckCircle2 className="absolute left-1 top-1 h-6 w-6 text-primary" aria-hidden="true" />
                      <span className="ml-10 text-xl">{feature}</span>
                    </dt>
                  </div>
                ))}
              </dl>
              <div className="mt-12">
                <Button className="text-xl px-8 py-6">
                  Nasıl mı? <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="relative aspect-[16/9] w-full mx-auto lg:mx-0 bg-background/50 rounded-xl max-w-full">s
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;