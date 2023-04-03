import { Button } from "@/ui";
import React from "react";
import style from "./HomePage.module.scss";
import { StepsWrapper } from "./StepsWrapper";
import { AppShowCase } from "./AppShowCase";
import { StunningAppsSection } from "./StunningAppsSection";
import { FeatureSection } from "./FeatureSection";
import { ForSection } from "./ForSection";
import { BackedSection, StartBuilding } from "@/components";

export const HomePage = () => {
  return (
    <main>
      <section className={style["hero"]}>
        <h1>The first App builder for professionals.</h1>
        <h2>
          Create top-class apps visually with no limits, 10x faster and more
          creative than writing code.
        </h2>
        <a
          href="https://app.nowa.dev/signup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="GET STARTED" arrow />
        </a>
        <div className={style["video"]}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UnnskF9AIi4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <AppShowCase />
      <StepsWrapper />
      <StunningAppsSection />
      <FeatureSection />
      <ForSection />
      <BackedSection />
      <StartBuilding />
    </main>
  );
};
