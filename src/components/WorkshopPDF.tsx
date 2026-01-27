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
 * Workshop PDF Document - Single Long Page Version
 * =================================================
 * Uses shared content from workshopData.ts
 * Renders as one continuous scrollable page.
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
  roiMetrics,
  ctaContent,
} from "../data/workshopData";

/**
 * Font Registration for PDF
 * Using fontsource CDN for reliable font loading
 */
Font.registerHyphenationCallback((word) => [word]);

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
  // Single long page - A4 width, auto height
  page: {
    backgroundColor: colors.white,
    fontFamily: "Outfit",
    fontSize: 10,
    color: colors.charcoal,
    width: 595.28, // A4 width in points
  },
  // Cover Section (not a separate page anymore)
  coverSection: {
    backgroundColor: colors.black,
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
    fontSize: 38,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 18,
    lineHeight: 1.15,
  },
  coverTitleItalic: {
    fontStyle: "italic",
  },
  coverDescription: {
    fontSize: 13,
    color: colors.silver,
    marginBottom: 30,
    lineHeight: 1.7,
    maxWidth: 420,
  },
  coverMeta: {
    flexDirection: "row",
    gap: 35,
    paddingTop: 20,
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
    padding: "20pt 45pt",
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    borderTopWidth: 1,
    borderTopColor: colors.iron,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  instructorPreview: {
    flex: 1,
  },
  instructorName: {
    fontFamily: "Playfair",
    fontSize: 15,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 3,
  },
  instructorDesc: {
    fontSize: 9,
    color: colors.silver,
    lineHeight: 1.5,
    marginBottom: 8,
  },
  pillRow: {
    flexDirection: "row",
    gap: 6,
    flexWrap: "wrap",
  },
  pill: {
    fontFamily: "IBMPlexMono",
    fontSize: 7,
    padding: "4pt 8pt",
    borderRadius: 3,
    backgroundColor: colors.iron,
    color: colors.fog,
  },
  pillHighlight: {
    backgroundColor: colors.electric,
    color: colors.white,
  },
  // Social Proof Bar
  proofBar: {
    backgroundColor: colors.charcoal,
    padding: "18pt 45pt",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.iron,
  },
  proofStat: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  proofValue: {
    fontFamily: "Playfair",
    fontSize: 22,
    fontWeight: 700,
    color: colors.electricBright,
  },
  proofLabel: {
    fontSize: 9,
    color: colors.silver,
  },
  proofDivider: {
    width: 1,
    height: 24,
    backgroundColor: colors.steel,
  },
  // Logo Bar - As Seen At (dark theme to match proof bar)
  logoBar: {
    backgroundColor: colors.graphite,
    padding: "18pt 45pt",
    borderBottomWidth: 1,
    borderBottomColor: colors.steel,
  },
  logoBarLabel: {
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    fontWeight: 500,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: colors.ash,
    textAlign: "center",
    marginBottom: 14,
  },
  logoGrid: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  logoItem: {
    padding: "8pt 12pt",
    backgroundColor: "rgba(255,255,255,0.04)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.steel,
    textAlign: "center",
  },
  logoItemName: {
    fontSize: 9,
    fontWeight: 600,
    color: colors.fog,
    marginBottom: 2,
  },
  logoItemEvent: {
    fontSize: 7,
    color: colors.ash,
  },
  // ROI Section (moved up)
  roiSection: {
    padding: 24,
    backgroundColor: colors.black,
    margin: "0 30pt",
    marginTop: 20,
    borderRadius: 10,
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
    maxWidth: 360,
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
    fontSize: 22,
    fontWeight: 800,
    color: colors.electricBright,
    marginBottom: 3,
  },
  roiLabel: {
    fontSize: 7,
    fontWeight: 700,
    letterSpacing: 0.3,
    textTransform: "uppercase",
    color: colors.fog,
    marginBottom: 3,
  },
  roiDesc: {
    fontSize: 6,
    color: colors.silver,
    lineHeight: 1.3,
  },
  // Content Sections
  contentSection: {
    padding: "30pt 40pt",
    backgroundColor: colors.white,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: colors.mist,
    marginVertical: 0,
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
    fontSize: 20,
    fontWeight: 500,
    color: colors.black,
    marginBottom: 6,
  },
  pageSubtitle: {
    fontSize: 10,
    color: colors.slate,
    marginBottom: 16,
    lineHeight: 1.5,
    maxWidth: 420,
  },
  // Instructor Card
  instructorCard: {
    flexDirection: "row",
    gap: 14,
    padding: 14,
    backgroundColor: colors.cloud,
    borderRadius: 8,
    marginBottom: 16,
  },
  instructorPhoto: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },
  instructorContent: {
    flex: 1,
  },
  instructorRole: {
    fontSize: 9,
    color: colors.slate,
    marginBottom: 8,
  },
  tagRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 10,
    flexWrap: "wrap",
  },
  tag: {
    fontFamily: "IBMPlexMono",
    fontSize: 7,
    padding: "3pt 8pt",
    borderRadius: 4,
    backgroundColor: colors.white,
    color: colors.charcoal,
  },
  tagAccent: {
    backgroundColor: colors.electric,
    color: colors.white,
  },
  bioText: {
    fontSize: 8,
    color: colors.slate,
    lineHeight: 1.6,
    marginBottom: 4,
  },
  // Outcomes Grid
  outcomesHeader: {
    fontFamily: "Playfair",
    fontSize: 13,
    fontWeight: 500,
    color: colors.black,
    marginBottom: 10,
    marginTop: 10,
  },
  outcomesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  outcomeCard: {
    width: "48%",
    padding: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.mist,
    borderRadius: 6,
  },
  outcomeTitle: {
    fontSize: 9,
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
    marginTop: 14,
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
    fontSize: 12,
    fontWeight: 500,
    color: colors.black,
  },
  capstoneDesc: {
    fontSize: 8,
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
    fontSize: 12,
  },
  capstoneExampleText: {
    flex: 1,
  },
  capstoneExampleTitle: {
    fontSize: 8,
    fontWeight: 600,
    color: colors.charcoal,
    marginBottom: 1,
  },
  capstoneExampleDetail: {
    fontSize: 7,
    color: colors.ash,
  },
  // Testimonial
  testimonial: {
    padding: "12pt 14pt",
    backgroundColor: colors.graphite,
    borderRadius: 8,
    marginTop: 14,
  },
  testimonialQuote: {
    fontFamily: "Playfair",
    fontSize: 9,
    fontStyle: "italic",
    color: colors.fog,
    lineHeight: 1.5,
    marginBottom: 6,
  },
  testimonialAuthor: {
    fontSize: 9,
    fontWeight: 700,
    color: colors.white,
  },
  testimonialRole: {
    fontSize: 7,
    color: colors.silver,
  },
  // Session Cards
  sessionCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.mist,
    borderRadius: 8,
    marginBottom: 14,
    overflow: "hidden",
  },
  sessionHeader: {
    padding: "10pt 14pt",
    backgroundColor: colors.electric,
  },
  sessionTopBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  sessionNumber: {
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    color: "rgba(255,255,255,0.85)",
  },
  badge: {
    fontFamily: "IBMPlexMono",
    fontSize: 6,
    fontWeight: 700,
    padding: "2pt 6pt",
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
    fontSize: 13,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 2,
  },
  sessionType: {
    fontSize: 8,
    color: "rgba(255,255,255,0.8)",
  },
  sessionBody: {
    padding: 12,
  },
  sessionIntro: {
    fontSize: 8,
    color: colors.charcoal,
    lineHeight: 1.5,
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.mist,
  },
  sectionLabel: {
    fontFamily: "IBMPlexMono",
    fontSize: 7,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: colors.electric,
    marginBottom: 6,
    marginTop: 6,
  },
  topicsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  topicItem: {
    width: "48%",
    fontSize: 7,
    fontWeight: 500,
    color: colors.charcoal,
    padding: "5pt 7pt",
    backgroundColor: colors.snow,
    borderRadius: 4,
    borderLeftWidth: 2,
    borderLeftColor: colors.electric,
  },
  deliverablesRow: {
    flexDirection: "row",
    gap: 6,
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopStyle: "dashed",
    borderTopColor: colors.fog,
    flexWrap: "wrap",
  },
  deliverableChip: {
    fontFamily: "IBMPlexMono",
    fontSize: 6,
    padding: "4pt 7pt",
    backgroundColor: "rgba(16, 185, 129, 0.12)",
    color: colors.mint,
    borderRadius: 4,
  },
  // Deliverables Grid
  tierLabel: {
    fontFamily: "IBMPlexMono",
    fontSize: 7,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    padding: "5pt 10pt",
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
    padding: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.mist,
    borderRadius: 8,
  },
  deliverableTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: colors.charcoal,
    marginBottom: 6,
  },
  deliverableList: {
    gap: 3,
  },
  deliverableListItem: {
    fontSize: 7,
    color: colors.slate,
    lineHeight: 1.3,
    paddingLeft: 10,
  },
  // Support Highlight
  supportHighlight: {
    marginTop: 12,
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
  supportTitle: {
    fontSize: 10,
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
    padding: "2pt 5pt",
    backgroundColor: colors.mint,
    color: colors.white,
    borderRadius: 2,
    marginLeft: 6,
  },
  supportSubtitle: {
    fontSize: 7,
    color: colors.slate,
  },
  supportItems: {
    gap: 5,
    marginBottom: 6,
  },
  supportItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 6,
    padding: 7,
    backgroundColor: colors.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.mist,
  },
  checkIcon: {
    fontSize: 9,
    fontWeight: 700,
    color: colors.mint,
  },
  supportItemTitle: {
    fontSize: 8,
    fontWeight: 600,
    color: colors.charcoal,
  },
  // CTA Section
  ctaSection: {
    padding: 18,
    backgroundColor: colors.electric,
    borderRadius: 10,
  },
  ctaHeader: {
    textAlign: "center",
    marginBottom: 14,
  },
  ctaTitle: {
    fontFamily: "Playfair",
    fontSize: 16,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 4,
  },
  ctaSubtitle: {
    fontSize: 9,
    color: "rgba(255,255,255,0.9)",
  },
  contactGrid: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 12,
  },
  contactCard: {
    flex: 1,
    padding: 12,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 8,
  },
  contactTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: colors.white,
    marginBottom: 4,
  },
  contactLink: {
    fontSize: 9,
    fontWeight: 600,
    color: "rgba(255,255,255,0.95)",
    textDecoration: "none",
  },
  ctaFooter: {
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.18)",
    textAlign: "center",
  },
  ctaFooterText: {
    fontSize: 7,
    color: "rgba(255,255,255,0.9)",
    lineHeight: 1.5,
    marginBottom: 6,
  },
  ctaLinks: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
  },
  ctaLink: {
    fontFamily: "IBMPlexMono",
    fontSize: 7,
    color: "rgba(255,255,255,0.75)",
    textDecoration: "none",
  },
  // Speaker Credentials Bar
  speakerBar: {
    backgroundColor: colors.charcoal,
    padding: "16pt 40pt",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    flexWrap: "wrap",
    borderTopWidth: 1,
    borderTopColor: colors.steel,
  },
  speakerBarItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  speakerBarAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.steel,
  },
  speakerBarInfo: {
    flexDirection: "column",
    gap: 2,
  },
  speakerBarName: {
    fontSize: 10,
    fontWeight: 600,
    color: colors.fog,
  },
  speakerBarTitle: {
    fontSize: 8,
    color: colors.ash,
  },
  speakerCreds: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  speakerCred: {
    fontFamily: "IBMPlexMono",
    fontSize: 7,
    padding: "4pt 8pt",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: 3,
    color: colors.silver,
  },
  speakerCredHighlight: {
    backgroundColor: "rgba(59, 130, 246, 0.12)",
    borderColor: colors.electric,
    color: colors.electricBright,
  },
  // Footer
  footer: {
    padding: "14pt 40pt",
    backgroundColor: colors.graphite,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    color: colors.ash,
  },
});

