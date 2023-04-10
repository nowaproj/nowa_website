import React from "react";
import style from "./StartBuilding.module.scss";
import { Button } from "@/ui";
import { IoMdDownload } from "react-icons/io";

export const StartBuilding = () => {
  return (
    <section className={style["start-building"]}>
      <div className={style["building"]}>
        <strong>
          Start building your dream app for <span>Free!</span>
        </strong>
        <div className={style["buttons"]}>
          <Button text="GET STARTED" arrow />
          <div className={style["download-button"]}>
            <Button
              text="DOWNLOAD FOR DESKTOP"
              varient="white"
              icon={<IoMdDownload />}
            />
          </div>
        </div>
        <div className={style["apps"]}>
          {Array(4)
            .fill("")
            .map((_, idx) => (
              <div className={style["app"]} key={"app" + idx}>
                <img src={`/assets/screen-0${idx + 1}.png`} alt="" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
