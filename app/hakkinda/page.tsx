'use client';

import { Mail, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    name: 'E-posta',
    description: 'Bize istediğiniz zaman e-posta gönderebilirsiniz',
    value: 'info@rfrns.com',
    icon: Mail,
  },
  {
    name: 'Canlı Destek',
    description: 'Destek ekibimizle anlık görüşün',
    value: '7/24 Hizmet',
    icon: MessageSquare,
  },
  {
    name: 'Telefon',
    description: 'Pazartesi-Cuma 09:00-18:00',
    value: '+90 216 545 6969',
    icon: Phone,
  },
];

export default function Hakkinda() {
  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            RFRNS Hakkında
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Modern eğitim teknolojileri ve yenilikçi öğrenme yöntemleriyle
            geleceğin eğitim sistemini inşa ediyoruz.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {contactMethods.map((method) => (
            <div
              key={method.name}
              className="flex flex-col rounded-2xl bg-muted p-8"
            >
              <div className="mb-6">
                <method.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{method.name}</h3>
              <p className="mt-2 text-lg text-muted-foreground">
                {method.description}
              </p>
              <p className="mt-4 text-xl font-medium">{method.value}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-2xl bg-muted p-8 sm:mt-20">
          <form>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium leading-6"
                >
                  Ad Soyad
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 bg-background px-3.5 py-2 shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary text-lg"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium leading-6"
                >
                  E-posta
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 bg-background px-3.5 py-2 shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary text-lg"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium leading-6"
                >
                  Mesaj
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-background px-3.5 py-2 shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary text-lg"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button type="submit" className="w-full">
                Mesaj Gönder
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}