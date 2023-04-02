import React from "react";
import style from "./FeatureSection.module.scss";
import { FEATURE } from "../consts";
import { motion } from "framer-motion";
import Image from "next/image";

export const FeatureSection = () => {
  return (
    <section className={style["feature-section"]}>
      {FEATURE.map((feature, idx) => (
        <motion.div
          key={feature.text}
          className={style["feature"]}
          whileInView={{
            rotate: [-100, 0],
            scale: [0, 1],
          }}
          transition={{
            delay: 0.1 * idx,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          viewport={{
            once: true,
          }}
        >
          <Image
            alt={feature.text}
            src={feature.img}
            width={138.7}
            height={132.77}
          />
          <strong>{feature.text}</strong>
        </motion.div>
      ))}
    </section>
  );
};
