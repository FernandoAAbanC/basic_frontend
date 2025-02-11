"use client";
import Image from "next/image";
import { CSSProperties, useState } from "react";

function LazyImage({
  src,
  alt,
  width,
  height,
  style,
  className = ''
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  style?: CSSProperties;
  className?: string;
  useS3?: boolean;
}) {
  const [nullImage, setNullImage] = useState(false);

  if (nullImage) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      quality={100}
      onError={() => {
        setNullImage(true);
      }}
    />
  );
}

export default LazyImage;
