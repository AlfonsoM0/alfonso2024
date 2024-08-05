import BackgroundImg from '@/components/BackgroundImg';
import { Metadata } from 'next';
// import bgSmokeDark from '@public/image/bg-colorssmokedark.webp';
// import bgSmokeLight from '@public/image/bg-colorssmokelight.webp';
import bgRay from '@public/image/bg-ray.webp';
import bgSpacesun from '@public/image/bg-spacesun.webp';
import Alfonsobot from '@/components/PageAlfonsobot';

export const metadata: Metadata = {
  title: 'AlfonsoBot',
};

export default function PageAlfonsoBot() {
  return (
    <>
      {/* <BackgroundImg src={bgSmokeDark} alt="Dark Smoke" type="dark" opacity={0.8} />
      <BackgroundImg src={bgSmokeLight} alt="Light Smoke" type="light" opacity={0.8} /> */}
      <BackgroundImg alt="Dark Background" type="dark" opacity={0.8} src={bgRay} />
      <BackgroundImg alt="Light Background" type="light" opacity={0.8} src={bgSpacesun} />
      <Alfonsobot />
    </>
  );
}
