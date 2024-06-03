import React from "react";
import { motion } from "framer-motion"

const Muestra = ({ name, src, alt, onClick, isActive, pos, fixedRate = false }) => {
  const fadeInOrder = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <motion.li
      className={`cursor-pointer flex flex-col items-center ${
        isActive ? "outline-dashed outline-2 outline-offset-2" : ""
      }`}
      onClick={onClick}
      key={name}
      custom={fixedRate ? 1 : pos}
      variants={fadeInOrder}
      initial="hidden"
      animate="visible"
    >
      <img
        className="w-[300px] min-h-[150px]"
        alt={alt}
        src={src}
        loading="lazy"
      />
      <h3 className="text-2xl text-black flex h-[30px] tracking-widest">{name}</h3>
    </motion.li>
  );
};

export default Muestra;
