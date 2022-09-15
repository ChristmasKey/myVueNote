const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // entry: "src/main.js"
      // entry: "src_01_分析工程结构/main.js"
      // entry: "src_02_初识setup/main.js"
      // entry: "src_03_ref函数/main.js"
      // entry: "src_04_reactive函数/main.js"
      entry: "src_05_响应式原理/main.js"
    }
  },
  lintOnSave: false, //关闭语法检查
})
