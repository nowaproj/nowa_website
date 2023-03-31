import Image from "next/image";
import React from "react";
import { STEPS } from "../consts";
import { motion } from "framer-motion";
import style from "./HomePageStep.module.scss";
type Props = {
  step: InferObjectFromArray<typeof STEPS>;
  number: number;
};
export const HomePageStep: React.FC<Props> = ({ number, step }) => {
  return (
    <div className={style["step-wrapper"]}>
      <motion.div
        className={style["step-image"]}
        initial={{
          scale: 0,
          rotate: -255,
        }}
        whileInView={{
          rotate: [-255, 0],
          scale: [0, 1],
        }}
        transition={{
          delay: 0.1 * number,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image alt={step.text} src={step.img} fill />
      </motion.div>
      <motion.div
        className={style["step-text"]}
        whileInView={{
          scale: [0, 1],
        }}
        transition={{
          delay: 0.1 * number,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        viewport={{
          once: true,
        }}
        initial={{
          scale: 0,
        }}
      >
        {step.text}
        <p>{number}</p>
      </motion.div>
    </div>
  );
};
