import { seperatedBuilder } from "@/utils";
import Image from "next/image";
import React from "react";
import { STEPS } from "../consts";
import { HomePageStep } from "../HomePageStep";
import style from "./StepsWrapper.module.scss";

export const StepsWrapper = () => {
  return (
    <section className={style["steps-wrapper"]}>
      {seperatedBuilder(
        (idx) => (
          <HomePageStep number={idx + 1} step={STEPS[idx]} />
        ),
        (idx) =>
          idx % 2 === 0 ? (
            <Image
              src="/cassets/arrow-2.png"
              width={44}
              height={84.26}
              style={{
                objectFit: "scale-down",
                transform: "rotate(67deg)",
              }}
              alt=""
              className={style["arrow"]}
            />
          ) : (
            <Image
              src="/cassets/arrow-2.png"
              width={44}
              height={84.26}
              style={{
                objectFit: "scale-down",
                transform: "rotate(-67deg)  scaleY(-1)",
              }}
              alt=""
              className={style["arrow"]}
            />
          ),
        STEPS.length,
        "spt"
      )}
    </section>
  );
};
