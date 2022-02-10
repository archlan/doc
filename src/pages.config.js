const { EDIT_URL } = require( './consts' )

const sharedValues = {
  editUrl: EDIT_URL,
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
}

const pages = [
  [
    '@docusaurus/plugin-content-docs',
    {
      ...sharedValues,
      id: 'community',
      path: 'content/community',
      routeBasePath: 'community',
      sidebarPath: require.resolve( '../content/community/sidebar' ),
    },
  ],
]

module.exports = pages
