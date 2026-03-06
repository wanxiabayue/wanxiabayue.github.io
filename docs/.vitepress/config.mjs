import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wanxiabayue's blog",
  description: "simple blog",
  
  // 自定义样式，移除默认边距和背景
  lastUpdated: false,
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
     // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 我的VitePress博客'
    },
    darkMode: true
  }
})
