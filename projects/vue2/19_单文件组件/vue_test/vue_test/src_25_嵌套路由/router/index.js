import VueRouter from "vue-router";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Message from "../pages/Message";

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [ //通过children配置子级路由
                {
                    path: 'news', //此处一定不能写“/news”
                    component: News
                },
                {
                    path: 'message', //此处一定不能写"/message"
                    component: Message
                }
            ]
        },
        {
            path: '/about',
            component: About,
        }
    ]
})
