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
import { Project } from '@/config/Projects_lang';
import ProjectVideo from './projectVideo';
import CustomPopover from '../popover';

export default function ProjectCard(proyect: Project) {
  return (
    <Card className={`max-w-screen-xl my-4 bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(0,0,0,0.7)]`}>
      <CardHeader className="flex gap-3 justify-center text-shadow-main">
        <div className="flex flex-col text-center">
          <h2>{proyect.name}</h2>
          <p className="text-small text-default-500">{proyect.description}</p>
        </div>
      </CardHeader>

      <Divider />

      <CardBody className="">
        <ProjectVideo
          youtubeURL={proyect.projectVideoURL}
          imgURL={proyect.projectLinkURL}
          isVerticalVideo={proyect.isVerticalVideo}
        />
      </CardBody>

      <Divider />

      <CardFooter className="flex flex-wrap justify-center">
        {proyect.lenguagesAndTools_ul.map((item, i) => (
          <CustomPopover key={i} popoverTitle={item.name} popoverUrl={item.href}>
            <div className="my-1">{item.icon}</div>
          </CustomPopover>
        ))}
      </CardFooter>
    </Card>
  );
}
