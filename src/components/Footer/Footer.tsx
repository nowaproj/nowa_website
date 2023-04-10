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
        <li>
          <ul className={style["ul1"]}>
            <li>
              <Image
                src="/cassets/logo-blue.png"
                width={80}
                height={16.79}
                alt="logo"
              />
            </li>
            <li>
              <p>Say hi! 👋🏻{width && <br />} team@nowa.dev</p>
            </li>
            <li>
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
            </li>
          </ul>
        </li>
        <li>
          <ul className={style["ul2"]}>
            <li>
              <a
                href="https://docs.nowa.dev/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </li>
            <li>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/imprint"}>Imprint</Link>
            </li>
          </ul>
        </li>
        <li>
          <ul className={style["ul3"]}>
            <li>
              <a
                href="https://www.youtube.com/channel/UCvP7LKeb2sW1yTUqHAFEKOw"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/nowaengine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/nowa_dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.reddit.com/r/nowa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reddit
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <p className={style["copyright"]}>© Nowa {new Date().getFullYear()}</p>
    </footer>
  );
};
