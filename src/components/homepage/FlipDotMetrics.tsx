import React from "react";
import Link from "@docusaurus/Link";
import styles from "./FlipDotMetrics.module.scss";

// Recent updates linked to docs pages
const liveFeed = [
  { icon: "🎙️", text: "Presented at GDG DevFest Noida 2025", date: "Dec 2025", link: "/Talks" },
  { icon: "🌐", text: "GitTogether Delhi crossed 5,000 members", date: "Nov 2025", link: "/Communities" },
  { icon: "🔒", text: "Spoke at OpenSSF India Community Days", date: "Aug 2025", link: "/Conferences" },
  { icon: "⭐", text: "Recognized as GitHub Star 2025", date: "Aug 2025", link: "/Introduction" },
  { icon: "🎧", text: "Appeared on Clarisights Podcast", date: "Jul 2025", link: "/Podcasts" },
  { icon: "📝", text: "Published documentation playbooks", date: "2025", link: "/Projects" },
  { icon: "🎤", text: "127+ sessions delivered worldwide", date: "2017-2025", link: "/Workshops" },
];

export const FlipDotMetrics: React.FC = () => {
  return (
    <section className={styles.tickerSection} aria-label="Recent updates">
      <div className={styles.tickerContainer}>
        <div className={styles.tickerHeader}>
          <span className={styles.tickerDot} />
          <span>Recent Updates</span>
        </div>
        <div className={styles.tickerTrack}>
          <div className={styles.tickerScroll}>
            {[...liveFeed, ...liveFeed].map((item, idx) => (
              <Link key={idx} to={item.link} className={styles.tickerItem}>
                <span className={styles.tickerIcon}>{item.icon}</span>
                <span className={styles.tickerText}>{item.text}</span>
                <span className={styles.tickerDate}>{item.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

FlipDotMetrics.displayName = "FlipDotMetrics";
