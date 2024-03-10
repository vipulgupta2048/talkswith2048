// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const org = "vipulgupta2048" 
const repo = "talkswith2048" 

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: org,
  tagline: `Docs on everything ${org}.`,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://vipulgupta2048.github.io/`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: repo,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: org, // Usually your GitHub org/user name.
  projectName: repo, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
            `https://github.com/${org}/${repo}/edit/master/docs/cd`,
          routeBasePath: '/'

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        }
      },
      blog: false,
      // Replace with your project's social card
      image: 'talkswith2048.png',
      navbar: {
        title: repo,
        logo: {
          alt: `${repo}-logo`,
          src: 'img/talkswith2048.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: `https://github.com/${org}/${repo}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Everything open-source',
                to: '/open-source',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: `https://twitter.com/${org}`,
              },
              {
                label: 'Linkedin',
                href: `https://linkedin.com/in/${org}/`,
              },
              {
                label: 'GitHub',
                href: `https://github.com/${org}/`,
              },
              {
                label: 'Blog',
                href: 'https://mixster.dev',
              },              
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: `mailto:${org}[@]gmail[DoT]com`,
              },
              {
                label: 'Instagram',
                href: `https://instagram.com/vipulgupta.travel/`,
              },
              {
                label: 'Signal',
                href: `https://signal.me/#vipulgupta2048`,
              },
            ],
          },
        ],
        copyright: `This webiste and all its assets are owned by Vipul Gupta and is licensed under CC BY-NC 4.0`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
