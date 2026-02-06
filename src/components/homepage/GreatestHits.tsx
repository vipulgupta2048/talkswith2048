import React, { FunctionComponent, memo } from "react";
import Link from "@docusaurus/Link";
import styles from "./GreatestHits.module.scss";

interface Project {
  title: string;
  category: string;
  description: string;
  impact: string;
  link: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "Leviathan",
    category: "Infrastructure",
    description:
      "First open-source Hardware-in-the-Loop testing system for IoT. Automated embedded OS testing on physical devices at scale.",
    impact: "6 weeks → 3 hours",
    link: "/Balena",
    image: require("@site/docs/img/oss/oss-open-source-summit-japan-2023-vipul-gupta.webp").default,
    year: "2021",
  },
  {
    title: "GitTogether Delhi",
    category: "Community",
    description:
      "Co-founded Delhi's largest developer community. Monthly meetups connecting builders, sharing knowledge, growing together.",
    impact: "0 → 7,800+ devs",
    link: "/Communities",
    image: require("@site/docs/img/intro/talks.webp").default,
    year: "2023",
  },
  {
    title: "Docubuilder",
    category: "Developer Tools",
    description:
      "Framework powering 30+ documentation sites. Zero-config Docusaurus deployments with automated CI/CD pipelines.",
    impact: "$18k/yr saved",
    link: "/Projects",
    image: require("@site/docs/img/gdg/gdg-stage-photo-vipul-gupta.webp").default,
    year: "2022",
  },
];

export const GreatestHits: FunctionComponent = memo(() => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Portfolio</span>
          <h2 className={styles.title}>Greatest Hits</h2>
          <p className={styles.subtitle}>
            Projects that moved the needle—from testing infrastructure to thriving communities
          </p>
        </header>

        <div className={styles.cardsContainer}>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={styles.card}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Vertical Image Section */}
              <div className={styles.imageSection}>
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.imageOverlay} />
                <span className={styles.year}>{project.year}</span>
              </div>

              {/* Content Section */}
              <div className={styles.content}>
                <div className={styles.categoryBadge}>
                  <span className={styles.categoryDot} />
                  {project.category}
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.footer}>
                  <div className={styles.impactMetric}>
                    <span className={styles.impactLabel}>Impact</span>
                    <span className={styles.impactValue}>{project.impact}</span>
                  </div>

                  <Link to={project.link} className={styles.readMoreBtn}>
                    Read more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.viewAllContainer}>
          <Link to="/Projects" className={styles.viewAllLink}>
            <span>View all projects</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
});

GreatestHits.displayName = "GreatestHits";
