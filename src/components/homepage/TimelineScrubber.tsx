import clsx from "clsx";
import React, { useState } from "react";
import styles from "./TimelineScrubber.module.scss";

interface TimelineEvent {
  title: string;
  description: string;
}

interface TimelineItem {
  year: string;
  headline: string;
  events: TimelineEvent[];
  gradient: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2016",
    headline: "Open Source Beginnings",
    gradient: "linear-gradient(135deg, rgba(184, 251, 60, 0.25), rgba(34, 197, 94, 0.2))",
    events: [
      { title: "Founded ALiAS", description: "Started independent open-source college community" },
      { title: "First FOSS Contribution", description: "Discovered the joy of collaborative coding" },
    ],
  },
  {
    year: "2017",
    headline: "Community Leadership",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(184, 251, 60, 0.2))",
    events: [
      { title: "PyDelhi Co-organizer", description: "Began organizing fortnightly Python meetups" },
      { title: "First Conference Talk", description: "Stepped on stage for the first time" },
    ],
  },
  {
    year: "2018",
    headline: "GSoC & Global Stage",
    gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(184, 251, 60, 0.2))",
    events: [
      { title: "GSoC @ Sugar Labs", description: "Built WikiPort for activity migration" },
      { title: "HackMIT Selected", description: "Represented India at MIT hackathon" },
      { title: "Created Scholarship", description: "Abroad Opportunities Fund at Amity University" },
    ],
  },
  {
    year: "2019",
    headline: "Double GSoC",
    gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(184, 251, 60, 0.2))",
    events: [
      { title: "GSoC @ Scrapy Project", description: "Integrated Cerberus validation in Spidermon" },
      { title: "PenApps Selected", description: "Back-to-back international hackathon wins" },
      { title: "ALiAS AMA Program", description: "Mentored 18 students into GSoC" },
    ],
  },
  {
    year: "2020",
    headline: "Balena & HIL Testing",
    gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.25), rgba(184, 251, 60, 0.2))",
    events: [
      { title: "Joined Balena", description: "Started as software engineer in balenaOS team" },
      { title: "Started Leviathan", description: "Took ownership of hardware-in-the-loop testing" },
      { title: "COVID Sabbatical", description: "Conferences paused, deep work began" },
    ],
  },
  {
    year: "2021",
    headline: "Leviathan Launch",
    gradient: "linear-gradient(135deg, rgba(20, 184, 166, 0.25), rgba(184, 251, 60, 0.2))",
    events: [
      { title: "Leviathan MVP", description: "Shipped working HIL pipeline for Raspberry Pi" },
      { title: "RPi Family Support", description: "Extended HIL testing to full Raspberry Pi lineup" },
      { title: "Automated OS Testing", description: "Reduced release cycles from 6 weeks to hours" },
    ],
  },
  {
    year: "2022",
    headline: "Scaling Impact",
    gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.25), rgba(184, 251, 60, 0.2))",
    events: [
      { title: "RemoteIndian Meetups", description: "Started organizing city meetups for remote workers" },
      { title: "Cloudflare Migration", description: "Saved $20k/year moving static sites" },
      { title: "Docubuilder Created", description: "Built framework for 30+ documentation sites" },
    ],
  },
  {
    year: "2023",
    headline: "Speaking Circuit Returns",
    gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(184, 251, 60, 0.2))",
    events: [
      { title: "CDCon Vancouver", description: "First international talk post-COVID" },
      { title: "OSS Summit EU & Japan", description: "QEMU virtualization and HIL talks" },
      { title: "PyDelhi Conf Speaker", description: "Deploying Python on edge devices" },
    ],
  },
  {
    year: "2024",
    headline: "Recognition & Wins",
    gradient: "linear-gradient(135deg, rgba(234, 179, 8, 0.25), rgba(184, 251, 60, 0.2))",
    events: [
      { title: "GitHub Constellation", description: "Keynote on balenaOS CI/CD with GitHub Actions" },
      { title: "GitLab Pitch Winner", description: "Won $3k for TestButler IoT testing concept" },
      { title: "Linux Plumbers Selected", description: "Accepted to THE Linux kernel conference" },
    ],
  },
  {
    year: "2025",
    headline: "GitHub Star Era",
    gradient: "linear-gradient(135deg, rgba(184, 251, 60, 0.35), rgba(34, 197, 94, 0.25))",
    events: [
      { title: "GitHub Star ⭐", description: "Recognized for community impact" },
      { title: "GitTogether 0 → 5,000", description: "Built Delhi's largest dev community" },
      { title: "OpenSSF Talks", description: "Supply chain security at India Community Days" },
      { title: "PyCon Content Lead", description: "Leading content strategy for India's biggest Python conf" },
    ],
  },
];

export const TimelineScrubber: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(timeline.length - 1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
  const activeItem = timeline[displayIndex];

  return (
    <section className={styles.timelineSection} aria-labelledby="timeline-heading">
      <div className={styles.headerRow}>
        <div>
          <p className={styles.kicker}>The Journey</p>
          <h2 id="timeline-heading">A Decade in Open Source</h2>
          <p className={styles.summary}>
            From college community founder to GitHub Star—hover over any year to explore the milestones that shaped my path.
          </p>
        </div>
        <div className={styles.badge}>
          <span className={styles.currentYear}>{activeItem.year}</span>
          Interactive Timeline
        </div>
      </div>

      <div className={styles.timelineContainer}>
        {/* Year Rail */}
        <div className={styles.yearRail}>
          {timeline.map((item, index) => (
            <button
              key={item.year}
              className={clsx(styles.yearMarker, {
                [styles.active]: index === activeIndex,
                [styles.hovered]: index === hoveredIndex,
              })}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-label={`${item.year}: ${item.headline}`}
            >
              <span className={styles.yearDot} />
              <span className={styles.yearLabel}>{item.year}</span>
            </button>
          ))}
          <div className={styles.railLine} />
          <div 
            className={styles.railProgress} 
            style={{ width: `${(displayIndex / (timeline.length - 1)) * 100}%` }}
          />
        </div>

        {/* Detail Panel */}
        <div 
          className={styles.detailPanel}
          style={{ backgroundImage: activeItem.gradient }}
        >
          <div className={styles.panelHeader}>
            <span className={styles.panelYear}>{activeItem.year}</span>
            <h3 className={styles.panelHeadline}>{activeItem.headline}</h3>
          </div>
          <div className={styles.eventsGrid}>
            {activeItem.events.map((event, idx) => (
              <div 
                key={event.title} 
                className={styles.eventCard}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <h4>{event.title}</h4>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

TimelineScrubber.displayName = "TimelineScrubber";
