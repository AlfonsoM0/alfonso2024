import { Metadata, Viewport } from 'next';
import lang from '@config/MainPage_lang';

const { presentation_p, talents, talents_ul, contactMe, contactMe_ul, lenguagesAndTools_ul } =
  lang.en;
const APP_DESCRIPTION = `${presentation_p} ${talents} ${talents_ul}. ${contactMe} ${contactMe_ul.map(
  (c) => c.href
)}`;
const APP_KEYWORDS = lenguagesAndTools_ul.map((t) => t.name).toString();

const APP_NAME = 'AlfonsoM0 PWA';
const APP_DEFAULT_TITLE = 'AlfonsoM0 | Web Developer';
const APP_TITLE_TEMPLATE = 'AlfonsoM0 | %s';

const APP_URL =
  process.env.NODE_ENV === 'development'
    ? (process.env.NEXT_PUBLIC_URL_DEV as string)
    : (process.env.NEXT_PUBLIC_URL_PRO as string);

export const app_metadata: Metadata = {
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS,
  icons: {
    icon: '/android-chrome-192x192.png',
    shortcut: '/android-chrome-512x512.png',
    apple: '/apple-touch-icon.png',
  },

  referrer: 'origin-when-cross-origin',
  authors: {
    name: 'Alfonso Montes de Oca',
    url: 'https://alfonso.ar',
  },
  creator: 'Alfonso Montes de Oca',
  publisher: 'Alfonso Montes de Oca',
  other: {
    copyright: 'Alfonso Montes de Oca 2024',
    'google-site-verification': 'XInUIoYTIBs7hqs_KjI3HKcGhLb-2WkHM3DD7zWga6Y',
    'reply-to': 'montesdeoca.alfonso.dev+alfonsoweb@gmail.com',
    'theme-color': '#003566',
    'msapplication-TileColor': '#003566',
    'apple-mobile-web-app-status-bar': '#003566',
  },
  robots: 'all, follow, index',
  metadataBase: new URL(APP_URL),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es-AR': '/es-AR',
    },
  },

  //PWA
  manifest: '/manifest.json',

  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },

  openGraph: {
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    type: 'website',
    siteName: APP_NAME,
    description: APP_DESCRIPTION,
    url: APP_URL,
    images: ['https://alfonso.ar/favicon.ico'],
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const app_viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};
