import React, { FC } from "react";
import Image from "next/image";

type MarqueeProps = {
  images: string[];
  stopAnimation?: boolean;
};

const Marquee: FC<MarqueeProps> = ({ images }) => {
  return (
    //  [mask-image:linear-gradient(to_right,_transparent_0%,_black_10%,_black_90%,_transparent_100%)]
    <div className="relative flex flex-col overflow-x-hidden">
      {/* <ul className="flex animate-marquee items-center justify-center whitespace-nowrap py-12">
        {images.map((image) => (
          <li key={image}>
            <Image
              className={`${
                image === "/assets/marquee/vercel_icon_dark.png" &&
                "dark:invert"
              }`}
              src={image}
              width={60}
              height={60}
              alt={`${image}`}
            />
          </li>
        ))}
      </ul>

      <ul className="absolute top-0 flex animate-marquee2 items-center justify-center whitespace-nowrap py-12">
        {images.map((image) => (
          <li key={image}>
            <Image src={image} width={60} height={60} alt={`${image}`} />
          </li>
        ))}
      </ul> */}

      <ul className="flex items-center justify-center gap-1 whitespace-nowrap opacity-70 grayscale px-3">
        {images.map((image) => (
          <li key={image}>
            <Image
              className={`${
                image === "/assets/marquee/vercel_icon_dark.png" &&
                "dark:invert"
              }`}
              src={image}
              width={60}
              height={60}
              alt={`${image}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
