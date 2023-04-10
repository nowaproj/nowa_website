import React from "react";
import style from "./AboutPage.module.scss";
import { MeetTheTeam } from "./MeetTheTeam";
import { BackedSection, StartBuilding } from "@/components";

export const AboutPage = () => {
  return (
    <main>
      <section className={style["hero"]}>
        <h1>
          The <span>Spirit</span> behind Nowa
        </h1>
        <h2>
          We are a group of passionate engineers, developers and designers who
          want to save the world from low-quality, ugly and complicated
          softwares.
          <br /> We carefully design every detail to make our softwares
          performant, flexible, beautiful and intuitive.
          <br /> We believe that settling for anything less than excellence is
          simply not an option when it coms to professionals. Your app should be
          stunning and provides a great experience to stand out in a sea of
          crowded apps, no compromises is acceptable!
          <br /> That{"'"}s why our goal is to help you unlock 100% of your
          power to build something you can be proud of and your users will be in
          love with!
        </h2>
      </section>
      <MeetTheTeam />
      <BackedSection />
      <StartBuilding />
    </main>
  );
};
