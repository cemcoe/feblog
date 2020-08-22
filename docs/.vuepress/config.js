const nav = require('./router')

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