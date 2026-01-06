import React, { FunctionComponent, memo } from "react";
import Link from "@docusaurus/Link";
import styles from "./FeaturedProjects.module.scss";

interface Project {
  title: string;
  tagline: string;
  description: string;
  impact: string;
  link: string;
  tags: string[];
  icon: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "Leviathan",
    tagline: "Open-Source Hardware-in-the-Loop Testing",
    description:
      "Built the first open-source HIL testing system for IoT. Automated embedded OS testing directly on devices, transforming quality assurance for edge computing.",
    impact: "6 weeks → 3 hours release cycles",
    link: "/Balena",
    tags: ["Node.js", "QEMU", "Raspberry Pi"],
    icon: "🔧",
    year: "2020",
  },
  {
    title: "GitTogether Delhi",
    tagline: "Community from Zero to Hero",
    description:
      "Co-founded and scaled Delhi's largest developer community. Regular meetups at Microsoft, GitHub workshops, and connecting builders across the ecosystem.",
    impact: "0 → 5,000+ developers in 1 year",
    link: "/Communities",
    tags: ["Community", "GitHub", "DevRel"],
    icon: "👥",
    year: "2024",
  },
  {
    title: "Docubuilder",
    tagline: "Documentation at Scale",
    description:
      "Framework powering 30+ documentation sites at Balena. Zero-config Docusaurus deployments on Cloudflare Pages with automated CI/CD pipelines.",
    impact: "$18k/year hosting costs saved",
    link: "/Projects",
    tags: ["Docusaurus", "Cloudflare", "TypeScript"],
    icon: "📝",
    year: "2022",
  },
  {
    title: "Autokit",
    tagline: "Self-Service IoT Testing",
    description:
      "Productized version of Leviathan for customers. Off-the-shelf hardware testing kits enabling self-service balenaOS validation and device support.",
    impact: "7% customer acquisition cost reduction",
    link: "/Balena",
    tags: ["IoT", "Testing", "Product"],
    icon: "🔐",
    year: "2023",
  },
];

export const FeaturedProjects: FunctionComponent = memo(() => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Greatest Hits</span>
          <h2 className={styles.title}>Projects That Made Impact</h2>
          <p className={styles.subtitle}>
            From open-source testing infrastructure to thriving communities—work that moved the needle
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.title}
              to={project.link}
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconYear}>
                  <span className={styles.icon}>{project.icon}</span>
                  <span className={styles.year}>{project.year}</span>
                </div>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.tagline}>{project.tagline}</p>
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.cardFooter}>
                <span className={styles.impact}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  {project.impact}
                </span>
                <span className={styles.arrow}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.cta}>
          <Link to="/Projects" className={styles.viewAll}>
            Explore All Projects
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
