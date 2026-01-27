import React from "react";
import Head from "@docusaurus/Head";
import BrowserOnly from "@docusaurus/BrowserOnly";
import SEO from "../components/SEO";
// Shared content - single source of truth for web + PDF
import {
  siteConfig,
  seoContent,
  coverContent,
  instructor,
  outcomes,
  capstone,
  sessions,
  testimonials,
  deliverables,
  postWorkshopSupport,
  premiumAddons,
  roiMetrics,
  ctaContent,
} from "../data/workshopData";

export default function AIWorkshop() {
  return (
    <>
      <SEO
        title={seoContent.title}
        description={seoContent.description}
        pathname="ai-workshop"
        image={`${siteConfig.url}/img/og-image.webp`}
        type="website"
        keywords={seoContent.keywords}
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Course/Event structured data for rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: seoContent.title,
            description: seoContent.description,
            provider: {
              "@type": "Person",
              name: instructor.name,
              url: siteConfig.url,
              sameAs: [
                siteConfig.socialLinks.github,
                siteConfig.socialLinks.linkedin,
              ],
            },
            courseMode: "onsite",
            educationalLevel: "Intermediate",
            teaches: outcomes.map((o) => o.title),
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "onsite",
              instructor: {
                "@type": "Person",
                name: instructor.name,
                jobTitle: instructor.role.split(" · ")[0],
              },
            },
          })}
        </script>
        {/* Service structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Corporate Training Workshop",
            name: seoContent.title,
            description: seoContent.description,
            provider: {
              "@type": "Person",
              name: instructor.name,
              url: siteConfig.url,
            },
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Workshop Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: coverContent.meta[0].value,
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Full-Day Workshop",
                  },
                },
              ],
            },
          })}
        </script>
      </Head>
      <style>{`
        /* ============================================
           CONVERSION-OPTIMIZED WORKSHOP PAGE
           Aesthetic: Executive Editorial
        ============================================ */

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .workshop-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .workshop-page {
          --ink: #0f0f0f;
          --charcoal: #1a1a1a;
          --graphite: #262626;
          --steel: #404040;
          --slate: #525252;
          --ash: #737373;
          --silver: #a3a3a3;
          --fog: #d4d4d4;
          --mist: #e5e5e5;
          --cloud: #f5f5f5;
          --paper: #fafafa;
          --white: #ffffff;

          --accent: #2563eb;
          --accent-bright: #3b82f6;
          --accent-dim: #1d4ed8;
          --success: #059669;
          --success-bright: #10b981;
          --warning: #d97706;

          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: var(--charcoal);
          background: var(--paper);
          -webkit-font-smoothing: antialiased;
          font-size: 16px;
        }

        /* ============================================
           STICKY CTA BAR - Always visible
        ============================================ */
        .workshop-page .sticky-cta {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: var(--ink);
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          box-shadow: 0 -4px 24px rgba(0,0,0,0.15);
          animation: fadeIn 0.4s ease-out 0.5s both;
        }

        .workshop-page .sticky-cta-text {
          color: var(--silver);
          font-size: 14px;
          font-weight: 500;
        }

        .workshop-page .sticky-cta-text strong {
          color: var(--white);
        }

        .workshop-page .sticky-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: var(--accent);
          color: var(--white);
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .workshop-page .sticky-cta-btn:hover {
          background: var(--accent-bright);
          transform: translateY(-1px);
        }

        .workshop-page .sticky-cta-btn svg {
          width: 16px;
          height: 16px;
        }

        /* ============================================
           HERO SECTION - High impact
        ============================================ */
        .workshop-page .hero {
          background: var(--ink);
          color: var(--white);
          padding: 80px 24px 60px;
          position: relative;
          overflow: hidden;
        }

        .workshop-page .hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: radial-gradient(ellipse at top right, rgba(37, 99, 235, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .workshop-page .hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .workshop-page .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 100px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--silver);
          margin-bottom: 32px;
          animation: fadeIn 0.6s ease-out both;
        }

        .workshop-page .hero-badge .dot {
          width: 6px;
          height: 6px;
          background: var(--success-bright);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .workshop-page .hero h1 {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(40px, 6vw, 64px);
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 24px;
          max-width: 720px;
          animation: fadeIn 0.6s ease-out 0.1s both;
        }

        .workshop-page .hero h1 em {
          font-style: italic;
          color: var(--accent-bright);
        }

        .workshop-page .hero-desc {
          font-size: 18px;
          color: var(--silver);
          max-width: 560px;
          line-height: 1.7;
          margin-bottom: 40px;
          animation: fadeIn 0.6s ease-out 0.2s both;
        }

        .workshop-page .hero-cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
          animation: fadeIn 0.6s ease-out 0.3s both;
        }

        .workshop-page .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 28px;
          background: var(--accent);
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .workshop-page .btn-primary:hover {
          background: var(--accent-bright);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }

        .workshop-page .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 28px;
          background: transparent;
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 10px;
          border: 1px solid var(--steel);
          transition: all 0.2s ease;
        }

        .workshop-page .btn-secondary:hover {
          background: rgba(255,255,255,0.05);
          border-color: var(--ash);
        }

        .workshop-page .hero-meta {
          display: flex;
          gap: 40px;
          padding-top: 32px;
          border-top: 1px solid var(--graphite);
          animation: fadeIn 0.6s ease-out 0.4s both;
        }

        .workshop-page .meta-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .workshop-page .meta-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--ash);
        }

        .workshop-page .meta-value {
          font-size: 15px;
          font-weight: 600;
          color: var(--fog);
        }

        /* ============================================
           SOCIAL PROOF BAR - Build trust early
        ============================================ */
        .workshop-page .proof-bar {
          background: var(--charcoal);
          padding: 20px 24px;
          border-bottom: 1px solid var(--graphite);
        }

        .workshop-page .proof-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .workshop-page .proof-stat {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .workshop-page .proof-stat strong {
          font-family: 'DM Serif Display', serif;
          font-size: 28px;
          color: var(--accent-bright);
        }

        .workshop-page .proof-stat span {
          font-size: 13px;
          color: var(--silver);
        }

        .workshop-page .proof-divider {
          width: 1px;
          height: 32px;
          background: var(--steel);
        }

        /* ============================================
           LOGO BAR - As Seen At (Dark theme to flow with proof bar)
        ============================================ */
        .workshop-page .logo-bar {
          background: var(--graphite);
          padding: 32px 24px;
          border-bottom: 1px solid var(--steel);
        }

        .workshop-page .logo-bar-inner {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .workshop-page .logo-bar-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--ash);
          margin-bottom: 20px;
        }

        .workshop-page .logo-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .workshop-page .logo-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--steel);
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .workshop-page .logo-item:hover {
          background: rgba(255,255,255,0.08);
          border-color: var(--accent);
          transform: translateY(-1px);
        }

        .workshop-page .logo-item svg {
          height: 20px;
          width: 20px;
          flex-shrink: 0;
        }

        .workshop-page .logo-item .logo-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1px;
        }

        .workshop-page .logo-item .logo-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--fog);
        }

        .workshop-page .logo-item .logo-event {
          font-size: 10px;
          color: var(--ash);
        }

        @media (max-width: 900px) {
          .workshop-page .logo-grid {
            gap: 8px;
          }
          .workshop-page .logo-item {
            padding: 8px 12px;
          }
          .workshop-page .logo-item svg {
            height: 18px;
            width: 18px;
          }
          .workshop-page .logo-item .logo-name {
            font-size: 12px;
          }
          .workshop-page .logo-item .logo-event {
            font-size: 9px;
          }
        }

        /* ============================================
           SPEAKER CREDENTIALS BAR - Bottom of page
        ============================================ */
        .workshop-page .speaker-bar {
          background: var(--charcoal);
          padding: 24px;
          border-top: 1px solid var(--steel);
        }

        .workshop-page .speaker-bar-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .workshop-page .speaker-bar-item {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .workshop-page .speaker-bar-item img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid var(--steel);
        }

        .workshop-page .speaker-bar-item .speaker-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .workshop-page .speaker-bar-item .speaker-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--fog);
        }

        .workshop-page .speaker-bar-item .speaker-title {
          font-size: 11px;
          color: var(--ash);
        }

        .workshop-page .speaker-creds {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .workshop-page .speaker-cred {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 6px 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--steel);
          border-radius: 4px;
          color: var(--silver);
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .workshop-page .speaker-cred:hover {
          background: rgba(59, 130, 246, 0.15);
          border-color: var(--accent);
          color: var(--accent-bright);
        }

        .workshop-page .speaker-cred.highlight {
          background: rgba(59, 130, 246, 0.12);
          border-color: var(--accent);
          color: var(--accent-bright);
        }

        @media (max-width: 768px) {
          .workshop-page .speaker-bar-inner {
            flex-direction: column;
            gap: 16px;
          }
          .workshop-page .speaker-creds {
            justify-content: center;
          }
        }

        /* ============================================
           ROI SECTION - Moved up for desire
        ============================================ */
        .workshop-page .roi-section {
          background: var(--ink);
          padding: 80px 24px;
        }

        .workshop-page .roi-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .workshop-page .roi-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .workshop-page .roi-header h2 {
          font-family: 'DM Serif Display', serif;
          font-size: 36px;
          color: var(--white);
          margin-bottom: 12px;
        }

        .workshop-page .roi-header p {
          font-size: 16px;
          color: var(--silver);
          max-width: 480px;
          margin: 0 auto;
        }

        .workshop-page .roi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .workshop-page .roi-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--graphite);
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.2s ease;
        }

        .workshop-page .roi-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: var(--accent);
          transform: translateY(-4px);
        }

        .workshop-page .roi-value {
          font-family: 'DM Serif Display', serif;
          font-size: 48px;
          color: var(--accent-bright);
          margin-bottom: 8px;
          font-variant-numeric: tabular-nums;
        }

        .workshop-page .roi-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--fog);
          margin-bottom: 8px;
        }

        .workshop-page .roi-desc {
          font-size: 13px;
          color: var(--ash);
          line-height: 1.5;
        }

        /* ============================================
           CONTENT SECTIONS
        ============================================ */
        .workshop-page .section {
          padding: 80px 24px;
        }

        .workshop-page .section-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .workshop-page .section-header {
          margin-bottom: 48px;
        }

        .workshop-page .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 12px;
        }

        .workshop-page .section-title {
          font-family: 'DM Serif Display', serif;
          font-size: 36px;
          color: var(--ink);
          margin-bottom: 12px;
        }

        .workshop-page .section-subtitle {
          font-size: 17px;
          color: var(--slate);
          max-width: 560px;
          line-height: 1.7;
        }

        /* Instructor Card */
        .workshop-page .instructor-card {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 40px;
          padding: 40px;
          background: var(--white);
          border: 1px solid var(--mist);
          border-radius: 20px;
          margin-bottom: 48px;
        }

        .workshop-page .instructor-photo {
          width: 160px;
          height: 160px;
          border-radius: 12px;
          object-fit: cover;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }

        .workshop-page .instructor-content h3 {
          font-family: 'DM Serif Display', serif;
          font-size: 28px;
          color: var(--ink);
          margin-bottom: 4px;
        }

        .workshop-page .instructor-role {
          font-size: 15px;
          color: var(--slate);
          margin-bottom: 16px;
        }

        .workshop-page .instructor-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .workshop-page .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 6px;
          background: var(--cloud);
          color: var(--charcoal);
        }

        .workshop-page .tag.accent {
          background: var(--accent);
          color: var(--white);
        }

        .workshop-page .instructor-bio {
          font-size: 15px;
          color: var(--slate);
          line-height: 1.8;
        }

        .workshop-page .instructor-bio strong {
          color: var(--charcoal);
          font-weight: 600;
        }

        /* Outcomes Grid */
        .workshop-page .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .workshop-page .outcome-card {
          padding: 28px;
          background: var(--white);
          border: 1px solid var(--mist);
          border-radius: 16px;
          transition: all 0.2s ease;
        }

        .workshop-page .outcome-card:hover {
          border-color: var(--accent);
          box-shadow: 0 8px 32px rgba(37, 99, 235, 0.08);
        }

        .workshop-page .outcome-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .workshop-page .outcome-card h4 {
          font-size: 17px;
          font-weight: 700;
          color: var(--charcoal);
          margin-bottom: 8px;
        }

        .workshop-page .outcome-card p {
          font-size: 14px;
          color: var(--slate);
          line-height: 1.6;
        }

        /* Session Cards */
        .workshop-page .sessions-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .workshop-page .session-card {
          background: var(--white);
          border: 1px solid var(--mist);
          border-radius: 16px;
          overflow: hidden;
        }

        .workshop-page .session-header {
          background: var(--accent);
          padding: 24px 32px;
          color: var(--white);
        }

        .workshop-page .session-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .workshop-page .session-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
        }

        .workshop-page .session-badges {
          display: flex;
          gap: 8px;
          margin-left: auto;
        }

        .workshop-page .badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .workshop-page .badge-demo {
          background: var(--white);
          color: var(--accent-dim);
        }

        .workshop-page .badge-labs {
          background: var(--success);
          color: var(--white);
        }

        .workshop-page .badge-qa {
          background: var(--warning);
          color: var(--white);
        }

        .workshop-page .session-title {
          font-family: 'DM Serif Display', serif;
          font-size: 24px;
          margin-bottom: 4px;
        }

        .workshop-page .session-type {
          font-size: 14px;
          color: rgba(255,255,255,0.8);
        }

        .workshop-page .session-body {
          padding: 28px 32px;
        }

        .workshop-page .session-intro {
          font-size: 15px;
          color: var(--charcoal);
          line-height: 1.7;
          margin-bottom: 24px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--mist);
        }

        .workshop-page .content-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .workshop-page .content-label::before {
          content: '';
          width: 3px;
          height: 14px;
          background: var(--accent);
          border-radius: 2px;
        }

        .workshop-page .topics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }

        .workshop-page .topic-item {
          font-size: 14px;
          font-weight: 500;
          color: var(--charcoal);
          padding: 12px 16px;
          background: var(--cloud);
          border-radius: 8px;
          border-left: 3px solid var(--accent);
        }

        .workshop-page .deliverables-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          padding-top: 16px;
          border-top: 1px dashed var(--mist);
        }

        .workshop-page .deliverable-chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          padding: 8px 14px;
          background: rgba(5, 150, 105, 0.1);
          color: var(--success);
          border-radius: 6px;
        }

        /* Testimonial */
        .workshop-page .testimonial {
          background: var(--ink);
          border-radius: 16px;
          padding: 32px 40px;
          margin: 32px 0;
          position: relative;
        }

        .workshop-page .testimonial::before {
          content: '"';
          font-family: 'DM Serif Display', serif;
          font-size: 80px;
          color: var(--accent);
          opacity: 0.3;
          position: absolute;
          top: 10px;
          left: 28px;
          line-height: 1;
        }

        .workshop-page .testimonial-quote {
          font-size: 17px;
          font-style: italic;
          color: var(--fog);
          line-height: 1.8;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .workshop-page .testimonial-author {
          font-size: 15px;
          font-weight: 600;
          color: var(--white);
        }

        .workshop-page .testimonial-role {
          font-size: 13px;
          color: var(--ash);
        }

        /* Capstone Section */
        .workshop-page .capstone-section {
          background: rgba(37, 99, 235, 0.04);
          border: 1px solid rgba(37, 99, 235, 0.15);
          border-radius: 16px;
          padding: 32px;
          margin-top: 32px;
        }

        .workshop-page .capstone-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .workshop-page .capstone-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 6px 12px;
          background: var(--accent);
          color: var(--white);
          border-radius: 6px;
        }

        .workshop-page .capstone-header h3 {
          font-family: 'DM Serif Display', serif;
          font-size: 22px;
          color: var(--ink);
        }

        .workshop-page .capstone-desc {
          font-size: 15px;
          color: var(--slate);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .workshop-page .capstone-examples {
          display: flex;
          gap: 16px;
        }

        .workshop-page .capstone-example {
          flex: 1;
          display: flex;
          gap: 12px;
          padding: 16px;
          background: var(--white);
          border-radius: 10px;
          border: 1px solid var(--mist);
        }

        .workshop-page .capstone-icon {
          font-size: 24px;
        }

        .workshop-page .capstone-example strong {
          display: block;
          font-size: 14px;
          color: var(--charcoal);
          margin-bottom: 4px;
        }

        .workshop-page .capstone-detail {
          font-size: 12px;
          color: var(--ash);
        }

        /* Deliverables Grid */
        .workshop-page .deliverables-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .workshop-page .deliverable-card {
          padding: 28px;
          background: var(--white);
          border: 1px solid var(--mist);
          border-radius: 16px;
        }

        .workshop-page .deliverable-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .workshop-page .deliverable-card h4 {
          font-size: 17px;
          font-weight: 700;
          color: var(--charcoal);
          margin-bottom: 16px;
        }

        .workshop-page .deliverable-card ul {
          list-style: none;
        }

        .workshop-page .deliverable-card li {
          font-size: 14px;
          padding: 8px 0;
          padding-left: 24px;
          position: relative;
          color: var(--slate);
        }

        .workshop-page .deliverable-card li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--success);
          font-weight: 700;
        }

        /* Support Section */
        .workshop-page .support-card {
          background: rgba(5, 150, 105, 0.04);
          border: 1px solid rgba(5, 150, 105, 0.2);
          border-radius: 16px;
          padding: 32px;
        }

        .workshop-page .support-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
        }

        .workshop-page .support-icon {
          font-size: 32px;
        }

        .workshop-page .support-header h4 {
          font-size: 18px;
          font-weight: 700;
          color: var(--charcoal);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .workshop-page .free-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          padding: 4px 8px;
          background: var(--success);
          color: var(--white);
          border-radius: 4px;
        }

        .workshop-page .support-header p {
          font-size: 14px;
          color: var(--slate);
          margin-top: 4px;
        }

        .workshop-page .support-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .workshop-page .support-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: var(--white);
          border-radius: 10px;
          border: 1px solid var(--mist);
        }

        .workshop-page .check-icon {
          color: var(--success);
          font-weight: 700;
        }

        .workshop-page .support-item strong {
          font-size: 14px;
          color: var(--charcoal);
        }

        /* Final CTA Section */
        .workshop-page .final-cta {
          background: var(--accent);
          padding: 80px 24px 120px;
          text-align: center;
        }

        .workshop-page .final-cta-inner {
          max-width: 640px;
          margin: 0 auto;
        }

        .workshop-page .final-cta h2 {
          font-family: 'DM Serif Display', serif;
          font-size: 40px;
          color: var(--white);
          margin-bottom: 16px;
        }

        .workshop-page .final-cta p {
          font-size: 17px;
          color: rgba(255,255,255,0.9);
          margin-bottom: 32px;
        }

        .workshop-page .contact-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .workshop-page .contact-card {
          padding: 24px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 12px;
          text-align: left;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .workshop-page .contact-card:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-2px);
        }

        .workshop-page .contact-card h4 {
          font-size: 14px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 6px;
        }

        .workshop-page .contact-card .link-text {
          font-size: 15px;
          font-weight: 600;
          color: rgba(255,255,255,0.95);
        }

        .workshop-page .contact-card p {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          margin-top: 8px;
          margin-bottom: 0;
        }

        .workshop-page .footer-links {
          display: flex;
          justify-content: center;
          gap: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }

        .workshop-page .footer-links a {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .workshop-page .footer-links a:hover {
          color: var(--white);
        }

        /* Download Button */
        .workshop-page .download-btn {
          position: fixed;
          top: 80px;
          right: 24px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: var(--ink);
          color: var(--white);
          border: none;
          border-radius: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .workshop-page .download-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0,0,0,0.25);
        }

        .workshop-page .download-btn svg {
          width: 16px;
          height: 16px;
          fill: currentColor;
        }

        .workshop-page .download-btn .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .workshop-page .hero {
            padding: 60px 20px 48px;
          }
          .workshop-page .hero h1 {
            font-size: 36px;
          }
          .workshop-page .hero-meta {
            flex-direction: column;
            gap: 16px;
          }
          .workshop-page .proof-inner {
            flex-direction: column;
            gap: 20px;
          }
          .workshop-page .proof-divider {
            display: none;
          }
          .workshop-page .roi-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .workshop-page .instructor-card {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .workshop-page .instructor-photo {
            margin: 0 auto;
          }
          .workshop-page .instructor-tags {
            justify-content: center;
          }
          .workshop-page .outcomes-grid,
          .workshop-page .topics-grid,
          .workshop-page .deliverables-grid,
          .workshop-page .contact-cards {
            grid-template-columns: 1fr;
          }
          .workshop-page .capstone-examples {
            flex-direction: column;
          }
          .workshop-page .sticky-cta {
            flex-direction: column;
            gap: 12px;
            padding: 16px;
          }
          .workshop-page .sticky-cta-text {
            text-align: center;
          }
          .workshop-page .download-btn {
            top: auto;
            bottom: 80px;
            right: 16px;
          }
        }

        @media (max-width: 600px) {
          .workshop-page .roi-grid {
            grid-template-columns: 1fr;
          }
          .workshop-page .roi-value {
            font-size: 40px;
          }
          .workshop-page .section {
            padding: 60px 20px;
          }
        }
      `}</style>
      <div className="workshop-page">
        {/* Sticky CTA Bar */}
        <div className="sticky-cta">
          <span className="sticky-cta-text">
            <strong>Ready to accelerate your team?</strong> Book a free discovery call
          </span>
          <a href={siteConfig.calLink} target="_blank" rel="noopener noreferrer" className="sticky-cta-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Schedule Call
          </a>
        </div>

        {/* Download PDF Button */}
        <BrowserOnly fallback={<div className="download-btn">Loading...</div>}>
          {() => {
            const { PDFDownloadLink } = require("@react-pdf/renderer");
            const WorkshopPDF = require("../components/WorkshopPDF").default;
            return (
              <PDFDownloadLink
                document={<WorkshopPDF />}
                fileName="AI-Workshop-Proposal-Vipul-Gupta.pdf"
                className="download-btn"
              >
                {({ loading, error }: { loading: boolean; error: Error | null }) =>
                  error ? (
                    <>
                      <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                      Retry
                    </>
                  ) : loading ? (
                    <>
                      <span className="spinner" />
                      PDF...
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24">
                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                      </svg>
                      Download PDF
                    </>
                  )
                }
              </PDFDownloadLink>
            );
          }}
        </BrowserOnly>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-badge">
              <span className="dot"></span>
              {coverContent.eyebrow}
            </div>

            <h1>
              {coverContent.title} <em>{coverContent.titleEmphasis}</em>
            </h1>

            <p className="hero-desc">{coverContent.description}</p>

            <div className="hero-cta-row">
              <a href={siteConfig.calLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Schedule Discovery Call
              </a>
              <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email Me
              </a>
            </div>

            <div className="hero-meta">
              {coverContent.meta.map((item, i) => (
                <div className="meta-item" key={i}>
                  <span className="meta-label">{item.label}</span>
                  <span className="meta-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <div className="proof-bar">
          <div className="proof-inner">
            <div className="proof-stat">
              <strong>127+</strong>
              <span>Technical Sessions Delivered</span>
            </div>
            <div className="proof-divider"></div>
            <div className="proof-stat">
              <strong>$270K+</strong>
              <span>Saved in AI infra costs</span>
            </div>
            <div className="proof-divider"></div>
            <div className="proof-stat">
              <strong>7,800+</strong>
              <span>Community Members</span>
            </div>
          </div>
        </div>

        {/* Logo Bar - As Seen At (with links to talks) */}
        <div className="logo-bar">
          <div className="logo-bar-inner">
            <div className="logo-bar-label">As Seen At</div>
            <div className="logo-grid">
              {/* GDG DevFest - Google */}
              <a href="/Talks#-gdg-devfest-noida-2025-continuous-ai" className="logo-item">
                <svg viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="logo-text">
                  <span className="logo-name">Google</span>
                  <span className="logo-event">GDG DevFest</span>
                </div>
              </a>
              {/* GitHub Constellation */}
              <a href="/Talks#github-constellation-2024-how-balena-releases-100s-of-embedded-operating-systems-with-github-actions-in-hours-not-weeks" className="logo-item">
                <svg viewBox="0 0 24 24" fill="#fff">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <div className="logo-text">
                  <span className="logo-name">GitHub</span>
                  <span className="logo-event">Constellation 2024</span>
                </div>
              </a>
              {/* Microsoft - GitTogether */}
              <a href="/Talks#-gittogether-anniversary-meetup" className="logo-item">
                <svg viewBox="0 0 24 24">
                  <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
                  <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
                  <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
                  <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
                </svg>
                <div className="logo-text">
                  <span className="logo-name">Microsoft</span>
                  <span className="logo-event">GitTogether Meetup</span>
                </div>
              </a>
              {/* Mozilla Festival */}
              <a href="/Talks#green-dots-doesnt-matter-contributing-does" className="logo-item">
                <svg viewBox="0 0 24 24" fill="#ff4f5e">
                  <path d="M11.943.006c-1.063.039-1.995.479-2.727 1.21C8.487 1.943 8.039 2.88 8 3.943v.006h-.006c-2.206 0-4 1.794-4 4 0 2.153 1.71 3.906 3.844 3.993-.01.02-.013.039-.023.058a4.486 4.486 0 00-.477 2.006c0 2.206 1.794 4 4 4h.006v.006c0 1.063.448 2 1.175 2.727.728.728 1.665 1.177 2.728 1.216h.052c1.063-.039 2-.488 2.728-1.216.727-.727 1.176-1.664 1.215-2.727v-.006h.006c2.206 0 4-1.794 4-4a3.994 3.994 0 00-3.844-3.993c.01-.02.013-.039.023-.058.308-.612.477-1.29.477-2.006 0-2.206-1.794-4-4-4h-.006v-.006c0-1.063-.448-2-1.175-2.727C14.994.488 14.057.04 12.994 0h-.052z"/>
                </svg>
                <div className="logo-text">
                  <span className="logo-name">Mozilla</span>
                  <span className="logo-event">MozFest 2018</span>
                </div>
              </a>
              {/* Open Source Summit */}
              <a href="/Talks#open-source-summit-europe-2023-lets-build-our-own-virtual-raspberrypi-using-qemu-virtualization" className="logo-item">
                <svg viewBox="0 0 24 24" fill="#fff">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.559c-.227.38-.618.574-1.015.574-.21 0-.422-.054-.619-.167L12 15.268l-4.26 2.698c-.197.113-.409.167-.619.167-.397 0-.788-.194-1.015-.574a1.19 1.19 0 01.411-1.634L10.5 13.5l-3.983-2.425a1.19 1.19 0 01-.411-1.634 1.19 1.19 0 011.634-.411L12 11.732l4.26-2.702a1.19 1.19 0 011.634.411 1.19 1.19 0 01-.411 1.634L13.5 13.5l3.983 2.425a1.19 1.19 0 01.411 1.634z"/>
                </svg>
                <div className="logo-text">
                  <span className="logo-name">Linux Foundation</span>
                  <span className="logo-event">Open Source Summit</span>
                </div>
              </a>
              {/* PyCon India */}
              <a href="/Talks#pydelhi-conf-2023-deploying-python-on-the-edge-mistakes-pain-and-learnings-of-scaling-python-applications-on-millions-of-iot-devices" className="logo-item">
                <svg viewBox="0 0 24 24">
                  <path fill="#3776AB" d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92S3 7.283 3 11.886s2.55 4.425 2.55 4.425h1.521v-2.13s-.082-2.489 2.514-2.489zm-.253-5.679a.807.807 0 110-1.614.807.807 0 010 1.614z"/>
                  <path fill="#FFD43B" d="M14.415 12.308h-4.328s-2.432-.039-2.432 2.35v3.951S7.286 21 12.064 21c4.574 0 4.289-1.983 4.289-1.983l-.006-2.055h-4.363v-.617h6.096S21 16.717 21 12.114s-2.55-4.425-2.55-4.425h-1.521v2.13s.082 2.489-2.514 2.489zm.253 5.679a.807.807 0 110 1.614.807.807 0 010-1.614z"/>
                </svg>
                <div className="logo-text">
                  <span className="logo-name">PyCon</span>
                  <span className="logo-event">PyDelhi Conf 2023</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ROI Section - Moved up */}
        <section className="roi-section">
          <div className="roi-inner">
            <div className="roi-header">
              <h2>Expected Results</h2>
              <p>Based on implementations at Balena and teams trained. Measured outcomes, not projections.</p>
            </div>
            <div className="roi-grid">
              {roiMetrics.map((metric, i) => (
                <div className="roi-card" key={i}>
                  <div className="roi-value">{metric.value}</div>
                  <div className="roi-label">{metric.label}</div>
                  <div className="roi-desc">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-label">About the Instructor</div>
              <h2 className="section-title">Learn from a Practitioner</h2>
              <p className="section-subtitle">
                Production-tested techniques from someone who builds AI systems daily, not just talks about them.
              </p>
            </div>

            <div className="instructor-card">
              <img src={instructor.avatar} alt={instructor.name} className="instructor-photo" />
              <div className="instructor-content">
                <h3>{instructor.name}</h3>
                <p className="instructor-role">{instructor.role}</p>
                <div className="instructor-tags">
                  {instructor.credentials.map((cred, i) => (
                    <span key={i} className={`tag ${cred.highlight ? "accent" : ""}`}>
                      {cred.text}
                    </span>
                  ))}
                </div>
                <div className="instructor-bio">
                  {instructor.bio.map((p, i) => (
                    <p key={i} style={{ marginBottom: i < instructor.bio.length - 1 ? 12 : 0 }}>{p.text}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="section-header" style={{ marginTop: 48 }}>
              <h2 className="section-title">What Your Team Will Learn</h2>
            </div>
            <div className="outcomes-grid">
              {outcomes.map((outcome, i) => (
                <div className="outcome-card" key={i}>
                  <span className="outcome-icon">{outcome.icon}</span>
                  <h4>{outcome.title}</h4>
                  <p>{outcome.description}</p>
                </div>
              ))}
            </div>

            <div className="capstone-section">
              <div className="capstone-header">
                <span className="capstone-badge">{capstone.badge}</span>
                <h3>{capstone.title}</h3>
              </div>
              <p className="capstone-desc">{capstone.description}</p>
              <div className="capstone-examples">
                {capstone.options.map((option, i) => (
                  <div className="capstone-example" key={i}>
                    <span className="capstone-icon">{option.icon}</span>
                    <div>
                      <strong>{option.title}</strong>
                      <span className="capstone-detail">{option.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonial">
              <p className="testimonial-quote">"{testimonials[0].quote}"</p>
              <p className="testimonial-author">{testimonials[0].author}</p>
              <p className="testimonial-role">{testimonials[0].role}</p>
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section className="section" style={{ background: "var(--cloud)" }}>
          <div className="section-inner">
            <div className="section-header">
              <div className="section-label">Workshop Agenda</div>
              <h2 className="section-title">Session Overview</h2>
              <p className="section-subtitle">
                Structured progression from fundamentals to implementation. Every session includes working code you take home.
              </p>
            </div>

            <div className="sessions-list">
              {sessions.map((session) => (
                <div className="session-card" key={session.number}>
                  <div className="session-header">
                    <div className="session-top">
                      <span className="session-number">Session {session.number} · {session.duration}</span>
                      <div className="session-badges">
                        {session.badges.map((badge, i) => (
                          <span key={i} className={`badge badge-${badge.variant}`}>{badge.text}</span>
                        ))}
                      </div>
                    </div>
                    <div className="session-title">{session.title}</div>
                    <div className="session-type">{session.type}</div>
                  </div>
                  <div className="session-body">
                    <p className="session-intro">{session.intro}</p>
                    <div className="content-label">{session.sectionLabel}</div>
                    <div className="topics-grid">
                      {session.topics.map((topic, i) => (
                        <div className="topic-item" key={i}>{topic.text}</div>
                      ))}
                    </div>
                    <div className="deliverables-row">
                      {session.deliverables.map((d, i) => (
                        <span className="deliverable-chip" key={i}>{d.text}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonial">
              <p className="testimonial-quote">"{testimonials[1].quote}"</p>
              <p className="testimonial-author">{testimonials[1].author}</p>
              <p className="testimonial-role">{testimonials[1].role}</p>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-label">What You Get</div>
              <h2 className="section-title">Workshop Deliverables</h2>
              <p className="section-subtitle">
                Everything included in the base workshop.
              </p>
            </div>

            <div className="deliverables-grid">
              {deliverables.map((item, i) => (
                <div className="deliverable-card" key={i}>
                  <div className="deliverable-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <ul>
                    {item.items.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="support-card">
              <div className="support-header">
                <div className="support-icon">{postWorkshopSupport.icon}</div>
                <div>
                  <h4>
                    {postWorkshopSupport.title}
                    <span className="free-badge">{postWorkshopSupport.badge}</span>
                  </h4>
                  <p>{postWorkshopSupport.subtitle}</p>
                </div>
              </div>
              <div className="support-items">
                {postWorkshopSupport.items.map((item, i) => (
                  <div className="support-item" key={i}>
                    <span className="check-icon">✓</span>
                    <strong>{item.title}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta">
          <div className="final-cta-inner">
            <h2>{ctaContent.title}</h2>
            <p>{ctaContent.subtitle}</p>

            <div className="contact-cards">
              {ctaContent.contacts.map((contact, i) => (
                <a
                  key={i}
                  href={contact.link}
                  className="contact-card"
                  target={contact.link.startsWith("mailto") ? undefined : "_blank"}
                  rel={contact.link.startsWith("mailto") ? undefined : "noopener noreferrer"}
                >
                  <h4>{contact.title}</h4>
                  <span className="link-text">{contact.linkText}</span>
                  <p>{contact.description}</p>
                </a>
              ))}
            </div>

            <div className="footer-links">
              <a href={siteConfig.socialLinks.blog} target="_blank" rel="noopener noreferrer">Blog</a>
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        {/* Speaker Credentials Bar */}
        <div className="speaker-bar">
          <div className="speaker-bar-inner">
            <a href="/Talks" className="speaker-bar-item">
              <img src={instructor.avatar} alt={instructor.name} />
              <div className="speaker-info">
                <span className="speaker-name">{instructor.name}</span>
                <span className="speaker-title">127+ Sessions Delivered</span>
              </div>
            </a>
            <div className="speaker-creds">
              <a href="/Talks" className="speaker-cred highlight">GitHub Star 2025</a>
              <a href="/Conferences" className="speaker-cred">Open Source Summit Speaker</a>
              <a href="/Talks#github-constellation-2024-how-balena-releases-100s-of-embedded-operating-systems-with-github-actions-in-hours-not-weeks" className="speaker-cred">GitHub Constellation Speaker</a>
              <a href="/Talks#-gdg-devfest-noida-2025-continuous-ai" className="speaker-cred">GDG DevFest Speaker</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
