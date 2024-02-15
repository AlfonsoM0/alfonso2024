import PageMain from '@/components/PageMain';
import BackgroundImg from '@/components/BackgroundImg';
import BG_Ray from '@public/image/BG_Ray.jpg';
import SpaceSun from '@public/image/SpaceSun.jpg';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'AlfonsoM0 | Web Developer',
};

export default function Home() {
  return (
    <>
      <BackgroundImg alt="Dark Background" type="dark" opacity={0.85} src={BG_Ray} />
      <BackgroundImg alt="Light Background" type="light" opacity={0.6} src={SpaceSun} />
      <PageMain />
    </>
  );
}
