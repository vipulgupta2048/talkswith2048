import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
  Link,
} from "@react-pdf/renderer";

/**
 * Workshop PDF Document
 * =====================
 * Uses shared content from workshopData.ts
 * This ensures web page and PDF stay in sync.
 *
 * @see src/data/workshopData.ts - Single source of truth
 * @see src/pages/ai-workshop.tsx - Web page version
 */
import {
  siteConfig,
  pdfMetadata,
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

/**
 * Font Registration for PDF
 * Using fontsource CDN for reliable font loading
 * @see https://react-pdf.org/fonts
 */

// Disable hyphenation to avoid font issues
Font.registerHyphenationCallback((word) => [word]);

// Register Helvetica-like system font as fallback (always available)
// For custom fonts, we use Google Fonts direct TTF links
Font.register({
  family: "Outfit",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/outfit@latest/latin-400-normal.ttf",
      fontWeight: 400,
    },
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/outfit@latest/latin-500-normal.ttf",
      fontWeight: 500,
    },
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/outfit@latest/latin-600-normal.ttf",
      fontWeight: 600,
    },
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/outfit@latest/latin-700-normal.ttf",
      fontWeight: 700,
    },
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/outfit@latest/latin-800-normal.ttf",
      fontWeight: 800,
    },
  ],
});

Font.register({
  family: "Playfair",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/playfair-display@latest/latin-400-normal.ttf",
      fontWeight: 400,
    },
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/playfair-display@latest/latin-400-italic.ttf",
      fontWeight: 400,
      fontStyle: "italic",
    },
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/playfair-display@latest/latin-500-normal.ttf",
      fontWeight: 500,
    },
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/playfair-display@latest/latin-500-italic.ttf",
      fontWeight: 500,
      fontStyle: "italic",
    },
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/playfair-display@latest/latin-700-normal.ttf",
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: "IBMPlexMono",
  src: "https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-mono@latest/latin-400-normal.ttf",
});

