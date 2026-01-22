// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

const name = "Vipul Gupta";
const org = "vipulgupta2048";
const repo = "talkswith2048";
const tagline = `${name} - Developer, Speaker, and Community Builder`;
const githubUrl = `https://github.com/${org}/${repo}`;
const description = `Portfolio of Vipul Gupta (${org}) - Software Engineer, Tech Speaker, Open Source Leader, Community Lead and GitHub Star. Docs about my talks, workshops, projects, community contributions, mentoring and more.`;
const siteUrl = `https://docs.mixster.dev`;
const socialImage = `${siteUrl}/img/og-image.webp`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${name}'s Docs`,
  tagline: tagline,
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: siteUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/`,
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: org, // Usually your GitHub org/user name.
  projectName: repo, // Usually your repo name.

  onBrokenLinks: "warn",

  markdown: {
    format: "mdx",
    mermaid: false,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Additional performance optimizations
  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      mdxCrossCompilerCache: true,
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
    },
  },

  // Custom head tags for better SEO
  headTags: [
    // Structured Data - Person Schema
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Vipul Gupta",
        alternateName: "vipulgupta2048",
        url: siteUrl,
        image: `${siteUrl}/img/avatar.webp`,
        sameAs: [
          "https://github.com/vipulgupta2048",
          "https://www.linkedin.com/in/vipulgupta2048",
          "https://twitter.com/vipulgupta2048",
          "https://www.instagram.com/vipulgupta2048",
          "https://mixster.dev",
        ],
        jobTitle: "Product Engineer",
        knowsAbout: [
          "Software Development",
          "Open Source",
          "DevOps",
          "Cloud Computing",
          "Technical Speaking",
          "Community Building",
        ],
      }),
    },
    // Website Schema
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: `${name} - Developer Portfolio`,
        description: description,
        url: siteUrl,
        author: {
          "@type": "Person",
          name: "Vipul Gupta",
        },
        inLanguage: "en-US",
      }),
    },
    // Organization Schema
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Vipul Gupta",
        alternateName: "vipulgupta2048",
        url: siteUrl,
        logo: `${siteUrl}/img/avatar.webp`,
        sameAs: [
          "https://github.com/vipulgupta2048",
          "https://twitter.com/vipulgupta2048",
          "https://www.linkedin.com/in/vipulgupta2048",
          "https://mixster.dev",
        ],
        founder: {
          "@type": "Person",
          name: "Vipul Gupta",
          sameAs: "https://github.com/vipulgupta2048",
        },
      }),
    },
    // Preconnect to external domains for performance
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
    // DNS prefetch for external resources
    {
      tagName: "link",
      attributes: {
        rel: "dns-prefetch",
        href: "https://www.google-analytics.com",
      },
    },
  ],

  plugins: [
    ["docusaurus-plugin-sass", {}],
    // Ideal Image Plugin for automatic image optimization
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 85, // Optimized quality for web
        max: 1030, // Maximum width
        min: 640, // Minimum width
        steps: 2, // Number of variants between min and max
        disableInDev: false, // Enable in development for testing
      },
    ],
    // PWA Plugin for better mobile experience
    [
      "@docusaurus/plugin-pwa",
      {
        debug: false,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/favicon.ico",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#1a1c1e",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#1a1c1e",
          },
        ],
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        googleTagManager: { containerId: "GTM-5JMKTPCM" },
        gtag: {
          trackingID: "G-HW23H5D7FP",
          anonymizeIP: true,
        },

        // Sitemap configuration within the preset
        sitemap: {
          changefreq: "weekly",
          priority: null, // We'll handle this with createSitemapItems
          ignorePatterns: ["/search/**", "/tags/**"],
          filename: "sitemap.xml",
          lastmod: "date",

          // Custom sitemap items with priorities and change frequencies
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);

            // Define priority mappings for easy maintenance
            const priorityMap = {
              // Homepage - highest priority
              "/": 1.0,

              // Key content pages - high priority
              "/Introduction": 0.9,
              "/Projects": 0.6,
              "/Communities": 0.6,

              // Professional services - highest priority (paid offerings)
              "/ai-workshop": 0.95,

              // Professional content - medium-high priority
              "/Talks": 0.9,
              "/Workshops": 0.9,
              "/Mentoring": 0.8,

              // Professional activities - medium priority
              "/Conferences": 0.9,
              "/Podcasts": 0.7,
              "/gsoc": 0.7,
              "/interview-questions": 0.6,

              // Secondary content - lower priority
              "/Hackathons": 0.6,
              "/Designs": 0.6,
              "/Balena": 0.6,

              // Category pages - organized by importance
              "/category/work": 0.8, // High - professional focus
              "/category/constantly-building": 0.7, // Medium-high - shows activity
              "/category/sharing-what-i-know": 0.7, // Medium-high - knowledge sharing
              "/category/paying-it-forward": 0.6, // Medium - community contribution
            };

            return items.map((item) => {
              // Extract the path from the full URL
              const urlPath = item.url.replace(siteUrl, "");

              // Check if we have a specific priority for this page
              let priority = priorityMap[urlPath];

              // If no specific priority, use pattern-based fallbacks
              if (!priority) {
                if (urlPath.includes("/category/")) {
                  // Default priority for any new category pages not explicitly listed
                  priority = 0.6;
                } else if (urlPath.includes("/search")) {
                  priority = 0.3;
                } else {
                  // Default priority for NEW pages - you can adjust this
                  priority = 0.7; // Higher default to ensure new content gets attention
                }
              }

              return {
                ...item,
                priority,
                changefreq: "weekly",
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
          // Enhanced docs config for SEO
          editCurrentVersion: true,
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
        searchParameters: {
          facetFilters: ["type:content"],
        },
        searchPagePath: "search",
        ignoreCanonicalTo: true,
        insights: true, // Enable search insights
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
      // Global metadata - site-wide SEO essentials
      metadata: [
        // Core SEO (global defaults)
        { name: "author", content: "Vipul Gupta (vipulgupta2048)" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },

        // Keywords - Global site keywords
        {
          name: "keywords",
          content:
            "vipulgupta2048,mixster,github,star,software,engineer,developer,speaker,open source,gittogether,product,owner,devops,docusaurus,docker,docs,projects,workshops,nodejs,portfolio,talks,workshops,community,mentoring,conferences,hackathons,balena,sugarlabs,delhi,noida,india",
        },

        // Social cards
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: socialImage },
        { property: "og:image", content: socialImage },
        { property: "og:image:secure_url", content: socialImage },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:type", content: "image/webp" },

        // Global Twitter defaults
        { name: "twitter:site", content: "@vipulgupta2048" },
        { name: "twitter:creator", content: "@vipulgupta2048" },

        // Global Open Graph site info
        { property: "og:site_name", content: "Vipul Gupta Portfolio & Docs" },
        { property: "og:locale", content: "en_US" },

        // Search engine directives
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        {
          name: "googlebot",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { name: "bingbot", content: "index, follow" },

        // Mobile and performance optimizations
        { name: "format-detection", content: "telephone=no" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },

        // Security and privacy
        { name: "referrer", content: "no-referrer-when-downgrade" },

        // Content and language
        { httpEquiv: "content-language", content: "en-US" },
      ],

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      image: "img/og-image.webp",
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: `${name} portfolio logo`,
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
          {
            href: `https://mixster.dev/2019/05/24/mixster/`,
            label: "About Mixster",
            position: "left",
          },
          {
            href: `https://drive.google.com/file/d/1fwsRgQNhwp4vv23FjbRB3MGHbjWhoh9r/view`,
            label: "Resume",
            position: "right",
          },
          // Social media icons with enhanced accessibility
          {
            href: "https://github.com/vipulgupta2048",
            position: "right",
            className: "header-github-link",
            "aria-label": "Visit Vipul Gupta GitHub Profile",
            title: "GitHub Profile",
          },
          {
            href: "https://www.linkedin.com/in/vipulgupta2048",
            position: "right",
            className: "header-linkedin-link",
            "aria-label": "Connect with Vipul Gupta on LinkedIn",
            title: "LinkedIn Profile",
          },
          {
            href: "https://www.instagram.com/vipulgupta2048",
            position: "right",
            className: "header-instagram-link",
            "aria-label": "Follow Vipul Gupta on Instagram",
            title: "Instagram Profile",
          },
          {
            href: "https://twitter.com/vipulgupta2048",
            position: "right",
            className: "header-twitter-link",
            "aria-label": "Follow Vipul Gupta on Twitter",
            title: "Twitter Profile",
          },
        ],
      },
      footer: {
        links: [
          {
            html: `<div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div>
              <p align='left'>✍️ Docs written by @${org} since 2017 💜<br>
              <a href="${githubUrl}/issues/new?assignees=vipulgupta2048&labels=&projects=&template=welcome-ideas.md&title=user-feedback" aria-label="Provide feedback on documentation">Steal responsibly</a> 👀 
              Share a <a href="${githubUrl}" aria-label="Star the repository on GitHub">star 🌟</a><br>
              As always, live in the mix! 🎵</p>
            </div>
            <div>
              <a href="https://notbyai.fyi/#not-by-ai-mission" aria-label="This content is written by human, not AI">
                <img width="131" alt="Written-By-Human-Not-By-AI-Badge" src="https://github.com/user-attachments/assets/847dd474-1d1d-462a-a115-d162e544f714" />
              </a>
            </div>
          </div>`,
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      // Enhanced table of contents
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    },
};

export default config;
