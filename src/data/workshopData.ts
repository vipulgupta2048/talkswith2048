/**
 * Workshop Content Data - Single Source of Truth
 * ================================================
 *
 * This file contains ALL text content for the AI Workshop proposal.
 * It is imported by both:
 *   - src/pages/ai-workshop.tsx (web page)
 *   - src/components/WorkshopPDF.tsx (PDF document)
 *
 * WHY THIS EXISTS:
 * The web page uses HTML/CSS, while the PDF uses @react-pdf primitives.
 * These are different rendering systems that can't share components.
 * However, they CAN share content data to avoid duplication.
 *
 * UPDATING CONTENT:
 * 1. Edit this file
 * 2. Both web and PDF will automatically reflect changes
 * 3. No need to update two places!
 *
 * @see src/pages/ai-workshop.tsx - Web rendering
 * @see src/components/WorkshopPDF.tsx - PDF rendering
 */

// =============================================================================
// TYPES
// =============================================================================

export interface MetaItem {
  label: string;
  value: string;
}

export interface Outcome {
  icon: string;
  title: string;
  description: string;
}

export interface CapstoneOption {
  icon: string;
  title: string;
  detail: string;
}

export interface SessionTopic {
  text: string;
}

export interface SessionDeliverable {
  text: string;
}

export interface SessionDemo {
  title: string;
  description: string;
}

