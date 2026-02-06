import clsx from "clsx";
import React, { FunctionComponent, memo, useEffect, useState } from "react";

import styles from "./Hero.module.scss";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const Hero: FunctionComponent = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      {/* Architectural Grid Lines */}
      <div className={styles.gridLines} aria-hidden="true">
        <span className={styles.gridLine} />
        <span className={styles.gridLine} />
        <span className={styles.gridLine} />
      </div>

      <div className={styles.heroGrid}>
        {/* Content on LEFT */}
        <section className={styles.copyColumn}>
          <span className={styles.greeting}>Hi, I'm</span>
          <h1 className={styles.name}>
            <span className={styles.firstName}>Vipul</span>
            <span className={styles.lastName}>Gupta</span>
          </h1>
          <p className={styles.role}>Product Engineer & Open Source Leader</p>
          <p className={styles.description}>
            Building hardware testing infrastructure, scaling developer communities,
            and creating documentation systems that actually work. Nine years shipping open source.
          </p>
          <div className={styles.ctaRow}>
            <Link
              to="/Career-Highlights"
              className={styles.primaryBtn}
            >
              <span>Explore my work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/Introduction" className={styles.textLink}>
              Read my story
            </Link>
          </div>
        </section>

        {/* Photo on RIGHT */}
        <section className={styles.photoColumn}>
          <div className={styles.photoFrame}>
            <img
              src={useBaseUrl("/img/avatar.webp")}
              alt="Vipul Gupta - Product Engineer and Open Source Leader"
              className={styles.heroPhoto}
              loading="eager"
            />
            <div className={styles.photoAccent} aria-hidden="true" />
            <span className={styles.credential}>GitHub Star 2025</span>
          </div>
        </section>
      </div>

      {/* Scroll to Explore - Light text at bottom */}
      <button
        className={styles.scrollIndicator}
        onClick={scrollToContent}
        aria-label="Scroll to explore"
      >
        <span className={styles.scrollText}>scroll to explore</span>
        <div className={styles.scrollLine}>
          <span className={styles.scrollDot} />
        </div>
      </button>
    </header>
  );
});

Hero.displayName = "Hero";
