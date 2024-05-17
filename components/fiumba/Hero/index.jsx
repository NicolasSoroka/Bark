import React from "react";
import IphoneLayout from "../IphoneLayout";
import LaptopLayout from "../LaptopLayout";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__main}>
        <div className={styles.container__main__text}>
          <h1>Da el proximo paso.</h1>
          <h1>Tene hoy mismo tu sitio web</h1>
          <h1>Y no pares de crecer!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla ad
            dolore architecto, voluptatem saepe expedita voluptates eum
          </p>
        </div>
        <div className={styles.container__main__buttons}>
          <button>Ver nuestros productos</button>
          <button>Contactanos!</button>
        </div>
      </div>
      <div className={styles.container__layouts}>
        <LaptopLayout/>
        <IphoneLayout />
      </div>
    </div>
  );
};

export default Hero;
