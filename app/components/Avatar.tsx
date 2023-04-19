"use client";

import { FC } from "react";
import Image from "next/image";

interface IAvatarProps {
  src?: string;
}

const Avatar: FC<IAvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
