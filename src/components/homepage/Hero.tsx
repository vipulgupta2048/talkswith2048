import clsx from "clsx";
import React, { FunctionComponent, memo } from "react";

import styles from "./Hero.module.scss";
import Link from "@docusaurus/Link";

export const Hero: FunctionComponent = memo(() => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          Welcome to my own docs site!
        </p>
        <h1 className={clsx("hero__title", styles.title)}>
          I am <span className={styles.highlighted}>Vipul Gupta</span> 👋
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          Thoroughly reads, meticulously documents, and continuously automates.
          <br />
          Product Owner, Community Organizer, & Cheesecake Enthusiast.
        </p>
        <br />
        <div className={styles.buttonsContainer}>
          <Link
            to="/Introduction"
            className={clsx(
              "button button--outline button--primary",
              styles.btn,
            )}
          >
            {" "}
            About{" "}
          </Link>
          <Link
            to="/category/work"
            className={clsx(
              "button button--outline button--primary",
              styles.btn,
            )}
          >
            {" "}
            Work{" "}
          </Link>
          <Link
            to="/category/sharing-what-i-know"
            className={clsx(
              "button button--outline button--primary",
              styles.btn,
            )}
          >
            {" "}
            Talks{" "}
          </Link>
        </div>
      </div>
    </header>
  );
});

Hero.displayName = "Hero";
