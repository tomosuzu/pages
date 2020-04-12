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
          title: 'Discovery',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'impact-mapping',
            'user-story-mapping',
            'value-stream-process-mapping',
            'empathy-mapping'
          ]
        },
        {
          title: 'Options/Pivot',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'backlog-refinement'
          ]
        },
        {
          title: 'Delivery',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'daily-standup',
            'iteration-planning',
            'retrospectives'
          ]
        },
        {
          title: 'Foundation',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'pair-programming',
            'mob-programming',
            'test-driven-development',
            'social-contract',
            'team-sentiment'
          ]
        }
      ],
      '/blog/' : [
        {
          title: '201908',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'JobsToBeDone1'
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
