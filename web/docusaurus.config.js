// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bunkerz Game',
  tagline: 'Browser Game, but fair',
  url: 'https://your-docusaurus-test-site.com', //TODO
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yasp', // Usually your GitHub org/user name.
  projectName: 'bunkerzgame', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // repo containing /docs/**
          editUrl: 'https://github.com/YetAnotherSideProject/bunkerzgame/tree/main/web',
        },
        blog: {
          showReadingTime: true,
          // repo containing /blog/**
          editUrl:
            'https://github.com/YetAnotherSideProject/bunkerzgame/tree/main/web',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Bunkerz Game',
        logo: { // TODO
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'start',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/YetAnotherSideProject/bunkerzgame',
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
                label: 'Einführung',
                to: '/docs',
              },
              {
                label: 'Game Design',
                to: '/docs/game-design/idea',
              },
            ],
          },
          {
            title: 'Community', // TODO
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Yet Another Side Project',
                href: 'https://yasp.dev/',
              },
              {
                label: 'YASP GitHub',
                href: 'https://github.com/YetAnotherSideProject',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Project Bunkerz by YASP, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
