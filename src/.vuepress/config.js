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
    }
  },
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-37628540-15'
    }],
    ['@vuepress/last-updated']
  ]
}
