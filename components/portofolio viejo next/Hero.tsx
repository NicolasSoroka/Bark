import React from "react";
import TextGradient from "./TextGradient";
import { gradientText } from "@/constants";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col">
        <TextGradient
          text={gradientText}
          from="from-cyan-900"
          via="via-red-700"
          to="to-amber-300"
          className="text-center text-6xl font-extrabold"
        />
      </div>

      <div className="flex flex-col items-center gap-y-3 px-5 text-center text-base text-zinc-600">
        <p className="text-xl font-medium dark:text-slate-200">
          Hi there! <span className="text-2xl">👋</span>
        </p>
        <p className="text-lg font-medium dark:text-slate-200 sm:w-[650px]">
          I&apos;m <span className="text-lg font-bold">Nicolas</span>, frontend
          developer from Argentina who loves to work with React and Next.js
        </p>

        <div className="flex flex-col items-center justify-center gap-2">
          <Button className="w-[220px] shadow-lg transition-all hover:scale-105 hover:bg-slate-500 hover:text-cyan-100 dark:hover:bg-white dark:hover:text-black">
            <Link
              href="/files/SorokaNicolas_fullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download my CV
            </Link>
          </Button>

          {/* <Button
            variant="outline"
            className="relative w-[220px] from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% font-bold transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-gradient-to-r before:blur-[25px] hover:scale-105 hover:text-slate-50 dark:text-slate-50"
          >
            Contact me
          </Button> */}
          <p className="w-[300px] pt-2  text-xs font-medium dark:text-slate-200">
            This site is under construction. Soon, you&apos;ll be able to see
            details of my work experience and some posts about interesting stuff
            🤗
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
