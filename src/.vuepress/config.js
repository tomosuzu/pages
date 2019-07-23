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
          collapsable: true,
          sidebarDepth: 2,
          children: [
            '/practices/'
          ]
        },
        {
          title: 'Foundation',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'pair-programming'
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
