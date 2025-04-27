'use client';

import { Button } from '@components/ui/button';
import Link from 'next/link';
import useUserStore from '@/store/userStore';

import { Lang } from '@config/UtilsButtons_lang';

export default function PageUtils() {
  const { appIsEnglish } = useUserStore();
  const txt = appIsEnglish ? Lang.en : Lang.es;

  return (
    <>
      <h1 className="text-shadow-main text-4xl">Utils</h1>

      <div className="flex flex-col justify-center m-auto mt-4 max-w-sm">
        <Button variant={'outline'}>
          <Link href={'/u/wp'}>
            <strong>{txt.btn1_wp}</strong>
          </Link>
        </Button>
        <Button variant={'outline'} className="mt-2">
          <Link href={'/u/petQR'}>
            <strong>{txt.btn2_qr}</strong>
          </Link>
        </Button>
      </div>
    </>
  );
}
