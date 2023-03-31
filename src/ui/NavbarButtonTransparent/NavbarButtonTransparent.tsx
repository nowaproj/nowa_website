import Link from "next/link";
import React, { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";
import style from "./NavbarButtonTransparent.module.scss";
type Props = {
  to: string;
  text: string;
  arrow?: boolean;
};
export const NavbarButtonTransparent: FC<Props> = ({ to, text, arrow }) => {
  return (
    <Link href={to} className={style["navbar-button-transparent"]}>
      {text}
      {arrow && <IoIosArrowDown />}
    </Link>
  );
};
