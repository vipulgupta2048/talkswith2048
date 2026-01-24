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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&family=Outfit:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
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
                jobTitle: "AI Engineer",
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
        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .workshop-page * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .workshop-page {
            --black: #0a0a0a;
            --graphite: #141414;
            --charcoal: #1f1f1f;
            --iron: #2a2a2a;
            --steel: #3d3d3d;
            --slate: #525252;
            --ash: #737373;
            --silver: #a3a3a3;
            --fog: #d4d4d4;
            --mist: #e5e5e5;
            --cloud: #f0f0f0;
            --snow: #fafafa;
            --white: #ffffff;

            --electric: #3b82f6;
            --electric-bright: #60a5fa;
            --electric-dim: #1d4ed8;
            --mint: #10b981;
            --mint-bright: #34d399;
            --coral: #f43f5e;
            --amber: #f59e0b;
            --violet: #8b5cf6;

            font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.65;
            color: var(--charcoal);
            background: var(--snow);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 15px;
            letter-spacing: -0.01em;
        }

        .workshop-page .page {
            width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            background: var(--white);
            position: relative;
            page-break-after: always;
            overflow: hidden;
        }

        /* ============================================
           COVER PAGE
        ============================================ */
        .workshop-page .cover {
            background: var(--black);
            padding: 0;
            color: var(--white);
            display: grid;
            grid-template-rows: 1fr auto;
            position: relative;
            overflow: hidden;
        }

        .workshop-page .cover::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -30%;
            width: 120%;
            height: 120%;
            background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 60%);
            pointer-events: none;
        }

        .workshop-page .cover::after {
            content: '';
            position: absolute;
            inset: 0;
            background: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.03;
            pointer-events: none;
        }

        .workshop-page .cover-content {
            padding: 64px 64px 48px;
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 2;
        }

        .workshop-page .cover-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 48px;
            animation: fadeUp 0.8s ease-out both;
        }

        .workshop-page .cover-eyebrow span {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: var(--silver);
        }

        .workshop-page .live-dot {
            width: 8px;
            height: 8px;
            background: var(--mint);
            border-radius: 50%;
            animation: pulse 2s ease-in-out infinite;
            box-shadow: 0 0 12px var(--mint);
        }

        .workshop-page .cover h1 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 58px;
            font-weight: 500;
            line-height: 1.08;
            margin-bottom: 32px;
            max-width: 560px;
            letter-spacing: -0.03em;
            animation: fadeUp 0.8s ease-out 0.1s both;
        }

        .workshop-page .cover-description {
            font-size: 18px;
            font-weight: 400;
            color: var(--silver);
            max-width: 480px;
            line-height: 1.7;
            margin-bottom: 48px;
            animation: fadeUp 0.8s ease-out 0.2s both;
        }

        .workshop-page .cover-meta {
            display: flex;
            gap: 48px;
            padding-top: 32px;
            border-top: 1px solid var(--iron);
            animation: fadeUp 0.8s ease-out 0.3s both;
        }

        .workshop-page .meta-item {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .workshop-page .meta-label {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 10px;
            font-weight: 500;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: var(--slate);
        }

        .workshop-page .meta-value {
            font-size: 15px;
            font-weight: 600;
            color: var(--fog);
        }

        .workshop-page .cover-footer {
            background: var(--graphite);
            padding: 32px 64px;
            display: flex;
            align-items: center;
            gap: 28px;
            position: relative;
            z-index: 2;
            animation: fadeUp 0.8s ease-out 0.4s both;
            border-top: 1px solid var(--iron);
        }

        .workshop-page .instructor-avatar {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            border: 2px solid var(--steel);
            object-fit: cover;
            flex-shrink: 0;
        }

        .workshop-page .instructor-preview-info {
            flex: 1;
        }

        .workshop-page .instructor-preview-info h3 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 4px;
            color: var(--white);
        }

        .workshop-page .instructor-preview-info p {
            font-size: 13px;
            color: var(--silver);
            line-height: 1.5;
        }

        .workshop-page .instructor-preview-info .credential-pills {
            margin-top: 12px;
        }

        .workshop-page .credential-pills {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .workshop-page .pill {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 10px;
            font-weight: 500;
            letter-spacing: 0.5px;
            padding: 6px 12px;
            border-radius: 4px;
            background: var(--iron);
            color: var(--fog);
            border: 1px solid var(--steel);
        }

        .workshop-page .pill.highlight {
            background: linear-gradient(135deg, var(--electric-dim) 0%, var(--electric) 100%);
            border-color: var(--electric);
            color: var(--white);
        }

        /* ============================================
           CONTENT PAGES
        ============================================ */
        .workshop-page .content-page {
            padding: 52px 60px;
            background: var(--white);
        }

        .workshop-page .page-header {
            margin-bottom: 36px;
            animation: fadeUp 0.6s ease-out both;
        }

        .workshop-page .page-label {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            color: var(--electric);
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .workshop-page .page-label::after {
            content: '';
            flex: 1;
            height: 1px;
            background: linear-gradient(90deg, var(--electric), transparent);
            max-width: 100px;
        }

        .workshop-page .page-title {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 38px;
            font-weight: 500;
            color: var(--black);
            letter-spacing: -0.02em;
            line-height: 1.15;
        }

        .workshop-page .page-subtitle {
            font-size: 17px;
            color: var(--slate);
            margin-top: 12px;
            max-width: 580px;
            line-height: 1.7;
        }

        /* Instructor Section */
        .workshop-page .instructor-card {
            display: grid;
            grid-template-columns: 130px 1fr;
            gap: 32px;
            padding: 32px;
            background: linear-gradient(135deg, var(--cloud) 0%, var(--snow) 100%);
            border-radius: 16px;
            margin-bottom: 32px;
            border: 1px solid var(--mist);
            animation: fadeUp 0.6s ease-out 0.1s both;
        }

        .workshop-page .instructor-photo-section {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .workshop-page .instructor-photo {
            width: 130px;
            height: 130px;
            border-radius: 12px;
            object-fit: cover;
            border: 3px solid var(--white);
            box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }

        .workshop-page .photo-caption {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 9px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--ash);
            text-align: center;
        }

        .workshop-page .instructor-content h3 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 26px;
            font-weight: 500;
            color: var(--black);
            margin-bottom: 4px;
        }

        .workshop-page .instructor-role {
            font-size: 14px;
            color: var(--slate);
            margin-bottom: 14px;
            font-weight: 500;
        }

        .workshop-page .instructor-tags {
            display: flex;
            gap: 8px;
            margin-bottom: 18px;
            flex-wrap: wrap;
        }

        .workshop-page .tag {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.3px;
            padding: 6px 12px;
            border-radius: 6px;
            background: var(--white);
            color: var(--charcoal);
            border: 1px solid var(--fog);
        }

        .workshop-page .tag.accent {
            background: var(--electric);
            color: var(--white);
            border-color: var(--electric);
        }

        .workshop-page .instructor-bio {
            font-size: 14px;
            line-height: 1.85;
            color: var(--slate);
        }

        .workshop-page .instructor-bio p {
            margin-bottom: 12px;
        }

        .workshop-page .instructor-bio strong {
            color: var(--charcoal);
            font-weight: 600;
        }

        /* Learning Outcomes */
        .workshop-page .outcomes-section {
            margin-top: 28px;
            animation: fadeUp 0.6s ease-out 0.2s both;
        }

        .workshop-page .outcomes-header {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 24px;
            font-weight: 500;
            color: var(--black);
            margin-bottom: 18px;
        }

        .workshop-page .outcomes-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
        }

        .workshop-page .outcome-card {
            padding: 22px;
            background: var(--white);
            border-radius: 12px;
            border: 2px solid var(--mist);
            transition: all 0.3s ease;
        }

        .workshop-page .outcome-card:hover {
            border-color: var(--electric);
            box-shadow: 0 4px 20px rgba(59, 130, 246, 0.12);
            transform: translateY(-2px);
        }

        .workshop-page .outcome-icon {
            font-size: 28px;
            margin-bottom: 12px;
            display: block;
        }

        .workshop-page .outcome-card h4 {
            font-size: 16px;
            font-weight: 700;
            color: var(--charcoal);
            margin-bottom: 8px;
        }

        .workshop-page .outcome-card p {
            font-size: 13px;
            color: var(--slate);
            line-height: 1.6;
        }

        /* ============================================
           SESSION CARDS - BIGGER, BOLDER
        ============================================ */
        .workshop-page .session-card {
            background: var(--white);
            border: 2px solid var(--mist);
            border-radius: 16px;
            margin-bottom: 22px;
            overflow: hidden;
            transition: all 0.3s ease;
            animation: fadeUp 0.6s ease-out both;
        }

        .workshop-page .session-card:hover {
            border-color: var(--electric);
            box-shadow: 0 12px 40px rgba(0,0,0,0.08);
        }

        .workshop-page .session-header {
            padding: 24px 28px;
            background: linear-gradient(135deg, var(--electric) 0%, var(--electric-dim) 100%);
            color: var(--white);
        }

        .workshop-page .session-top-bar {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 12px;
        }

        .workshop-page .session-number {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 1px;
            color: rgba(255,255,255,0.85);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .workshop-page .session-number::before {
            content: '';
            width: 8px;
            height: 8px;
            background: var(--white);
            border-radius: 50%;
        }

        .workshop-page .session-badges {
            display: flex;
            gap: 8px;
            margin-left: auto;
        }

        .workshop-page .badge {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 10px;
            font-weight: 700;
            padding: 6px 14px;
            border-radius: 100px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }

        .workshop-page .badge-labs {
            background: var(--mint);
            color: var(--white);
        }

        .workshop-page .badge-demo {
            background: var(--white);
            color: var(--electric-dim);
        }

        .workshop-page .badge-qa {
            background: var(--amber);
            color: var(--white);
        }

        .workshop-page .session-title {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 26px;
            font-weight: 500;
            color: var(--white);
            margin-bottom: 4px;
        }

        .workshop-page .session-type {
            font-size: 14px;
            color: rgba(255,255,255,0.8);
            font-weight: 500;
        }

        .workshop-page .session-body {
            padding: 28px;
        }

        .workshop-page .session-intro {
            font-size: 16px;
            color: var(--charcoal);
            line-height: 1.7;
            margin-bottom: 24px;
            padding-bottom: 20px;
            border-bottom: 2px solid var(--mist);
            font-weight: 500;
        }

        .workshop-page .content-section {
            margin-bottom: 24px;
        }

        .workshop-page .content-section:last-child {
            margin-bottom: 0;
        }

        .workshop-page .section-label {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: var(--electric);
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .workshop-page .section-label::before {
            content: '';
            width: 4px;
            height: 18px;
            background: var(--electric);
            border-radius: 2px;
        }

        .workshop-page .topics-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .workshop-page .topic-item {
            font-size: 14px;
            font-weight: 500;
            color: var(--charcoal);
            padding: 14px 18px;
            background: linear-gradient(135deg, var(--snow) 0%, var(--cloud) 100%);
            border-radius: 10px;
            border-left: 4px solid var(--electric);
            transition: all 0.2s ease;
        }

        .workshop-page .topic-item:hover {
            background: linear-gradient(135deg, var(--cloud) 0%, var(--mist) 100%);
            transform: translateX(4px);
        }

        .workshop-page .demo-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .workshop-page .demo-item {
            padding: 18px 22px;
            background: linear-gradient(135deg, var(--snow) 0%, var(--white) 100%);
            border-radius: 12px;
            border: 2px solid var(--mist);
            font-size: 15px;
            color: var(--slate);
            line-height: 1.6;
        }

        .workshop-page .demo-item strong {
            color: var(--charcoal);
            font-weight: 700;
        }

        .workshop-page .demo-item.compact {
            padding: 14px 18px;
            font-size: 14px;
        }

        .workshop-page .deliverables-row {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px dashed var(--fog);
        }

        .workshop-page .deliverable-chip {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 11px;
            font-weight: 600;
            padding: 10px 16px;
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
            color: var(--mint);
            border-radius: 8px;
            border: 2px solid rgba(16, 185, 129, 0.3);
        }

        /* Capstone Section */
        .workshop-page .capstone-section {
            margin-top: 24px;
            padding: 24px 28px;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.06) 100%);
            border-radius: 14px;
            border: 2px solid rgba(59, 130, 246, 0.2);
            animation: fadeUp 0.6s ease-out 0.3s both;
        }

        .workshop-page .capstone-header {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 14px;
        }

        .workshop-page .capstone-badge {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: 6px 14px;
            background: linear-gradient(135deg, var(--electric) 0%, var(--violet) 100%);
            color: var(--white);
            border-radius: 6px;
        }

        .workshop-page .capstone-header h3 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 22px;
            font-weight: 500;
            color: var(--black);
            margin: 0;
        }

        .workshop-page .capstone-description {
            font-size: 14px;
            color: var(--slate);
            line-height: 1.7;
            margin-bottom: 18px;
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
            font-size: 13px;
            color: var(--charcoal);
            margin-bottom: 4px;
        }

        .workshop-page .capstone-detail {
            display: block;
            font-size: 11px;
            color: var(--ash);
        }

        /* Post-Workshop Support Highlight */
        .workshop-page .support-highlight {
            margin-top: 20px;
            padding: 24px 28px;
            background: linear-gradient(135deg, var(--snow) 0%, rgba(16, 185, 129, 0.06) 100%);
            border-radius: 14px;
            border: 2px solid rgba(16, 185, 129, 0.25);
        }

        .workshop-page .support-highlight-header {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 18px;
        }

        .workshop-page .support-icon {
            font-size: 32px;
        }

        .workshop-page .support-highlight-header h4 {
            font-size: 18px;
            font-weight: 700;
            color: var(--charcoal);
            margin: 0 0 4px 0;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .workshop-page .free-badge {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            padding: 4px 10px;
            background: var(--mint);
            color: var(--white);
            border-radius: 4px;
        }

        .workshop-page .support-highlight-header p {
            font-size: 13px;
            color: var(--slate);
            margin: 0;
        }

        .workshop-page .support-items {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 16px;
        }

        .workshop-page .support-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 14px 16px;
            background: var(--white);
            border-radius: 10px;
            border: 1px solid var(--mist);
        }

        .workshop-page .check-icon {
            font-size: 16px;
            font-weight: 700;
            color: var(--mint);
            flex-shrink: 0;
        }

        .workshop-page .support-item strong {
            display: block;
            font-size: 13px;
            color: var(--charcoal);
            margin-bottom: 2px;
        }

        .workshop-page .support-item span {
            display: block;
            font-size: 11px;
            color: var(--ash);
        }

        .workshop-page .support-upgrade {
            font-size: 12px;
            color: var(--slate);
            text-align: center;
            padding-top: 12px;
            border-top: 1px dashed var(--fog);
            margin: 0;
        }

        /* Testimonial */
        .workshop-page .testimonial {
            padding: 28px 32px;
            background: linear-gradient(135deg, var(--graphite) 0%, var(--black) 100%);
            border-radius: 16px;
            margin: 28px 0;
            position: relative;
            animation: fadeUp 0.6s ease-out both;
            color: var(--white);
        }

        .workshop-page .testimonial::before {
            content: '"';
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 80px;
            color: var(--electric);
            opacity: 0.3;
            position: absolute;
            top: 5px;
            left: 24px;
            line-height: 1;
        }

        .workshop-page .testimonial-quote {
            font-size: 16px;
            font-style: italic;
            color: var(--fog);
            line-height: 1.8;
            margin-bottom: 16px;
            position: relative;
            z-index: 1;
        }

        .workshop-page .testimonial-author {
            font-size: 14px;
            font-weight: 700;
            color: var(--white);
        }

        .workshop-page .testimonial-role {
            font-size: 12px;
            color: var(--silver);
        }

        /* Deliverables Page */
        .workshop-page .tier-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
        }

        .workshop-page .tier-label {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            padding: 10px 18px;
            border-radius: 8px;
        }

        .workshop-page .tier-included {
            background: var(--mint);
            color: var(--white);
        }

        .workshop-page .deliverables-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-bottom: 32px;
        }

        .workshop-page .deliverable-card {
            padding: 24px;
            background: var(--white);
            border: 2px solid var(--mist);
            border-radius: 14px;
            transition: all 0.3s ease;
        }

        .workshop-page .deliverable-card:hover {
            border-color: var(--mint);
            transform: translateY(-2px);
        }

        .workshop-page .deliverable-icon {
            font-size: 32px;
            margin-bottom: 14px;
        }

        .workshop-page .deliverable-card h4 {
            font-size: 16px;
            font-weight: 700;
            color: var(--charcoal);
            margin-bottom: 14px;
        }

        .workshop-page .deliverable-card ul {
            list-style: none;
        }

        .workshop-page .deliverable-card li {
            font-size: 14px;
            padding: 7px 0;
            padding-left: 24px;
            position: relative;
            color: var(--slate);
            line-height: 1.5;
        }

        .workshop-page .deliverable-card li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--mint);
            font-weight: 700;
        }

        /* Premium Section */
        .workshop-page .premium-section {
            padding: 36px;
            background: linear-gradient(145deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%);
            border-radius: 18px;
            position: relative;
            overflow: hidden;
        }

        .workshop-page .premium-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.05;
            pointer-events: none;
        }

        .workshop-page .premium-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 24px;
            position: relative;
            z-index: 1;
        }

        .workshop-page .premium-header h3 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 26px;
            font-weight: 500;
            color: var(--white);
            margin-bottom: 6px;
        }

        .workshop-page .premium-header p {
            font-size: 15px;
            color: rgba(255,255,255,0.75);
        }

        .workshop-page .premium-badge {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1px;
            padding: 8px 16px;
            background: rgba(255,255,255,0.15);
            border: 1px solid rgba(255,255,255,0.25);
            border-radius: 6px;
            color: var(--white);
        }

        .workshop-page .premium-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            position: relative;
            z-index: 1;
        }

        .workshop-page .premium-card {
            padding: 22px;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 12px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }

        .workshop-page .premium-card:hover {
            background: rgba(255,255,255,0.15);
            border-color: rgba(255,255,255,0.25);
            transform: translateY(-2px);
        }

        .workshop-page .premium-card h4 {
            font-size: 15px;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 8px;
        }

        .workshop-page .premium-card p {
            font-size: 13px;
            color: rgba(255,255,255,0.75);
            line-height: 1.6;
        }

        /* ============================================
           ROI SECTION - FIXED NUMBERS
        ============================================ */
        .workshop-page .roi-section {
            padding: 44px;
            background: var(--black);
            border-radius: 18px;
            margin-bottom: 28px;
            position: relative;
            overflow: hidden;
        }

        .workshop-page .roi-section::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 60%;
            height: 100%;
            background: radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.12) 0%, transparent 60%);
        }

        .workshop-page .roi-header {
            text-align: center;
            margin-bottom: 36px;
            position: relative;
            z-index: 1;
        }

        .workshop-page .roi-header h3 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 32px;
            font-weight: 500;
            color: var(--white);
            margin-bottom: 10px;
        }

        .workshop-page .roi-header p {
            font-size: 15px;
            color: var(--silver);
            max-width: 480px;
            margin: 0 auto;
        }

        .workshop-page .roi-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            position: relative;
            z-index: 1;
        }

        .workshop-page .roi-card {
            padding: 28px 22px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 14px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .workshop-page .roi-card:hover {
            background: rgba(255,255,255,0.1);
            border-color: var(--electric);
            transform: translateY(-3px);
        }

        .workshop-page .roi-value {
            font-family: 'Outfit', sans-serif;
            font-size: 44px;
            font-weight: 800;
            color: var(--electric-bright);
            margin-bottom: 6px;
            letter-spacing: -0.02em;
        }

        .workshop-page .roi-label {
            font-family: 'Outfit', sans-serif;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: var(--fog);
            margin-bottom: 8px;
        }

        .workshop-page .roi-desc {
            font-size: 12px;
            color: var(--silver);
            line-height: 1.5;
        }

        /* CTA Section */
        .workshop-page .cta-section {
            padding: 44px;
            background: linear-gradient(135deg, var(--electric) 0%, var(--electric-dim) 100%);
            border-radius: 18px;
            position: relative;
            overflow: hidden;
        }

        .workshop-page .cta-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.05;
        }

        .workshop-page .cta-header {
            text-align: center;
            margin-bottom: 32px;
            position: relative;
            z-index: 1;
        }

        .workshop-page .cta-header h3 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 32px;
            font-weight: 500;
            color: var(--white);
            margin-bottom: 10px;
        }

        .workshop-page .cta-header p {
            font-size: 16px;
            color: rgba(255,255,255,0.9);
        }

        .workshop-page .contact-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            position: relative;
            z-index: 1;
        }

        .workshop-page .contact-card {
            padding: 28px;
            background: rgba(255,255,255,0.12);
            border: 1px solid rgba(255,255,255,0.18);
            border-radius: 14px;
            backdrop-filter: blur(10px);
        }

        .workshop-page .contact-card h4 {
            font-size: 15px;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 8px;
        }

        .workshop-page .contact-card a {
            color: rgba(255,255,255,0.95);
            text-decoration: none;
            font-size: 16px;
            font-weight: 600;
            transition: color 0.2s ease;
        }

        .workshop-page .contact-card a:hover {
            color: var(--white);
            text-decoration: underline;
        }

        .workshop-page .contact-card p {
            font-size: 13px;
            color: rgba(255,255,255,0.75);
            margin-top: 10px;
            line-height: 1.5;
        }

        .workshop-page .cta-footer {
            margin-top: 28px;
            padding-top: 24px;
            border-top: 1px solid rgba(255,255,255,0.18);
            text-align: center;
            position: relative;
            z-index: 1;
        }

        .workshop-page .cta-footer p {
            font-size: 14px;
            color: rgba(255,255,255,0.9);
            line-height: 1.7;
        }

        .workshop-page .cta-links {
            margin-top: 14px;
            display: flex;
            justify-content: center;
            gap: 28px;
        }

        .workshop-page .cta-links a {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 12px;
            color: rgba(255,255,255,0.75);
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .workshop-page .cta-links a:hover {
            color: var(--white);
        }

        /* Page Footer */
        .workshop-page .page-footer {
            position: absolute;
            bottom: 28px;
            left: 60px;
            right: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'IBM Plex Mono', monospace;
            font-size: 10px;
            color: var(--ash);
            letter-spacing: 0.5px;
        }

        /* Download Button */
        .workshop-page .download-btn {
            position: fixed;
            top: 80px;
            right: 24px;
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 24px;
            background: linear-gradient(135deg, var(--electric) 0%, var(--electric-dim) 100%);
            color: var(--white);
            border: none;
            border-radius: 12px;
            font-family: 'IBM Plex Mono', monospace;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.5px;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4), 0 2px 8px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }

        .workshop-page .download-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 28px rgba(59, 130, 246, 0.5), 0 4px 12px rgba(0,0,0,0.25);
        }

        .workshop-page .download-btn:active {
            transform: translateY(0);
        }

        .workshop-page .download-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
        }

        .workshop-page .download-btn svg {
            width: 18px;
            height: 18px;
            fill: currentColor;
        }

        .workshop-page .download-btn .spinner {
            width: 18px;
            height: 18px;
            border: 2px solid rgba(255,255,255,0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        @media print {
            /* Reset everything for print */
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

            html, body {
                margin: 0 !important;
                padding: 0 !important;
                background: white !important;
            }

            /* Hide Docusaurus chrome */
            nav, .navbar, .footer, .theme-doc-sidebar-container,
            [class*="docSidebar"], [class*="navbar"], [class*="footer"],
            .pagination-nav, .theme-doc-footer {
                display: none !important;
            }

            .workshop-page {
                background: white !important;
                padding: 0 !important;
                margin: 0 !important;
            }

            .workshop-page .page {
                width: 210mm !important;
                height: 297mm !important;
                min-height: 297mm !important;
                max-height: 297mm !important;
                margin: 0 !important;
                padding: 0 !important;
                box-shadow: none !important;
                page-break-after: always !important;
                page-break-inside: avoid !important;
                overflow: hidden !important;
                position: relative !important;
            }

            .workshop-page .page:last-child {
                page-break-after: auto !important;
            }

            /* Ensure cover page prints correctly */
            .workshop-page .cover {
                height: 297mm !important;
            }

            /* Ensure content pages fit */
            .workshop-page .content-page {
                height: 297mm !important;
                padding: 40px 50px !important;
            }

            .workshop-page .download-btn { display: none !important; }

            /* Remove animations for print */
            .workshop-page * {
                animation: none !important;
                transition: none !important;
            }

            @page {
                size: A4 portrait;
                margin: 0;
            }
        }

        @media (max-width: 900px) {
            .workshop-page .page {
                width: 100%;
                min-height: auto;
            }
            .workshop-page .cover-content {
                padding: 32px;
            }
            .workshop-page .cover h1 {
                font-size: 36px;
            }
            .workshop-page .cover-meta {
                flex-direction: column;
                gap: 16px;
            }
            .workshop-page .cover-footer {
                padding: 24px 32px;
                flex-wrap: wrap;
            }
            .workshop-page .content-page {
                padding: 32px 24px;
            }
            .workshop-page .instructor-card {
                grid-template-columns: 1fr;
            }
            .workshop-page .outcomes-grid,
            .workshop-page .topics-grid,
            .workshop-page .deliverables-grid,
            .workshop-page .premium-grid,
            .workshop-page .contact-grid {
                grid-template-columns: 1fr;
            }
            .workshop-page .roi-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .workshop-page .page-footer {
                position: relative;
                bottom: auto;
                left: auto;
                right: auto;
                margin-top: 32px;
                padding: 0 24px;
            }
            .workshop-page .download-btn {
                top: auto;
                bottom: 24px;
                right: 16px;
                padding: 12px 18px;
                font-size: 12px;
                border-radius: 10px;
            }
        }
      `}</style>
      <div className="workshop-page">
        {/* Download PDF Button - Only render in browser */}
        <BrowserOnly fallback={<div className="download-btn">Loading...</div>}>
          {() => {
            // Dynamic imports for browser-only PDF components
            const { PDFDownloadLink } = require("@react-pdf/renderer");
            const WorkshopPDF = require("../components/WorkshopPDF").default;
            return (
              <PDFDownloadLink
                document={<WorkshopPDF />}
                fileName="AI-Workshop-Proposal-Vipul-Gupta.pdf"
                className="download-btn"
              >
                {({ loading }: { loading: boolean }) =>
                  loading ? (
                    <>
                      <span className="spinner" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

        {/* Page 1: Cover - Content from workshopData.ts */}
        <div className="page cover">
          <div className="cover-content">
            <div className="cover-eyebrow">
              <div className="live-dot"></div>
              <span>{coverContent.eyebrow}</span>
            </div>

            <h1>
              {coverContent.title} <em>{coverContent.titleEmphasis}</em>
            </h1>

            <p className="cover-description">{coverContent.description}</p>

            <div className="cover-meta">
              {coverContent.meta.map((item, i) => (
                <div className="meta-item" key={i}>
                  <span className="meta-label">{item.label}</span>
                  <span className="meta-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cover-footer">
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="instructor-avatar"
            />
            <div className="instructor-preview-info">
              <h3>{instructor.name}</h3>
              <p>{instructor.shortDescription}</p>
              <div className="credential-pills">
                {instructor.credentials.map((cred, i) => (
                  <span
                    key={i}
                    className={`pill ${cred.highlight ? "highlight" : ""}`}
                  >
                    {cred.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Page 2: About + Outcomes - Content from workshopData.ts */}
        <div className="page content-page">
          <div className="page-header">
            <div className="page-label">About the Instructor</div>
            <h2 className="page-title">Learn from a Practitioner</h2>
            <p className="page-subtitle">
              Production-tested techniques from someone who builds AI systems
              daily, not just talks about them.
            </p>
          </div>

          <div className="instructor-card">
            <div className="instructor-photo-section">
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className="instructor-photo"
              />
              <span className="photo-caption">
                {instructor.credentials[0].text}
              </span>
            </div>
            <div className="instructor-content">
              <h3>{instructor.name}</h3>
              <p className="instructor-role">{instructor.role}</p>
              <div className="instructor-tags">
                {instructor.credentials.slice(0, 2).map((cred, i) => (
                  <span key={i} className={`tag ${i === 0 ? "accent" : ""}`}>
                    {cred.text}
                  </span>
                ))}
              </div>
              <div className="instructor-bio">
                {instructor.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph.text}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="outcomes-section">
            <h3 className="outcomes-header">What Your Team Will Learn</h3>
            <div className="outcomes-grid">
              {outcomes.map((outcome, i) => (
                <div className="outcome-card" key={i}>
                  <span className="outcome-icon">{outcome.icon}</span>
                  <h4>{outcome.title}</h4>
                  <p>{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="capstone-section">
            <div className="capstone-header">
              <span className="capstone-badge">{capstone.badge}</span>
              <h3>{capstone.title}</h3>
            </div>
            <p className="capstone-description">{capstone.description}</p>
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
            <p className="testimonial-quote">{testimonials[0].quote}</p>
            <p className="testimonial-author">{testimonials[0].author}</p>
            <p className="testimonial-role">{testimonials[0].role}</p>
          </div>

          <div className="page-footer">
            <span>AI Workshop Proposal · {instructor.name}</span>
            <span>Page 1</span>
          </div>
        </div>

        {/* Page 3: Agenda Part 1 - Content from workshopData.ts */}
        <div className="page content-page">
          <div className="page-header">
            <div className="page-label">Workshop Agenda</div>
            <h2 className="page-title">Session Overview</h2>
            <p className="page-subtitle">
              Structured progression from fundamentals to implementation. Every
              session includes working code you take home.
            </p>
          </div>

          {sessions.slice(0, 2).map((session) => (
            <div className="session-card" key={session.number}>
              <div className="session-header">
                <div className="session-top-bar">
                  <div className="session-number">
                    Session {session.number} · {session.duration}
                  </div>
                  <div className="session-badges">
                    {session.badges.map((badge, i) => (
                      <span key={i} className={`badge badge-${badge.variant}`}>
                        {badge.text}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="session-title">{session.title}</div>
                <div className="session-type">{session.type}</div>
              </div>
              <div className="session-body">
                <p className="session-intro">{session.intro}</p>

                <div className="content-section">
                  <div className="section-label">{session.sectionLabel}</div>
                  <div className="topics-grid">
                    {session.topics.map((topic, i) => (
                      <div className="topic-item" key={i}>
                        {topic.text}
                      </div>
                    ))}
                  </div>
                </div>

                {session.demos && (
                  <div className="content-section">
                    <div className="section-label">Live Demo</div>
                    {session.demos.map((demo, i) => (
                      <div className="demo-item" key={i}>
                        <strong>{demo.title}:</strong> {demo.description}
                      </div>
                    ))}
                  </div>
                )}

                <div className="deliverables-row">
                  {session.deliverables.map((d, i) => (
                    <span className="deliverable-chip" key={i}>
                      {d.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="page-footer">
            <span>AI Workshop Proposal · {instructor.name}</span>
            <span>Page 2</span>
          </div>
        </div>

        {/* Page 4: Agenda Part 2 - Content from workshopData.ts */}
        <div className="page content-page">
          {sessions.slice(2, 4).map((session) => (
            <div className="session-card" key={session.number}>
              <div className="session-header">
                <div className="session-top-bar">
                  <div className="session-number">
                    Session {session.number} · {session.duration}
                  </div>
                  <div className="session-badges">
                    {session.badges.map((badge, i) => (
                      <span key={i} className={`badge badge-${badge.variant}`}>
                        {badge.text}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="session-title">{session.title}</div>
                <div className="session-type">{session.type}</div>
              </div>
              <div className="session-body">
                <p className="session-intro">{session.intro}</p>

                <div className="content-section">
                  <div className="section-label">{session.sectionLabel}</div>
                  <div className="topics-grid">
                    {session.topics.map((topic, i) => (
                      <div className="topic-item" key={i}>
                        {topic.text}
                      </div>
                    ))}
                  </div>
                </div>

                {session.demos && (
                  <div className="content-section">
                    <div className="section-label">Live Demo</div>
                    {session.demos.map((demo, i) => (
                      <div className="demo-item" key={i}>
                        <strong>{demo.title}:</strong> {demo.description}
                      </div>
                    ))}
                  </div>
                )}

                <div className="deliverables-row">
                  {session.deliverables.map((d, i) => (
                    <span className="deliverable-chip" key={i}>
                      {d.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="testimonial">
            <p className="testimonial-quote">{testimonials[1].quote}</p>
            <p className="testimonial-author">{testimonials[1].author}</p>
            <p className="testimonial-role">{testimonials[1].role}</p>
          </div>

          <div className="page-footer">
            <span>AI Workshop Proposal · {instructor.name}</span>
            <span>Page 3</span>
          </div>
        </div>

        {/* Page 5: Deliverables + Premium - Content from workshopData.ts */}
        <div className="page content-page">
          <div className="page-header">
            <div className="page-label">What You Get</div>
            <h2 className="page-title">Workshop Deliverables</h2>
            <p className="page-subtitle">
              Everything included in the base workshop, plus optional services
              for deeper implementation support.
            </p>
          </div>

          <div className="tier-header">
            <span className="tier-label tier-included">
              Included in Workshop
            </span>
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

          <div className="support-highlight">
            <div className="support-highlight-header">
              <div className="support-icon">{postWorkshopSupport.icon}</div>
              <div>
                <h4>
                  {postWorkshopSupport.title}{" "}
                  <span className="free-badge">{postWorkshopSupport.badge}</span>
                </h4>
                <p>{postWorkshopSupport.subtitle}</p>
              </div>
            </div>
            <div className="support-items">
              {postWorkshopSupport.items.map((item, i) => (
                <div className="support-item" key={i}>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="support-upgrade">{postWorkshopSupport.upgradeText}</p>
          </div>

          <div className="premium-section">
            <div className="premium-header">
              <div>
                <h3>Premium Add-Ons</h3>
                <p>
                  For teams that want hands-on implementation support. Priced
                  separately.
                </p>
              </div>
              <span className="premium-badge">Optional</span>
            </div>

            <div className="premium-grid">
              {premiumAddons.map((addon, i) => (
                <div className="premium-card" key={i}>
                  <h4>
                    {addon.icon} {addon.title}
                  </h4>
                  <p>{addon.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="page-footer">
            <span>AI Workshop Proposal · {instructor.name}</span>
            <span>Page 4</span>
          </div>
        </div>

        {/* Page 6: ROI + Contact - Content from workshopData.ts */}
        <div className="page content-page">
          <div className="roi-section">
            <div className="roi-header">
              <h3>Expected Results</h3>
              <p>
                Based on implementations at Balena and teams trained. These are
                measured outcomes, not projections.
              </p>
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

          <div className="cta-section">
            <div className="cta-header">
              <h3>{ctaContent.title}</h3>
              <p>{ctaContent.subtitle}</p>
            </div>

            <div className="contact-grid">
              {ctaContent.contacts.map((contact, i) => (
                <a
                  key={i}
                  href={contact.link}
                  className="contact-card"
                  target={contact.link.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    contact.link.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                >
                  <h4>{contact.title}</h4>
                  <span className="contact-link">{contact.linkText}</span>
                  <p>{contact.description}</p>
                </a>
              ))}
            </div>

            <div className="cta-footer">
              <p>{ctaContent.footer}</p>
              <div className="cta-links">
                <a
                  href={siteConfig.socialLinks.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={siteConfig.socialLinks.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Source
                </a>
              </div>
            </div>
          </div>

          <div className="page-footer">
            <span>AI Workshop Proposal · {instructor.name}</span>
            <span>{new Date().getFullYear()} {instructor.name} · Mixster</span>
          </div>
        </div>
      </div>
    </>
  );
}
