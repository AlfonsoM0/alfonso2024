import '@/styles/globals.css';
import { Metadata } from 'next';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import { Link } from '@nextui-org/react';
import clsx from 'clsx';
import Footer from '@/components/footer';
import lang from '@config/MainPage_lang';

const { presentation_p, talents, talents_ul, contactMe, contactMe_ul, lenguagesAndTools_ul } =
  lang.en;
const description = `${presentation_p} ${talents} ${talents_ul}. ${contactMe} ${contactMe_ul.map(
  (c) => c.href
)}`;
const keywords = lenguagesAndTools_ul.map((t) => t.name).toString();

export const metadata: Metadata = {
  title: {
    default: 'AlfonsoM0 | Web Developer',
    template: `AlfonsoM0 | %s`,
  },
  description,
  keywords,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx('min-h-screen bg-transparent font-sans antialiased', fontSans.variable)}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
