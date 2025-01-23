'use client';

import { Users2, Target, Heart } from 'lucide-react';

const values = [
  {
    name: 'Öğrenci Odaklı',
    description:
      'Öğrencilerimizin başarısı bizim önceliğimizdir. Her adımda onların yanındayız.',
    icon: Heart,
  },
  {
    name: 'Yenilikçi',
    description:
      'Sürekli gelişen eğitim teknolojilerini takip eder ve en iyi çözümleri sunarız.',
    icon: Target,
  },
  {
    name: 'Takım Çalışması',
    description:
      'Birlikte öğrenmenin ve paylaşmanın gücüne inanıyoruz.',
    icon: Users2,
  },
];

const team = [
  {
    name: 'Prof. Dr. Halim Ulaş',
    role: 'Eğitim Direktörü',
    image: '/pp/prof-dr-halim-ulas.jpg',
  },
  {
    name: 'Doç. Dr. Ahmet Kavlak',
    role: 'Felsefe, Mantık ve Kavramlar',
    image: '/pp/doc-dr-ahmet-kavlak.jpg',
  },
  {
    name: 'Doç. Dr. Kasım Takım',
    role: 'Müfredat Uzmanı',
    image: '/pp/doc-dr-kasim-takim.jpg',
  },
  {
    name: 'Dr. Zeynep Arslan',
    role: 'Öğretim Tasarımcısı',
    image: '/pp/prof-dr-halim-ulas.jpg',
  },
  {
    name: 'Doç. Dr. Can Özkan',
    role: 'Veri Analisti',
    image: '/pp/prof-dr-halim-ulas.jpg',
  },
  {
    name: 'Dr. Elif Yıldız',
    role: 'Pedagoji Uzmanı',
    image: '/pp/prof-dr-halim-ulas.jpg',
  },
];

export default function Arastirma() {
  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Araştırma
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Eğitim teknolojileri ve öğrenme yöntemleri üzerine yaptığımız araştırmalarla
            geleceğin eğitim sistemini şekillendiriyoruz.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <value.icon
                      className="h-6 w-6 text-primary-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  {value.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-xl leading-7 text-muted-foreground">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Akademik Kadro
            </h2>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Alanında uzman akademisyenlerimiz ve araştırmacılarımızla eğitimde fark yaratıyoruz.
            </p>
          </div>
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((person) => (
              <li key={person.name}>
                <img
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={person.image}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl font-semibold leading-8">
                  {person.name}
                </h3>
                <p className="text-xl leading-7 text-muted-foreground">
                  {person.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}