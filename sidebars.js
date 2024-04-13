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
          "Documenting talks, podcast, conferences where I share openly about my work, the friction, and the journey of whatever I am building/learning/struggling with that year.",
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
          "Documenting talks, podcast, conferences where I share openly about my work, the friction, and the journey of whatever I am building/learning/struggling with that year.",
        keywords: ["products", "designs", "hackathons"],
      },
      collapsed: false,
      items: ["Projects", "Hackathons", "Designs"],
    },
    {
      type: "category",
      label: "Past work",
      link: {
        type: "generated-index",
        title: "Past Work",
        description:
          "Documenting talks, podcast, conferences where I share openly about my work, the friction, and the journey of whatever I am building/learning/struggling with that year.",
        keywords: ["gsoc", "balena", "google summer of code", "open-source"],
      },
      collapsed: true,
      items: ["Google Summer of Code"],
    },
  ],
};

export default sidebars;
