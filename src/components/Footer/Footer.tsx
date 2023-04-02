import React from "react";
import style from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useSize } from "@/utils";

export const Footer = () => {
  const [width] = useSize();

  return (
    <footer className={style["footer-wrapper"]}>
      <ul className={style["footer"]}>
        <ul className={style["ul1"]}>
          <Image
            src="/cassets/logo-blue.png"
            width={80}
            height={16.79}
            alt="logo"
          />
          <p>Say hi! 👋🏻{width && <br />} team@nowa.dev</p>
          <div className={style["discord"]}>
            <Image
              src="/cassets/discord.png"
              alt="discord"
              width={18}
              height={14}
            />
            <p>Join Discord</p>
          </div>
        </ul>
        <ul className={style["ul2"]}>
          <Link href={"/"}>Documentation</Link>
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Imprint</Link>
        </ul>
        <ul className={style["ul3"]}>
          <Link href={"/"}>Youtube</Link>
          <Link href={"/"}>Linkedin</Link>
          <Link href={"/"}>Twitter</Link>
          <Link href={"/"}>Reddit</Link>
        </ul>
      </ul>
      <p className={style["copyright"]}>© Nowa {new Date().getFullYear()}</p>
    </footer>
  );
};
