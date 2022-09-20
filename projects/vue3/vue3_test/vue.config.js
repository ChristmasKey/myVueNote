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
      // entry: "src_05_响应式原理/main.js"
      // entry: "src_06_setup注意点/main.js"
      // entry: "src_07_computed计算属性/main.js"
      // entry: "src_08_watch监视/main.js"
      // entry: "src_09_watch监视ref数据的说明/main.js"
      // entry: "src_10_watchEffect函数/main.js"
      // entry: "src_11_生命周期/main.js"
      // entry: "src_12_自定义hook函数/main.js"
      // entry: "src_13_toRef与toRefs/main.js"
      // entry: "src_14_shallowReactive与shallowRef/main.js"
      // entry: "src_15_readOnly与shallowReadonly/main.js"
      entry: "src_16_toRaw与markRaw/main.js"
    }
  },
  lintOnSave: false, //关闭语法检查
})
