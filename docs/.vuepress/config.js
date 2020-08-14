const nav = [
  {
    text: '前端',
    ariaLabel: 'Language Menu',
    items: [
      { text: '前端资料整理及学习记录', link: '/front-end-data-collation-and-learning-records/' },
      // { text: '前端面试题', link: '/front-end-interview/' },
    ]
  },
  {
    text: 'JS',
    ariaLabel: 'Language Menu',
    items: [
      { text: '读JavaScript高级程序设计', link: '/the-note-of-professional-javascript-for-web-developers/' },
      { text: 'JS | 几道简单的数学题', link: '/a-few-simple-arithmetic-problems/' },
      { text: 'TS是啥玩意', link: '/typescript-begin-trip/' },
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
      {
        text: 'Vue | 如何封装一个toast插件',
        link: '/vue-toast-plugin/'
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
      {
        text: '从博客迁移看跨域那点事儿',
        link: '/network-cors-break-origin-from-remove-blog/'
      },
      {
        text: '以虎符为引看前端登录与用户管理',
        link: '/front-end-login-and-user-management-based-on-hufu/'
      }
    ]
  },
  {
    text: 'Node',
    ariaLabel: 'Language Menu',
    items: [
      {
        text: '借用node来走一下简单的后端流程',
        link: '/node-back-end-trip/'
      },
      {
        text: 'Koa初体验',
        link: '/node-koa-start-learn/'
      }, {
        text: '如何搞一个专属的 Hexo 的主题',
        link: '/node-hexo-template-cemcoe/'
      }
    ]
  },
]

module.exports = {
  title: '化学小子的前端实验册',
  description: '化学小子的前端实验册，记录学习中遇到的各种坑',
  base: '/fe/',
  dest: 'docs/.vuepress/fe', // 输出目录
  themeConfig: {
    nav,
    sidebar: 'auto',
    displayAllHeaders: true, // 默认值：false
    lastUpdated: 'Last Updated'
  },
  // pwa
  head: [
    // ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: true
  }],
}