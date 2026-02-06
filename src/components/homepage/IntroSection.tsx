import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import styles from './IntroSection.module.scss';

const skills = [
  'Open Source',
  'Product Engineering', 
  'Developer Relations',
  'Community Building',
  'Technical Writing',
  'Public Speaking',
];

const stats = [
  { number: '60+', label: 'Talks & Workshops' },
  { number: '8+', label: 'Years in Open Source' },
  { number: '50+', label: 'Events Organized' },
];

export default function IntroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.greeting}>
            <span className={styles.wave}>👋</span>
            <span className={styles.hello}>Hello, I'm</span>
          </div>
          
          <h1 className={styles.name}>
            Vipul
            <span className={styles.lastName}>Gupta</span>
          </h1>
          
          <p className={styles.title}>
            Product Owner & Open Source Engineer
          </p>
          
          <p className={styles.bio}>
            I build hard-tech systems, contribute to open source, and help developers 
            grow through communities and education. Currently shipping supply chain 
            security tooling and organizing GitTogether Delhi-NCR.
          </p>
          
          <div className={styles.skills}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
          
          <div className={styles.cta}>
            <Link to="/Introduction" className={styles.primaryBtn}>
              Learn More About Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/category/sharing-what-i-know" className={styles.secondaryBtn}>
              View My Talks
            </Link>
          </div>
        </div>
        
        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <img
              src={useBaseUrl('/img/avatar.webp')}
              alt="Vipul Gupta"
              className={styles.avatar}
            />
            <div className={styles.imageDecor}></div>
            <div className={styles.imageDecor2}></div>
          </div>
          
          {/* Floating Stats */}
          <div className={styles.statsFloat}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className={styles.bgShape1}></div>
      <div className={styles.bgShape2}></div>
    </section>
  );
}

IntroSection.displayName = "IntroSection";
