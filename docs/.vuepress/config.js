const nav = [
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
      {
        text: 'Vue | 入手笔记',
        link: '/vue-start-note/'
      },
      {
        text: 'Vue | 如何将数据插入到DOM中',
        link: '/vue-insert-data-to-dom/'
      },
      {
        text: 'Vue | 如何将数据插入到元素属性中',
        link: '/vue-insert-data-to-elm-attr/'
      },
      {
        text: 'Vue | computed和methods与v-if和v-show的故事',
        link: '/vue-two-cp-computed-methods-v-if-show/'
      },
      {
        text: 'Vue | v-on和methods的羁绊',
        link: '/vue-v-on-and-methods/'
      },
      {
        text: 'Vue | v-model和form的羁绊',
        link: '/vue-v-model-and-form/'
      },
      {
        text: 'Vue | 组件化基本操作',
        link: '/vue-com-base-operation/'
      }, 
      {
        text: 'Vue | 组件通信',
        link: '/vue-com-communication/'
      },      
      {
        text: 'Vue | 组件个性化',
        link: '/vue-com-personal/'
      },
      {
        text: 'Vue | 封装一个tabbar组件',
        link: '/vue-package-a-tabbar-component-from-zero/'
      },
    ]
  },
  {
    text: '网络',
    ariaLabel: 'Language Menu',
    items: [
      {
        text: '网络请求那些事情',
        link: '/those-things-of-the-network-requests/'
      }, 
      {
        text: '如何模拟后端数据',
        link: '/network-mock-data/'
      },
      {
        text: 'axios那些事',
        link: '/network-axios/'
      },
      {
        text: '以todolist为例，看前后端渲染',
        link: '/network-koa-todolist-ssr-spa-api/'
      },
    ]
  },
  {
    text: 'Node',
    ariaLabel: 'Language Menu',
    items: [
      {
        text: 'Koa初体验',
        link: '/node-koa-start-learn/'
      },{
        text: '如何搞一个专属的 Hexo 的主题',
        link: '/node-hexo-template-cemcoe/'
      }
    ]
  }
]

module.exports = {
  title: '化学小子的前端实验册',
  description: '化学小子的前端实验册，记录学习中遇到的各种坑',
  base: '/fe/',
  themeConfig: {
    nav,
    sidebar: 'auto',
    displayAllHeaders: true, // 默认值：false
    lastUpdated: 'Last Updated'
  }
}