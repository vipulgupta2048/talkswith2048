// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

const org = "vipulgupta2048"
const repo = "talkswith2048"
const tagline = `Docs site of ${org}`
const githubUrl = `https://github.com/${org}/${repo}`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: org,
  tagline: tagline,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://docs.mixster.dev`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: org, // Usually your GitHub org/user name.
  projectName: repo, // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
    ['docusaurus-plugin-sass', {}],
  ],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `${githubUrl}/edit/master/docs/`,
          routeBasePath: '/'
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '2W8TQEDQ7Y',  
        apiKey: '9182b1e9f7a45bc038813c8c2791ed70',
        indexName: 'mixster',  
        contextualSearch: true,  
        externalUrlRegex: 'mixster\\.dev',  
        searchParameters: {},  
        searchPagePath: 'search',  
      },
    
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     `Vipul would love your feedback on the docs/portfolio site, please fill <a target="_blank" rel="noopener noreferrer" href="${githubUrl}/issues/new">a GitHub issue</a>`,
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      metadata: [
        {
          name: "description",
          content: tagline,
        },
        {
          name: "keywords",
          content:
            "vipulgupta2048,mixster,developer,engineer,javascript,python,iot,kernel,open,source,rest,testing,hardware,loop, system,ci,cd,devops,cloud,balena,open-source,gophers,summit,talks,conferences",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        }
      },
      blog: false,
      // Replace with your project's social card
      image: '/img/avatar.png',
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: `${org}-logo`,
          src: 'img/hatching.gif',
          height: 48,
          width: 38,
          // srcDark: 'img/talkswith2048.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'The Good Stuff',
          },
          {
            href: `https://mixster.dev`,
            label: "Mixster",
            position: 'right',
          },
          {
            href: `${githubUrl}/issues/new?assignees=vipulgupta2048&labels=&projects=&template=welcome-ideas.md&title=user-feedback`,
            label: "New Ideas?",
            position: 'right',
          },
          {
            position: 'right',
            label: 'Usual Suspects',
            items: [
              {
                href: `https://github.com/${org}`,
                label: "GitHub",
              },
              {
                href: `https://linkedin.com/in/${org}`,
                label: "LinkedIn",
              },
              {
                href: `https://twitter.com/${org}`,
                label: "Twitter",
              },
              {
                href: `https://instagram.com/vipulgupta.travel`,
                label: "Instagram",
              },
              {
                href: `https://t.me/${org}`,
                label: "Telegram",
              },
              {
                href: `https://bit.ly/vipresume`,
                label: "Resume",
              },
            ]
          },
        ],
      },
      footer: {
        links: [
          {
            html: `Built with 💜 on Docusaurus, written by @${org}</br><a href="/Introduction#credits">Steal responsibly</a> 👀, give it a <a href=${githubUrl}>star 🌟</a> if you find this cool and as always live in the mix!`,
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
