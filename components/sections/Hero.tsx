'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [gradientClass, setGradientClass] = useState('from-white/40 via-transparent to-white/90');

  useEffect(() => {
    setMounted(true);
    setGradientClass(theme === 'dark' 
      ? 'from-black/60 via-transparent to-black/90'
      : 'from-white/40 via-transparent to-white/90'
    );
  }, [theme]);

  const backgroundImage = mounted && theme === 'dark' 
    ? '/hero-background-dark.jpg' 
    : '/hero-background-light.jpg';

  return (
    <div className="relative min-h-screen flex items-center pb-0 sm:pb-0 lg:items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          priority
          className={cn(
            "object-cover object-center",
            mounted ? "opacity-100" : "opacity-0"
          )}
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="relative z-10 mx-auto lg:mx-0 max-w-3xl text-center lg:text-left translate-y-8 sm:translate-y-0">
          <Button variant="secondary" className="rounded-full">
            <span className="mr-2 text-lg">Yeni bir sen için</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
          
          <h1 className="mt-6 sm:mt-8 text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl">
            Yeni bir karar.
          </h1>
          
          <p className="mt-6 sm:mt-8 text-xl sm:text-2xl leading-relaxed text-muted-foreground">
            Hayatını iyileştir, kendini geliştir. İspatlanmış metotlarla<br />
            geleceğin eğitimine<span className="marker"> şimdi başla.</span>
          </p>
          
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 sm:gap-x-8">
            <Button 
              size="lg" 
              className="text-xl px-8 py-6 w-[80%] sm:w-auto"
              asChild
            >
              <a href="https://apps.edu.rfrns.com/authn/register?next=%2F">
                Ücretsiz Hesap Aç
              </a>
            </Button>
            <Button
            variant="ghost"
            size="lg"
            className="text-xl px-8 py-6 w-full sm:w-auto"
            onClick={() => window.location.href = '/egitim'}>
              Eğitim vizyonumuz <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;