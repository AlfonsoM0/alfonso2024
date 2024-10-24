import BackgroundImg from '@/components/BackgroundImg';
import WhatsAppMsgBuilderPage from '@/components/PageUtils/PageWhatsApp';
import bgRay from '@public/image/bg-ray.webp';
import bgSpacesun from '@public/image/bg-spacesun.webp';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Utils | Wp',
};

export default function Page() {
  return (
    <>
      <BackgroundImg alt="Dark Background" type="dark" opacity={0.8} src={bgRay} />
      <BackgroundImg alt="Light Background" type="light" opacity={0.8} src={bgSpacesun} />

      <WhatsAppMsgBuilderPage />
    </>
  );
}
