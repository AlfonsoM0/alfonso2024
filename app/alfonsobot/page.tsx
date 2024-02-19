import BackgroundImg from '@/components/BackgroundImg';
import { Metadata } from 'next';
import BG_SmokeDark from '@public/image/BG_ColorsSmokeDark.jpg';
import BG_SmokeLight from '@public/image/BG_ColorsSmokeLight.jpg';
import Alfonsobot from '@/components/PageAlfonsobot';

export const metadata: Metadata = {
  title: 'AlfonsoBot',
};

export default function PageAlfonsoBot() {
  return (
    <>
      <BackgroundImg src={BG_SmokeDark} alt="Dark Smoke" type="dark" opacity={0.8} />
      <BackgroundImg src={BG_SmokeLight} alt="Light Smoke" type="light" opacity={0.8} />
      <Alfonsobot />
    </>
  );
}
