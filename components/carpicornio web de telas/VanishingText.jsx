import React from "react";
import classNames from "classnames";

const VanishingText = ({ text, size='text-3xl', top='220', left='50' }) => {
  const textClass = classNames(
    { btn: true },
    `flex top-[${top}px] left-[${left}px] relative w-[200px] h-[40px] z-50 text-white ${size} animate-reduceWidth overflow-hidden font-semibold tracking-widest`
  );

  return <p className={textClass}>{text}</p>;
};

export default VanishingText;
