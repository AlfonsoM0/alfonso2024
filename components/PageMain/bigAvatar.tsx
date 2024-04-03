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
      title="AlfonsoM0 avatar image"
      alt="AlfonsoM0 avatar image"
      className="infocard w-60 h-60 m-0 p-0 bg-transparent shadow-2xl shadow-black dark:shadow-white"
    />
  );
}
