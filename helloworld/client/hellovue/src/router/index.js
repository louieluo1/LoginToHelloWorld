import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

// 封装基本路径
const router = new VueRouter({
        //history模式是url没有#号，比较美观，
        // 如果是默认的hash模式就会有#号（锚点） 
        // history部署到后台，会有额外的配置
        // mode:"history",
        base: process.env.BASE_URL,
        routes
    })
    // 路由守卫控制是否能访问不同页面
router.beforeEach((to, from, next) => {
    if (to.path === "/login") {
        next(); //就直接跳转就行
    } else {
        let token = localStorage.getItem("token");
        if (token) {
            next(); //正常访问
        } else {
            next("/login")
        }
    }
})

export default router