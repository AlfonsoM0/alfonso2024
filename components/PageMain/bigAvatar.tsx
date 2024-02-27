'use client';

import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/react';
import yoFormal1 from '@public/image/yo-formal-1.webp';
import yoFormal2 from '@public/image/yo-formal-2.webp';
import { useTheme } from 'next-themes';

export default function BigAvatar() {
  const { theme } = useTheme();

  return (
    <Avatar
      src={theme === 'light' ? yoFormal2.src : yoFormal1.src}
      alt="AlfonsoM0 avatar"
      className="w-60 h-60 text-large bg-transparent shadow-2xl shadow-black dark:shadow-white hover:bg-[rgba(255,255,255,0.8)] hover:dark:bg-[rgba(0,0,0,0.5)] transition hover:delay-300"
    />
  );
}
