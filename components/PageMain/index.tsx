import GetUserData from '../GetUserData';
import AboutMe1 from './aboutMe1';
import AboutMe2 from './aboutMe2';
import BigAvatar from './bigAvatar';
import Connect from './connect';
import LangAndTools from './langAndTools';

export default function PageMain() {
  return (
    <>
      <GetUserData metadata={undefined} />
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap align-middle justify-center">
          <BigAvatar />
          <AboutMe1 />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap align-middle justify-center">
          <AboutMe2 />
          <Connect />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <LangAndTools />
      </section>
    </>
  );
}
