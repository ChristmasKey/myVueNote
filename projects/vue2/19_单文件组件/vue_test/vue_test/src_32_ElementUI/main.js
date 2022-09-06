import Vue from 'vue';
import App from "./App";
//完整引入ElementUI
//引入ElementUI组件库
// import ElementUI from 'element-ui';
//引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入ElementUI
import {Button, Row, DatePicker, Form, FormItem, Input, Select, Option, Col, TimePicker} from "element-ui";

Vue.config.productionTip = false;

//应用ElementUI
// Vue.use(ElementUI)
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Col);
Vue.use(TimePicker);

new Vue({
    el: '#app',
    render: h => h(App),
})
