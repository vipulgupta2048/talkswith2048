import React, { FunctionComponent, memo } from "react";
import Link from "@docusaurus/Link";
import styles from "./FeaturedProjects.module.scss";

interface Project {
  title: string;
  category: string;
  description: string;
  impact: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Leviathan",
    category: "Technical Systems",
    description:
      "First open-source Hardware-in-the-Loop testing system for IoT. Automated embedded OS testing on physical devices.",
    impact: "6 weeks → 3 hours",
    link: "/Balena",
    image: require("@site/docs/img/oss/oss-open-source-summit-japan-2023-vipul-gupta.webp").default,
  },
  {
    title: "GitTogether Delhi",
    category: "Community",
    description:
      "Co-founded Delhi's largest developer community. Regular meetups, workshops, connecting builders.",
    impact: "0 → 7,800+ devs",
    link: "/Communities",
    image: require("@site/docs/img/intro/talks.webp").default,
  },
  {
    title: "Docubuilder",
    category: "Documentation",
    description:
      "Framework powering 30+ docs sites. Zero-config Docusaurus deployments with automated CI/CD.",
    impact: "$18k/yr saved",
    link: "/Projects",
    image: require("@site/docs/img/gdg/gdg-stage-photo-vipul-gupta.webp").default,
  },
];

export const FeaturedProjects: FunctionComponent = memo(() => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Portfolio</span>
          <h2 className={styles.title}>Greatest Hits</h2>
          <p className={styles.subtitle}>
            Projects that moved the needle—from testing infrastructure to thriving communities
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={styles.card}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.cardImage}
                  loading="lazy"
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.impactBadge}>
                    <span className={styles.impactLabel}>Impact</span>
                    <span className={styles.impactValue}>{project.impact}</span>
                  </div>
                  <Link to={project.link} className={styles.readMoreBtn}>
                    Read more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <Link to="/Projects" className={styles.viewAll}>
            View all projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
});

FeaturedProjects.displayName = "FeaturedProjects";
