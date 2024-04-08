import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          Welcome to my little corner on the internet,
        </p>
        <h1 className={clsx("hero__title", styles.title)}>
          I am <span className={styles.highlighted}>Vipul Gupta</span> 👋 
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
        Thoroughly reads, meticulously documents, and continuously automates,
        <br />The docs site of a traveling software engineer & cheesecake enthusiast.
        </p>
      </div>
    </header>
  );
};
