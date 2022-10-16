import { applyPlugins } from '@ruabick/md-demo-plugins'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '🍒 Wow-UI',
  description: '组件库搭建的教学模型',
  themeConfig: {
    sidebar: [
      {
        text: '通用',
        items: [{ text: 'Button 按钮', link: '/components/button/' }]
      },
      {
        text: '快速开始',
        items: []
      }
    ]
  },
  markdown: {
    config: md => {
      applyPlugins(md)
    }
  }
})
