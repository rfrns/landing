'use client';

import { useTheme } from '@/hooks/useTheme';
import { useState, useEffect } from 'react';

const CTASection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const gradient =
    theme === 'dark'
      ? 'linear-gradient(45deg, #000000, #2214a9, #000000)'  // Dark
      : 'linear-gradient(45deg, #3924fb, #3924fb, #b2b5fc)';  // Light 
  return (
    <section className="w-full">
      <div
        className="relative w-full aspect-square md:aspect-[4/1] overflow-hidden"
        style={{ backgroundImage: gradient }}
      >
        {/* Ek blur efektli katmanlar (örnekte sabit kalıyor) */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_35%_80%,rgba(255,255,255,0.2),transparent_40%)] blur-[50px]"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_75%_10%,rgba(0,0,0,0.5),transparent_40%)] blur-[50px]"></div>

        {/* İçerik */}
        <div className="relative z-10 flex items-center justify-center h-full w-full">
          <h2 className="text-white font-bold text-6xl sm:text-6xl md:text-7xl lg:text-7xl text-center px-4">
            Kampüs+ ile öğrenmeye başla
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
