import clsx from "clsx";
import React, { FunctionComponent, memo } from "react";

import styles from "./Hero.module.scss";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const Hero: FunctionComponent = memo(() => {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={styles.beam} aria-hidden />

      <div className={styles.heroGrid}>
        <section className={styles.copyColumn}>
          <div className={styles.badgesRow}>
            <span className={styles.badgePrimary}>GitHub Star 2025</span>
            <span className={styles.badgeGhost}>Hardware-in-the-loop | DevEd | Community</span>
          </div>
          <h1 className={styles.title}>
            Vipul Gupta builds cinematic, resilient hard-tech systems & communities.
          </h1>
          <p className={styles.subhead}>
            Product owner and engineer shipping HIL pipelines, developer education that lands, and community programs that scale from 0 → 5K+.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              to="/category/work"
              className={clsx(
                "button button--primary button--lg",
                styles.primaryBtn,
              )}
            >
              See the work <span aria-hidden="true">{"→"}</span>
            </Link>
            <Link
              to="/Introduction"
              className={clsx(
                "button button--outline button--primary button--lg",
                styles.secondaryBtn,
              )}
            >
              Dive into the journey
            </Link>
          </div>
          <div className={styles.ticker} aria-hidden="true">
            <div className={styles.tickerTrack}>
              <span>Hardware-in-the-loop pioneer</span>
              <span>50+ international talks</span>
              <span>Millions saved in cloud costs</span>
              <span>GitTogether 0 → 5,000 builders</span>
              <span>Developer education lead</span>
            </div>
          </div>
        </section>

        <section className={styles.spotlight}>
          <div className={styles.frame}>
            <span className={styles.glow} aria-hidden />
            <img
              src={useBaseUrl("/img/avatar.webp")}
              alt="Vipul Gupta - GitHub Star 2025"
              className={styles.heroPhoto}
              loading="eager"
            />
            <div className={styles.accolades}>
              <div className={styles.accolade}>HIL systems</div>
              <div className={styles.accolade}>Docs that win</div>
              <div className={styles.accolade}>Community ops</div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
});

Hero.displayName = "Hero";
