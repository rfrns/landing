'use client';

import { Check, Zap, Shield, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    name: 'Anlayarak Öğrenme',
    description: 'Modern öğrenme metotları ile kalıcı öğrenme deneyimi.',
    icon: Zap,
  },
  {
    name: 'Kişiselleştirilmiş',
    description: 'Her öğrencinin kendi hızında ilerleyebileceği özel programlar.',
    icon: Shield,
  },
  {
    name: 'Her Yerden Erişim',
    description: 'Bulut tabanlı sistem ile istediğiniz yerden çalışma imkanı.',
    icon: Cloud,
  }
];

const tiers = [
  {
    name: 'Temel Özellikler',
    features: [
      'Konu anlatımları',
      'Örnek çözümleri',
      'Temel testler',
      'Mobil erişim',
      'Soru çözümleri',
    ],
  },
  {
    name: 'Gelişmiş Özellikler',
    features: [
      'Canlı dersler',
      'Birebir mentorluk',
      'İleri seviye içerikler',
      'Özel grup çalışmaları',
      'Proje desteği',
    ],
  },
];

export default function Egitim() {
  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-8 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Eğitim Vizyonumuz
          </h1>
          <p className="mt-12 text-2xl leading-8 text-muted-foreground">
          Referans ile eğitim neden farklı?<br />
          </p>
          <div className="text-2xl mt-12 text-left">
            <div className="font-serif">
            <p>
            Teknoloji, tarih boyunca eğitimi<span className="marker3">dönüştürdü.</span> Şimdi ise bu dönüşümlerin en büyüklerinden birine tanıklık ediyoruz.<br /><br />
  </p>

  <p>
  Burada; ezbere dayalı öğrenme, sıkıcı müfredatlar veya katı programlara <span className="marker3"><strong>yer yok.</strong></span><br /><br />
  </p>

  <p>
   <strong>Başarısı kanıtlanmış öğrenme metotları</strong> ve <strong>ileri teknoloji</strong>yi birleştirerek yalnızca ders içeriğini değil, öğrenmenin doğasını yeniden tanımlıyoruz.
   <br /><br />
  </p>

  <p>
    Eğitimi sil baştan tasarlayarak, <strong>üç temel bileşen</strong>den oluşan bir sistem geliştirdik:<br /><br />
  </p>

  <ul className="list-disc pl-5">
    <li>
    <span className="marker"><strong>Mentor </strong></span>– Öğrenciye, anlık rehberlik sağlayarak öğrenme sürecinde hiçbir zaman yalnız hissettirmeyen akademik danışman ve akran ortamı.<br /><br />
    </li>
    <li>
    <span className="marker2"><strong>Dinamik Akademik Kadro</strong></span>– Her ders için istediği eğitmeni seçme özgürlüğü sunan, alanında uzman eğitimcilerden oluşan global bir kampüs.<br /><br />
    </li>
    <li>
    <span className="marker"><strong>Analiz</strong></span> – Akademisyenler ve eğitimciler için eyleme yönelik istatistik tutarak, müfredat içeriğini ve öğrenci ilerlemesini dinamik bir şekilde takip eden öğrenme sistemi.<br /><br />
    </li>
  </ul>


  <p>
    İşte bu yüzden <strong>Referans</strong>, gerçek manada küresel ve tamamen dijital bir <span className="marker3">kampüs.</span>
    <br /><br />
    Ve biz, geleceğin <span className="marker3">bir numaralı</span> eğitim platformu olmaya kararlıyız.<br /><br />
  </p>
  </div>
  <p>
  <img src="/imza-ak.svg" alt="İmza" className="mt-4 w-[30rem]" />
  </p>
  <p className="text-lg mt-5">
  <span className="font-bold">Prof. Dr. Abdurrahim Karslı</span><br />
  
    Hukukçu, eğitimci
 
  </p>
  <p className="text-sm mt-4">
  <span className="font-bold">Eğitimin</span> geleceğine dair vizyonumuzu <span className="font-bold"><a href="/arastirma">“İlkelerimiz”</a></span> sayfasında okuyabilirsiniz.
  </p>

</div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded-2xl bg-muted p-8"
              >
                <div className="mb-6">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{feature.name}</h3>
                <p className="mt-2 text-xl text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl bg-muted p-8"
              >
                <h3 className="text-2xl font-semibold">{tier.name}</h3>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-xl">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}