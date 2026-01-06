import React from "react";
import Link from "@docusaurus/Link";
import styles from "./HumanSection.module.scss";

interface HumanCard {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  link?: string;
  linkText?: string;
  stat?: string;
}

const humanCards: HumanCard[] = [
  {
    icon: "🗺️",
    title: "Solo Traveler",
    subtitle: "12+ countries explored",
    description: "Backpacking adventures from Mexico's cenotes to Japan's temples. Documenting every journey.",
    link: "https://mixster.dev/lets-goto",
    linkText: "Read travel stories",
    stat: "12+",
  },
  {
    icon: "🍰",
    title: "Cheesecake Critic",
    subtitle: "Dessert reviewer worldwide",
    description: "Rating cheesecakes across continents. A serious mission with delicious research.",
    stat: "∞",
  },
  {
    icon: "📚",
    title: "Comic Collector",
    subtitle: "Calvin & Hobbes enthusiast",
    description: "Watterson's masterpiece shaped my worldview. Still collecting strips after all these years.",
    stat: "1985",
  },
  {
    icon: "🏛️",
    title: "Wonder Chaser",
    subtitle: "World heritage explorer",
    description: "On a quest to visit all 7 Wonders. Chichén Itzá, Colosseum, and Petra checked off.",
    stat: "3/7",
  },
];

export const HumanSection: React.FC = () => {
  return (
    <section className={styles.humanSection} aria-labelledby="human-heading">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <p className={styles.kicker}>Beyond the Terminal</p>
            <h2 id="human-heading">The Human Behind the Code</h2>
            <p className={styles.summary}>
              Because life isn't just commits and pull requests. Here's what keeps me curious outside the IDE.
            </p>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {humanCards.map((card, index) => (
            <article 
              key={card.title} 
              className={styles.card}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{card.icon}</span>
                {card.stat && (
                  <span className={styles.cardStat}>{card.stat}</span>
                )}
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardSubtitle}>{card.subtitle}</p>
              <p className={styles.cardDescription}>{card.description}</p>
              {card.link && (
                <Link to={card.link} className={styles.cardLink}>
                  {card.linkText}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className={styles.funFact}>
          <span className={styles.funFactIcon}>💡</span>
          <p>
            <strong>Fun fact:</strong> The username "2048" comes from my love for the puzzle game. 
            Still haven't reached the theoretical max tile of 131072.
          </p>
        </div>
      </div>
    </section>
  );
};

HumanSection.displayName = "HumanSection";
