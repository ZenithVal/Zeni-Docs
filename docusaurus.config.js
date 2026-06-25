// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZenithVal',
  tagline: 'The Zeni Stuff',
  favicon: 'img/zeni-excite.png',

  future: {
    v4: true,
  },

  url: 'https://zenithval.com',
  baseUrl: '/',
  organizationName: 'ZenithVal',
  projectName: 'zenithval.github.io',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: './creations',
          routeBasePath: 'creations',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: false,
          routeBasePath: 'updates',
          path: './updates',
          blogSidebarTitle: 'Updates',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'support',
        path: './support',
        routeBasePath: 'support',
        sidebarPath: './supportSidebars.ts',
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/zeni-pin.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      blog: {
        sidebar: {
          groupByYear: false,
        },
      },
      navbar: {
        title: 'ZenithVal',
        logo: {
          alt: 'Zeni',
          src: 'img/zeni-excite.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'creationsSidebar',
            position: 'left',
            label: 'Creations',
          },
          {
            to: '/updates',
            label: 'Updates',
            position: 'left',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'support',
            sidebarId: 'supportSidebar',
            position: 'left',
            label: 'Support & Patreon',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © 2026 ZenithVal. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp', 'json'],
      },
    }),
};

export default config;
