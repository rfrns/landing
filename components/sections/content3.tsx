'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const sections = [
  {
    id: 1,
    title: 'Kişiselleştirilmiş Öğrenme Deneyimi',
    description: 'Yapay zeka destekli öğrenme asistanımız, sizin öğrenme hızınıza ve stilinize göre içerikleri özelleştiriyor. Böylece her öğrenci kendi potansiyelini maksimum düzeyde kullanabiliyor.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  },
  {
    id: 2,
    title: 'Interaktif Öğrenme Materyalleri',
    description: 'Zengin içerikli video dersler, etkileşimli alıştırmalar ve gerçek zamanlı geri bildirimlerle aktif ve eğlenceli bir öğrenme süreci ',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    title: 'Sürekli Gelişen İçerik',
    description: 'Eğitim içeriklerimiz, alanında uzman akademisyenler tarafından sürekli güncelleniyor ve genişletiliyor. En güncel bilgilere ve kaynaklara anında erişim sağlıyorsunuz.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
];

const Content3 = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setActiveSection(index);
          }
        });
      },
      {
        threshold: 0.7,
        root: null,
        rootMargin: "0px"
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.current?.observe(section);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="hidden lg:block bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex gap-12">
          {/* Sticky Image Container */}
          <div className="w-1/2 sticky top-32 h-[600px]">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={cn(
                  "absolute inset-0",
                  activeSection === index ? "block" : "hidden"
                )}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover rounded-[64px]"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Scrolling Content */}
          <div className="w-1/2">
            {sections.map((section, index) => (
              <div
                key={section.id}
                ref={el => sectionRefs.current[index] = el}
                className="min-h-[80vh] flex items-center"
              >
                <div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                    {section.title}
                  </h2>
                  <p className="mt-6 text-2xl sm:text-3xl leading-relaxed text-muted-foreground">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content3;