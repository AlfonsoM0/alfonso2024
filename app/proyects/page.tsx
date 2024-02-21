import BackgroundImg from '@/components/BackgroundImg';
import PageProyects from '@components/PageProyects';
import bgSmokeDark from '@public/image/bg-colorssmokedark.webp';
import bgSmokeLight from '@public/image/bg-colorssmokelight.webp';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Proyects',
};

export default function Page() {
  return (
    <>
      <BackgroundImg src={bgSmokeDark} alt="Dark Smoke" type="dark" opacity={0.8} />
      <BackgroundImg src={bgSmokeLight} alt="Light Smoke" type="light" opacity={0.8} />
      <PageProyects />
    </>
  );
}
