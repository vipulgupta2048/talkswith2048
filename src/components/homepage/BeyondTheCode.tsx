import React, { FunctionComponent, memo } from "react";
import Link from "@docusaurus/Link";
import styles from "./BeyondTheCode.module.scss";

interface Facet {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkText: string;
  accent: string;
}

const facets: Facet[] = [
  {
    id: "nomad",
    icon: "plane",
    title: "Global Nomad",
    subtitle: "27 countries and counting",
    description:
      "From hostels in Mexico to conferences in Japan. I document my journeys—visa strategies, hidden gems, and the art of working from anywhere.",
    link: "/Conferences",
    linkText: "See conference travels",
    accent: "#63d297",
  },
  {
    id: "builder",
    icon: "users",
    title: "Community Builder",
    subtitle: "It takes a village",
    description:
      "Growing communities isn't about numbers—it's about creating spaces where people show up for each other. GitTogether, PyCon India, and beyond.",
    link: "/Communities",
    linkText: "See communities",
    accent: "#f59e0b",
  },
  {
    id: "writer",
    icon: "pen",
    title: "Pragmatic Writer",
    subtitle: "Solving real problems",
    description:
      "No fluff, just what works. Whether it's debugging EXT4 filesystems or finding the perfect hostel—I write the guide I wished existed.",
    link: "/Talks",
    linkText: "Browse talks",
    accent: "#3b82f6",
  },
];

const IconComponent = ({ name }: { name: string }) => {
  switch (name) {
    case "plane":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
        </svg>
      );
    case "users":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      );
    case "pen":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      );
    default:
      return null;
  }
};

export const BeyondTheCode: FunctionComponent = memo(() => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>The Human Side</span>
          <h2 className={styles.title}>Beyond the Code</h2>
          <p className={styles.subtitle}>
            There's more to life than pull requests. Here's what I care about
            when I'm not staring at a terminal.
          </p>
        </header>

        {/* Facets Grid */}
        <div className={styles.facetsGrid}>
          {facets.map((facet, index) => (
            <article
              key={facet.id}
              className={styles.facetCard}
              style={{
                animationDelay: `${index * 100}ms`,
                '--facet-accent': facet.accent
              } as React.CSSProperties}
            >
              <div className={styles.cardInner}>
                {/* Icon */}
                <div className={styles.iconWrapper}>
                  <IconComponent name={facet.icon} />
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <span className={styles.cardSubtitle}>{facet.subtitle}</span>
                  <h3 className={styles.cardTitle}>{facet.title}</h3>
                  <p className={styles.cardDescription}>{facet.description}</p>
                </div>

                {/* Link */}
                <Link to={facet.link} className={styles.cardLink}>
                  {facet.linkText}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Philosophy Quote */}
        <div className={styles.philosophyBlock}>
          <blockquote className={styles.quote}>
            <span className={styles.quoteMarks}>"</span>
            <p>
              Started wanting to be an urban planning architect. Discovered open source
              and fell in love with people building software together, for everyone, for free.
            </p>
          </blockquote>
          <div className={styles.quoteSource}>
            <span className={styles.dash}>—</span>
            <span>On why I do what I do</span>
          </div>
        </div>
      </div>
    </section>
  );
});

BeyondTheCode.displayName = "BeyondTheCode";
