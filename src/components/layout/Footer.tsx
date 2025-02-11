'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { BrandTiktok } from '@/components/ui/icons';
import { useIntercom } from '@/hooks/useIntercom';


const Footer = () => {
  useIntercom();

  const footerNavigation = {
    main: [
      { name: 'Eğitim', href: '/egitim' },
      { name: 'Kayıt', href: '/kayit' },
      { name: 'İlkelerimiz', href: '/arastirma' },
      { name: 'İletişim', href: '/hakkinda' },
    ],
    legal: [
      { name: 'Gizlilik Politikası', href: '/privacy' },
      { name: 'Kullanım Şartları', href: '/terms' },
    ],
    social: [
      { name: 'Instagram', href: 'https://instagram.com/rfrncedu', icon: Instagram },
      { name: 'Twitter', href: 'https://twitter.com/rfrncedu', icon: Twitter },
      { name: 'TikTok', href: 'https://tiktok.com/@rfrncedu', icon: BrandTiktok },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/rfrncedu', icon: Linkedin },
      { name: 'Facebook', href: 'https://facebook.com/rfrncedu', icon: Facebook },
      { name: 'YouTube', href: 'https://youtube.com/@rfrncedu', icon: Youtube },
    ],
  };

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12 text-center" aria-label="Footer">
          {footerNavigation.main.map((item) => (
            <div key={item.name} className="pb-6 w-full sm:w-auto">
              <Link href={item.href} className="text-xl leading-6 text-muted-foreground hover:text-foreground font-bold">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4 max-w-4xl mx-auto">
          {footerNavigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label={`${item.name} social link`}
            >
              <item.icon className="h-9 w-9 sm:h-11 sm:w-11 md:h-13 md:w-13" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <nav className="mt-8 flex justify-center space-x-6 text-center">
          {footerNavigation.legal.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs leading-6 text-muted-foreground hover:text-foreground text-center"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} Referans, Inc. All rights reserved.
        </p>
        <div className="flex justify-center mt-8">
  <Link href="/hakkinda">
    <img
      src="/REFERANS-TECHLAB-LOGO-HOR.svg"
      alt="Referans Techlab Logo"
      className="w-36"
    />
  </Link>
</div>
      </div>
    </footer>
  );
};

export default Footer;