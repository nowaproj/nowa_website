import { Button, NavbarButtonTransparent } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={style["header-wrapper"]}>
      <header className={style["header"]}>
        <Link href={"/"}>
          <Image
            src="/cassets/logo.svg"
            alt="logo"
            width={108}
            height={22.67}
          />
        </Link>
        <div className={style["links"]}>
          <NavbarButtonTransparent to="" text="Learn" arrow />
          <NavbarButtonTransparent to="" text="Community" arrow />
          <NavbarButtonTransparent to="" text="About" />
          <Button text="LOG IN" />
          <Button text="GET STARTED" arrow />
        </div>
      </header>
    </div>
  );
};
