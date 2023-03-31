import { Button } from "@/ui";
import React from "react";
import style from "./HomePage.module.scss";

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
      <section className={style["apps-showcase"]}>
        <div className={style["apps-showcase-text"]}>
          <h3>Build apps that exceed your standards.</h3>
          <p>
            Nowa is made for people who{" "}
            <strong>never accept compromises</strong> on their app design,
            functionality or performance. For the first time ever you can switch
            to building apps visually fast but without loosing on the final app,
            instead you can be even more creative, have more freedom and hence
            build even better apps than what you usually do.
          </p>
        </div>
      </section>
    </>
  );
};
