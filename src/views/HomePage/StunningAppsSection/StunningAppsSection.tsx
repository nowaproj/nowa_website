import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import style from "./StunningAppsSection.module.scss";

export const StunningAppsSection = () => {
  return (
    <div className={style["stunning-section"]}>
      <div className={style["stunning"]}>
        <strong>
          Create stunning designs like an{" "}
          <span id="stunning-1">
            artist!
            <div>
              <Image src="/cassets/scribble-1.png" fill alt="" />
            </div>
          </span>
        </strong>
        <p>
          Be creative and create any design you can imagine as smooth as{" "}
          <strong>drawing on a paper</strong>. No limitation or struggle! And
          the best part is:{" "}
          <strong>no need to write Flutter UI code anymore!</strong>
        </p>
        <div className={style["stunning-icon"]}>
          <Image src="/cassets/paint.svg" alt="" fill />
        </div>
        <div className={style["stunning-image-1"]}>
          <img src="/cassets/arrow-3.png" alt="" className={style["arrow"]} />
          <motion.img
            src="/assets/stunning-1-3.png"
            alt=""
            className={style["app-2"]}
            whileInView={{
              bottom: [-0, -25],
              rotate: [0, 11.7],
            }}
            transition={{
              delay: 0.2,
            }}
          />
          <motion.img
            src="/assets/stunning-1-2.png"
            alt=""
            className={style["app-1"]}
            whileInView={{
              bottom: [-0, -30],
              rotate: [0, -10],
            }}
            transition={{
              delay: 0.2,
            }}
          />

          <img
            src="/assets/stunning-1-1.gif"
            alt=""
            className={style["app-3"]}
          />
        </div>
      </div>
      <div className={style["stunning"]}>
        <strong>
          Create stunning designs like an{" "}
          <span id="stunning-1">
            artist!
            <div>
              <Image src="/cassets/scribble-1.png" fill alt="" />
            </div>
          </span>
        </strong>
        <p>
          Be creative and create any design you can imagine as smooth as{" "}
          <strong>drawing on a paper</strong>. No limitation or struggle! And
          the best part is:{" "}
          <strong>no need to write Flutter UI code anymore!</strong>
        </p>
        <div className={style["stunning-image-1"]}>
          <img src="/assets/stunning-2.png" alt="" className={style["app-4"]} />
        </div>
      </div>
      <div className={style["stunning"]}>
        <strong>
          Create stunning designs like an{" "}
          <span id="stunning-1">
            artist!
            <div>
              <Image src="/cassets/scribble-1.png" fill alt="" />
            </div>
          </span>
        </strong>
        <p>
          Be creative and create any design you can imagine as smooth as{" "}
          <strong>drawing on a paper</strong>. No limitation or struggle! And
          the best part is:{" "}
          <strong>no need to write Flutter UI code anymore!</strong>
        </p>
        <div className={style["stunning-icon"]}>
          <Image src="/cassets/db.png" alt="" fill />
        </div>
        <div className={style["stunning-image-1"]}>
          <img src="/assets/stunning-3.png" alt="" className={style["app-4"]} />
        </div>
      </div>
      <div className={style["stunning"]}>
        <strong
          style={{
            textAlign: "center",
          }}
        >
          Create stunning designs like an{" "}
          <span id="stunning-1">
            artist!
            <div>
              <Image src="/cassets/scribble-1.png" fill alt="" />
            </div>
          </span>
        </strong>
        <p
          style={{
            textAlign: "center",
          }}
        >
          Be creative and create any design you can imagine as smooth as{" "}
          <strong>drawing on a paper</strong>. No limitation or struggle! And
          the best part is:{" "}
          <strong>no need to write Flutter UI code anymore!</strong>
        </p>
        <div className={style["stunning-image-1"]}>
          <img
            src="/cassets/arrow-white.png"
            alt=""
            className={style["arrow-white"]}
          />
          <img
            src="/cassets/arrow-orange.png"
            alt=""
            className={style["arrow-orange"]}
          />
          <img src="/assets/stunning-4.png" alt="" className={style["app-5"]} />
          <img
            src="/assets/stunning-4-1.png"
            alt=""
            className={style["app-6"]}
          />
        </div>
      </div>
    </div>
  );
};
