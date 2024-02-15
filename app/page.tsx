import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';
import { title, subtitle } from '@/components/primitives';
import { GitHubIcon } from '@/components/icons';

import lang from '@config/MainPage_lang';
import { Metadata } from 'next';
import PageMain from '@/components/PageMain';
import BackgroundImg from '@/components/BackgroundImg';
import BG_Ray from '@public/image/BG_Ray.jpg';
import SpaceSun from '@public/image/SpaceSun.jpg';

const { presentation_p, talents, talents_ul, contactMe, contactMe_ul, lenguagesAndTools_ul } =
  lang.en;
const description = `${presentation_p} ${talents} ${talents_ul}. ${contactMe} ${contactMe_ul.map(
  (c) => c.href
)}`;
const keywords = lenguagesAndTools_ul.map((t) => t.name).toString();

export const metadata: Metadata = {
  title: {
    default: 'AlfonsoM0 | Web Developer',
    template: `%s - "AlfonsoM0"`,
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

export default function Home() {
  return (
    <>
      <BackgroundImg alt="Light Background" type="light" opacity={0.5} src={SpaceSun} />
      <BackgroundImg alt="Dark Background" type="dark" opacity={0.85} src={BG_Ray} />
      <PageMain />
    </>
  );
}
