'use client';

import { Users2, Target, Heart } from 'lucide-react';

const values = [
  {
    name: 'Mentor',
    description:
      'Öğrenciye, anlık rehberlik sağlayarak öğrenme sürecinde desteğini hissettiren akademik danışman ve öğrenci ortamı.',
    icon: Heart,
  },
  {
    name: 'Dinamik Akademik Kadro',
    description:
      'Her ders için istediği eğitmeni seçme özgürlüğü sunan, alanında uzman eğitimcilerden oluşan global bir kampüs.',
    icon: Target,
  },
  {
    name: 'Analiz',
    description:
      'Eğitimciler için istatistik tutarak, müfredat içeriğini ve öğrenci ilerleyişini dinamik bir şekilde takip eden öğrenim sistemi.',
    icon: Users2,
  },
];

const team = [
  {
    name: 'TechLab',
    role: 'Teknoloji ve Yazılım Kulübü',
    image: 'RU-referans-tech-lab.jpg',
  },
  {
    name: 'EdLab',
    role: 'Eğitim Metotları Laboratuvarı',
    image: 'RU-referans-edu-lab.jpg',
  },
  {
    name: 'İşe Yerleştirme',
    role: 'Yakında...',
    image: 'RU-referans-is-work.jpg',
  },
];

export default function Arastirma() {
  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            İlkelerimiz
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Eğitim teknolojileri ve öğrenme yöntemleri üzerine yaptığımız araştırmalarla
            geleceğin eğitim sistemini şekillendiriyoruz.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
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
              Kulüpler ve Laboratuvarlar
            </h2>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Ortak ilgi alanlarınız için buluşma noktanız
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