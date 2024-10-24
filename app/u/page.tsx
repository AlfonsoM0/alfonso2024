import BackgroundImg from '@/components/BackgroundImg';
import bgRay from '@public/image/bg-ray.webp';
import bgSpacesun from '@public/image/bg-spacesun.webp';

import { Button } from '@components/ui/button';

import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Utils',
};

export default function Page() {
  return (
    <>
      <BackgroundImg alt="Dark Background" type="dark" opacity={0.8} src={bgRay} />
      <BackgroundImg alt="Light Background" type="light" opacity={0.8} src={bgSpacesun} />

      <h1 className="text-shadow-main text-4xl">Utils</h1>

      <div className="flex flex-col justify-center m-auto mt-4 max-w-sm">
        <Button variant={'outline'}>
          <Link href={'/u/wp'}>
            <strong>WhatsApp ms builder</strong>
          </Link>
        </Button>
      </div>
    </>
  );
}
