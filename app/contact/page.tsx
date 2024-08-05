import BackgroundImg from '@/components/BackgroundImg';
import ContactForm from '@/components/PageContact';
// import bgSmokeDark from '@public/image/bg-colorssmokedark.webp';
// import bgSmokeLight from '@public/image/bg-colorssmokelight.webp';
import bgRay from '@public/image/bg-ray.webp';
import bgSpacesun from '@public/image/bg-spacesun.webp';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact',
};

export default function Page() {
  return (
    <>
      {/* <BackgroundImg src={bgSmokeDark} alt="Dark Smoke" type="dark" opacity={0.8} />
      <BackgroundImg src={bgSmokeLight} alt="Light Smoke" type="light" opacity={0.8} /> */}
      <BackgroundImg alt="Dark Background" type="dark" opacity={0.8} src={bgRay} />
      <BackgroundImg alt="Light Background" type="light" opacity={0.8} src={bgSpacesun} />
      <ContactForm />
    </>
  );
}
