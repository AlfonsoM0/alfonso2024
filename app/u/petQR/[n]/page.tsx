import BackgroundImg from 'components/BackgroundImg';
import PagePetInfo from '@/components/PageUtils/PagePetQR/PagePetInfo';

import bgRay from '@public/image/bg-ray.webp';
import bgSpacesun from '@public/image/bg-spacesun.webp';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Utils | My pet QR',
};

interface PetInfoProps {
  params: {
    n: string;
  };
}

export default function Page({ params }: PetInfoProps) {
  return (
    <>
      <BackgroundImg alt="Dark Background" type="dark" opacity={0.8} src={bgRay} />
      <BackgroundImg alt="Light Background" type="light" opacity={0.8} src={bgSpacesun} />

      <PagePetInfo params={params} />
    </>
  );
}
