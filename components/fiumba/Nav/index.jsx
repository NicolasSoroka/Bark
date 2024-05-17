import Image from "next/image";
import React from "react";
import styles from "./Nav.module.css";
import logoWhite from "../../public/images/logo_full_white.png";
import Link from "next/link";
import { useState } from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import cs from "classnames";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const wrapperClasses = cs(styles.wrapper, {
    [styles.wrapper__menuOpen]: menuOpen,
  });

  const menuBtnClasses = cs(styles.wrapper__menuBtn, {
    [styles.wrapper__menuBtn__menuOpen]: menuOpen,
  });

  return (
    <div className={wrapperClasses}>
      <div className={menuBtnClasses} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RiCloseFill /> : <RiMenuFill />}
      </div>
      <div className={styles.wrapper__logo}>
        <Image
          src={logoWhite}
          alt="logo fiumba"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.wrapper__nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Servicios</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contacto</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>EN</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
