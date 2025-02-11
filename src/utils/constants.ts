export const SITE_NAME = 'Modern Next.js Application';
export const SITE_DESCRIPTION = 'A fully featured Next.js application with TypeScript, Tailwind CSS, and more';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const META_DEFAULTS = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  ogImage: `${SITE_URL}/og-image.jpg`,
  twitter: {
    handle: '@yourhandle',
    site: '@yoursite',
    cardType: 'summary_large_image',
  },
} as const;