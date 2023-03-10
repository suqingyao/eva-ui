#!usr/bin/env node

import figlet from 'figlet'
import clear from 'clear'
import chalkAnimation from 'chalk-animation'

// 打印欢迎画面
clear()
const logo = figlet.textSync('Smarty UI!', {
  // font: "Ghost",
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
  whitespaceBreak: true
})

const rainbow = chalkAnimation.rainbow(logo)
setTimeout(() => {
  rainbow.stop() // Animation stops
}, 500)
