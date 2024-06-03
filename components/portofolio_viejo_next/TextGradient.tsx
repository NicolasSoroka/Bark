"use client";
import React, { useEffect, useState } from "react";

type TextGradientProps = {
  text: string[];
  from?: string;
  via?: string;
  to?: string;
  className?: string;
};

export const TextGradient: React.FC<TextGradientProps> = ({
  text,
  from = "from-orange-700",
  via = "via-blue-500",
  to = "to-green-400",
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return (
    <>
      {text.map((textItem, index) => (
        <span
          key={index}
          className={`${
            index === currentIndex
              ? `bg-gradient-to-r ${from} ${via} ${to} animate-gradient bg-300% bg-clip-text text-transparent`
              : "text-slate-700 dark:text-slate-300"
          } ${className}`}

          // en lugar de renegar con un background, cambia la opacity y agrega el
          // bg gradiend de fondo fijo, como vercel.
        >
          {textItem}
        </span>
      ))}
    </>
  );
};

export default TextGradient;
