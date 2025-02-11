'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  navigation: Array<{ name: string; href: string }>;
}

const MobileMenu = ({ open, setOpen, navigation }: MobileMenuProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always render the menu but hide it when closed
  const menuContent = (
    <div className={cn(
      "fixed inset-0 z-[55] bg-background",
      open ? "block" : "hidden"
    )}>
      <div className="flex h-screen flex-col max-w-md mx-auto w-full">
        <div className="flex flex-1 flex-col px-6 pt-20">
          <div className="flex flex-col flex-1 justify-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-4xl font-bold text-left w-full",
                theme === 'dark' 
                  ? "text-white" 
                  : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-4 w-full mt-8">
            <button
              onClick={() => window.location.href = 'https://apps.edu.rfrns.com/authn/login?next=%2F'}
              className={cn(
                "w-full py-4 text-xl font-bold rounded-full",
                theme === 'dark'
                  ? "bg-white text-black"
                  : "bg-primary text-primary-foreground"
              )}
            >
              Giriş Yap
            </button>
          </div>
          <div className="flex justify-end mb-2 w-full">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(mounted && theme === 'dark' ? 'light' : 'dark')}
              className={cn(
                theme === 'dark'
                  ? "text-white"
                  : "text-foreground"
              )}
            >
              {mounted && (theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />)}
            </Button>
          </div>
          </div>
          <div className="pb-8">
          <div className="flex justify-between items-center mt-2 w-full">
            <p className={cn(
              "text-xs",
              theme === 'dark' ? "text-white/60" : "text-muted-foreground"
            )}>Referans topluluğu</p>
            <a 
              href="https://rfrns.com" 
              className={cn(
                "text-xs",
                theme === 'dark' ? "text-white/60" : "text-muted-foreground"
              )}
            >rfrns.com</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );

  return menuContent;
};

export default MobileMenu;