import BackgroundImg from '@/components/BackgroundImg';
import { Metadata } from 'next';
import bgSmokeDark from '@public/image/bg-colorssmokedark.webp';
import bgSmokeLight from '@public/image/bg-colorssmokelight.webp';
import Alfonsobot from '@/components/PageAlfonsobot';

export const metadata: Metadata = {
  title: 'AlfonsoBot',
};

export default function PageAlfonsoBot() {
  return (
    <>
      <BackgroundImg src={bgSmokeDark} alt="Dark Smoke" type="dark" opacity={0.8} />
      <BackgroundImg src={bgSmokeLight} alt="Light Smoke" type="light" opacity={0.8} />
      <Alfonsobot />
    </>
  );
}