export interface Session {
  number: number;
  duration: string;
  title: string;
  type: string;
  badges: Array<{ text: string; variant: "demo" | "labs" | "qa" }>;
  intro: string;
  sectionLabel: string;
  topics: SessionTopic[];
  demos?: SessionDemo[];
  deliverables: SessionDeliverable[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface DeliverableCard {
  icon: string;
  title: string;
  items: string[];
}

export interface SupportItem {
  title: string;
  description: string;
}

export interface PremiumAddon {
  icon: string;
  title: string;
  description: string;
}

export interface ROIMetric {
  value: string;
  label: string;
  description: string;
}

export interface ContactCard {
  title: string;
  link: string;
  linkText: string;
  description: string;
}

// =============================================================================
// SITE CONFIG
// =============================================================================

export const siteConfig = {
  url: "https://docs.mixster.dev",
  author: "Vipul Gupta",
  email: "vipulgupta2048@gmail.com",
  calLink: "https://cal.com/vipulgupta2048",
  socialLinks: {
    blog: "https://mixster.dev",
    linkedin: "https://linkedin.com/in/vipulgupta2048",
    github: "https://github.com/vipulgupta2048",
    docs: "https://docs.mixster.dev/",
  },
};

// =============================================================================
// COVER PAGE
// =============================================================================

export const coverContent = {
  eyebrow: "Workshop Proposal",
  title: "AI-Powered Development &",
  titleEmphasis: "Test Automation",
  description:
    "A decade of experience building hard-tech systems. Now an AI Engineer teaching teams how to ship faster with tools that actually work in production.",
  meta: [
    { label: "Duration", value: "Half Day (4 Hours)" },
    { label: "Format", value: "Live Coding + Labs" },
    { label: "Audience", value: "Engineers, QA, DevOps & Leadership" },
  ] as MetaItem[],
};

// =============================================================================
// INSTRUCTOR
// =============================================================================

export const instructor = {
  name: "Vipul Gupta",
  avatar: "/img/avatar.webp",
  role: "AI Engineer @ Command Code · Founder, Mixster · Ex-Balena",
  shortDescription:
    "AI Engineer building production agents. Previously shipped systems at Balena that saved $250K+ annually.",
  credentials: [
    { text: "GitHub Star 2025", highlight: true },
    { text: "Google Cloud Architect", highlight: false },
    { text: "10 Years OSS", highlight: false },
  ],
  bio: [
    {
      text: "Vipul builds neuro-symbolic AI agents at Command Code that learn developer preferences and coding styles. Previously, he led product and engineering at Balena, where he built Leviathan—the first open-source Hardware-in-the-Loop testing system for IoT. It reduced OS release cycles from 6 weeks to 3 hours and delivered $250K+ in annual savings.",
      highlights: [
        "neuro-symbolic AI agents at Command Code",
        "Leviathan",
        "$250K+ in annual savings",
      ],
    },
    {
      text: "Over the past decade, he has delivered 127+ technical sessions at conferences including GDG DevFest, OpenSSF India, Open Source Summit (Europe & Japan), PyCon India, and Mozilla Festival. He has contributed to open source since 2016, completed Google Summer of Code twice, and helped grow GitTogether Delhi to 5,000+ members.",
      highlights: [
        "127+ technical sessions",
        "GitTogether Delhi to 5,000+ members",
      ],
    },
  ],
};

// =============================================================================
// LEARNING OUTCOMES
// =============================================================================

export const outcomes: Outcome[] = [
  {
    icon: "💻",
    title: "Production Code Generation",
    description:
      "Master AI assistants (Copilot, Claude, Cursor) for writing, refactoring, and debugging real code with tests.",
  },
  {
    icon: "🧪",
    title: "Self-Healing Test Automation",
    description:
      "Create test frameworks that adapt when UI changes. Generate test suites from requirements.",
  },
  {
    icon: "🔧",
    title: "CI/CD Integration",
    description:
      "Integrate AI into your pipelines. Automate code review, security scanning, and quality gates.",
  },
  {
    icon: "📈",
    title: "Adoption Strategy",
    description:
      "Get a roadmap for rolling out AI tools with clear metrics to measure success.",
  },
];

// =============================================================================
// CAPSTONE PROJECT
// =============================================================================

export const capstone = {
  badge: "Capstone Project",
  title: "Leave With Working Code",
  description:
    "Every participant completes a hands-on capstone project using their own codebase or a provided sample. You don't just learn concepts—you build something real that proves immediate ROI to your team.",
  options: [
    {
      icon: "🚀",
      title: "Option A: AI-powered feature in YOUR codebase",
      detail: "Bring a real task from your backlog",
    },
    {
      icon: "🧪",
      title: "Option B: Self-healing test suite for YOUR app",
      detail: "Convert existing brittle tests to adaptive ones",
    },
  ] as CapstoneOption[],
};

// =============================================================================
// SESSIONS / AGENDA
// =============================================================================

export const sessions: Session[] = [
  {
    number: 1,
    duration: "45 min",
    title: "AI Coding Landscape",
    type: "Interactive Discussion + Demonstrations",
    badges: [{ text: "Live Demo", variant: "demo" }],
    intro:
      "Understand where AI coding tools actually are today. Benchmark your team's readiness and identify quick wins.",
    sectionLabel: "We'll Cover",
    topics: [
      { text: "Current state of AI coding assistants" },
      { text: "SWE-bench scores & what they mean" },
      { text: "GitHub Copilot vs Claude vs Cursor" },
      { text: "When to use each tool" },
      { text: "Team readiness assessment" },
      { text: "ROI baseline metrics" },
    ],
    demos: [
      {
        title: "Side-by-Side Build",
        description:
          "Same REST endpoint built traditionally vs. with AI. Measure real differences in time and quality.",
      },
    ],
    deliverables: [
      { text: "Team assessment report" },
      { text: "Baseline metrics dashboard" },
      { text: "Tool comparison matrix" },
    ],
  },
  {
    number: 2,
    duration: "75 min",
    title: "Hands-On Code Generation",
    type: "Live Coding + Pair Programming",
    badges: [
      { text: "3 Labs", variant: "labs" },
      { text: "Live Coding", variant: "demo" },
    ],
    intro:
      "This is where you write code. Watch a complete feature built live, then build one yourself with AI assistance.",
    sectionLabel: "Fundamentals First",
    topics: [
      { text: "Prompt engineering basics" },
      { text: "Context window management" },
      { text: "Multi-step problem decomposition" },
      { text: "Iterative refinement patterns" },
      { text: "AI pair programming workflows" },
      { text: "When AI helps vs. hurts" },
    ],
    demos: [
      {
        title: "Full-Stack Feature",
        description:
          "Build user auth from scratch (JWT, middleware, validation, tests) using AI in Python/FastAPI or Node/Express.",
      },
      {
        title: "Legacy Refactor",
        description:
          "Transform messy code into clean architecture with AI guidance.",
      },
    ],
    deliverables: [
      { text: "Working REST API you built" },
      { text: "20+ prompt patterns playbook" },
    ],
  },
  {
    number: 3,
    duration: "90 min",
    title: "AI-Powered Test Automation",
    type: "Framework Building + Live Testing",
    badges: [
      { text: "3 Labs", variant: "labs" },
      { text: "Framework Build", variant: "demo" },
    ],
    intro:
      "Build test frameworks that don't break when your UI changes. Especially valuable for teams drowning in flaky tests.",
    sectionLabel: "Fundamentals First",
    topics: [
      { text: "Self-healing test architecture" },
      { text: "Semantic vs brittle selectors" },
      { text: "AI-powered element location" },
      { text: "Test data generation" },
      { text: "Flaky test detection patterns" },
      { text: "CI/CD integration strategies" },
    ],
    demos: [
      {
        title: "Self-Healing Tests",
        description:
          "Watch AI-powered tests automatically adapt when UI selectors change.",
      },
      {
        title: "Requirement → Test Suite",
        description:
          "Transform a user story into complete Playwright tests with edge cases.",
      },
    ],
    deliverables: [
      { text: "Self-healing test framework" },
      { text: "CI/CD pipeline config" },
      { text: "Flaky test strategy" },
    ],
  },
  {
    number: 4,
    duration: "30 min",
    title: "Implementation Strategy",
    type: "Planning + Discussion",
    badges: [{ text: "Q&A", variant: "qa" }],
    intro:
      "Turn what you learned into an action plan. Build a realistic adoption roadmap for your specific team.",
    sectionLabel: "We'll Cover",
    topics: [
      { text: "Phased rollout strategy" },
      { text: "Week 1 pilot program" },
      { text: "Month 1 team adoption" },
      { text: "Tool selection criteria" },
      { text: "Governance & guardrails" },
      { text: "Measuring success" },
    ],
    deliverables: [
      { text: "90-day adoption roadmap" },
      { text: "Governance policy template" },
      { text: "ROI metrics dashboard" },
    ],
  },
];

// =============================================================================
// TESTIMONIALS
// =============================================================================

export const testimonials: Testimonial[] = [
  {
    quote:
      "Vipul's LLM evals talk was thoughtful, relevant, and deeply technical. His leadership in the GitTogether community reflects his commitment to fostering collaboration.",
    author: "Arun Singh",
    role: "Tech Lead - India, Tech Mahindra",
  },
  {
    quote:
      "HUGE gratitude to Vipul for being the most supportive and incredible mentor. An amazing GitHub Copilot talk from beginner to advanced level.",
    author: "Nitya Pandey",
    role: "GitHub Campus Expert · Engineering @ Soti",
  },
];

// =============================================================================
// DELIVERABLES
// =============================================================================

export const deliverables: DeliverableCard[] = [
  {
    icon: "📦",
    title: "Code & Templates",
    items: [
      "Complete GitHub repo with workshop code",
      "Production-ready templates",
      "CI/CD pipeline configurations",
      "Self-healing test framework starter",
    ],
  },
  {
    icon: "📚",
    title: "Documentation",
    items: [
      "Workshop slide deck (PDF)",
      "Prompt engineering cheat sheets",
      "Quick reference guides per tool",
      "Best practices playbook",
    ],
  },
  {
    icon: "🛠️",
    title: "Setup Guides",
    items: [
      "Step-by-step tool installation",
      "IDE integration tutorials",
      "Configuration examples",
      "Troubleshooting guide",
    ],
  },
  {
    icon: "📊",
    title: "Planning Tools",
    items: [
      "ROI calculator spreadsheet",
      "Adoption roadmap templates",
      "Governance guidelines",
      "Metrics dashboard templates",
    ],
  },
];

// =============================================================================
// POST-WORKSHOP SUPPORT (FREE TIER)
// =============================================================================

export const postWorkshopSupport = {
  icon: "🤝",
  title: "Post-Workshop Support",
  badge: "Included Free",
  subtitle: "The learning doesn't stop when the workshop ends",
  items: [
    {
      title: "1 Follow-Up Call (30 min)",
      description: "Troubleshoot blockers, review your capstone progress",
    },
    {
      title: "7-Day Email Support",
      description: "Quick questions answered within 24 hours",
    },
    {
      title: "Session Q&A Documentation",
      description: "All questions from your workshop, documented with answers",
    },
  ] as SupportItem[],
  upgradeText:
    "Need more? Upgrade to Extended Support for 30-day access, weekly office hours, and ongoing guidance.",
};

// =============================================================================
// PREMIUM ADD-ONS
// =============================================================================

export const premiumAddons: PremiumAddon[] = [
  {
    icon: "🎥",
    title: "Recorded Workshop + Videos",
    description:
      "Full recording with timestamps, live coding sessions, bonus tool comparison series.",
  },
  {
    icon: "💬",
    title: "Extended Support",
    description:
      "30-day Slack/email support, 4 weekly office hours, private Discord, quarterly check-in.",
  },
  {
    icon: "🔄",
    title: "Testing Feedback Loop",
    description:
      "Design and implement AI-powered testing feedback loops for your codebase and CI/CD.",
  },
  {
    icon: "🤖",
    title: "Custom Claude Bot",
    description:
      "Deploy Claude Slack/Teams bot with custom prompts, codebase context, and team workflows.",
  },
  {
    icon: "📝",
    title: "Implementation Consulting",
    description:
      "Post-workshop sessions to review progress, troubleshoot blockers, refine strategy.",
  },
  {
    icon: "🏗️",
    title: "Project + Code Reviews",
    description:
      "Structured implementation project with weekly check-ins and detailed code reviews.",
  },
];

// =============================================================================
// ROI METRICS
// =============================================================================

export const roiMetrics: ROIMetric[] = [
  {
    value: "40%",
    label: "Faster Development",
    description: "Feature request to production-ready code",
  },
  {
    value: "55%",
    label: "Faster Reviews",
    description: "Code review cycles with AI-assisted checks",
  },
  {
    value: "3-5x",
    label: "Test Coverage",
    description: "Automated test scenarios per sprint",
  },
  {
    value: "35%",
    label: "Fewer Bugs",
    description: "Reduction in production incidents",
  },
  {
    value: "80%",
    label: "Tool Adoption",
    description: "Engineers using AI tools daily at 90 days",
  },
  {
    value: "$38K",
    label: "Annual Savings",
    description: "Varies by team size (10-50 engineers)",
  },
];

// =============================================================================
// CONTACT / CTA
// =============================================================================

export const ctaContent = {
  title: "Let's Talk",
  subtitle:
    "Send your team size, tech stack, and challenges. I'll respond with a customized plan.",
  contacts: [
    {
      title: "Email",
      link: `mailto:${siteConfig.email}`,
      linkText: siteConfig.email,
      description: "Share requirements. Customized proposal within 24 hours.",
    },
    {
      title: "Schedule a Call",
      link: siteConfig.calLink,
      linkText: "cal.com/vipulgupta2048",
      description: "30-minute discovery call to discuss objectives and format.",
    },
  ] as ContactCard[],
  footer:
    "Customization: Adapts to your tech stack (Python, JS/TS, Java, Go, Rust, C#), industry, team size, and AI maturity. Full-day and multi-day formats available for comprehensive implementation.",
};

// =============================================================================
// SEO / METADATA
// =============================================================================

export const seoContent = {
  title: "AI-Powered Development & Test Automation Workshop",
  description:
    "Half-day hands-on workshop teaching teams AI-assisted coding, self-healing test automation, and CI/CD integration. Led by Vipul Gupta, GitHub Star 2025 with 10 years of open source experience. Live coding, practical labs, and take-home frameworks.",
  keywords: [
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
  ],
};

// =============================================================================
// PDF METADATA
// =============================================================================

export const pdfMetadata = {
  title: "AI-Powered Development Workshop Proposal - Vipul Gupta",
  author: "Vipul Gupta",
  subject: "Workshop Proposal",
  keywords: "AI, workshop, development, test automation",
  fileName: "AI-Workshop-Proposal-Vipul-Gupta.pdf",
};
