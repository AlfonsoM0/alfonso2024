import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/avatar';
import YoFormal from '@public/image/YoFormal.png';
import YoFormal2 from '@public/image/YoFormal2.png';

export default function BigAvatar() {
  return (
    <Avatar
      src={YoFormal.src}
      alt="AlfonsoM0 avatar"
      className="w-60 h-60 text-large bg-transparent shadow-xl shadow-black dark:shadow-white"
      isBordered
    />
  );
}