// Social proof data matching the web page
const socialProof = [
  { value: "127+", label: "Technical Sessions Delivered" },
  { value: "$250K+", label: "Saved at Balena" },
  { value: "7,800+", label: "Community Members" },
];

// Logo bar - As Seen At (matching web page with event names)
const seenAtLogos = [
  { name: "Google", event: "GDG DevFest" },
  { name: "GitHub", event: "Constellation 2024" },
  { name: "Microsoft", event: "GitTogether Meetup" },
  { name: "Mozilla", event: "MozFest 2018" },
  { name: "Linux Foundation", event: "Open Source Summit" },
  { name: "PyCon", event: "PyDelhi Conf 2023" },
];

const WorkshopPDF = () => (
  <Document
    title={pdfMetadata.title}
    author={pdfMetadata.author}
    subject={pdfMetadata.subject}
    keywords={pdfMetadata.keywords}
  >
    {/* Single long page with all content */}
    <Page size={{ width: 595.28, height: 3400 }} style={styles.page}>
      {/* Cover Section */}
      <View style={styles.coverSection}>
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

      {/* Social Proof Bar - Matching web page */}
      <View style={styles.proofBar}>
        {socialProof.map((stat, i) => (
          <React.Fragment key={i}>
            {i > 0 && <View style={styles.proofDivider} />}
            <View style={styles.proofStat}>
              <Text style={styles.proofValue}>{stat.value}</Text>
              <Text style={styles.proofLabel}>{stat.label}</Text>
            </View>
          </React.Fragment>
        ))}
      </View>

      {/* Logo Bar - As Seen At */}
      <View style={styles.logoBar}>
        <Text style={styles.logoBarLabel}>As Seen At</Text>
        <View style={styles.logoGrid}>
          {seenAtLogos.map((logo, i) => (
            <View key={i} style={styles.logoItem}>
              <Text style={styles.logoItemName}>{logo.name}</Text>
              <Text style={styles.logoItemEvent}>{logo.event}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* ROI Section - Moved up to match web page */}
      <View style={styles.contentSection}>
        <View style={styles.roiSection}>
          <View style={styles.roiHeader}>
            <Text style={styles.roiTitle}>Expected Results</Text>
            <Text style={styles.roiSubtitle}>
              Based on implementations at Balena and teams trained. Measured outcomes, not projections.
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
      </View>

      <View style={styles.sectionDivider} />

      {/* About + Outcomes Section */}
      <View style={styles.contentSection}>
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
            {instructor.bio.map((paragraph, i) => (
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
          <View style={styles.capstoneExamples}>
            {capstone.options.map((option, i) => (
              <View key={i} style={styles.capstoneExample}>
                <Text style={styles.capstoneIcon}>{option.icon}</Text>
                <View style={styles.capstoneExampleText}>
                  <Text style={styles.capstoneExampleTitle}>{option.title}</Text>
                  <Text style={styles.capstoneExampleDetail}>{option.detail}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.testimonial}>
          <Text style={styles.testimonialQuote}>"{testimonials[0].quote}"</Text>
          <Text style={styles.testimonialAuthor}>{testimonials[0].author}</Text>
          <Text style={styles.testimonialRole}>{testimonials[0].role}</Text>
        </View>
      </View>

      <View style={styles.sectionDivider} />

      {/* Workshop Agenda Section */}
      <View style={styles.contentSection}>
        <Text style={styles.pageLabel}>Workshop Agenda</Text>
        <Text style={styles.pageTitle}>Session Overview</Text>
        <Text style={styles.pageSubtitle}>
          Structured progression from fundamentals to implementation. Every session includes working code you take home.
        </Text>

        {sessions.map((session) => (
          <View key={session.number} style={styles.sessionCard}>
            <View style={styles.sessionHeader}>
              <View style={styles.sessionTopBar}>
                <Text style={styles.sessionNumber}>
                  Session {session.number} · {session.duration}
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
                {session.topics.map((topic, i) => (
                  <Text key={i} style={styles.topicItem}>{topic.text}</Text>
                ))}
              </View>
              <View style={styles.deliverablesRow}>
                {session.deliverables.map((d, i) => (
                  <Text key={i} style={styles.deliverableChip}>{d.text}</Text>
                ))}
              </View>
            </View>
          </View>
        ))}

        <View style={styles.testimonial}>
          <Text style={styles.testimonialQuote}>"{testimonials[1].quote}"</Text>
          <Text style={styles.testimonialAuthor}>{testimonials[1].author}</Text>
          <Text style={styles.testimonialRole}>{testimonials[1].role}</Text>
        </View>
      </View>

      <View style={styles.sectionDivider} />

      {/* Deliverables Section */}
      <View style={styles.contentSection}>
        <Text style={styles.pageLabel}>What You Get</Text>
        <Text style={styles.pageTitle}>Workshop Deliverables</Text>
        <Text style={styles.pageSubtitle}>
          Everything included in the base workshop.
        </Text>

        <Text style={styles.tierLabel}>Included in Workshop</Text>

        <View style={styles.deliverablesGrid}>
          {deliverables.map((item, i) => (
            <View key={i} style={styles.deliverableCard}>
              <Text style={styles.deliverableTitle}>{item.title}</Text>
              <View style={styles.deliverableList}>
                {item.items.map((li, j) => (
                  <Text key={j} style={styles.deliverableListItem}>• {li}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.supportHighlight}>
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
            {postWorkshopSupport.items.map((item, i) => (
              <View key={i} style={styles.supportItem}>
                <Text style={styles.checkIcon}>✓</Text>
                <View>
                  <Text style={styles.supportItemTitle}>{item.title}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.sectionDivider} />

      {/* Contact Section */}
      <View style={styles.contentSection}>
        <View style={styles.ctaSection}>
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
      </View>

      {/* Speaker Credentials Bar */}
      <View style={styles.speakerBar}>
        <View style={styles.speakerBarItem}>
          <Image
            style={styles.speakerBarAvatar}
            src={`${siteConfig.url}/img/avatar.png`}
          />
          <View style={styles.speakerBarInfo}>
            <Text style={styles.speakerBarName}>{instructor.name}</Text>
            <Text style={styles.speakerBarTitle}>127+ Sessions Delivered</Text>
          </View>
        </View>
        <View style={styles.speakerCreds}>
          <Text style={[styles.speakerCred, styles.speakerCredHighlight]}>GitHub Star 2025</Text>
          <Text style={styles.speakerCred}>Open Source Summit Speaker</Text>
          <Text style={styles.speakerCred}>GitHub Constellation Speaker</Text>
          <Text style={styles.speakerCred}>GDG DevFest Speaker</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>AI Workshop Proposal - {instructor.name}</Text>
        <Text>{new Date().getFullYear()} {instructor.name} - Mixster</Text>
      </View>
    </Page>
  </Document>
);

export default WorkshopPDF;
