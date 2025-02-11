import Hero from '@/components/sections/Hero';
import Content1 from '@/components/sections/Content1';
import Content2 from '@/components/sections/Content2';
import Content3 from '@/components/sections/content3';
import CTASection from '@/components/sections/CTASection'; // Yeni eklenen bileşen

export default function Home() {
  return (
    <>
      <Hero />
      <Content1 />
      <Content2 />
      <Content3 />
      <CTASection /> {/* CTA bölümü burada veya uygun gördüğünüz başka bir konumda */}
    </>
  );
}
