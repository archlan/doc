/* eslint-disable global-require */

const pages = require( './src/pages.config' )

module.exports = {
  title: 'ArchLan',
  tagline: 'From school project to fully-featured and powerful Arch-based distro.',
  url: 'https://archlan.github.io',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo-alt.svg',
  organizationName: 'archlan',
  projectName: 'documentation',
  
  themeConfig: {
    hideableSidebar: true,
        announcementBar: {
          id: 'announcementBar-2', // Increment on change
          content: `⭐️ Do you like ArchLan? Give me a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/archlan/iso">GitHub</a>️ ⭐`,
        },
    colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '1px',
          paddingBottom: '2px',
        },
        lightIcon: '😎',
        lightIconStyle: {
          marginLeft: '1px',
          paddingBottom: '2px',
        },
      },
    },
    navbar: {
      hideOnScroll: true,
      title: 'ArchLan',
      logo: {
        alt: 'ArchLan Logo',
        src: 'img/logo-alt.svg',
      },
      items: [
        {
          label: 'Documentation',
          position: 'left',
          items: [
            { to: '/intro', label: 'Welcome' },
            { to: '/boot-iso/boot-with-usb', label: 'Boot ArchLan' },
            { to: '/install-archlan/post-install', label: 'Install ArchLan' },
            { to: '/window-managers/i3wm', label: 'Window Managers' },
            { to: '/contrib/setup-env', label: 'Contribute' },
            { to: '/dev/about-goals', label: 'Development' },
          ],
        },
        { to: 'community/', label: 'Community', position: 'left' },
        {
          href: 'https://github.com/archlan/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    algolia: {
      // https://docusaurus.io/blog/2021/11/21/algolia-docsearch-migration
      appId: 'BS9XDC853Y',
      apiKey: 'efb31e4cfdca1c53d2c5848dd91d668d',
      indexName: 'archlan',
    },
    prism: {
      theme: require( 'prism-react-renderer/themes/github' ),
      darkTheme: require( 'prism-react-renderer/themes/vsDark' ),
      defaultLanguage: 'javascript',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ArchLan',
          items: [
            {
              label: 'Home',
              to: 'https://archlan.github.io',
            },
            {
              label: 'Docs',
              to: 'https://archlan.github.io/documentation',
            },
            {
              label: 'Tutorials',
              to: 'https://archlan.github.io/documentation',
            },
            {
              label: 'News',
              to: 'https://archlan.github.io/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/archlan_linux/',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/archlan',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ArchLan_Linux',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/5XBTCeBvvN',
            },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'Source',
              to: 'https://github.com/archlan/iso',
            },
            {
              label: 'Releases',
              to: 'https://github.com/archlan/releases',
            },
            {
              label: 'Issues',
              to: 'https://github.com/archlan/issue-tracker/issues',
            },
            {
              label: 'Documentation',
              to: 'https://github.com/archlan/documentation',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Donate',
              to: 'https://archlan.github.io/donate',
            },
            {
              label: 'Contact',
              href: 'mailto:archlan@pm.me',
            },
          ],
        },
      ],
      copyright: `Copyright Lanhild © 2021 | ArchLan Linux`,
    },
  },
  plugins: [...pages ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
            editLocalizedFiles: true,
            routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/archlan/documentation/edit/main/',
        },
          gtag: {
            trackingID: 'G-HSTCE1RDFG',
            anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve( './src/css/custom.css' ),
        },
      },
    ],
  ],
}
