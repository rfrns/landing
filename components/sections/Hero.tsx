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
            "object-cover object-center transition-opacity duration-1000",
            mounted ? "opacity-90" : "opacity-0"
          )}
          quality={100}
          sizes="100vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-b transition-opacity duration-1000 ${gradientClass}`} />
      </div>
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="relative z-10 mx-auto lg:mx-0 max-w-3xl text-center lg:text-left translate-y-8 sm:translate-y-0">
          <Button variant="secondary" className="rounded-full">
            <span className="mr-2 text-lg">En Yeni Metodlar</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
          
          <h1 className="mt-6 sm:mt-8 text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Yeni bir karar...
          </h1>
          
          <p className="mt-6 sm:mt-8 text-xl sm:text-2xl leading-relaxed text-muted-foreground">
            Hayatınızda iyileştirmeler yapmak veya faydalı bilgilerle kendinizi ödüllendirmek istiyorsanız,
            referansınız olabiliriz.
          </p>
          
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 sm:gap-x-8">
            <Button 
              size="lg" 
              className="text-xl px-8 py-6 w-[80%] sm:w-auto"
              asChild
            >
              <a href="https://apps.edu.rfrns.com/authn/register?next=%2F">
                Ücretsiz Kayıt Ol
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-xl px-8 py-6 w-full sm:w-auto">
              Daha fazla bilgi al <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;