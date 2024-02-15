import {
  Card,
  CardFooter,
  Image,
  Button,
  CardHeader,
  Divider,
  CardBody,
  Link,
} from '@nextui-org/react';
import { Proyect } from '@/config/Proyects_lang';
import ProyectVideo from './ProyectVideo';
import CustomPopover from '../popover';

export default function ProyectCard(proyect: Proyect) {
  return (
    <Card className={`max-w-screen-xl my-4 bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(0,0,0,0.7)]`}>
      <CardHeader className="flex gap-3 justify-center text-shadow shadow-white dark:shadow-black">
        <div className="flex flex-col text-center">
          <h2 className="text-xl">{proyect.name}</h2>
          <p className="text-small text-default-500">{proyect.description}</p>
        </div>
      </CardHeader>

      <Divider />

      <CardBody className="">
        <ProyectVideo
          youtubeURL={proyect.projectVideoURL}
          imgURL={proyect.projectLinkURL}
          isVerticalVideo={proyect.isVerticalVideo}
        />
      </CardBody>

      <Divider />

      <CardFooter className="flex flex-wrap justify-center">
        {proyect.lenguagesAndTools_ul.map((item, i) => (
          <CustomPopover key={i} popoverTitle={item.name}>
            <Link href={item.href} className="my-1">
              {item.icon}
            </Link>
          </CustomPopover>
        ))}
      </CardFooter>
    </Card>
  );
}

{
  /* <ProyectVideo
  youtubeURL={proyect.projectVideoURL}
  imgURL={proyect.projectLinkURL}
  isVerticalVideo={proyect.isVerticalVideo}
/> */
}
