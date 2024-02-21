import PageMain from '@/components/PageMain';
import BackgroundImg from '@/components/BackgroundImg';
import bgRay from '@public/image/bg-ray.webp';
import bgSpacesun from '@public/image/bg-spacesun.webp';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'AlfonsoM0 | Web Developer',
};

export default function Home() {
  return (
    <>
      <BackgroundImg alt="Dark Background" type="dark" opacity={1} src={bgRay} />
      <BackgroundImg alt="Light Background" type="light" opacity={1} src={bgSpacesun} />
      <PageMain />
    </>
  );
}
