import React from "react";
import style from "./MeetTheTeam.module.scss";
import { TEAM } from "../constant";
import Image from "next/image";

export const MeetTheTeam = () => {
  return (
    <section className={style["meet-the-team"]}>
      <h3>A team with ambitions 🚀</h3>
      <div className={style["team"]}>
        {TEAM.map((team) => (
          <div key={team.img} className={style["team-member"]}>
            <Image alt={team.name} src={team.img} width={150} height={150} />
            <a href={team.linked} target="_blank" rel="noopener noreferrer">
              {team.name}
            </a>
            <sub>{team.sub}</sub>
          </div>
        ))}
      </div>
      <Image alt="" src="/assets/mouse.svg" width={184.38} height={30} />
    </section>
  );
};
