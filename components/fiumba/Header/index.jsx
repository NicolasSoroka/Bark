import React from "react";
import styles from "./Header.module.css";
import { Nav, Hero, FloatingFigures } from "../index";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__circle}></div>
      <div className={styles.container__circle}></div>
      <div className={styles.container__circle}></div>
      <FloatingFigures />
      <Nav />
      <Hero />
    </div>
  );
};

export default Header;
