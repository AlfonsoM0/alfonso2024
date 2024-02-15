import BackgroundImg from '@/components/BackgroundImg';
import BG_SmokeDark from '@public/image/BG_ColorsSmokeDark.jpg';
import BG_SmokeLight from '@public/image/BG_ColorsSmokeLight.jpg';
import PageProyects from '@components/PageProyects';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Proyects',
};

export default function Page() {
  return (
    <>
      <BackgroundImg src={BG_SmokeDark} alt="Dark Smoke" type="dark" opacity={0.8} />
      <BackgroundImg src={BG_SmokeLight} alt="Light Smoke" type="light" opacity={0.8} />
      <PageProyects />
    </>
  );
}
