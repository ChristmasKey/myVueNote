//引入的不再是Vue构造函数了，而是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
//（对上一行的代码进行分解）

//创建应用实例对象——app（类似于之前Vue2中的vm，但是app比vm更轻）
const app = createApp(App)
// console.log('@@@', app)

//挂载
app.mount("#app")

//卸载
// setTimeout(() => {
//     app.unmount()
// }, 1000)

/*
Vue2中的写法：
const vm = new Vue({
    render: h => h(App)
})
vm.$mount("#app")
*/
