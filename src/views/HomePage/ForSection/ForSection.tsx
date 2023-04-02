import React from "react";
import style from "./ForSection.module.scss";
import { FOR_SECTION } from "../consts";
import Image from "next/image";

export const ForSection = () => {
  return (
    <section className={style["for-section"]}>
      {FOR_SECTION.map((section) => (
        <div className={style["section"]} key={section.title}>
          <div className={style["text-section"]}>
            <div className={style["text-header"]}>
              <strong>{section.title}</strong>
              {section.icon.map((icon) => (
                <Image src={icon} key={icon} alt="" width={30} height={30} />
              ))}
            </div>
            <p>{section.sub}</p>
          </div>
          <img
            src={section.img}
            alt={section.title}
            className={style["section-image"]}
          />
        </div>
      ))}
    </section>
  );
};
