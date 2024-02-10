import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';
import { title, subtitle } from '@/components/primitives';
import { GitHubIcon } from '@/components/icons';

import lang from '@config/MainPage_lang';
import { Metadata } from 'next';

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
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: 'violet' })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>websites regardless of your design experience.</h1>
        <h2 className={subtitle({ class: 'mt-4' })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({ color: 'primary', radius: 'full', variant: 'shadow' })}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.links.github}
        >
          <GitHubIcon Width={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
