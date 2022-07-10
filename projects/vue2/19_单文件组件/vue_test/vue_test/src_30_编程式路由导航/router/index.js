import VueRouter from "vue-router";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            // path: 'detail/:id/:title',
                            component: Detail,
                            props: function ($route) {
                                return {
                                    id: $route.query.id,
                                    // id: $route.params.id,
                                    title: $route.query.title
                                    // title: $route.params.title
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/about',
            component: About
        }
    ]
})