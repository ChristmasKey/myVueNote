import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*
* 关于不同版本的Vue：
*   1.vue.js 与 vue.runtime.xxx.js 的区别：
*     （1）前者是完整版的Vue，包含：核心功能+模板解析器
*     （2）后者是运行版的Vue，只包含核心功能，没有模板解析器
*   2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，
*     需要使用render函数中接收到的createElement函数去指定具体内容
* */

new Vue({
    //将App组件放入容器中
    render: h => h(App),
}).$mount('#app')
