import { Button } from "@/ui";
import React from "react";
import style from "./HomePage.module.scss";
import { StepsWrapper } from "./StepsWrapper";
import { AppShowCase } from "./AppShowCase";
import { StunningAppsSection } from "./StunningAppsSection";

export const HomePage = () => {
  return (
    <>
      <section className={style["hero"]}>
        <h1>The first App builder for professionals.</h1>
        <h2>
          Create top-class apps visually with no limits, 10x faster and more
          creative than writing code.
        </h2>
        <Button arrow text="GET STARTED" />
        <div className={style["video"]} />
      </section>
      <AppShowCase />
      <StepsWrapper />
      <StunningAppsSection />
      <div
        style={{
          height: 1000,
        }}
      />
    </>
  );
};
