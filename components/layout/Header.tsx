'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';
import { useCallback } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  
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
    // Immediately start prefetching when component mounts
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

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: 'Eğitim', href: '/egitim' },
    { name: 'Kayıt', href: '/kayit' },
    { name: 'Araştırma', href: '/arastirma' },
    { name: 'RFRNS Hakkında', href: '/hakkinda' },
  ];

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full",
      isScrolled 
        ? "bg-background/25 backdrop-blur-md" 
        : mobileMenuOpen ? "bg-transparent" : "bg-transparent"
    )}>
      <nav className={cn(
        "mx-auto flex max-w-7xl items-center justify-between gap-8 p-3 lg:px-4",
        mobileMenuOpen && "relative z-[60]"
      )} aria-label="Global">
        <div className="flex lg:w-64 max-w-[189px] lg:max-w-[230px] pl-3 sm:pl-4">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src={mounted ? (theme === 'dark' ? '/logo-white.svg' : '/logo.svg') : '/logo.svg'}
              alt="Logo" 
              width={270}
              height={90} 
              priority
              className={cn(
                "text-foreground transition-none",
                "w-[189px] lg:w-[230px]"
              )}
              fetchPriority="high"
              loading="eager"
            />
          </Link>
        </div>
        <div className="flex lg:hidden justify-end w-14">
          <Button
            variant="ghost"
            size="icon"
            className={cn("w-14 h-14 flex items-center justify-center relative", {
              "text-foreground hover:text-muted-foreground": isScrolled || theme === 'light',
              "text-white hover:text-white/80": !isScrolled && theme === 'dark'
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn("text-lg font-semibold leading-6", {
                "text-foreground hover:text-muted-foreground": isScrolled || theme === 'light',
                "text-white hover:text-white/80": !isScrolled && theme === 'dark'
              })}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:w-64 lg:justify-end lg:gap-x-4">
          <div className="flex items-center gap-x-4">
          <Button
            variant="ghost"
            size="icon"
            className={cn({
              "text-foreground hover:text-muted-foreground": isScrolled || theme === 'light',
              "text-white hover:text-white/80": !isScrolled && theme === 'dark'
            })}
            onClick={() => setTheme(mounted && theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {mounted && (theme === 'dark' ? <Sun className="h-7.5 w-7.5" /> : <Moon className="h-7.5 w-7.5" />)}
          </Button>
          <Button 
            variant="secondary"
            className="text-xl px-8 py-6 font-semibold"
            onClick={() => window.location.href = 'https://apps.edu.rfrns.com/authn/login?next=%2F'}
          >
            Giriş Yap
          </Button>
          </div>
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