import AboutMe1 from './aboutMe1';
import AboutMe2 from './aboutMe2';
import BigAvatar from './bigAvatar';

export default function PageMain() {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap align-middle justify-center">
          <BigAvatar />
          <AboutMe1 />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap align-middle justify-center">
          <AboutMe2 />
        </div>
      </section>
    </>
  );
}
