import Link from "next/link";
// import Image from "next/image";
import React from "react";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-3">
      <Link href="/" className="flex items-center gap-1">
        {/* <Image
          src="/assets/images/logo.svg"
          width={23}
          height={23}
          alt="logo"
        /> */}
        <h3 className="text-lg font-bold">N. Soroka</h3>
      </Link>
      <Theme />
    </nav>
  );
};

export default Navbar;
