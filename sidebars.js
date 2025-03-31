/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    "Introduction",
    {
      type: "category",
      label: "Sharing what I know",
      link: {
        type: "generated-index",
        title: "Sharing what I know",
        description:
          "Documenting talks, podcast, conferences where I share openly about my work, the friction, and the journey of whatever I am building/learning/struggling with that year.",
        keywords: ["talks", "conferences", "podcast"],
      },
      collapsed: false,
      items: ["Talks", "Podcasts", "Conferences"],
    },
    {
      type: "category",
      label: "Paying it forward",
      link: {
        type: "generated-index",
        title: "Paying it Forward",
        description:
          "A list of initiatives I am part of, where I am helping others to grow and learn. This includes mentoring, organizing events, and other community-driven activities.",
        keywords: ["mentoring", "organizing", "community"],
      },
      collapsed: false,
      items: ["Communities", "Mentoring"],
    },
    {
      type: "category",
      label: "Constantly building",
      link: {
        type: "generated-index",
        title: "Constantly Building",
        description:
          "An exhaustive list of constantly building & purchasing domain names for side projects.",
        keywords: ["products", "designs", "hackathons"],
      },
      collapsed: false,
      items: ["Projects", "Hackathons", "Designs"],
    },
    {
      type: "category",
      label: "Work",
      link: {
        type: "generated-index",
        title: "Work",
        description:
          "A collection of my work experiences, including programs, my initiative, researhc and full-time positions.",
        keywords: ["gsoc", "balena", "google summer of code", "open-source"],
      },
      collapsed: false,
      items: ["Google Summer of Code", "Mixster", "Balena", "ai-safety", "interview-questions"],
    },
  ],
};

export default sidebars;
