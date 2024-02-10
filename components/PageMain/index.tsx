import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/avatar';
import YoFormal from '@public/image/YoFormal.png';
import YoFormal2 from '@public/image/YoFormal2.png';

export default function PageMain() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Avatar
        src={YoFormal.src}
        alt="AlfonsoM0 avatar"
        className="w-60 h-60 text-large bg-transparent shadow-2xl shadow-black"
        isBordered
      />
    </section>
  );
}
