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
      '/practices/' : require('./side/ja_practices'),
      '/blog/'      : require('./side/ja_blog'),
      '/training/'  : require('./side/ja_training')
    }
  },
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-37628540-15'
    }],
    ['@vuepress/last-updated']
  ]
}
