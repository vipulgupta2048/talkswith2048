import React, { useEffect, useRef, useState } from "react";
import styles from "./FlipDotMetrics.module.scss";

const metrics = [
  { label: "Years Shipping Code", value: "9", detail: "Since 2017 — OSS, IoT, DevEd" },
  { label: "Developers Impacted", value: "50000", suffix: "+", detail: "Through communities, talks & mentorship" },
  { label: "Infrastructure Savings", value: "3", prefix: "$", suffix: "M+", detail: "HIL testing, Cloudflare, automation" },
  { label: "Sessions Delivered", value: "127", detail: "Talks, workshops, panels worldwide" },
];

// Recent updates from the last 6-8 months (July 2025 - Jan 2026)
const liveFeed = [
  { icon: "🎙️", text: "Presented at GDG DevFest Noida 2025", date: "Dec 2025" },
  { icon: "🌐", text: "GitTogether Delhi crossed 5,000 members", date: "Nov 2025" },
  { icon: "🔒", text: "Spoke at OpenSSF India Community Days", date: "Aug 2025" },
  { icon: "⭐", text: "Recognized as GitHub Star 2025", date: "Aug 2025" },
  { icon: "🎧", text: "Appeared on Clarisights Podcast", date: "Jul 2025" },
];

export const FlipDotMetrics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    const timers: number[] = [];
    const updateDigits = (el: HTMLElement, value: string, delay: number) => {
      const digits = value.split("");
      const digitEls = Array.from(el.querySelectorAll(`.${styles.digit}`));
      digitEls.forEach((digitEl, idx) => {
        const target = digits[idx] ?? "0";
        setTimeout(() => {
          digitEl.classList.add(styles.flip);
          digitEl.setAttribute("data-value", target);
          digitEl.textContent = target;
        }, delay + idx * 140);
      });
    };

    document.querySelectorAll(`.${styles.flipCard}`).forEach((card, cardIndex) => {
      const value = card.getAttribute("data-value") ?? "0";
      const digitsContainer = card.querySelector(`.${styles.digits}`);
      if (!digitsContainer) return;
      // Use exact number of digits needed for the value
      const numDigits = value.length;
      digitsContainer.innerHTML = new Array(numDigits)
        .fill(null)
        .map(() => `<span class="${styles.digit}" data-value="0">0</span>`)
        .join("");
      const delay = 200 + cardIndex * 250;
      timers.push(window.setTimeout(() => updateDigits(card as HTMLElement, value, 0), delay));
    });

    return () => timers.forEach(clearTimeout);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className={styles.metricsSection} aria-labelledby="metrics-heading">
      <div className={styles.headerRow}>
        <div>
          <p className={styles.kicker}>A decade of contributions</p>
          <h2 id="metrics-heading">The Numbers That Matter</h2>
          <p className={styles.summary}>Nine years of building hard-tech systems, growing communities, and shipping software that makes an impact.</p>
        </div>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Live Stats
        </div>
      </div>
      
      <div className={styles.grid}>
        {metrics.map((metric, index) => (
          <article 
            className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`} 
            key={metric.label}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={styles.flipCard} data-value={metric.value}>
              {metric.prefix && <span className={styles.prefix}>{metric.prefix}</span>}
              <div className={styles.digits} aria-hidden="true" />
              {metric.suffix && <span className={styles.suffix}>{metric.suffix}</span>}
            </div>
            <p className={styles.metricLabel}>{metric.label}</p>
            <p className={styles.metricDetail}>{metric.detail}</p>
          </article>
        ))}
      </div>

      <div className={styles.liveFeedSection}>
        <div className={styles.liveFeedHeader}>
          <span className={styles.liveFeedDot} />
          <span>Recent Updates</span>
        </div>
        <div className={styles.liveFeedTrack}>
          <div className={styles.liveFeedScroll}>
            {[...liveFeed, ...liveFeed].map((item, idx) => (
              <div key={idx} className={styles.liveFeedItem}>
                <span className={styles.liveFeedIcon}>{item.icon}</span>
                <span className={styles.liveFeedText}>{item.text}</span>
                <span className={styles.liveFeedDate}>{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

FlipDotMetrics.displayName = "FlipDotMetrics";
