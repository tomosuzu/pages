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
            'team-sentiment',
            'continuous-integration'
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
      ],
      '/training/' : [
        {
          title: '筋トレ',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/training/'
          ]
        },
        {
          title: '過去の記録',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '202004'
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
