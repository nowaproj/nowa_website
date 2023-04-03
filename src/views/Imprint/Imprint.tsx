import React from "react";
import style from "./Imprint.module.scss";

export const Imprint = () => {
  return (
    <main className={style["wrapper"]}>
      <h1>Impressum</h1>
      <h2>
        The website at <u>www.nowa.dev</u> and the services provided are offered
        to you by:
        <br />
        <br /> Nowa
        <br />
        <br /> Represented by:
        <br /> Anas Alsalhi, Raed Abdallah, Ludovica Palio
        <br /> email: <a href="mailto:team@nowa.dev">team@nowa.dev</a>
      </h2>
    </main>
  );
};
