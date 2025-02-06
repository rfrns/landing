'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!mobileMenuOpen) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);
  
  const prefetchPages = useCallback(async () => {
    const pages = [
      '/',
      '/egitim',
      '/kayit',
      '/arastirma',
      '/hakkinda'
    ];
    
    pages.forEach(page => {
      if (page !== pathname) {
        void router.prefetch(page);
      }
    });
  }, [router, pathname]);

  useEffect(() => {
    prefetchPages();
    const prefetchWithPriority = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => void prefetchPages(), { timeout: 2000 });
      } else {
        setTimeout(() => void prefetchPages(), 200);
      }
    };
    prefetchWithPriority();
  }, [prefetchPages]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      setIsScrolled(false);
    } else {
      document.body.style.overflow = '';
      setIsScrolled(window.scrollY > 50);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navigation = [
    { name: 'Eğitim', href: '/egitim' },
    { name: 'Kayıt', href: '/kayit' },
    { name: 'İlkelerimiz', href: '/arastirma' },
    { name: 'İletişim', href: '/hakkinda' },
  ];

  if (!mounted) {
    return (
      <header className="fixed top-0 z-50 w-full bg-transparent">
        <nav className="mx-auto flex items-center justify-between p-3 lg:px-8">
          <div className="flex lg:w-64 max-w-[189px] lg:max-w-[230px] pl-3 sm:pl-4">
            <div className="h-[30px] w-[189px] lg:w-[230px] bg-muted animate-pulse" />
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full",
      isScrolled 
        ? "bg-background/40 backdrop-blur-md" 
        : mobileMenuOpen ? "bg-transparent" : "bg-transparent"
    )}>
      {/* Mobil görünüm */}
      <nav className={cn(
        "lg:hidden flex items-center justify-between p-3",
        mobileMenuOpen && "relative z-[60]"
      )} aria-label="Global">
        <div className="flex max-w-[189px] pl-3">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src={resolvedTheme === 'dark' ? '/logo-white.svg' : '/logo.svg'}
              alt="Logo" 
              width={270}
              height={90} 
              priority
              className="w-[189px] text-foreground transition-none"
              fetchPriority="high"
              loading="eager"
            />
          </Link>
        </div>
        <div className="flex justify-end w-14">
          <Button
            variant="ghost"
            size="icon"
            className={cn("w-14 h-14 flex items-center justify-center relative", {
              "text-foreground hover:text-muted-foreground": isScrolled || resolvedTheme === 'light',
              "text-white hover:text-white/80": !isScrolled && resolvedTheme === 'dark'
            })}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-9 w-9" />
            ) : (
              <Menu className="h-9 w-9" />
            )}
          </Button>
        </div>
      </nav>

      {/* Desktop görünüm */}
      <nav className="hidden lg:flex w-full items-center justify-between px-8 py-3" aria-label="Global">
        {/* Logo - Sol */}
        <div className="flex items-center">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src={resolvedTheme === 'dark' ? '/logo-white.svg' : '/logo.svg'}
              alt="Logo" 
              width={270}
              height={90} 
              priority
              className="w-[230px] text-foreground transition-none"
              fetchPriority="high"
              loading="eager"
            />
          </Link>
        </div>

        {/* Menü - Orta */}
        <div className="flex justify-center gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn("text-lg font-semibold leading-6 transition-colors duration-200", {
                "lg:text-muted-foreground lg:hover:text-foreground": isScrolled || resolvedTheme === 'light', 
                "lg:text-gray-400 lg:hover:text-white": !isScrolled && resolvedTheme === 'dark'
              })}              
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Butonlar - Sağ */}
<div className="flex items-center gap-x-4">
  {/* Tema Değiştirme Butonu */}
  <Button
    variant="ghost"
    size="icon"
    className={cn("transition-colors duration-200", {
      "lg:text-muted-foreground lg:hover:text-foreground": isScrolled || resolvedTheme === 'light',
      "lg:text-gray-400 lg:hover:text-white": !isScrolled && resolvedTheme === 'dark'
    })}
    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    aria-label="Toggle theme"
  >
    {resolvedTheme === 'dark' ? <Sun className="h-7.5 w-7.5" /> : <Moon className="h-7.5 w-7.5" />}
  </Button>

  {/* Giriş Yap Butonu */}
  <Button 
    variant="secondary"
    className={cn("text-xl px-8 py-6 font-semibold transition-colors duration-200", {
      "lg:text-muted-foreground lg:hover:text-foreground": isScrolled || resolvedTheme === 'light',
      "lg:text-gray-400 lg:hover:text-white": !isScrolled && resolvedTheme === 'dark'
    })}
    onClick={() => window.location.href = 'https://apps.edu.rfrns.com/authn/login?next=%2F'}
  >
    Giriş Yap
  </Button>
</div>

      </nav>
      
      <MobileMenu 
        open={mobileMenuOpen}
        setOpen={setMobileMenuOpen}
        navigation={navigation}
      />
    </header>
  );
};

export default Header;