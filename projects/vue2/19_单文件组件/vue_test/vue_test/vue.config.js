const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            //入口
            // entry: 'src/main.js'
            // entry: 'src_01_分析脚手架/main.js'
            // entry: 'src_02_ref属性/main.js'
            // entry: 'src_03_props配置/main.js'
            // entry: 'src_04_mixin混入/main.js'
            // entry: 'src_05_plugins插件/main.js'
            // entry: 'src_06_scoped样式/main.js'
            // entry: 'src_07_Todo-List案例/main.js'
            // entry: 'src_08_组件自定义事件/main.js'
            // entry: 'src_09_TodoList案例（自定义事件）/main.js'
            // entry: 'src_10_全局事件总线/main.js'
            // entry: 'src_11_TodoList案例（事件总线）/main.js'
            // entry: 'src_12_消息订阅与发布/main.js'
            // entry: 'src_13_TodoList案例（消息订阅发布）/main.js'
            // entry: 'src_14_动画与过度效果/main.js'
            // entry: 'src_15_TodoList案例（过度与动画）/main.js'
            // entry: 'src_16_配置代理/main.js'
            // entry: 'src_17_github搜索案例/main.js'
            // entry: 'src_18_默认插槽/main.js'
            // entry: 'src_19_具名插槽/main.js'
            // entry: 'src_20_作用域插槽/main.js'
            // entry: 'src_21_求和案例/main.js'
            // entry: 'src_22_vuex/main.js'
            // entry: 'src_23_vuex(namespace)/main.js'
            // entry: 'src_24_基本路由/main.js'
            // entry: 'src_25_嵌套路由/main.js'
            // entry: 'src_26_路由的query参数/main.js'
            // entry: 'src_27_路由的params参数/main.js'
            // entry: 'src_28_路由的props配置/main.js'
            // entry: 'src_29_router-link的replace属性/main.js'
            // entry: 'src_30_编程式路由导航/main.js'
            // entry: 'src_31_路由守卫/main.js'
            entry: 'src_32_ElementUI/main.js'
        }
    },
    lintOnSave: false, //关闭语法检查
    //开启代理服务器（方式一）
    /*devServer: {
      proxy: 'http://localhost:5000/'
    },*/
    //开启代理服务器（方式二）
    devServer: {
        proxy: {
            '/spring': {
                target: 'http://localhost:5000/',
                pathRewrite: {'^/spring': ''}, //路径重写
                ws: true, //支持websocket
                changeOrigin: true //用于控制请求头中的host值
            },
            '/stone': {
                target: 'http://localhost:5001/',
                pathRewrite: {'^/stone': ''}, //路径重写
                ws: true, //支持websocket
                changeOrigin: true //用于控制请求头中的host值
            },
        }
    },
})
