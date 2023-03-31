import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import style from "./Button.module.scss";
type Props = {
  text: string;
  varient?: "ghost" | "primary";
  arrow?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  (
    | { link: true; to: string }
    | { link?: false; to?: never }
    | { link?: never; to?: string }
  );
export const Button: FC<Props> = ({
  text,
  varient = "primary",
  link,
  to,
  arrow,
  ...rest
}) => {
  return (
    <button
      className={clsx(style[varient], style["button"])}
      {...rest}
      data-has-arrow={arrow}
    >
      {link ? <Link href={to}>{text}</Link> : text}
      {arrow && (
        <Image
          className={style["arrow"]}
          alt="arrow"
          src={"/cassets/arrow-1.svg"}
          width={12}
          height={12}
        />
      )}
    </button>
  );
};
