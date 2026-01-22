import React, { useState, useCallback } from "react";
import Head from "@docusaurus/Head";
import SEO from "../components/SEO";

export default function AIWorkshop() {
  const siteUrl = "https://docs.mixster.dev";
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = useCallback(async () => {
    setIsGenerating(true);

    try {
      // Dynamically load html2pdf.js
      const html2pdfModule = await import(
        // @ts-ignore
        "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
      ).catch(() => {
        // Fallback: load via script tag
        return new Promise((resolve, reject) => {
          if ((window as any).html2pdf) {
            resolve((window as any).html2pdf);
            return;
          }
          const script = document.createElement("script");
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
          script.onload = () => resolve((window as any).html2pdf);
          script.onerror = reject;
          document.head.appendChild(script);
        });
      });

      const html2pdf = (window as any).html2pdf;
      const element = document.querySelector(".workshop-page");

      if (!element || !html2pdf) {
        throw new Error("Could not initialize PDF generator");
      }

      const opt = {
        margin: 0,
        filename: "AI-Workshop-Proposal-Vipul-Gupta.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
        pagebreak: { mode: ["css", "legacy"], before: ".page" },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("PDF generation failed:", error);
      // Fallback to print dialog
      window.print();
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return (
    <>
      <SEO
        title="AI-Powered Development & Test Automation Workshop"
        description="Half-day hands-on workshop teaching teams AI-assisted coding, self-healing test automation, and CI/CD integration. Led by Vipul Gupta, GitHub Star 2025 with 10 years of open source experience. Live coding, practical labs, and take-home frameworks."
        pathname="ai-workshop"
        type="website"
        keywords={[
          "AI workshop",
          "AI-powered development",
          "test automation workshop",
          "GitHub Copilot training",
          "Claude Code workshop",
          "Cursor IDE training",
          "self-healing tests",
          "AI coding assistant",
          "corporate training",
          "developer workshop",
          "Vipul Gupta",
          "AI engineer",
          "paid workshop",
          "hands-on workshop",
          "CI/CD automation",
        ]}
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
            name: "AI-Powered Development & Test Automation Workshop",
            description:
              "Half-day hands-on workshop teaching teams AI-assisted coding, self-healing test automation, and CI/CD integration with practical labs and take-home frameworks.",
            provider: {
              "@type": "Person",
              name: "Vipul Gupta",
              url: siteUrl,
              sameAs: [
                "https://github.com/vipulgupta2048",
                "https://linkedin.com/in/vipulgupta2048",
              ],
            },
            courseMode: "onsite",
            educationalLevel: "Intermediate",
            teaches: [
              "AI-assisted code generation",
              "Self-healing test automation",
              "CI/CD integration with AI tools",
              "Prompt engineering for developers",
            ],
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "onsite",
              instructor: {
                "@type": "Person",
                name: "Vipul Gupta",
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
            name: "AI-Powered Development Workshop",
            description:
              "Professional training workshop for engineering teams on AI-assisted development and test automation.",
            provider: {
              "@type": "Person",
              name: "Vipul Gupta",
              url: siteUrl,
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
                    name: "Half-Day Workshop (4 Hours)",
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
            .workshop-page { background: white; }
            .workshop-page .page { margin: 0; box-shadow: none; page-break-after: always; }
            .workshop-page .download-btn { display: none; }
            @page { margin: 0; }
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
        {/* Download PDF Button */}
        <button
          className="download-btn"
          onClick={handleDownloadPDF}
          disabled={isGenerating}
          title="Download proposal as PDF"
        >
          {isGenerating ? (
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
          )}
        </button>

        {/* Page 1: Cover */}
        <div className="page cover">
          <div className="cover-content">
            <div className="cover-eyebrow">
              <div className="live-dot"></div>
              <span>Workshop Proposal</span>
            </div>

            <h1>
              AI-Powered Development &amp; <em>Test Automation</em>
            </h1>

            <p className="cover-description">
              A decade of experience building hard-tech systems. Now an AI
              Engineer teaching teams how to ship faster with tools that
              actually work in production.
            </p>

            <div className="cover-meta">
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">Half Day (4 Hours)</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Format</span>
                <span className="meta-value">Live Coding + Labs</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Audience</span>
                <span className="meta-value">
                  Engineers, QA, DevOps &amp; Leadership
                </span>
              </div>
            </div>
          </div>

          <div className="cover-footer">
            <img
              src="/img/avatar.webp"
              alt="Vipul Gupta"
              className="instructor-avatar"
            />
            <div className="instructor-preview-info">
              <h3>Vipul Gupta</h3>
              <p>
                AI Engineer building production agents. Previously shipped
                systems at Balena that saved $250K+ annually.
              </p>
              <div className="credential-pills">
                <span className="pill highlight">GitHub Star 2025</span>
                <span className="pill">Google Cloud Architect</span>
                <span className="pill">10 Years OSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2: About + Outcomes */}
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
                src="/img/avatar.webp"
                alt="Vipul Gupta"
                className="instructor-photo"
              />
              <span className="photo-caption">GitHub Star 2025</span>
            </div>
            <div className="instructor-content">
              <h3>Vipul Gupta</h3>
              <p className="instructor-role">
                AI Engineer @ Command Code · Founder, Mixster · Ex-Balena
              </p>
              <div className="instructor-tags">
                <span className="tag accent">GitHub Star 2025</span>
                <span className="tag">Google Cloud Architect</span>
              </div>
              <div className="instructor-bio">
                <p>
                  Vipul builds{" "}
                  <strong>neuro-symbolic AI agents at Command Code</strong> that
                  learn developer preferences and coding styles. Previously, he
                  led product and engineering at Balena, where he built{" "}
                  <strong>Leviathan</strong>—the first open-source
                  Hardware-in-the-Loop testing system for IoT. It reduced OS
                  release cycles from 6 weeks to 3 hours and delivered{" "}
                  <strong>$250K+ in annual savings</strong>.
                </p>
                <p>
                  Over the past decade, he has delivered{" "}
                  <strong>127+ technical sessions</strong> at conferences
                  including GDG DevFest, OpenSSF India, Open Source Summit
                  (Europe &amp; Japan), PyCon India, and Mozilla Festival. He
                  has contributed to open source since 2016, completed Google
                  Summer of Code twice, and helped grow{" "}
                  <strong>GitTogether Delhi to 5,000+ members</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="outcomes-section">
            <h3 className="outcomes-header">What Your Team Will Learn</h3>
            <div className="outcomes-grid">
              <div className="outcome-card">
                <span className="outcome-icon">💻</span>
                <h4>Production Code Generation</h4>
                <p>
                  Master AI assistants (Copilot, Claude, Cursor) for writing,
                  refactoring, and debugging real code with tests.
                </p>
              </div>
              <div className="outcome-card">
                <span className="outcome-icon">🧪</span>
                <h4>Self-Healing Test Automation</h4>
                <p>
                  Create test frameworks that adapt when UI changes. Generate
                  test suites from requirements.
                </p>
              </div>
              <div className="outcome-card">
                <span className="outcome-icon">🔧</span>
                <h4>CI/CD Integration</h4>
                <p>
                  Integrate AI into your pipelines. Automate code review,
                  security scanning, and quality gates.
                </p>
              </div>
              <div className="outcome-card">
                <span className="outcome-icon">📈</span>
                <h4>Adoption Strategy</h4>
                <p>
                  Get a roadmap for rolling out AI tools with clear metrics to
                  measure success.
                </p>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <p className="testimonial-quote">
              Vipul's LLM evals talk was thoughtful, relevant, and deeply
              technical. His leadership in the GitTogether community reflects
              his commitment to fostering collaboration.
            </p>
            <p className="testimonial-author">Arun Singh</p>
            <p className="testimonial-role">Tech Lead - India, Tech Mahindra</p>
          </div>

          <div className="page-footer">
            <span>AI Workshop Proposal · Vipul Gupta</span>
            <span>Page 1</span>
          </div>
        </div>

        {/* Page 3: Agenda Part 1 */}
        <div className="page content-page">
          <div className="page-header">
            <div className="page-label">Workshop Agenda</div>
            <h2 className="page-title">Session Overview</h2>
            <p className="page-subtitle">
              Structured progression from fundamentals to implementation. Every
              session includes working code you take home.
            </p>
          </div>

          <div className="session-card">
            <div className="session-header">
              <div className="session-top-bar">
                <div className="session-number">Session 1 · 45 min</div>
                <div className="session-badges">
                  <span className="badge badge-demo">Live Demo</span>
                </div>
              </div>
              <div className="session-title">AI Coding Landscape</div>
              <div className="session-type">
                Interactive Discussion + Demonstrations
              </div>
            </div>
            <div className="session-body">
              <p className="session-intro">
                Understand where AI coding tools actually are today. Benchmark
                your team's readiness and identify quick wins.
              </p>

              <div className="content-section">
                <div className="section-label">We'll Cover</div>
                <div className="topics-grid">
                  <div className="topic-item">
                    Current state of AI coding assistants
                  </div>
                  <div className="topic-item">
                    SWE-bench scores &amp; what they mean
                  </div>
                  <div className="topic-item">
                    GitHub Copilot vs Claude vs Cursor
                  </div>
                  <div className="topic-item">When to use each tool</div>
                  <div className="topic-item">Team readiness assessment</div>
                  <div className="topic-item">ROI baseline metrics</div>
                </div>
              </div>

              <div className="content-section">
                <div className="section-label">Live Demo</div>
                <div className="demo-list">
                  <div className="demo-item">
                    <strong>Side-by-Side Build:</strong> Same REST endpoint
                    built traditionally vs. with AI. Measure real differences in
                    time and quality.
                  </div>
                </div>
              </div>

              <div className="deliverables-row">
                <span className="deliverable-chip">Team assessment report</span>
                <span className="deliverable-chip">
                  Baseline metrics dashboard
                </span>
                <span className="deliverable-chip">Tool comparison matrix</span>
              </div>
            </div>
          </div>

          <div className="session-card">
            <div className="session-header">
              <div className="session-top-bar">
                <div className="session-number">Session 2 · 75 min</div>
                <div className="session-badges">
                  <span className="badge badge-labs">3 Labs</span>
                  <span className="badge badge-demo">Live Coding</span>
                </div>
              </div>
              <div className="session-title">Hands-On Code Generation</div>
              <div className="session-type">Live Coding + Pair Programming</div>
            </div>
            <div className="session-body">
              <p className="session-intro">
                This is where you write code. Watch a complete feature built
                live, then build one yourself with AI assistance.
              </p>

              <div className="content-section">
                <div className="section-label">Fundamentals First</div>
                <div className="topics-grid">
                  <div className="topic-item">Prompt engineering basics</div>
                  <div className="topic-item">Context window management</div>
                  <div className="topic-item">
                    Multi-step problem decomposition
                  </div>
                  <div className="topic-item">Iterative refinement patterns</div>
                  <div className="topic-item">AI pair programming workflows</div>
                  <div className="topic-item">When AI helps vs. hurts</div>
                </div>
              </div>

              <div className="content-section">
                <div className="section-label">Live Coding Demo</div>
                <div className="demo-list">
                  <div className="demo-item">
                    <strong>Full-Stack Feature:</strong> Build user auth from
                    scratch (JWT, middleware, validation, tests) using AI in
                    Python/FastAPI or Node/Express.
                  </div>
                  <div className="demo-item">
                    <strong>Legacy Refactor:</strong> Transform messy code into
                    clean architecture with AI guidance.
                  </div>
                </div>
              </div>

              <div className="deliverables-row">
                <span className="deliverable-chip">
                  Working REST API you built
                </span>
                <span className="deliverable-chip">
                  20+ prompt patterns playbook
                </span>
              </div>
            </div>
          </div>

          <div className="page-footer">
            <span>AI Workshop Proposal · Vipul Gupta</span>
            <span>Page 2</span>
          </div>
        </div>

        {/* Page 4: Agenda Part 2 */}
        <div className="page content-page">
          <div className="session-card">
            <div className="session-header">
              <div className="session-top-bar">
                <div className="session-number">Session 3 · 90 min</div>
                <div className="session-badges">
                  <span className="badge badge-labs">3 Labs</span>
                  <span className="badge badge-demo">Framework Build</span>
                </div>
              </div>
              <div className="session-title">AI-Powered Test Automation</div>
              <div className="session-type">
                Framework Building + Live Testing
              </div>
            </div>
            <div className="session-body">
              <p className="session-intro">
                Build test frameworks that don't break when your UI changes.
                Especially valuable for teams drowning in flaky tests.
              </p>

              <div className="content-section">
                <div className="section-label">Fundamentals First</div>
                <div className="topics-grid">
                  <div className="topic-item">Self-healing test architecture</div>
                  <div className="topic-item">Semantic vs brittle selectors</div>
                  <div className="topic-item">AI-powered element location</div>
                  <div className="topic-item">Test data generation</div>
                  <div className="topic-item">Flaky test detection patterns</div>
                  <div className="topic-item">CI/CD integration strategies</div>
                </div>
              </div>

              <div className="content-section">
                <div className="section-label">Live Demo</div>
                <div className="demo-list">
                  <div className="demo-item">
                    <strong>Self-Healing Tests:</strong> Watch AI-powered tests
                    automatically adapt when UI selectors change.
                  </div>
                  <div className="demo-item">
                    <strong>Requirement → Test Suite:</strong> Transform a user
                    story into complete Playwright tests with edge cases.
                  </div>
                </div>
              </div>

              <div className="deliverables-row">
                <span className="deliverable-chip">
                  Self-healing test framework
                </span>
                <span className="deliverable-chip">CI/CD pipeline config</span>
                <span className="deliverable-chip">Flaky test strategy</span>
              </div>
            </div>
          </div>

          <div className="session-card">
            <div className="session-header">
              <div className="session-top-bar">
                <div className="session-number">Session 4 · 30 min</div>
                <div className="session-badges">
                  <span className="badge badge-qa">Q&amp;A</span>
                </div>
              </div>
              <div className="session-title">Implementation Strategy</div>
              <div className="session-type">Planning + Discussion</div>
            </div>
            <div className="session-body">
              <p className="session-intro">
                Turn what you learned into an action plan. Build a realistic
                adoption roadmap for your specific team.
              </p>

              <div className="content-section">
                <div className="section-label">We'll Cover</div>
                <div className="topics-grid">
                  <div className="topic-item">Phased rollout strategy</div>
                  <div className="topic-item">Week 1 pilot program</div>
                  <div className="topic-item">Month 1 team adoption</div>
                  <div className="topic-item">Tool selection criteria</div>
                  <div className="topic-item">Governance &amp; guardrails</div>
                  <div className="topic-item">Measuring success</div>
                </div>
              </div>

              <div className="deliverables-row">
                <span className="deliverable-chip">90-day adoption roadmap</span>
                <span className="deliverable-chip">
                  Governance policy template
                </span>
                <span className="deliverable-chip">ROI metrics dashboard</span>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <p className="testimonial-quote">
              HUGE gratitude to Vipul for being the most supportive and
              incredible mentor. An amazing GitHub Copilot talk from beginner to
              advanced level.
            </p>
            <p className="testimonial-author">Nitya Pandey</p>
            <p className="testimonial-role">
              GitHub Campus Expert · Engineering @ Soti
            </p>
          </div>

          <div className="page-footer">
            <span>AI Workshop Proposal · Vipul Gupta</span>
            <span>Page 3</span>
          </div>
        </div>

        {/* Page 5: Deliverables + Premium */}
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
            <div className="deliverable-card">
              <div className="deliverable-icon">📦</div>
              <h4>Code &amp; Templates</h4>
              <ul>
                <li>Complete GitHub repo with workshop code</li>
                <li>Production-ready templates</li>
                <li>CI/CD pipeline configurations</li>
                <li>Self-healing test framework starter</li>
              </ul>
            </div>
            <div className="deliverable-card">
              <div className="deliverable-icon">📚</div>
              <h4>Documentation</h4>
              <ul>
                <li>Workshop slide deck (PDF)</li>
                <li>Prompt engineering cheat sheets</li>
                <li>Quick reference guides per tool</li>
                <li>Best practices playbook</li>
              </ul>
            </div>
            <div className="deliverable-card">
              <div className="deliverable-icon">🛠️</div>
              <h4>Setup Guides</h4>
              <ul>
                <li>Step-by-step tool installation</li>
                <li>IDE integration tutorials</li>
                <li>Configuration examples</li>
                <li>Troubleshooting guide</li>
              </ul>
            </div>
            <div className="deliverable-card">
              <div className="deliverable-icon">📊</div>
              <h4>Planning Tools</h4>
              <ul>
                <li>ROI calculator spreadsheet</li>
                <li>Adoption roadmap templates</li>
                <li>Governance guidelines</li>
                <li>Metrics dashboard templates</li>
              </ul>
            </div>
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
              <div className="premium-card">
                <h4>🎥 Recorded Workshop + Videos</h4>
                <p>
                  Full recording with timestamps, live coding sessions, bonus
                  tool comparison series.
                </p>
              </div>
              <div className="premium-card">
                <h4>💬 Extended Support</h4>
                <p>
                  30-day Slack/email support, 4 weekly office hours, private
                  Discord, quarterly check-in.
                </p>
              </div>
              <div className="premium-card">
                <h4>🔄 Testing Feedback Loop</h4>
                <p>
                  Design and implement AI-powered testing feedback loops for
                  your codebase and CI/CD.
                </p>
              </div>
              <div className="premium-card">
                <h4>🤖 Custom Claude Bot</h4>
                <p>
                  Deploy Claude Slack/Teams bot with custom prompts, codebase
                  context, and team workflows.
                </p>
              </div>
              <div className="premium-card">
                <h4>📝 Implementation Consulting</h4>
                <p>
                  Post-workshop sessions to review progress, troubleshoot
                  blockers, refine strategy.
                </p>
              </div>
              <div className="premium-card">
                <h4>🏗️ Project + Code Reviews</h4>
                <p>
                  Structured implementation project with weekly check-ins and
                  detailed code reviews.
                </p>
              </div>
            </div>
          </div>

          <div className="page-footer">
            <span>AI Workshop Proposal · Vipul Gupta</span>
            <span>Page 4</span>
          </div>
        </div>

        {/* Page 6: ROI + Contact */}
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
              <div className="roi-card">
                <div className="roi-value">40%</div>
                <div className="roi-label">Faster Development</div>
                <div className="roi-desc">
                  Feature request to production-ready code
                </div>
              </div>
              <div className="roi-card">
                <div className="roi-value">55%</div>
                <div className="roi-label">Faster Reviews</div>
                <div className="roi-desc">
                  Code review cycles with AI-assisted checks
                </div>
              </div>
              <div className="roi-card">
                <div className="roi-value">3-5x</div>
                <div className="roi-label">Test Coverage</div>
                <div className="roi-desc">
                  Automated test scenarios per sprint
                </div>
              </div>
              <div className="roi-card">
                <div className="roi-value">35%</div>
                <div className="roi-label">Fewer Bugs</div>
                <div className="roi-desc">
                  Reduction in production incidents
                </div>
              </div>
              <div className="roi-card">
                <div className="roi-value">80%</div>
                <div className="roi-label">Tool Adoption</div>
                <div className="roi-desc">
                  Engineers using AI tools daily at 90 days
                </div>
              </div>
              <div className="roi-card">
                <div className="roi-value">$38K</div>
                <div className="roi-label">Annual Savings</div>
                <div className="roi-desc">
                  Varies by team size (10-50 engineers)
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <div className="cta-header">
              <h3>Let's Talk</h3>
              <p>
                Send your team size, tech stack, and challenges. I'll respond
                with a customized plan.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <h4>Email</h4>
                <a href="mailto:vipulgupta2048@gmail.com">
                  vipulgupta2048@gmail.com
                </a>
                <p>Share requirements. Customized proposal within 24 hours.</p>
              </div>
              <div className="contact-card">
                <h4>Schedule a Call</h4>
                <a href="https://cal.com/vipulgupta2048">
                  cal.com/vipulgupta2048
                </a>
                <p>
                  30-minute discovery call to discuss objectives and format.
                </p>
              </div>
            </div>

            <div className="cta-footer">
              <p>
                <strong>Customization:</strong> Adapts to your tech stack
                (Python, JS/TS, Java, Go, Rust, C#), industry, team size, and AI
                maturity. <strong>Full-day and multi-day formats available</strong>{" "}
                for comprehensive implementation.
              </p>
              <div className="cta-links">
                <a href="https://mixster.dev">mixster.dev</a>
                <a href="https://linkedin.com/in/vipulgupta2048">LinkedIn</a>
                <a href="https://github.com/vipulgupta2048">GitHub</a>
                <a href="https://talkswith.dev">talkswith.dev</a>
              </div>
            </div>
          </div>

          <div className="page-footer">
            <span>AI Workshop Proposal · Vipul Gupta</span>
            <span>© 2026 Vipul Gupta · Mixster</span>
          </div>
        </div>
      </div>
    </>
  );
}
