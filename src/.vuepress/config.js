import { defaultTheme } from '@vuepress/theme-default'

module.exports = {
  title: 'tomosuzu\'s pages',
  description: 'produced by tomosuzu',
  dest: 'docs/',
  base: '/',
  locales: {
    '/': {
      lang: 'ja-JP',
    }
  },
  theme: defaultTheme({
    navbar: [
      {
        text: '当サイトについて',
        link: '/about/',
      },
      {
        text: 'スクラムの教科書',
        link: '/scrum/',
      },
      {
        text: 'プラクティス一覧',
        link: '/practices/',
      },
      {
        text: '雑記',
        link: '/blog/',
      },
      {
        text: '問い合わせ',
        link: 'https://forms.gle/TKUJ2Gs9EoH2jQvp7',
      }
    ],
    sidebar: {
      '/scrum/': [
        {
          text: 'about',
          children: ['/scrum/README.md'],
        },
      ],
      '/practices/': [
        {
          text: 'about',
          children: ['/practices/README.md'],
        },
        {
          text: 'Discovery',
          children: [
            'impact-mapping',
            'user-story-mapping',
            'value-stream-process-mapping',
            'empathy-mapping'
          ],
        },
        {
          text: 'Options/Pivot',
          children: [
            'backlog-refinement'
          ],
        },
        {
          text: 'Delivery',
          children: [
            'daily-standup',
            'iteration-planning',
            'retrospectives'
          ],
        },
        {
          text: 'Foundation',
          children: [
            'pair-programming',
            'mob-programming',
            'test-driven-development',
            'social-contract',
            'team-sentiment',
            'visualisation-of-work',
            'continuous-integration',
            'continuous-delivery',
            'continuous-deployment'
          ],
        },
      ],
    },
  }),
  plugins: [
    ['@vuepress/plugin-google-analytics', {
      id: 'G-KVSYCWD6X0',
    }],
    ['@vuepress/last-updated']
  ]
}
