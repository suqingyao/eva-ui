import { applyPlugins } from '@ruabick/md-demo-plugins'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '🍒 Eva-UI',
  description: '组件库搭建的教学模型',
  themeConfig: {
    sidebar: [
      {
        items: [
          {
            text: 'Introduction',
            items: [
              {
                text: 'Get Started',
                link: '/start'
              }
            ]
          },
          {
            text: 'Basic 基础组件',
            items: [{ text: 'Button 按钮', link: '/components/button' }]
          }
        ]
      }
    ]
  },
  markdown: {
    config: (md) => {
      applyPlugins(md)
    }
  }
})
