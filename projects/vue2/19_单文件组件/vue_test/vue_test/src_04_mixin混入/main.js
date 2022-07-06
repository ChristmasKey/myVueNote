import Vue from 'vue'
import App from './App'
import {hunhe, hunhe2} from "./hunhe";

Vue.config.productionTip = false

//配置全局混合
Vue.mixin(hunhe)
Vue.mixin(hunhe2)

new Vue({
    render: h => h(App)
}).$mount('#app')
