import React from "react";
import style from "./BackedSection.module.scss";
import Image from "next/image";
import { useSize } from "@/utils";

export const BackedSection = () => {
  const [width] = useSize();
  return (
    <section className={style["backed-section"]}>
      <strong>Backed By:</strong>
      <div className={style["backed"]}>
        {Array(5)
          .fill("")
          .map((_, idx) => (
            <Image
              key={"backed" + idx}
              src={`/cassets/backed-${idx + 1}.svg`}
              alt="backed up by"
              width={width >= 600 ? 120 : 60}
              height={67}
            />
          ))}
      </div>
    </section>
  );
};
