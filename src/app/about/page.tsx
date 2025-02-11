'use client';

import { Users2, Target, Heart } from 'lucide-react';

const values = [
  {
    name: 'Customer First',
    description:
      'We put our customers at the heart of everything we do. Their success is our success.',
    icon: Heart,
  },
  {
    name: 'Innovation',
    description:
      'We constantly push boundaries and embrace new technologies to deliver the best solutions.',
    icon: Target,
  },
  {
    name: 'Team Work',
    description:
      'We believe in the power of collaboration and working together to achieve great things.',
    icon: Users2,
  },
];

const team = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
  {
    name: 'Mike Johnson',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
];

export default function About() {
  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            We're a team of passionate individuals dedicated to creating amazing
            digital experiences.
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
              Our Team
            </h2>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Meet the people behind our success.
            </p>
          </div>
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((person) => (
              <li
                key={person.name}
              >
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