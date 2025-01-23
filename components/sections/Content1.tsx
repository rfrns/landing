'use client';

import { Code2, Cpu, Shield } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const features = [
  {
    name: 'Dijital Kampüs',
    description: 'Referans, online eğitim ile dünyanın her yerinden ulaşılabilir akademik deneyim sunar.',
    icon: Code2,
    lightColors: {
      bg: '#134c91',
      iconBg: '#97e8f3',
      icon: '#134c91',
      name: '#134c91',
      description: '#97e8f3'
    },
    darkColors: {
      bg: '#281a16',
      iconBg: '#131313',
      text: '#ff4d00'
    }
  },
  {
    name: 'Geleceğin Eğitimi',
    description: 'En güncel eğitim metotları ve öğrenme araçları, öğrencinin anlayarak öğrenmesini destekler.',
    icon: Cpu,
    lightColors: {
      bg: '#25330f',
      iconBg: '#d2e8b9',
      icon: '#25330f',
      name: '#25330f',
      description: '#d2e8b9'
    },
    darkColors: {
      bg: '#212019',
      iconBg: '#131313',
      text: '#8e8768'
    }
  },
  {
    name: 'Kişisel',
    description: 'Sana özel kurgulanmış eğitim programlarıyla başarı hikâyen şekilleniyor.',
    icon: Shield,
    lightColors: {
      bg: '#28293c',
      iconBg: '#f5d4d2',
      icon: '#28293c',
      name: '#28293c',
      description: '#f5d4d2'
    },
    darkColors: {
      bg: '#311c31',
      iconBg: '#131313',
      text: '#fc73ff'
    }
  },
];

const Content1 = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mt-0">
          <h2 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-semibold leading-7 text-primary">Ne öğrenmek istiyorsan</h2>
          <p className="mt-2 sm:mt-4 text-[4.5rem] sm:text-7xl lg:text-8xl xl:text-[7rem] font-bold tracking-tight text-foreground leading-[0.9]">
            <span className="relative">
              Anlayarak
              <span 
                className="absolute -left-8 -right-8 -bottom-1 sm:-bottom-2 -z-10 h-full bg-no-repeat bg-[length:100%_0.4em] bg-[center_bottom_0.1em] bg-contain"
                style={{ backgroundImage: "url('/orange2-marker-line.svg')" }}
              />
            </span> öğren
          </p>
          <p className="mt-8 text-xl sm:text-xl lg:text-2xl leading-relaxed text-muted-foreground">
            Modern öğrenme metotları ile öğrenmek artık çok kolay ve etkili
          </p>
        </div>
        <div className="mt-16 sm:mt-20">
          <dl className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="relative rounded-[24px] pl-8 pr-16 py-10 h-[320px] flex flex-col"
                style={mounted ? {
                  backgroundColor: theme === 'dark' ? feature.darkColors.bg : feature.lightColors.bg,
                } : undefined}
              >
                <dt>
                  <div 
                    className="flex h-11 w-fit items-center rounded-full px-4"
                    style={mounted ? {
                      backgroundColor: theme === 'dark' ? feature.darkColors.iconBg : feature.lightColors.iconBg,
                    } : undefined}
                  >
                    <div className="flex items-center gap-2">
                      <feature.icon 
                        className="h-8 w-8 stroke-[2.5]" 
                        style={mounted ? {
                          color: theme === 'dark' ? feature.darkColors.text : feature.lightColors.icon,
                        } : undefined}
                        aria-hidden="true" 
                      />
                      <span 
                        className="text-[19px] font-bold tracking-tight"
                        style={mounted ? {
                          color: theme === 'dark' ? feature.darkColors.text : feature.lightColors.name,
                        } : undefined}
                      >{feature.name}</span>
                    </div>
                  </div>
                </dt>
                <dd 
                  className="mt-auto text-xl leading-7 font-medium"
                  style={mounted ? {
                    color: theme === 'dark' ? feature.darkColors.text : feature.lightColors.description,
                  } : undefined}
                >
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Content1;