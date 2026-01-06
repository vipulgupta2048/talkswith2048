import React, { FunctionComponent, memo } from "react";
import clsx from "clsx";
import styles from "./AchievementCards.module.scss";

interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    icon: "🔧",
    title: "Hardware in the Loop",
    subtitle: "First OSS Implementation",
    description: "Built the first open-source HIL testing system for IoT. Reduced testing cycles from days to hours.",
    link: "/category/work",
  },
  {
    icon: "👥",
    title: "GitTogether Delhi",
    subtitle: "Community Building",
    description: "Helped grow local dev community from 0 to 5,000+ members. 50+ workshops and events organized.",
    link: "/Introduction",
  },
  {
    icon: "🎤",
    title: "Conference Talks",
    subtitle: "Knowledge Sharing",
    description: "Presented at 50+ conferences. Topics: HIL systems, LLM evals, automation, and system design.",
    link: "/category/sharing-what-i-know",
  },
  {
    icon: "⚙️",
    title: "Automation Projects",
    subtitle: "Cost Reduction",
    description: "Built automation systems that eliminated millions in recurring cloud and engineering costs.",
    link: "/category/work",
  },
  {
    icon: "📚",
    title: "Documentation Systems",
    subtitle: "Pre-LLM Era",
    description: "Created generative documentation pipeline before LLMs. 90% reduction in manual doc work.",
    link: "/category/work",
  },
  {
    icon: "🌍",
    title: "Open Source",
    subtitle: "Since 2016",
    description: "Contributing to OSS communities. GitHub Star for work with Mozilla, Google Summer of Code, and more.",
    link: "/Introduction",
  },
];

export const AchievementCards: FunctionComponent = memo(() => {
  return (
    <section className={styles.achievementsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            What I've <span className={styles.highlight}>Worked On</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Real projects, real impact, real code
          </p>
        </div>
        <div className={styles.grid}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => {
                if (achievement.link) {
                  window.location.href = achievement.link;
                }
              }}
            >
              <div className={styles.cardIcon}>{achievement.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{achievement.title}</h3>
                <p className={styles.cardSubtitle}>{achievement.subtitle}</p>
                <p className={styles.cardDescription}>
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

AchievementCards.displayName = "AchievementCards";
