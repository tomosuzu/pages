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
      '/practices/' : [
        {
          title: 'プラクティス一覧',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/practices/'
          ]
        },
        {
          title: 'Foundation',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'pair-programming',
            'test-driven-development'
          ]
        }
      ]
    }
  },
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-37628540-15'
    }],
    ['@vuepress/last-updated']
  ]
}
