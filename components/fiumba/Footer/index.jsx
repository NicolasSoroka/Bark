import React from "react";
import styles from "./Footer.module.css";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>	&copy; 2022 | Fiumba</p>
    </div>
  );
};

export default Footer;
