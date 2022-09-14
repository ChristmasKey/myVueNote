const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // entry: "src/main.js"
      // entry: "src_01_分析工程结构/main.js"
      entry: "src_02_setup配置项/main.js"
    }
  },
  lintOnSave: false, //关闭语法检查
})
