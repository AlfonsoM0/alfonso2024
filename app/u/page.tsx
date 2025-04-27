import BackgroundImg from '@/components/BackgroundImg';
import bgRay from '@public/image/bg-ray.webp';
import bgSpacesun from '@public/image/bg-spacesun.webp';
import PageUtils from '@/components/PageUtils';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Utils',
};

export default function Page() {
  return (
    <>
      <BackgroundImg alt="Dark Background" type="dark" opacity={0.8} src={bgRay} />
      <BackgroundImg alt="Light Background" type="light" opacity={0.8} src={bgSpacesun} />

      <PageUtils />
    </>
  );
}
