import React, { FunctionComponent, memo, useState } from "react";
import clsx from "clsx";
import styles from "./AboutMe.module.scss";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const AboutMe: FunctionComponent = memo(() => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className={styles.aboutSection}>
      <div className="container">
        <div className={styles.hook}>
          <h2 className={styles.hookTitle}>
            Solving problems at the root, not symptoms
          </h2>
          <p className={styles.hookText}>
            7+ years shipping hard-tech systems, contributing to open source, and 
            building developer tools. GitHub Star 2025 for contributions to global 
            open-source communities — not by myself, but with thousands of contributors 
            who make these communities what they are.
          </p>
          <p className={styles.hookText}>
            Built the first open-source Hardware in the Loop system. Helped grow 
            communities from zero with dedicated volunteers and organizers. 
            Focus on shipping code that eliminates recurring problems.
          </p>
        </div>

        <div className={styles.currentFocus}>
          <h3 className={styles.focusTitle}>Currently Working On</h3>
          <div className={styles.focusGrid}>
            <div className={styles.focusCard}>
              <span className={styles.focusLabel}>Day Job</span>
              <p className={styles.focusContent}>
                Senior Software Engineer & Developer Education Lead at <strong>Balena</strong>
              </p>
            </div>
            <div className={styles.focusCard}>
              <span className={styles.focusLabel}>Side Projects</span>
              <p className={styles.focusContent}>
                <strong>Mixster</strong> - Helping startups fix their documentation
              </p>
            </div>
            <div className={styles.focusCard}>
              <span className={styles.focusLabel}>Community</span>
              <p className={styles.focusContent}>
                Organizing GitTogether Delhi-NCR, volunteering with PyCon India
              </p>
            </div>
          </div>
        </div>

        <div className={styles.expandableSection}>
          <h3 className={styles.expandTitle}>More Details</h3>
          <div className={styles.accordions}>
            <div
              className={clsx(styles.accordion, {
                [styles.expanded]: expandedSection === "technical",
              })}
            >
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection("technical")}
              >
                <span className={styles.accordionIcon}>🔧</span>
                <span className={styles.accordionTitle}>
                  Technical Work
                </span>
                <span className={styles.accordionArrow}>
                  {expandedSection === "technical" ? "−" : "+"}
                </span>
              </button>
              {expandedSection === "technical" && (
                <div className={styles.accordionContent}>
                  <p>
                    Built scalable applications with Node.js/TypeScript/Python for 
                    resource-constrained environments. Created the first open-source 
                    Hardware in the Loop system for IoT fleet management.
                  </p>
                  <p>
                    Worked on hardware, firmware, and OS-level systems. Built automated 
                    documentation generation before LLMs. Shipped automation projects 
                    that eliminated recurring costs and reduced manual work.
                  </p>
                </div>
              )}
            </div>

            <div
              className={clsx(styles.accordion, {
                [styles.expanded]: expandedSection === "community",
              })}
            >
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection("community")}
              >
                <span className={styles.accordionIcon}>👥</span>
                <span className={styles.accordionTitle}>
                  Community Work
                </span>
                <span className={styles.accordionArrow}>
                  {expandedSection === "community" ? "−" : "+"}
                </span>
              </button>
              {expandedSection === "community" && (
                <div className={styles.accordionContent}>
                  <p>
                    Contributing to open source since 2016. Started with Mozilla Festival, 
                    HackMIT, Google Summer of Code, and Google Code-in. Learned from 
                    amazing mentors and contributors in these communities.
                  </p>
                  <p>
                    Help organize GitTogether Delhi-NCR — grew from 0 to 5,000+ members 
                    with dedicated volunteers and organizers (it's never just one person). 
                    Volunteer for PyCon India as comms lead. Mentor students through ALiAS. 
                    Previously organized PyDelhi and iLuGD with other community members.
                  </p>
                </div>
              )}
            </div>

            <div
              className={clsx(styles.accordion, {
                [styles.expanded]: expandedSection === "speaking",
              })}
            >
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection("speaking")}
              >
                <span className={styles.accordionIcon}>🎤</span>
                <span className={styles.accordionTitle}>
                  Talks & Workshops
                </span>
                <span className={styles.accordionArrow}>
                  {expandedSection === "speaking" ? "−" : "+"}
                </span>
              </button>
              {expandedSection === "speaking" && (
                <div className={styles.accordionContent}>
                  <p>
                    Presented at 50+ conferences on HIL systems, LLM evaluations, 
                    GitHub Copilot, system design, and automation. Share what worked, 
                    what failed, and the lessons learned.
                  </p>
                  <p>
                    Focus on practical takeaways backed by real implementations. 
                    Make technical topics accessible through hands-on examples. 
                    Attendees can apply the concepts immediately in their work.
                  </p>
                </div>
              )}
            </div>

            <div
              className={clsx(styles.accordion, {
                [styles.expanded]: expandedSection === "journey",
              })}
            >
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection("journey")}
              >
                <span className={styles.accordionIcon}>🚀</span>
                <span className={styles.accordionTitle}>
                  How I Got Here
                </span>
                <span className={styles.accordionArrow}>
                  {expandedSection === "journey" ? "−" : "+"}
                </span>
              </button>
              {expandedSection === "journey" && (
                <div className={styles.accordionContent}>
                  <p>
                    Started wanting to be an urban planning architect. Discovered 
                    open source and fell in love with the idea of people building 
                    software together, for everyone, for free.
                  </p>
                  <p>
                    GitHub Star 2025 for contributions to online and offline OSS 
                    communities — recognizing work done with thousands of contributors. 
                    Remote work for 8+ years. Focus on eliminating problems rather than 
                    continuously patching them.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.visualSection}>
          <div className={styles.imageGrid}>
            <div className={styles.imageCard}>
              <img
                src={useBaseUrl("/img/avatar.webp")}
                alt="Vipul Gupta"
                loading="lazy"
              />
              <p className={styles.imageCaption}>GitHub Star 2025</p>
            </div>
            <div className={styles.imageCard}>
              <img
                src={useBaseUrl("/img/cropped_image.webp")}
                alt="HackMIT Experience"
                loading="lazy"
              />
              <p className={styles.imageCaption}>HackMIT</p>
            </div>
            <div className={styles.imageCard}>
              <img
                src={useBaseUrl("/img/1.webp")}
                alt="GitTogether Event"
                loading="lazy"
              />
              <p className={styles.imageCaption}>GitTogether Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

AboutMe.displayName = "AboutMe";