const colors = {
  black: "#0a0a0a",
  graphite: "#141414",
  charcoal: "#1f1f1f",
  iron: "#2a2a2a",
  steel: "#3d3d3d",
  slate: "#525252",
  ash: "#737373",
  silver: "#a3a3a3",
  fog: "#d4d4d4",
  mist: "#e5e5e5",
  cloud: "#f0f0f0",
  snow: "#fafafa",
  white: "#ffffff",
  electric: "#3b82f6",
  electricBright: "#60a5fa",
  electricDim: "#1d4ed8",
  mint: "#10b981",
  amber: "#f59e0b",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    fontFamily: "Outfit",
    fontSize: 10,
    color: colors.charcoal,
  },
  // Cover Page
  coverPage: {
    backgroundColor: colors.black,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  coverContent: {
    flex: 1,
    padding: "45pt 45pt 35pt",
  },
  coverEyebrow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 35,
  },
  liveDot: {
    width: 6,
    height: 6,
    backgroundColor: colors.mint,
    borderRadius: 3,
    marginRight: 10,
  },
  eyebrowText: {
    fontFamily: "IBMPlexMono",
    fontSize: 9,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: colors.silver,
  },
  coverTitle: {
    fontFamily: "Playfair",
    fontSize: 42,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 22,
    lineHeight: 1.1,
  },
  coverTitleItalic: {
    fontStyle: "italic",
  },
  coverDescription: {
    fontSize: 14,
    color: colors.silver,
    marginBottom: 35,
    lineHeight: 1.7,
    maxWidth: 380,
  },
  coverMeta: {
    flexDirection: "row",
    gap: 35,
    paddingTop: 22,
    borderTopWidth: 1,
    borderTopColor: colors.iron,
  },
  metaItem: {
    flexDirection: "column",
    gap: 4,
  },
  metaLabel: {
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: colors.slate,
  },
  metaValue: {
    fontSize: 11,
    fontWeight: 600,
    color: colors.fog,
  },
  coverFooter: {
    backgroundColor: colors.graphite,
    padding: "22pt 45pt",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderTopWidth: 1,
    borderTopColor: colors.iron,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
  },
  instructorPreview: {
    flex: 1,
  },
  instructorName: {
    fontFamily: "Playfair",
    fontSize: 16,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 3,
  },
  instructorDesc: {
    fontSize: 10,
    color: colors.silver,
    lineHeight: 1.5,
    marginBottom: 10,
  },
  pillRow: {
    flexDirection: "row",
    gap: 6,
  },
  pill: {
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    padding: "5pt 10pt",
    borderRadius: 3,
    backgroundColor: colors.iron,
    color: colors.fog,
  },
  pillHighlight: {
    backgroundColor: colors.electric,
    color: colors.white,
  },
  // Content Pages
  contentPage: {
    padding: "32pt 40pt 50pt",
    position: "relative",
  },
  pageLabel: {
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: colors.electric,
    marginBottom: 6,
  },
  pageTitle: {
    fontFamily: "Playfair",
    fontSize: 22,
    fontWeight: 500,
    color: colors.black,
    marginBottom: 6,
  },
  pageSubtitle: {
    fontSize: 10,
    color: colors.slate,
    marginBottom: 14,
    lineHeight: 1.5,
    maxWidth: 400,
  },
  // Instructor Card
  instructorCard: {
    flexDirection: "row",
    gap: 16,
    padding: 16,
    backgroundColor: colors.cloud,
    borderRadius: 8,
    marginBottom: 14,
  },
  instructorPhoto: {
    width: 70,
    height: 70,
    borderRadius: 6,
  },
  instructorContent: {
    flex: 1,
  },
  instructorRole: {
    fontSize: 10,
    color: colors.slate,
    marginBottom: 10,
  },
  tagRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 12,
  },
  tag: {
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    padding: "4pt 10pt",
    borderRadius: 4,
    backgroundColor: colors.white,
    color: colors.charcoal,
  },
  tagAccent: {
    backgroundColor: colors.electric,
    color: colors.white,
  },
  bioText: {
    fontSize: 9,
    color: colors.slate,
    lineHeight: 1.6,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 700,
    color: colors.charcoal,
  },
  // Outcomes Grid
  outcomesHeader: {
    fontFamily: "Playfair",
    fontSize: 14,
    fontWeight: 500,
    color: colors.black,
    marginBottom: 10,
    marginTop: 12,
  },
  outcomesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  outcomeCard: {
    width: "48%",
    padding: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.mist,
    borderRadius: 6,
  },
  outcomeIcon: {
    fontSize: 16,
    marginBottom: 4,
  },
  outcomeTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.charcoal,
    marginBottom: 3,
  },
  outcomeDesc: {
    fontSize: 8,
    color: colors.slate,
    lineHeight: 1.4,
  },
  // Capstone Section
  capstoneSection: {
    marginTop: 10,
    padding: 12,
    backgroundColor: "rgba(59, 130, 246, 0.06)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(59, 130, 246, 0.2)",
  },
  capstoneHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  capstoneBadge: {
    fontFamily: "IBMPlexMono",
    fontSize: 7,
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    padding: "3pt 8pt",
    backgroundColor: colors.electric,
    color: colors.white,
    borderRadius: 3,
  },
  capstoneTitle: {
    fontFamily: "Playfair",
    fontSize: 13,
    fontWeight: 500,
    color: colors.black,
  },
  capstoneDesc: {
    fontSize: 9,
    color: colors.slate,
    lineHeight: 1.5,
    marginBottom: 8,
  },
  capstoneExamples: {
    flexDirection: "row",
    gap: 8,
  },
  capstoneExample: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.mist,
  },
  capstoneIcon: {
    fontSize: 14,
  },
  capstoneExampleText: {
    flex: 1,
  },
  capstoneExampleTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: colors.charcoal,
    marginBottom: 1,
  },
  capstoneExampleDetail: {
    fontSize: 7,
    color: colors.ash,
  },
  // Support Highlight
  supportHighlight: {
    marginTop: 10,
    padding: 12,
    backgroundColor: "rgba(16, 185, 129, 0.06)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(16, 185, 129, 0.2)",
  },
  supportHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 8,
  },
  supportIcon: {
    fontSize: 16,
  },
  supportTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.charcoal,
    marginBottom: 1,
  },
  freeBadge: {
    fontFamily: "IBMPlexMono",
    fontSize: 6,
    fontWeight: 700,
    letterSpacing: 0.3,
    textTransform: "uppercase",
    padding: "2pt 6pt",
    backgroundColor: colors.mint,
    color: colors.white,
    borderRadius: 2,
    marginLeft: 6,
  },
  supportSubtitle: {
    fontSize: 8,
    color: colors.slate,
  },
  supportItems: {
    gap: 5,
    marginBottom: 8,
  },
  supportItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 6,
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.mist,
  },
  checkIcon: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.mint,
  },
  supportItemTitle: {
    fontSize: 8,
    fontWeight: 600,
    color: colors.charcoal,
    marginBottom: 1,
  },
  supportItemDesc: {
    fontSize: 7,
    color: colors.ash,
  },
  supportUpgrade: {
    fontSize: 7,
    color: colors.slate,
    textAlign: "center",
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.fog,
    borderStyle: "dashed",
  },
  // Testimonial
  testimonial: {
    padding: "12pt 16pt",
    backgroundColor: colors.graphite,
    borderRadius: 8,
    marginTop: 12,
  },
  testimonialQuote: {
    fontFamily: "Playfair",
    fontSize: 10,
    fontStyle: "italic",
    color: colors.fog,
    lineHeight: 1.5,
    marginBottom: 8,
  },
  testimonialAuthor: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.white,
  },
  testimonialRole: {
    fontSize: 8,
    color: colors.silver,
  },
  // Session Cards
  sessionCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.mist,
    borderRadius: 8,
    marginBottom: 12,
    overflow: "hidden",
  },
  sessionHeader: {
    padding: "12pt 16pt",
    backgroundColor: colors.electric,
  },
  sessionTopBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  sessionNumber: {
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    color: "rgba(255,255,255,0.85)",
  },
  badge: {
    fontFamily: "IBMPlexMono",
    fontSize: 7,
    fontWeight: 700,
    padding: "3pt 8pt",
    borderRadius: 50,
    marginLeft: 6,
  },
  badgeLabs: {
    backgroundColor: colors.mint,
    color: colors.white,
  },
  badgeDemo: {
    backgroundColor: colors.white,
    color: colors.electricDim,
  },
  badgeQA: {
    backgroundColor: colors.amber,
    color: colors.white,
  },
  sessionTitle: {
    fontFamily: "Playfair",
    fontSize: 14,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 2,
  },
  sessionType: {
    fontSize: 9,
    color: "rgba(255,255,255,0.8)",
  },
  sessionBody: {
    padding: 14,
  },
  sessionIntro: {
    fontSize: 9,
    color: colors.charcoal,
    lineHeight: 1.5,
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.mist,
  },
  sectionLabel: {
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: colors.electric,
    marginBottom: 6,
    marginTop: 8,
  },
  topicsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  topicItem: {
    width: "48%",
    fontSize: 8,
    fontWeight: 500,
    color: colors.charcoal,
    padding: "6pt 8pt",
    backgroundColor: colors.snow,
    borderRadius: 4,
    borderLeftWidth: 2,
    borderLeftColor: colors.electric,
  },
  demoItem: {
    padding: "8pt 12pt",
    backgroundColor: colors.snow,
    borderRadius: 6,
    marginBottom: 6,
    fontSize: 9,
    color: colors.slate,
    lineHeight: 1.4,
  },
  deliverablesRow: {
    flexDirection: "row",
    gap: 6,
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopStyle: "dashed",
    borderTopColor: colors.fog,
    flexWrap: "wrap",
  },
  deliverableChip: {
    fontFamily: "IBMPlexMono",
    fontSize: 7,
    padding: "5pt 8pt",
    backgroundColor: "rgba(16, 185, 129, 0.12)",
    color: colors.mint,
    borderRadius: 4,
  },
  // Deliverables Grid
  tierLabel: {
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    padding: "6pt 10pt",
    backgroundColor: colors.mint,
    color: colors.white,
    borderRadius: 4,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  deliverablesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 14,
  },
  deliverableCard: {
    width: "48%",
    padding: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.mist,
    borderRadius: 8,
  },
  deliverableIcon: {
    fontSize: 18,
    marginBottom: 6,
  },
  deliverableTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.charcoal,
    marginBottom: 6,
  },
  deliverableList: {
    gap: 4,
  },
  deliverableListItem: {
    fontSize: 8,
    color: colors.slate,
    lineHeight: 1.3,
    paddingLeft: 12,
  },
  checkmark: {
    color: colors.mint,
    fontWeight: 700,
    position: "absolute",
    left: 0,
  },
  // Premium Section
  premiumSection: {
    padding: 16,
    backgroundColor: "#312e81",
    borderRadius: 10,
    marginTop: 10,
  },
  premiumHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  premiumTitle: {
    fontFamily: "Playfair",
    fontSize: 14,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 2,
  },
  premiumSubtitle: {
    fontSize: 8,
    color: "rgba(255,255,255,0.75)",
  },
  premiumBadge: {
    fontFamily: "IBMPlexMono",
    fontSize: 7,
    fontWeight: 700,
    padding: "4pt 8pt",
    backgroundColor: "rgba(255,255,255,0.15)",
    color: colors.white,
    borderRadius: 3,
    height: 16,
  },
  premiumGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  premiumCard: {
    width: "48%",
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 6,
  },
  premiumCardTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: colors.white,
    marginBottom: 4,
  },
  premiumCardDesc: {
    fontSize: 7,
    color: "rgba(255,255,255,0.75)",
    lineHeight: 1.4,
  },
  // ROI Section
  roiSection: {
    padding: 20,
    backgroundColor: colors.black,
    borderRadius: 10,
    marginBottom: 14,
  },
  roiHeader: {
    textAlign: "center",
    marginBottom: 16,
  },
  roiTitle: {
    fontFamily: "Playfair",
    fontSize: 18,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 6,
  },
  roiSubtitle: {
    fontSize: 9,
    color: colors.silver,
    maxWidth: 320,
    marginLeft: "auto",
    marginRight: "auto",
  },
  roiGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  roiCard: {
    width: "30%",
    padding: 14,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 8,
    textAlign: "center",
  },
  roiValue: {
    fontSize: 24,
    fontWeight: 800,
    color: colors.electricBright,
    marginBottom: 3,
  },
  roiLabel: {
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 0.3,
    textTransform: "uppercase",
    color: colors.fog,
    marginBottom: 4,
  },
  roiDesc: {
    fontSize: 7,
    color: colors.silver,
    lineHeight: 1.3,
  },
  // CTA Section
  ctaSection: {
    padding: 20,
    backgroundColor: colors.electric,
    borderRadius: 10,
  },
  ctaHeader: {
    textAlign: "center",
    marginBottom: 16,
  },
  ctaTitle: {
    fontFamily: "Playfair",
    fontSize: 18,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 6,
  },
  ctaSubtitle: {
    fontSize: 10,
    color: "rgba(255,255,255,0.9)",
  },
  contactGrid: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },
  contactCard: {
    flex: 1,
    padding: 14,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 8,
  },
  contactTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.white,
    marginBottom: 4,
  },
  contactLink: {
    fontSize: 10,
    fontWeight: 600,
    color: "rgba(255,255,255,0.95)",
    textDecoration: "none",
  },
  contactDesc: {
    fontSize: 8,
    color: "rgba(255,255,255,0.75)",
    marginTop: 6,
    lineHeight: 1.3,
  },
  ctaFooter: {
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.18)",
    textAlign: "center",
  },
  ctaFooterText: {
    fontSize: 8,
    color: "rgba(255,255,255,0.9)",
    lineHeight: 1.5,
    marginBottom: 8,
  },
  ctaLinks: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
  },
  ctaLink: {
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    color: "rgba(255,255,255,0.75)",
    textDecoration: "none",
  },
  // Page Footer
  pageFooter: {
    position: "absolute",
    bottom: 22,
    left: 45,
    right: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    color: colors.ash,
  },
});

