// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteUrl: process.env.SITE_URL,
  siteName: 'Varlet',
  siteDescription: 'Minimalism web development stack.',
  longDescription:
    'Varlet is a a web development environment for minimalists, inspired from Laravel Valet and Laragon.',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },

  settings: {
    links: [
      {
        id: 'docs',
        name: 'Documentation',
        title: 'Read the documentation',
        url: '/docs/',
        icon: 'book'
      },
      {
        id: 'twitter',
        name: 'Twitter',
        title: 'Visit my Twitter',
        url: process.env.TWITTER_URL || false,
        icon: 'twitter'
      },
      {
        id: 'github',
        name: 'Github',
        title: 'Visit the repositories',
        url: process.env.GITHUB_URL || false,
        icon: 'github'
      }
    ],
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            id: 'basics',
            title: 'Basics',
            items: [
              //
              '/docs/basics/introduction/',
              '/docs/basics/getting-started/',
              '/docs/basics/alternatives/'
            ]
          },
          {
            id: 'concepts',
            title: 'Concepts',
            items: [
              '/docs/concepts/preset/',
              '/docs/concepts/action/',
              '/docs/concepts/context/',
              '/docs/concepts/templates/',
              '/docs/concepts/hooks/'
            ]
          },
          {
            id: 'guide',
            title: 'Guide',
            items: [
              '/docs/guide/writing-a-preset/',
              '/docs/guide/handling-arguments/',
              '/docs/guide/hosting/',
              '/docs/guide/step-by-step-example/'
            ]
          },
          {
            id: 'actions',
            title: 'Actions',
            items: [
              '/docs/actions/copy/',
              '/docs/actions/preset/',
              '/docs/actions/edit-json/',
              '/docs/actions/edit/',
              '/docs/actions/delete/',
              '/docs/actions/custom/',
              '/docs/actions/install-dependencies/',
              '/docs/actions/prompt/',
              '/docs/actions/run/'
            ]
          },
          {
            id: 'api',
            title: 'API reference',
            items: [
              //
              '/docs/api/context/',
              '/docs/api/preset/'
            ]
          }
        ]
      }
    ]
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: ['@gridsome/remark-prismjs']
        }
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {}
    }
  ],

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          //
          require('tailwindcss'),
          require('postcss-nested'),
          require('postcss-font-magician')
        ]
      }
    }
  }
};
