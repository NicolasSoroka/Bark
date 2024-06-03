import React from "react";
import { marqueeImages, socialMediaLinks } from "@/constants";
import Image from "next/image";
import { randomUUID } from "crypto";
import Link from "next/link";
import Marquee from "./Marquee";
import { Avatar } from "primereact/avatar";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col fixed bottom-0 w-full gap-4 md:gap-10">
      <Marquee images={marqueeImages} />
      <div className="flex items-center justify-center gap-4 border-t py-4 text-white">
        <div className="flex gap-3 items-center">
          <p>{year}</p>
          {socialMediaLinks.map((link) => (
            <Link
              key={randomUUID()}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2"
            >
              <Image
                className="dark:invert"
                src={link.img}
                alt={link.alt}
                height={24}
                width={24}
              />
            </Link>
          ))}
          <Avatar
            image="/profile.jpg"
            size="large"
            shape="circle"
            className="overflow-hidden cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
