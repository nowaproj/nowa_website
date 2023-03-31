import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import style from "./AppShowCase.module.scss";

export const AppShowCase = () => {
  return (
    <section className={style["apps-showcase"]}>
      <div className={style["apps-showcase-text"]}>
        <motion.h3
          whileInView={{
            opacity: [0, 1],
            x: [-100, 0],
          }}
          viewport={{
            once: true,
          }}
        >
          Build apps that exceed your standards.
        </motion.h3>
        <motion.p
          whileInView={{
            opacity: [0, 1],
            x: [-100, 0],
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          Nowa is made for people who <strong>never accept compromises</strong>{" "}
          on their app design, functionality or performance. For the first time
          ever you can switch to building apps visually fast but without loosing
          on the final app, instead you can be even more creative, have more
          freedom and hence build even better apps than what you usually do.
        </motion.p>
      </div>

      <div className={style["apps-showcase-apps"]}>
        <Image
          className={style["app-decorator-left"]}
          alt=""
          src="/cassets/yellow-lines-2.svg"
          width={72.19}
          height={63.26}
        />
        <Image
          className={style["app-decorator-right"]}
          alt=""
          src="/cassets/yellow-lines-1.svg"
          width={72.19}
          height={63.26}
        />
        <motion.div
          className={clsx(style["app"], style["app-shadow-1"])}
          whileInView={{
            rotateZ: [0, 8],
            y: [0, -10],
            x: [0, 230],
          }}
          transition={{
            delay: 0.1,
          }}
          viewport={{
            margin: "-450px",
          }}
        >
          <Image
            width={243.06}
            height={526.08}
            alt="app example "
            src="/assets/app3.svg"
          />
        </motion.div>
        <motion.div
          className={clsx(style["app"], style["app-shadow-1"])}
          whileInView={{
            y: [0, 20],
            x: 25,
          }}
          transition={{
            delay: 0.1,
          }}
          viewport={{
            margin: "-450px",
          }}
        >
          <Image
            width={243.06}
            height={526.08}
            alt="app example "
            src="/assets/app2.svg"
          />
        </motion.div>
        <motion.div
          className={clsx(style["app"], style["app-shadow-1"])}
          whileInView={{
            rotateZ: [0, -8],
            y: [0, -10],
            x: [0, -180],
          }}
          transition={{
            delay: 0.1,
          }}
          viewport={{
            margin: "-450px",
          }}
        >
          <Image
            width={243.06}
            height={526.08}
            alt="app example "
            src="/assets/app1.svg"
          />
        </motion.div>
      </div>
    </section>
  );
};
