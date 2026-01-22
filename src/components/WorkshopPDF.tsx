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

// Register fonts
Font.register({
  family: "Outfit",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC0C4G-EiAou6Y.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4W60C4G-EiAou6Y.ttf",
      fontWeight: 500,
    },
    {
      src: "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4bKzC4G-EiAou6Y.ttf",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4YuzC4G-EiAou6Y.ttf",
      fontWeight: 700,
    },
    {
      src: "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4fCzC4G-EiAou6Y.ttf",
      fontWeight: 800,
    },
  ],
});

Font.register({
  family: "Playfair",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtXK-F2qC0s.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvULXbtXK-F2qC0s.ttf",
      fontWeight: 500,
    },
    {
      src: "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvUbYbtXK-F2qC0s.ttf",
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: "IBMPlexMono",
  src: "https://fonts.gstatic.com/s/ibmplexmono/v19/-F63fjptAgt5VM-kVkqdyU8n5igg1l9kn-s.ttf",
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
    padding: "38pt 45pt",
  },
  pageLabel: {
    fontFamily: "IBMPlexMono",
    fontSize: 9,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: colors.electric,
    marginBottom: 10,
  },
  pageTitle: {
    fontFamily: "Playfair",
    fontSize: 28,
    fontWeight: 500,
    color: colors.black,
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 12,
    color: colors.slate,
    marginBottom: 22,
    lineHeight: 1.6,
    maxWidth: 420,
  },
  // Instructor Card
  instructorCard: {
    flexDirection: "row",
    gap: 22,
    padding: 22,
    backgroundColor: colors.cloud,
    borderRadius: 10,
    marginBottom: 22,
  },
  instructorPhoto: {
    width: 90,
    height: 90,
    borderRadius: 8,
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
    fontSize: 10,
    color: colors.slate,
    lineHeight: 1.75,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 700,
    color: colors.charcoal,
  },
  // Outcomes Grid
  outcomesHeader: {
    fontFamily: "Playfair",
    fontSize: 18,
    fontWeight: 500,
    color: colors.black,
    marginBottom: 14,
    marginTop: 18,
  },
  outcomesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  outcomeCard: {
    width: "48%",
    padding: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.mist,
    borderRadius: 8,
  },
  outcomeIcon: {
    fontSize: 20,
    marginBottom: 8,
  },
  outcomeTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.charcoal,
    marginBottom: 6,
  },
  outcomeDesc: {
    fontSize: 9,
    color: colors.slate,
    lineHeight: 1.5,
  },
  // Testimonial
  testimonial: {
    padding: "18pt 22pt",
    backgroundColor: colors.graphite,
    borderRadius: 10,
    marginTop: 18,
  },
  testimonialQuote: {
    fontSize: 11,
    fontStyle: "italic",
    color: colors.fog,
    lineHeight: 1.7,
    marginBottom: 12,
  },
  testimonialAuthor: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.white,
  },
  testimonialRole: {
    fontSize: 9,
    color: colors.silver,
  },
  // Session Cards
  sessionCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.mist,
    borderRadius: 10,
    marginBottom: 16,
    overflow: "hidden",
  },
  sessionHeader: {
    padding: "16pt 20pt",
    backgroundColor: colors.electric,
  },
  sessionTopBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  sessionNumber: {
    fontFamily: "IBMPlexMono",
    fontSize: 9,
    color: "rgba(255,255,255,0.85)",
  },
  badge: {
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    fontWeight: 700,
    padding: "4pt 10pt",
    borderRadius: 50,
    marginLeft: 8,
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
    fontSize: 18,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 3,
  },
  sessionType: {
    fontSize: 10,
    color: "rgba(255,255,255,0.8)",
  },
  sessionBody: {
    padding: 20,
  },
  sessionIntro: {
    fontSize: 11,
    color: colors.charcoal,
    lineHeight: 1.6,
    marginBottom: 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.mist,
  },
  sectionLabel: {
    fontFamily: "IBMPlexMono",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: colors.electric,
    marginBottom: 10,
    marginTop: 12,
  },
  topicsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  topicItem: {
    width: "48%",
    fontSize: 10,
    fontWeight: 500,
    color: colors.charcoal,
    padding: "10pt 12pt",
    backgroundColor: colors.snow,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: colors.electric,
  },
  demoItem: {
    padding: "12pt 16pt",
    backgroundColor: colors.snow,
    borderRadius: 8,
    marginBottom: 8,
    fontSize: 10,
    color: colors.slate,
    lineHeight: 1.5,
  },
  deliverablesRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopStyle: "dashed",
    borderTopColor: colors.fog,
    flexWrap: "wrap",
  },
  deliverableChip: {
    fontFamily: "IBMPlexMono",
    fontSize: 9,
    padding: "8pt 12pt",
    backgroundColor: "rgba(16, 185, 129, 0.12)",
    color: colors.mint,
    borderRadius: 6,
  },
  // Deliverables Grid
  tierLabel: {
    fontFamily: "IBMPlexMono",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    padding: "8pt 14pt",
    backgroundColor: colors.mint,
    color: colors.white,
    borderRadius: 6,
    marginBottom: 16,
    alignSelf: "flex-start",
  },
  deliverablesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 22,
  },
  deliverableCard: {
    width: "48%",
    padding: 18,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.mist,
    borderRadius: 10,
  },
  deliverableIcon: {
    fontSize: 24,
    marginBottom: 10,
  },
  deliverableTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.charcoal,
    marginBottom: 10,
  },
  deliverableList: {
    gap: 6,
  },
  deliverableListItem: {
    fontSize: 10,
    color: colors.slate,
    lineHeight: 1.4,
    paddingLeft: 16,
  },
  checkmark: {
    color: colors.mint,
    fontWeight: 700,
    position: "absolute",
    left: 0,
  },
  // Premium Section
  premiumSection: {
    padding: 26,
    backgroundColor: "#312e81",
    borderRadius: 12,
  },
  premiumHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  premiumTitle: {
    fontFamily: "Playfair",
    fontSize: 20,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 4,
  },
  premiumSubtitle: {
    fontSize: 11,
    color: "rgba(255,255,255,0.75)",
  },
  premiumBadge: {
    fontFamily: "IBMPlexMono",
    fontSize: 8,
    fontWeight: 700,
    padding: "6pt 12pt",
    backgroundColor: "rgba(255,255,255,0.15)",
    color: colors.white,
    borderRadius: 4,
    height: 22,
  },
  premiumGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  premiumCard: {
    width: "48%",
    padding: 16,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 8,
  },
  premiumCardTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.white,
    marginBottom: 6,
  },
  premiumCardDesc: {
    fontSize: 9,
    color: "rgba(255,255,255,0.75)",
    lineHeight: 1.5,
  },
  // ROI Section
  roiSection: {
    padding: 32,
    backgroundColor: colors.black,
    borderRadius: 12,
    marginBottom: 20,
  },
  roiHeader: {
    textAlign: "center",
    marginBottom: 26,
  },
  roiTitle: {
    fontFamily: "Playfair",
    fontSize: 24,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 8,
  },
  roiSubtitle: {
    fontSize: 11,
    color: colors.silver,
    maxWidth: 350,
    marginLeft: "auto",
    marginRight: "auto",
  },
  roiGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
  },
  roiCard: {
    width: "30%",
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 10,
    textAlign: "center",
  },
  roiValue: {
    fontSize: 32,
    fontWeight: 800,
    color: colors.electricBright,
    marginBottom: 4,
  },
  roiLabel: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 0.3,
    textTransform: "uppercase",
    color: colors.fog,
    marginBottom: 6,
  },
  roiDesc: {
    fontSize: 9,
    color: colors.silver,
    lineHeight: 1.4,
  },
  // CTA Section
  ctaSection: {
    padding: 32,
    backgroundColor: colors.electric,
    borderRadius: 12,
  },
  ctaHeader: {
    textAlign: "center",
    marginBottom: 24,
  },
  ctaTitle: {
    fontFamily: "Playfair",
    fontSize: 24,
    fontWeight: 500,
    color: colors.white,
    marginBottom: 8,
  },
  ctaSubtitle: {
    fontSize: 12,
    color: "rgba(255,255,255,0.9)",
  },
  contactGrid: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 20,
  },
  contactCard: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 10,
  },
  contactTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.white,
    marginBottom: 6,
  },
  contactLink: {
    fontSize: 12,
    fontWeight: 600,
    color: "rgba(255,255,255,0.95)",
    textDecoration: "none",
  },
  contactDesc: {
    fontSize: 10,
    color: "rgba(255,255,255,0.75)",
    marginTop: 8,
    lineHeight: 1.4,
  },
  ctaFooter: {
    marginTop: 20,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.18)",
    textAlign: "center",
  },
  ctaFooterText: {
    fontSize: 10,
    color: "rgba(255,255,255,0.9)",
    lineHeight: 1.6,
    marginBottom: 12,
  },
  ctaLinks: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
  },
  ctaLink: {
    fontFamily: "IBMPlexMono",
    fontSize: 10,
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
    title="AI-Powered Development Workshop Proposal - Vipul Gupta"
    author="Vipul Gupta"
    subject="Workshop Proposal"
    keywords="AI, workshop, development, test automation"
  >
    {/* Page 1: Cover */}
    <Page size="A4" style={styles.coverPage}>
      <View style={styles.coverContent}>
        <View style={styles.coverEyebrow}>
          <View style={styles.liveDot} />
          <Text style={styles.eyebrowText}>Workshop Proposal</Text>
        </View>

        <Text style={styles.coverTitle}>
          AI-Powered Development &{"\n"}
          <Text style={styles.coverTitleItalic}>Test Automation</Text>
        </Text>

        <Text style={styles.coverDescription}>
          A decade of experience building hard-tech systems. Now an AI Engineer
          teaching teams how to ship faster with tools that actually work in
          production.
        </Text>

        <View style={styles.coverMeta}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Duration</Text>
            <Text style={styles.metaValue}>Half Day (4 Hours)</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Format</Text>
            <Text style={styles.metaValue}>Live Coding + Labs</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Audience</Text>
            <Text style={styles.metaValue}>Engineers, QA, DevOps & Leadership</Text>
          </View>
        </View>
      </View>

      <View style={styles.coverFooter}>
        <Image
          style={styles.avatar}
          src="https://docs.mixster.dev/img/avatar.webp"
        />
        <View style={styles.instructorPreview}>
          <Text style={styles.instructorName}>Vipul Gupta</Text>
          <Text style={styles.instructorDesc}>
            AI Engineer building production agents. Previously shipped systems at
            Balena that saved $250K+ annually.
          </Text>
          <View style={styles.pillRow}>
            <Text style={[styles.pill, styles.pillHighlight]}>GitHub Star 2025</Text>
            <Text style={styles.pill}>Google Cloud Architect</Text>
            <Text style={styles.pill}>10 Years OSS</Text>
          </View>
        </View>
      </View>
    </Page>

    {/* Page 2: About + Outcomes */}
    <Page size="A4" style={[styles.page, styles.contentPage]}>
      <Text style={styles.pageLabel}>About the Instructor</Text>
      <Text style={styles.pageTitle}>Learn from a Practitioner</Text>
      <Text style={styles.pageSubtitle}>
        Production-tested techniques from someone who builds AI systems daily,
        not just talks about them.
      </Text>

      <View style={styles.instructorCard}>
        <Image
          style={styles.instructorPhoto}
          src="https://docs.mixster.dev/img/avatar.webp"
        />
        <View style={styles.instructorContent}>
          <Text style={styles.instructorName}>Vipul Gupta</Text>
          <Text style={styles.instructorRole}>
            AI Engineer @ Command Code - Founder, Mixster - Ex-Balena
          </Text>
          <View style={styles.tagRow}>
            <Text style={[styles.tag, styles.tagAccent]}>GitHub Star 2025</Text>
            <Text style={styles.tag}>Google Cloud Architect</Text>
          </View>
          <Text style={styles.bioText}>
            Vipul builds <Text style={styles.bold}>neuro-symbolic AI agents at Command Code</Text> that
            learn developer preferences. Previously at Balena, he built <Text style={styles.bold}>Leviathan</Text> -
            the first open-source HIL testing system for IoT, reducing OS release cycles from 6 weeks
            to 3 hours and delivering <Text style={styles.bold}>$250K+ annual savings</Text>.
          </Text>
          <Text style={styles.bioText}>
            Over the past decade: <Text style={styles.bold}>127+ technical sessions</Text> at GDG DevFest,
            OpenSSF India, Open Source Summit, PyCon India, Mozilla Festival. Google Summer of Code x2.
            Grew <Text style={styles.bold}>GitTogether Delhi to 5,000+ members</Text>.
          </Text>
        </View>
      </View>

      <Text style={styles.outcomesHeader}>What Your Team Will Learn</Text>
      <View style={styles.outcomesGrid}>
        <View style={styles.outcomeCard}>
          <Text style={styles.outcomeTitle}>Production Code Generation</Text>
          <Text style={styles.outcomeDesc}>
            Master AI assistants (Copilot, Claude, Cursor) for writing, refactoring,
            and debugging real code with tests.
          </Text>
        </View>
        <View style={styles.outcomeCard}>
          <Text style={styles.outcomeTitle}>Self-Healing Test Automation</Text>
          <Text style={styles.outcomeDesc}>
            Create test frameworks that adapt when UI changes. Generate test suites
            from requirements.
          </Text>
        </View>
        <View style={styles.outcomeCard}>
          <Text style={styles.outcomeTitle}>CI/CD Integration</Text>
          <Text style={styles.outcomeDesc}>
            Integrate AI into your pipelines. Automate code review, security scanning,
            and quality gates.
          </Text>
        </View>
        <View style={styles.outcomeCard}>
          <Text style={styles.outcomeTitle}>Adoption Strategy</Text>
          <Text style={styles.outcomeDesc}>
            Get a roadmap for rolling out AI tools with clear metrics to measure success.
          </Text>
        </View>
      </View>

      <View style={styles.testimonial}>
        <Text style={styles.testimonialQuote}>
          "Vipul's LLM evals talk was thoughtful, relevant, and deeply technical.
          His leadership in the GitTogether community reflects his commitment to
          fostering collaboration."
        </Text>
        <Text style={styles.testimonialAuthor}>Arun Singh</Text>
        <Text style={styles.testimonialRole}>Tech Lead - India, Tech Mahindra</Text>
      </View>

      <View style={styles.pageFooter}>
        <Text>AI Workshop Proposal - Vipul Gupta</Text>
        <Text>Page 1</Text>
      </View>
    </Page>

    {/* Page 3: Agenda Part 1 */}
    <Page size="A4" style={[styles.page, styles.contentPage]}>
      <Text style={styles.pageLabel}>Workshop Agenda</Text>
      <Text style={styles.pageTitle}>Session Overview</Text>
      <Text style={styles.pageSubtitle}>
        Structured progression from fundamentals to implementation. Every session
        includes working code you take home.
      </Text>

      <View style={styles.sessionCard}>
        <View style={styles.sessionHeader}>
          <View style={styles.sessionTopBar}>
            <Text style={styles.sessionNumber}>Session 1 - 45 min</Text>
            <Text style={[styles.badge, styles.badgeDemo]}>Live Demo</Text>
          </View>
          <Text style={styles.sessionTitle}>AI Coding Landscape</Text>
          <Text style={styles.sessionType}>Interactive Discussion + Demonstrations</Text>
        </View>
        <View style={styles.sessionBody}>
          <Text style={styles.sessionIntro}>
            Understand where AI coding tools actually are today. Benchmark your team's
            readiness and identify quick wins.
          </Text>
          <Text style={styles.sectionLabel}>We'll Cover</Text>
          <View style={styles.topicsGrid}>
            <Text style={styles.topicItem}>Current state of AI coding assistants</Text>
            <Text style={styles.topicItem}>SWE-bench scores & what they mean</Text>
            <Text style={styles.topicItem}>GitHub Copilot vs Claude vs Cursor</Text>
            <Text style={styles.topicItem}>When to use each tool</Text>
            <Text style={styles.topicItem}>Team readiness assessment</Text>
            <Text style={styles.topicItem}>ROI baseline metrics</Text>
          </View>
          <View style={styles.deliverablesRow}>
            <Text style={styles.deliverableChip}>Team assessment report</Text>
            <Text style={styles.deliverableChip}>Baseline metrics dashboard</Text>
            <Text style={styles.deliverableChip}>Tool comparison matrix</Text>
          </View>
        </View>
      </View>

      <View style={styles.sessionCard}>
        <View style={styles.sessionHeader}>
          <View style={styles.sessionTopBar}>
            <Text style={styles.sessionNumber}>Session 2 - 75 min</Text>
            <Text style={[styles.badge, styles.badgeLabs]}>3 Labs</Text>
            <Text style={[styles.badge, styles.badgeDemo]}>Live Coding</Text>
          </View>
          <Text style={styles.sessionTitle}>Hands-On Code Generation</Text>
          <Text style={styles.sessionType}>Live Coding + Pair Programming</Text>
        </View>
        <View style={styles.sessionBody}>
          <Text style={styles.sessionIntro}>
            This is where you write code. Watch a complete feature built live, then
            build one yourself with AI assistance.
          </Text>
          <Text style={styles.sectionLabel}>Fundamentals First</Text>
          <View style={styles.topicsGrid}>
            <Text style={styles.topicItem}>Prompt engineering basics</Text>
            <Text style={styles.topicItem}>Context window management</Text>
            <Text style={styles.topicItem}>Multi-step problem decomposition</Text>
            <Text style={styles.topicItem}>Iterative refinement patterns</Text>
            <Text style={styles.topicItem}>AI pair programming workflows</Text>
            <Text style={styles.topicItem}>When AI helps vs. hurts</Text>
          </View>
          <View style={styles.deliverablesRow}>
            <Text style={styles.deliverableChip}>Working REST API you built</Text>
            <Text style={styles.deliverableChip}>20+ prompt patterns playbook</Text>
          </View>
        </View>
      </View>

      <View style={styles.pageFooter}>
        <Text>AI Workshop Proposal - Vipul Gupta</Text>
        <Text>Page 2</Text>
      </View>
    </Page>

    {/* Page 4: Agenda Part 2 */}
    <Page size="A4" style={[styles.page, styles.contentPage]}>
      <View style={styles.sessionCard}>
        <View style={styles.sessionHeader}>
          <View style={styles.sessionTopBar}>
            <Text style={styles.sessionNumber}>Session 3 - 90 min</Text>
            <Text style={[styles.badge, styles.badgeLabs]}>3 Labs</Text>
            <Text style={[styles.badge, styles.badgeDemo]}>Framework Build</Text>
          </View>
          <Text style={styles.sessionTitle}>AI-Powered Test Automation</Text>
          <Text style={styles.sessionType}>Framework Building + Live Testing</Text>
        </View>
        <View style={styles.sessionBody}>
          <Text style={styles.sessionIntro}>
            Build test frameworks that don't break when your UI changes. Especially
            valuable for teams drowning in flaky tests.
          </Text>
          <Text style={styles.sectionLabel}>Fundamentals First</Text>
          <View style={styles.topicsGrid}>
            <Text style={styles.topicItem}>Self-healing test architecture</Text>
            <Text style={styles.topicItem}>Semantic vs brittle selectors</Text>
            <Text style={styles.topicItem}>AI-powered element location</Text>
            <Text style={styles.topicItem}>Test data generation</Text>
            <Text style={styles.topicItem}>Flaky test detection patterns</Text>
            <Text style={styles.topicItem}>CI/CD integration strategies</Text>
          </View>
          <Text style={styles.sectionLabel}>Live Demo</Text>
          <View style={styles.demoItem}>
            <Text>
              <Text style={styles.bold}>Self-Healing Tests:</Text> Watch AI-powered tests
              automatically adapt when UI selectors change.
            </Text>
          </View>
          <View style={styles.demoItem}>
            <Text>
              <Text style={styles.bold}>Requirement to Test Suite:</Text> Transform a user
              story into complete Playwright tests with edge cases.
            </Text>
          </View>
          <View style={styles.deliverablesRow}>
            <Text style={styles.deliverableChip}>Self-healing test framework</Text>
            <Text style={styles.deliverableChip}>CI/CD pipeline config</Text>
            <Text style={styles.deliverableChip}>Flaky test strategy</Text>
          </View>
        </View>
      </View>

      <View style={styles.sessionCard}>
        <View style={styles.sessionHeader}>
          <View style={styles.sessionTopBar}>
            <Text style={styles.sessionNumber}>Session 4 - 30 min</Text>
            <Text style={[styles.badge, styles.badgeQA]}>Q&A</Text>
          </View>
          <Text style={styles.sessionTitle}>Implementation Strategy</Text>
          <Text style={styles.sessionType}>Planning + Discussion</Text>
        </View>
        <View style={styles.sessionBody}>
          <Text style={styles.sessionIntro}>
            Turn what you learned into an action plan. Build a realistic adoption
            roadmap for your specific team.
          </Text>
          <Text style={styles.sectionLabel}>We'll Cover</Text>
          <View style={styles.topicsGrid}>
            <Text style={styles.topicItem}>Phased rollout strategy</Text>
            <Text style={styles.topicItem}>Week 1 pilot program</Text>
            <Text style={styles.topicItem}>Month 1 team adoption</Text>
            <Text style={styles.topicItem}>Tool selection criteria</Text>
            <Text style={styles.topicItem}>Governance & guardrails</Text>
            <Text style={styles.topicItem}>Measuring success</Text>
          </View>
          <View style={styles.deliverablesRow}>
            <Text style={styles.deliverableChip}>90-day adoption roadmap</Text>
            <Text style={styles.deliverableChip}>Governance policy template</Text>
            <Text style={styles.deliverableChip}>ROI metrics dashboard</Text>
          </View>
        </View>
      </View>

      <View style={styles.testimonial}>
        <Text style={styles.testimonialQuote}>
          "HUGE gratitude to Vipul for being the most supportive and incredible mentor.
          An amazing GitHub Copilot talk from beginner to advanced level."
        </Text>
        <Text style={styles.testimonialAuthor}>Nitya Pandey</Text>
        <Text style={styles.testimonialRole}>GitHub Campus Expert - Engineering @ Soti</Text>
      </View>

      <View style={styles.pageFooter}>
        <Text>AI Workshop Proposal - Vipul Gupta</Text>
        <Text>Page 3</Text>
      </View>
    </Page>

    {/* Page 5: Deliverables + Premium */}
    <Page size="A4" style={[styles.page, styles.contentPage]}>
      <Text style={styles.pageLabel}>What You Get</Text>
      <Text style={styles.pageTitle}>Workshop Deliverables</Text>
      <Text style={styles.pageSubtitle}>
        Everything included in the base workshop, plus optional services for deeper
        implementation support.
      </Text>

      <Text style={styles.tierLabel}>Included in Workshop</Text>

      <View style={styles.deliverablesGrid}>
        <View style={styles.deliverableCard}>
          <Text style={styles.deliverableTitle}>Code & Templates</Text>
          <View style={styles.deliverableList}>
            <Text style={styles.deliverableListItem}>* Complete GitHub repo with workshop code</Text>
            <Text style={styles.deliverableListItem}>* Production-ready templates</Text>
            <Text style={styles.deliverableListItem}>* CI/CD pipeline configurations</Text>
            <Text style={styles.deliverableListItem}>* Self-healing test framework starter</Text>
          </View>
        </View>
        <View style={styles.deliverableCard}>
          <Text style={styles.deliverableTitle}>Documentation</Text>
          <View style={styles.deliverableList}>
            <Text style={styles.deliverableListItem}>* Workshop slide deck (PDF)</Text>
            <Text style={styles.deliverableListItem}>* Prompt engineering cheat sheets</Text>
            <Text style={styles.deliverableListItem}>* Quick reference guides per tool</Text>
            <Text style={styles.deliverableListItem}>* Best practices playbook</Text>
          </View>
        </View>
        <View style={styles.deliverableCard}>
          <Text style={styles.deliverableTitle}>Setup Guides</Text>
          <View style={styles.deliverableList}>
            <Text style={styles.deliverableListItem}>* Step-by-step tool installation</Text>
            <Text style={styles.deliverableListItem}>* IDE integration tutorials</Text>
            <Text style={styles.deliverableListItem}>* Configuration examples</Text>
            <Text style={styles.deliverableListItem}>* Troubleshooting guide</Text>
          </View>
        </View>
        <View style={styles.deliverableCard}>
          <Text style={styles.deliverableTitle}>Planning Tools</Text>
          <View style={styles.deliverableList}>
            <Text style={styles.deliverableListItem}>* ROI calculator spreadsheet</Text>
            <Text style={styles.deliverableListItem}>* Adoption roadmap templates</Text>
            <Text style={styles.deliverableListItem}>* Governance guidelines</Text>
            <Text style={styles.deliverableListItem}>* Metrics dashboard templates</Text>
          </View>
        </View>
      </View>

      <View style={styles.premiumSection}>
        <View style={styles.premiumHeader}>
          <View>
            <Text style={styles.premiumTitle}>Premium Add-Ons</Text>
            <Text style={styles.premiumSubtitle}>
              For teams that want hands-on implementation support. Priced separately.
            </Text>
          </View>
          <Text style={styles.premiumBadge}>Optional</Text>
        </View>
        <View style={styles.premiumGrid}>
          <View style={styles.premiumCard}>
            <Text style={styles.premiumCardTitle}>Recorded Workshop + Videos</Text>
            <Text style={styles.premiumCardDesc}>
              Full recording with timestamps, live coding sessions, bonus tool comparison series.
            </Text>
          </View>
          <View style={styles.premiumCard}>
            <Text style={styles.premiumCardTitle}>Extended Support</Text>
            <Text style={styles.premiumCardDesc}>
              30-day Slack/email support, 4 weekly office hours, private Discord, quarterly check-in.
            </Text>
          </View>
          <View style={styles.premiumCard}>
            <Text style={styles.premiumCardTitle}>Testing Feedback Loop</Text>
            <Text style={styles.premiumCardDesc}>
              Design and implement AI-powered testing feedback loops for your codebase and CI/CD.
            </Text>
          </View>
          <View style={styles.premiumCard}>
            <Text style={styles.premiumCardTitle}>Custom Claude Bot</Text>
            <Text style={styles.premiumCardDesc}>
              Deploy Claude Slack/Teams bot with custom prompts, codebase context, and team workflows.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.pageFooter}>
        <Text>AI Workshop Proposal - Vipul Gupta</Text>
        <Text>Page 4</Text>
      </View>
    </Page>

    {/* Page 6: ROI + Contact */}
    <Page size="A4" style={[styles.page, styles.contentPage]}>
      <View style={styles.roiSection}>
        <View style={styles.roiHeader}>
          <Text style={styles.roiTitle}>Expected Results</Text>
          <Text style={styles.roiSubtitle}>
            Based on implementations at Balena and teams trained. These are measured
            outcomes, not projections.
          </Text>
        </View>
        <View style={styles.roiGrid}>
          <View style={styles.roiCard}>
            <Text style={styles.roiValue}>40%</Text>
            <Text style={styles.roiLabel}>Faster Development</Text>
            <Text style={styles.roiDesc}>Feature request to production-ready code</Text>
          </View>
          <View style={styles.roiCard}>
            <Text style={styles.roiValue}>55%</Text>
            <Text style={styles.roiLabel}>Faster Reviews</Text>
            <Text style={styles.roiDesc}>Code review cycles with AI-assisted checks</Text>
          </View>
          <View style={styles.roiCard}>
            <Text style={styles.roiValue}>3-5x</Text>
            <Text style={styles.roiLabel}>Test Coverage</Text>
            <Text style={styles.roiDesc}>Automated test scenarios per sprint</Text>
          </View>
          <View style={styles.roiCard}>
            <Text style={styles.roiValue}>35%</Text>
            <Text style={styles.roiLabel}>Fewer Bugs</Text>
            <Text style={styles.roiDesc}>Reduction in production incidents</Text>
          </View>
          <View style={styles.roiCard}>
            <Text style={styles.roiValue}>80%</Text>
            <Text style={styles.roiLabel}>Tool Adoption</Text>
            <Text style={styles.roiDesc}>Engineers using AI tools daily at 90 days</Text>
          </View>
          <View style={styles.roiCard}>
            <Text style={styles.roiValue}>$38K</Text>
            <Text style={styles.roiLabel}>Annual Savings</Text>
            <Text style={styles.roiDesc}>Varies by team size (10-50 engineers)</Text>
          </View>
        </View>
      </View>

      <View style={styles.ctaSection}>
        <View style={styles.ctaHeader}>
          <Text style={styles.ctaTitle}>Let's Talk</Text>
          <Text style={styles.ctaSubtitle}>
            Send your team size, tech stack, and challenges. I'll respond with a customized plan.
          </Text>
        </View>

        <View style={styles.contactGrid}>
          <View style={styles.contactCard}>
            <Text style={styles.contactTitle}>Email</Text>
            <Link style={styles.contactLink} src="mailto:vipulgupta2048@gmail.com">
              vipulgupta2048@gmail.com
            </Link>
            <Text style={styles.contactDesc}>
              Share requirements. Customized proposal within 24 hours.
            </Text>
          </View>
          <View style={styles.contactCard}>
            <Text style={styles.contactTitle}>Schedule a Call</Text>
            <Link style={styles.contactLink} src="https://cal.com/vipulgupta2048">
              cal.com/vipulgupta2048
            </Link>
            <Text style={styles.contactDesc}>
              30-minute discovery call to discuss objectives and format.
            </Text>
          </View>
        </View>

        <View style={styles.ctaFooter}>
          <Text style={styles.ctaFooterText}>
            Customization: Adapts to your tech stack (Python, JS/TS, Java, Go, Rust, C#),
            industry, team size, and AI maturity. Full-day and multi-day formats available.
          </Text>
          <View style={styles.ctaLinks}>
            <Link style={styles.ctaLink} src="https://mixster.dev">Blog</Link>
            <Link style={styles.ctaLink} src="https://linkedin.com/in/vipulgupta2048">LinkedIn</Link>
            <Link style={styles.ctaLink} src="https://github.com/vipulgupta2048">GitHub</Link>
            <Link style={styles.ctaLink} src="https://docs.mixster.dev/">Open Source</Link>
          </View>
        </View>
      </View>

      <View style={styles.pageFooter}>
        <Text>AI Workshop Proposal - Vipul Gupta</Text>
        <Text>2025 Vipul Gupta - Mixster</Text>
      </View>
    </Page>
  </Document>
);

export default WorkshopPDF;
