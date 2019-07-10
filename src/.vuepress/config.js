module.exports = {
  title: 'practices',
  description: 'to introduce practices',
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
