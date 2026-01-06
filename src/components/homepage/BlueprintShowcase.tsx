import React from "react";
import styles from "./BlueprintShowcase.module.scss";

const phases = [
  {
    title: "Concept → Validation",
    copy: "Hardware-in-the-loop prototype that compressed QA cycles and proved the path.",
  },
  {
    title: "Scale → Reliability",
    copy: "Product ownership at Balena; resilient edge fleet tooling and cost reductions.",
  },
  {
    title: "Docs → Education",
    copy: "Documentation playbooks and workshops that onboard thousands quickly.",
  },
  {
    title: "Community → Signal",
    copy: "GitTogether programming, PyCon comms, mentorship rails to 5K+ devs.",
  },
];

const specs = [
  {
    title: "HIL pipeline",
    summary: "Open-source QA rails turning hardware chaos into predictable builds.",
    tags: ["Rust", "Edge", "Testing"],
  },
  {
    title: "Docs studio",
    summary: "Mixster: documentation sprints, LLM evals, and hands-on workshops.",
    tags: ["LLM evals", "Docs", "Education"],
  },
  {
    title: "Education rails",
    summary: "Live coding + courses that translate systems thinking to dev teams.",
    tags: ["Systems", "DevEd", "Automation"],
  },
  {
    title: "Community ops",
    summary: "GitTogether and PyCon programming that keeps developers engaged.",
    tags: ["Community", "Content", "Ops"],
  },
];

export const BlueprintShowcase: React.FC = () => {
  return (
    <section className={styles.blueprintSection} aria-labelledby="blueprint-heading">
      <div className={styles.headingRow}>
        <div>
          <p className={styles.kicker}>Kinetic blueprint</p>
          <h2 id="blueprint-heading">Build phases & spec sheets</h2>
          <p className={styles.summary}>
            Drafting table energy with animated rails—how the work moves from concept to shipped,
            and the spec sheets that document each track.
          </p>
        </div>
        <div className={styles.gridBadge}>Draft mode</div>
      </div>

      <div className={styles.grid}>
        <div className={styles.phases}>
          {phases.map((phase, index) => (
            <div className={styles.step} key={phase.title} style={{ animationDelay: `${index * 120}ms` }}>
              <div className={styles.marker}>{index + 1}</div>
              <div>
                <h3>{phase.title}</h3>
                <p>{phase.copy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.specs}>
          {specs.map((spec, index) => (
            <article className={styles.card} key={spec.title} style={{ animationDelay: `${index * 90}ms` }}>
              <header>
                <span className={styles.cardBadge}>Spec</span>
                <strong>{spec.title}</strong>
              </header>
              <p>{spec.summary}</p>
              <div className={styles.tags}>
                {spec.tags.map((tag) => (
                  <span className={styles.tag} key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

BlueprintShowcase.displayName = "BlueprintShowcase";
