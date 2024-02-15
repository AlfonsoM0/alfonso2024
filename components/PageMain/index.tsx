import AboutMe1 from './aboutMe1';
import BigAvatar from './bigAvatar';

export default function PageMain() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-wrap align-middle justify-center">
        <BigAvatar />
        <AboutMe1 />
      </div>
    </section>
  );
}