const WorkshopPDF = () => (
  <Document
    title={pdfMetadata.title}
    author={pdfMetadata.author}
    subject={pdfMetadata.subject}
    keywords={pdfMetadata.keywords}
  >
    {/* Page 1: Cover - Content from workshopData.ts */}
    <Page size="A4" style={styles.coverPage}>
      <View style={styles.coverContent}>
        <View style={styles.coverEyebrow}>
          <View style={styles.liveDot} />
          <Text style={styles.eyebrowText}>{coverContent.eyebrow}</Text>
        </View>

        <Text style={styles.coverTitle}>
          {coverContent.title}
          {"\n"}
          <Text style={styles.coverTitleItalic}>{coverContent.titleEmphasis}</Text>
        </Text>

        <Text style={styles.coverDescription}>{coverContent.description}</Text>

        <View style={styles.coverMeta}>
          {coverContent.meta.map((item, i) => (
            <View style={styles.metaItem} key={i}>
              <Text style={styles.metaLabel}>{item.label}</Text>
              <Text style={styles.metaValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.coverFooter}>
        <Image
          style={styles.avatar}
          src={`${siteConfig.url}/img/avatar.png`}
        />
        <View style={styles.instructorPreview}>
          <Text style={styles.instructorName}>{instructor.name}</Text>
          <Text style={styles.instructorDesc}>{instructor.shortDescription}</Text>
          <View style={styles.pillRow}>
            {instructor.credentials.map((cred, i) => (
              <Text
                key={i}
                style={[styles.pill, cred.highlight && styles.pillHighlight]}
              >
                {cred.text}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </Page>

    {/* Page 2: About + Outcomes - Content from workshopData.ts */}
    <Page size="A4" style={[styles.page, styles.contentPage]} wrap={false}>
      <Text style={styles.pageLabel}>About the Instructor</Text>
      <Text style={styles.pageTitle}>Learn from a Practitioner</Text>
      <Text style={styles.pageSubtitle}>
        Production-tested techniques from someone who builds AI systems daily,
        not just talks about them.
      </Text>

      <View style={styles.instructorCard}>
        <Image
          style={styles.instructorPhoto}
          src={`${siteConfig.url}/img/avatar.png`}
        />
        <View style={styles.instructorContent}>
          <Text style={styles.instructorName}>{instructor.name}</Text>
          <Text style={styles.instructorRole}>{instructor.role}</Text>
          <View style={styles.tagRow}>
            {instructor.credentials.slice(0, 2).map((cred, i) => (
              <Text key={i} style={[styles.tag, i === 0 && styles.tagAccent]}>
                {cred.text}
              </Text>
            ))}
          </View>
          {instructor.bio.slice(0, 1).map((paragraph, i) => (
            <Text key={i} style={styles.bioText}>{paragraph.text}</Text>
          ))}
        </View>
      </View>

      <Text style={styles.outcomesHeader}>What Your Team Will Learn</Text>
      <View style={styles.outcomesGrid}>
        {outcomes.map((outcome, i) => (
          <View key={i} style={styles.outcomeCard}>
            <Text style={styles.outcomeTitle}>{outcome.title}</Text>
            <Text style={styles.outcomeDesc}>{outcome.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.capstoneSection}>
        <View style={styles.capstoneHeader}>
          <Text style={styles.capstoneBadge}>{capstone.badge}</Text>
          <Text style={styles.capstoneTitle}>{capstone.title}</Text>
        </View>
        <Text style={styles.capstoneDesc}>{capstone.description}</Text>
      </View>

      <View style={styles.pageFooter}>
        <Text>AI Workshop Proposal - {instructor.name}</Text>
        <Text>Page 1</Text>
      </View>
    </Page>

    {/* Page 3: Agenda Part 1 - Content from workshopData.ts */}
    <Page size="A4" style={[styles.page, styles.contentPage]} wrap={false}>
      <Text style={styles.pageLabel}>Workshop Agenda</Text>
      <Text style={styles.pageTitle}>Session Overview</Text>
      <Text style={styles.pageSubtitle}>
        Structured progression from fundamentals to implementation.
      </Text>

      {sessions.slice(0, 2).map((session) => (
        <View key={session.number} style={styles.sessionCard} wrap={false}>
          <View style={styles.sessionHeader}>
            <View style={styles.sessionTopBar}>
              <Text style={styles.sessionNumber}>
                Session {session.number} - {session.duration}
              </Text>
              {session.badges.map((badge, i) => (
                <Text
                  key={i}
                  style={[
                    styles.badge,
                    badge.variant === "demo" && styles.badgeDemo,
                    badge.variant === "labs" && styles.badgeLabs,
                    badge.variant === "qa" && styles.badgeQA,
                  ]}
                >
                  {badge.text}
                </Text>
              ))}
            </View>
            <Text style={styles.sessionTitle}>{session.title}</Text>
            <Text style={styles.sessionType}>{session.type}</Text>
          </View>
          <View style={styles.sessionBody}>
            <Text style={styles.sessionIntro}>{session.intro}</Text>
            <Text style={styles.sectionLabel}>{session.sectionLabel}</Text>
            <View style={styles.topicsGrid}>
              {session.topics.slice(0, 4).map((topic, i) => (
                <Text key={i} style={styles.topicItem}>{topic.text}</Text>
              ))}
            </View>
            <View style={styles.deliverablesRow}>
              {session.deliverables.slice(0, 2).map((d, i) => (
                <Text key={i} style={styles.deliverableChip}>{d.text}</Text>
              ))}
            </View>
          </View>
        </View>
      ))}

      <View style={styles.pageFooter}>
        <Text>AI Workshop Proposal - {instructor.name}</Text>
        <Text>Page 2</Text>
      </View>
    </Page>

    {/* Page 4: Agenda Part 2 - Content from workshopData.ts */}
    <Page size="A4" style={[styles.page, styles.contentPage]} wrap={false}>
      {sessions.slice(2, 4).map((session) => (
        <View key={session.number} style={styles.sessionCard} wrap={false}>
          <View style={styles.sessionHeader}>
            <View style={styles.sessionTopBar}>
              <Text style={styles.sessionNumber}>
                Session {session.number} - {session.duration}
              </Text>
              {session.badges.map((badge, i) => (
                <Text
                  key={i}
                  style={[
                    styles.badge,
                    badge.variant === "demo" && styles.badgeDemo,
                    badge.variant === "labs" && styles.badgeLabs,
                    badge.variant === "qa" && styles.badgeQA,
                  ]}
                >
                  {badge.text}
                </Text>
              ))}
            </View>
            <Text style={styles.sessionTitle}>{session.title}</Text>
            <Text style={styles.sessionType}>{session.type}</Text>
          </View>
          <View style={styles.sessionBody}>
            <Text style={styles.sessionIntro}>{session.intro}</Text>
            <Text style={styles.sectionLabel}>{session.sectionLabel}</Text>
            <View style={styles.topicsGrid}>
              {session.topics.slice(0, 4).map((topic, i) => (
                <Text key={i} style={styles.topicItem}>{topic.text}</Text>
              ))}
            </View>
            <View style={styles.deliverablesRow}>
              {session.deliverables.slice(0, 2).map((d, i) => (
                <Text key={i} style={styles.deliverableChip}>{d.text}</Text>
              ))}
            </View>
          </View>
        </View>
      ))}

      <View style={styles.pageFooter}>
        <Text>AI Workshop Proposal - {instructor.name}</Text>
        <Text>Page 3</Text>
      </View>
    </Page>

    {/* Page 5: Deliverables - Content from workshopData.ts */}
    <Page size="A4" style={[styles.page, styles.contentPage]} wrap={false}>
      <Text style={styles.pageLabel}>What You Get</Text>
      <Text style={styles.pageTitle}>Workshop Deliverables</Text>
      <Text style={styles.pageSubtitle}>
        Everything included in the base workshop.
      </Text>

      <Text style={styles.tierLabel}>Included in Workshop</Text>

      <View style={styles.deliverablesGrid}>
        {deliverables.map((item, i) => (
          <View key={i} style={styles.deliverableCard} wrap={false}>
            <Text style={styles.deliverableTitle}>{item.title}</Text>
            <View style={styles.deliverableList}>
              {item.items.slice(0, 3).map((li, j) => (
                <Text key={j} style={styles.deliverableListItem}>• {li}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.supportHighlight} wrap={false}>
        <View style={styles.supportHeader}>
          <View>
            <Text style={styles.supportTitle}>
              {postWorkshopSupport.title}{" "}
              <Text style={styles.freeBadge}>{postWorkshopSupport.badge}</Text>
            </Text>
            <Text style={styles.supportSubtitle}>{postWorkshopSupport.subtitle}</Text>
          </View>
        </View>
        <View style={styles.supportItems}>
          {postWorkshopSupport.items.slice(0, 2).map((item, i) => (
            <View key={i} style={styles.supportItem}>
              <Text style={styles.checkIcon}>✓</Text>
              <View>
                <Text style={styles.supportItemTitle}>{item.title}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.pageFooter}>
        <Text>AI Workshop Proposal - {instructor.name}</Text>
        <Text>Page 4</Text>
      </View>
    </Page>

    {/* Page 5: ROI + Contact */}
    <Page size="A4" style={[styles.page, styles.contentPage]} wrap={false}>
      <View style={styles.roiSection} wrap={false}>
        <View style={styles.roiHeader}>
          <Text style={styles.roiTitle}>Expected Results</Text>
          <Text style={styles.roiSubtitle}>
            Based on implementations at Balena and teams trained. These are measured
            outcomes, not projections.
          </Text>
        </View>
        <View style={styles.roiGrid}>
          {roiMetrics.map((metric, i) => (
            <View key={i} style={styles.roiCard}>
              <Text style={styles.roiValue}>{metric.value}</Text>
              <Text style={styles.roiLabel}>{metric.label}</Text>
              <Text style={styles.roiDesc}>{metric.description}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.ctaSection} wrap={false}>
        <View style={styles.ctaHeader}>
          <Text style={styles.ctaTitle}>{ctaContent.title}</Text>
          <Text style={styles.ctaSubtitle}>{ctaContent.subtitle}</Text>
        </View>

        <View style={styles.contactGrid}>
          {ctaContent.contacts.map((contact, i) => (
            <View key={i} style={styles.contactCard}>
              <Text style={styles.contactTitle}>{contact.title}</Text>
              <Link style={styles.contactLink} src={contact.link}>
                {contact.linkText}
              </Link>
            </View>
          ))}
        </View>

        <View style={styles.ctaFooter}>
          <Text style={styles.ctaFooterText}>{ctaContent.footer}</Text>
          <View style={styles.ctaLinks}>
            <Link style={styles.ctaLink} src={siteConfig.socialLinks.blog}>Blog</Link>
            <Link style={styles.ctaLink} src={siteConfig.socialLinks.linkedin}>LinkedIn</Link>
            <Link style={styles.ctaLink} src={siteConfig.socialLinks.github}>GitHub</Link>
          </View>
        </View>
      </View>

      <View style={styles.pageFooter}>
        <Text>AI Workshop Proposal - {instructor.name}</Text>
        <Text>{new Date().getFullYear()} {instructor.name} - Mixster</Text>
      </View>
    </Page>
  </Document>
);

export default WorkshopPDF;
