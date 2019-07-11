module.exports = {
  title: 'tomosuzu\'s pages',
  description: 'produced by tomosuzu',
  dest: 'docs/',
  base: '/',
  themeConfig: {
    locales: {
      '/': {
        nav: require('./nav/ja'),
      }
    },
    sidebar: {
      '/agile/': [
        '',
        'social-contract',
        'pair-programming',
        'mob-programming',
        'retrospectives',
        'visualisation-of-work',
        'team-sentiment',
        'test-driven-development'
      ]
    }
  },
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-37628540-15'
    }]
  ]
}
