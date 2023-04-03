import React, { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";
import style from "./NavbarButtonTransparent.module.scss";
type Props = {
  text: string;
  arrow?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>;
export const NavbarButtonTransparent: FC<Props> = ({
  text,
  arrow,
  ...rest
}) => {
  return (
    <div className={style["navbar-button-transparent"]} {...rest}>
      {text}
      {arrow && <IoIosArrowDown />}
    </div>
  );
};
