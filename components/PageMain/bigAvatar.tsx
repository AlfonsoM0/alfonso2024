'use client';

import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/avatar';
import YoFormal from '@public/image/YoFormal.png';
import YoFormal2 from '@public/image/YoFormal2.png';
import { useTheme } from 'next-themes';

export default function BigAvatar() {
  const { theme } = useTheme();

  return (
    <Avatar
      src={theme === 'light' ? YoFormal2.src : YoFormal.src}
      alt="AlfonsoM0 avatar"
      className="w-60 h-60 text-large bg-transparent shadow-2xl shadow-black dark:shadow-white"
    />
  );
}
