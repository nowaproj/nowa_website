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
          <a
            className={style["discord"]}
            href="https://discord.gg/ByKfn3H7gX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/cassets/discord.png"
              alt="discord"
              width={18}
              height={14}
            />
            <p>Join Discord</p>
          </a>
        </ul>
        <ul className={style["ul2"]}>
          <a
            href="https://docs.nowa.dev/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
          <Link href={"/privacy-policy"}>Privacy Policy</Link>
          <Link href={"/imprint"}>Imprint</Link>
        </ul>
        <ul className={style["ul3"]}>
          <a
            href="https://www.youtube.com/channel/UCvP7LKeb2sW1yTUqHAFEKOw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.linkedin.com/company/nowaengine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://twitter.com/nowa_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.reddit.com/r/nowa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reddit
          </a>
        </ul>
      </ul>
      <p className={style["copyright"]}>© Nowa {new Date().getFullYear()}</p>
    </footer>
  );
};
