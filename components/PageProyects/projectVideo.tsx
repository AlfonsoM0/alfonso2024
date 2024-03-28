'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { CSSProperties } from 'react';

export default function ProyectVideo({
  youtubeURL,
  imgURL,
  isVerticalVideo,
}: {
  youtubeURL: string;
  imgURL?: string;
  isVerticalVideo?: boolean;
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const videoId = youtubeURL.length ? youtubeURL.split('v=')[1].split('&pp=')[0] : '';

  //Style
  const VideoStyle: CSSProperties = {
    border: `1px solid ${isDark ? 'white' : 'black'}`,
    borderRadius: 25,
    width: isVerticalVideo ? '30vw' : '60vw',
    height: isVerticalVideo ? '60vw' : '30vw',
    maxWidth: isVerticalVideo ? 200 : 750,
    maxHeight: isVerticalVideo ? 400 : undefined,
    minWidth: isVerticalVideo ? 150 : 300,
    minHeight: isVerticalVideo ? 300 : 150,
    margin: 'auto',
  };

  if (videoId)
    return (
      <iframe
        style={VideoStyle}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );
  else if (imgURL)
    return <Image alt="Proyect Image" src={imgURL} width={100} height={100} style={VideoStyle} />;
  else return <div></div>;
}
