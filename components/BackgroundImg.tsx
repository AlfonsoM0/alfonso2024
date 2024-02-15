'use client';

import { useTheme } from 'next-themes';
import Image, { StaticImageData } from 'next/image';
import { useIsSSR } from '@react-aria/ssr';
import { useEffect, useState } from 'react';

export default function BackgroundImg({
  src,
  alt,
  type,
  opacity = 1,
}: {
  src: StaticImageData;
  alt: string;
  type: 'dark' | 'light';
  opacity?: number;
}) {
  const isSSR = useIsSSR();
  const { theme } = useTheme();
  const [isShow, setIsShow] = useState<'visible' | 'hidden'>('hidden');

  useEffect(() => {
    const isDark = theme === 'dark';
    if (type === 'dark' && isDark) setIsShow('visible');
    else if (type === 'light' && !isDark) setIsShow('visible');
    else setIsShow('hidden');
  }, [isSSR, theme, type]);

  return (
    <Image
      priority
      alt={alt}
      src={src}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        visibility: isShow,
        opacity,
        zIndex: -1,
      }}
    />
  );
}
