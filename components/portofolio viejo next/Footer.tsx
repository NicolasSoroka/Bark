import React from "react";
import { marqueeImages, socialMediaLinks } from "@/constants";
import Image from "next/image";
import { randomUUID } from "crypto";
import Link from "next/link";
import Marquee from "./Marquee";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto flex flex-col gap-4 md:gap-10">
      <Marquee images={marqueeImages} />
      <div className="flex items-center justify-center gap-4 border-t py-4">
        <p>Inspired by Vercel UI</p>
        <p>{year}</p>
        <div className="flex gap-3">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
