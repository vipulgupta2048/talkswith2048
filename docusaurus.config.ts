// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

const org = "vipulgupta2048";
const repo = "talkswith2048";
const tagline = `Docs site of ${org}`;
const githubUrl = `https://github.com/${org}/${repo}`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: org,
  tagline: tagline,
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: `https://docs.mixster.dev`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/`,
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: org, // Usually your GitHub org/user name.
  projectName: repo, // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: { defaultLocale: "en", locales: ["en"] },

  plugins: [
    // [
    //   '@docusaurus/plugin-ideal-image',
    //   {
    //     quality: 85,
    //     max: 2000, // max resized image's size.
    //     min: 600, // min resized image's size. if original is lower, use that size.
    //     steps: 4, // the max number of images generated between min and max (inclusive)
    //     disableInDev: false,
    //   },
    // ],
    [
      '@docusaurus/plugin-sitemap',
      {
        // Change frequency for all routes
        changefreq: 'weekly',

        // Priority configuration
        priority: null, // We'll handle this with createSitemapItems

        // Ignore certain paths
        ignorePatterns: [
          '/search/**',
          '/tags/**',
        ],

        createSitemapItems: async (params) => {
          const { defaultCreateSitemapItems, ...rest } = params;
          const items = await defaultCreateSitemapItems(rest);

          // Define priority mappings for easy maintenance
          const priorityMap = {
            // Homepage - highest priority
            '/': 1.0,

            // Key content pages - high priority
            '/Introduction': 0.9,
            '/Projects': 0.6,
            '/Communities': 0.6,

            // Professional content - medium-high priority
            '/Talks': 0.9,
            '/Workshops': 0.9,
            '/Mentoring': 0.8,

            // Professional activities - medium priority
            '/Conferences': 0.9,
            '/Podcasts': 0.7,
            '/gsoc': 0.7,
            '/interview-questions': 0.6,

            // Secondary content - lower priority
            '/Hackathons': 0.6,
            '/Designs': 0.6,
            '/Balena': 0.6,

            // Category pages - organized by importance
            '/category/work': 0.8,                    // High - professional focus
            '/category/constantly-building': 0.7,     // Medium-high - shows activity
            '/category/sharing-what-i-know': 0.7,     // Medium-high - knowledge sharing
            '/category/paying-it-forward': 0.6,       // Medium - community contribution
          };

          return items.map((item) => {
            // Extract the path from the full URL
            const urlPath = item.url.replace('https://docs.mixster.dev', '');

            // Check if we have a specific priority for this page
            let priority = priorityMap[urlPath];

            // If no specific priority, use pattern-based fallbacks
            if (!priority) {
              if (urlPath.includes('/category/')) {
                // Default priority for any new category pages not explicitly listed
                priority = 0.6;
              } else if (urlPath.includes('/search')) {
                priority = 0.3;
              } else {
                // Default priority for NEW pages - you can adjust this
                priority = 0.7; // Higher default to ensure new content gets attention
              }
            }

            return {
              ...item,
              priority,
              changefreq: 'weekly',
            };
          });
        },
      },
    ],
    ["docusaurus-plugin-sass", {}],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        googleTagManager: { containerId: "GTM-5JMKTPCM" },
        gtag: { trackingID: "G-HW23H5D7FP", anonymizeIP: true },
        // Sitemap configuration within the preset
        sitemap: {
          changefreq: 'weekly',
          priority: null, // We'll handle this with createSitemapItems
          ignorePatterns: [
            '/search/**',
            '/tags/**',
            '**/_category_/**',
          ],
          filename: 'sitemap.xml',
          lastmod: 'date',

          // Custom sitemap items with priorities and change frequencies
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);

            // Define priority mappings for easy maintenance
            const priorityMap = {
              // Homepage - highest priority
              '/': 1.0,

              // Key content pages - high priority
              '/Introduction': 0.9,
              '/Projects': 0.6,
              '/Communities': 0.6,

              // Professional content - medium-high priority
              '/Talks': 0.9,
              '/Workshops': 0.9,
              '/Mentoring': 0.8,

              // Professional activities - medium priority
              '/Conferences': 0.9,
              '/Podcasts': 0.7,
              '/gsoc': 0.7,
              '/interview-questions': 0.6,

              // Secondary content - lower priority
              '/Hackathons': 0.6,
              '/Designs': 0.6,
              '/Balena': 0.6,

              // Category pages - organized by importance
              '/category/work': 0.8,                    // High - professional focus
              '/category/constantly-building': 0.7,     // Medium-high - shows activity
              '/category/sharing-what-i-know': 0.7,     // Medium-high - knowledge sharing
              '/category/paying-it-forward': 0.6,       // Medium - community contribution
            };

            return items.map((item) => {
              // Extract the path from the full URL
              const urlPath = item.url.replace('https://docs.mixster.dev', '');

              // Check if we have a specific priority for this page
              let priority = priorityMap[urlPath];

              // If no specific priority, use pattern-based fallbacks
              if (!priority) {
                if (urlPath.includes('/category/')) {
                  // Default priority for any new category pages not explicitly listed
                  priority = 0.6;
                } else if (urlPath.includes('/search')) {
                  priority = 0.3;
                } else {
                  // Default priority for NEW pages - you can adjust this
                  priority = 0.7; // Higher default to ensure new content gets attention
                }
              }

              return {
                ...item,
                priority,
                changefreq: 'weekly',
              };
            });
          },
        },


        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `${githubUrl}/edit/master/`,
          routeBasePath: "/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: { customCss: [require.resolve("./src/css/custom.scss")] },
      },
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    algolia: {
      appId: "2W8TQEDQ7Y",
      apiKey: "9182b1e9f7a45bc038813c8c2791ed70",
      indexName: "mixster",
      contextualSearch: true,
      // externalUrlRegex: "mixster\\.dev",
      searchParameters: {},
      searchPagePath: "search",
      ignoreCanonicalTo: true,
    },

    announcementBar: {
      id: "support_us",
      content: `Actively interviewing for new opportunities. <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1fwsRgQNhwp4vv23FjbRB3MGHbjWhoh9r/view">Reach out!</a>`,
      backgroundColor: "#1a1c1e",
      textColor: "#FFFFFF",
      isCloseable: true,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: "description", content: tagline },
      {
        name: "keywords",
        content:
          "vipulgupta2048,mixster,developer,engineer,javascript,python,iot,kernel,open,source,rest,testing,hardware,loop,system,ci,cd,devops,cloud,balena,open-source,gophers,summit,talks,conferences",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@vipulgupta2048" },
      { name: "twitter:creator", content: "@vipulgupta2048" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vipul Gupta Docs" },
      { property: "og:locale", content: "en_US" },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
    ],
    docs: { sidebar: { hideable: true, autoCollapseCategories: false } },
    // Replace with your project's social card
    image: "/img/avatar.png",
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: `${org}-logo`,
        src: "img/hatching.gif",
        height: 48,
        width: 38,
        // srcDark: 'img/talkswith2048.png',
      },

      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Docs",
        },
        { href: `https://mixster.dev`, label: "Blog", position: "left" },
        { href: `https://mixster.dev/2019/05/24/mixster/`, label: "Mixster", position: "left" },
        { href: `https://drive.google.com/file/d/1fwsRgQNhwp4vv23FjbRB3MGHbjWhoh9r/view`, label: "Resume", position: "right" },
        // Social media icons
        {
          href: 'https://github.com/vipulgupta2048',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
        {
          href: 'https://www.linkedin.com/in/vipulgupta2048',
          position: 'right',
          className: 'header-linkedin-link',
          'aria-label': 'LinkedIn',
        },
        {
          href: 'https://www.instagram.com/vipulgupta2048',
          position: 'right',
          className: 'header-instagram-link',
          'aria-label': 'Instagram',
        },
        {
          href: 'https://twitter.com/vipulgupta2048',
          position: 'right',
          className: 'header-twitter-link',
          'aria-label': 'Twitter',
        }
      ],
    },
    footer: {
      links: [
        {
          html: `<div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div>
              <p align='left'>Docs written by @${org} since 2017, not generated 💜</br><a href="${githubUrl}/issues/new?assignees=vipulgupta2048&labels=&projects=&template=welcome-ideas.md&title=user-feedback">Steal responsibly</a> 👀, give the docs a <a href=${githubUrl}>star 🌟</a> if they helped. As always, live in the mix!</p>
            </div>
            <div>
              <a href="https://notbyai.fyi/#not-by-ai-mission"><img width="131" alt="Written-By-Human-Not-By-AI-Badge-black@2x" src="https://github.com/user-attachments/assets/847dd474-1d1d-462a-a115-d162e544f714" /></a>
            </div>
          </div>`,
        },
      ],
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  },
};

export default config;
