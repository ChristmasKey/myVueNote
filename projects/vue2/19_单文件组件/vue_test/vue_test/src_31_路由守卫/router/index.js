import VueRouter from "vue-router";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

//创建一个路由器
const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    meta: {isAuth: true, title: '新闻'},
                    component: News,
                    //设置独享路由守卫
                    beforeEnter: (to, from, next) => {
                        console.log('前置独享路由守卫', to, from)
                        if (localStorage.getItem('school') === 'spring') {
                            next()
                        } else {
                            alert('学校名称错误，无权查看！')
                        }
                    },
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    meta: {isAuth: true, title: '消息'},
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: {title: '详情'},
                            props: function ($route) {
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title
                                }
                            }
                        },
                    ]
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {isAuth: true, title: '关于'}
        }
    ]
})

//全局前置路由守卫——初始化的时候和每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from)
    // if (to.path === '/home/news' || to.path === '/home/message') {
    // if (to.name === 'xinwen' || to.name === 'xiaoxi') {
    if (to.meta.isAuth) { //判断是否需要鉴权
        if (localStorage.getItem('school') === 'spring') {
            next()
        } else {
            alert('学校名不正确，无权查看')
        }
    } else {
        next()
    }
})

//全局后置路由守卫——初始化的时候和每次切换路由之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title || 'SpringStone'
})

//暴露路由器
export default router