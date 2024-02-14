import '@/styles/globals.css';
import { Metadata } from 'next';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import Footer from '@/components/footer';
import BackgroundImg from '@/components/BackgroundImg';
import BG_Ray from '@public/image/BG_Ray.jpg';
import SpaceSun from '@public/image/SpaceSun.jpg';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx('min-h-screen bg-transparent font-sans antialiased', fontSans.variable)}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <BackgroundImg alt="Light Background" type="light" src={SpaceSun} />
          <BackgroundImg alt="Dark Background" type="dark" src={BG_Ray} />
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
