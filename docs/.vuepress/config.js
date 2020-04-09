module.exports = {
  title: '化学小子的前端实验册',
  description: '化学小子的前端实验册，记录学习中遇到的各种坑',
  base: '/fe/',
  themeConfig: {
    nav: [
      {
        text: '前端',
        ariaLabel: 'Language Menu',
        items: [
          { text: '前端资料整理及学习记录', link: '/front-end-data-collation-and-learning-records/' },
          { text: '前端探险路线图', link: '/front-end-adventure-roadmap/' }
        ]
      },
      {
        text: 'CSS',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'CSS效果 | 两栏布局那些事', link: '/css-two-column-layout/' },
          { text: 'CSS效果 | 三栏布局那些事', link: '/css-three-column-layout/' },
          { text: 'CSS效果 | Tab选项卡', link: '/css-tab-bar/' },
          { text: 'CSS效果 | 轮播图', link: '/css-swiper-picture/' }
        ]
      }, {
        text: 'JS',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'JS | 几道简单的数学题', link: '/a-few-simple-arithmetic-problems/' },
        ]
      },
      {
        text: 'Vue',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Vue | 入手笔记', link: '/vue-start-note/' },
        ]
      }
    ],
    sidebar: 'auto',
    displayAllHeaders: true, // 默认值：false
    lastUpdated: 'Last Updated'
  }
}