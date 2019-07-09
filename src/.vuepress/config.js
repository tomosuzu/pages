module.exports = {
  title: 'tomosuzu\'s page',
  description: 'tomosuzu\'s page',
  dest: 'docs/',
  base: '/practices/',
  themeConfig: {
    locales: {
      '/': {
        nav: require('./nav/ja'),
      }
    }
  },
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-37628540-15'
    }]
  ]
}
