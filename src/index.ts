import { createApp } from 'vue/dist/vue.esm-browser'
import WowUI from './entry'
import App from './App.vue'

createApp({
  template: `
       <div style="margin-bottom:20px;">
       <w-button color="blue">主要按钮</w-button>
       <w-button color="green">绿色按钮</w-button>
       <w-button color="gray">灰色按钮</w-button>
       <w-button color="yellow">黄色按钮</w-button>
       <w-button color="red">红色按钮</w-button>
   </div>
   <div style="margin-bottom:20px;">
       <w-button color="blue" plain>朴素按钮</w-button>
       <w-button color="green" plain>绿色按钮</w-button>
       <w-button color="gray" plain>灰色按钮</w-button>
       <w-button color="yellow" plain>黄色按钮</w-button>
       <w-button color="red" plain>红色按钮</w-button>
   </div>
   <div style="margin-bottom:20px;">
       <w-button size="small" plain>小按钮</w-button>
       <w-button size="medium" plain>中按钮</w-button>
       <w-button size="large" plain>大按钮</w-button>
   </div>
   <div style="margin-bottom:20px;">
       <w-button color="blue" round plain icon="search">搜索按钮</w-button>
       <w-button color="green" round plain icon="edit">编辑按钮</w-button>
       <w-button color="gray" round plain icon="check">成功按钮</w-button>
       <w-button color="yellow" round plain icon="message">提示按钮</w-button>
       <w-button color="red" round plain icon="delete">删除按钮</w-button>
   </div>
   <div style="margin-bottom:20px;">
       <w-button color="blue" round plain icon="search"></w-button>
       <w-button color="green" round plain icon="edit"></w-button>
       <w-button color="gray" round plain icon="check"></w-button>
       <w-button color="yellow" round plain icon="message"></w-button>
       <w-button color="red" round plain icon="delete"></w-button>
   </div>
       `
})
  .use(WowUI)
  .mount('#app')
