import { createRouter, createWebHashHistory } from 'vue-router'
// router配置文件

const routes = [
    {
        path: '/',
        alias: '/index',
        name: 'index',
        component: () => import('../components/centent.vue')
    },
    {
        path: '/demoList',
        name: 'demoList',
        component: () => import('@/view/demoList/index.vue')
    },
    {
        path: '/projectList',
        name: 'projectList',
        component: () => import('@/view/projectList/index.vue')
    },
    // {
    //     path: '/examine',
    //     name: 'examine',
    //     component: () => import('@/view/examine/index.vue')
    // },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// 全局路由拦截器
// router.beforeEach((to, from, next) => {
//     if (localStorage.getItem('token')) {
//         next()
//     } else if (to.name == "login") {
//         next()
//     }
//     else {
//         router.push('login')
//     }
// })
let pathNumber = routes.length

export { router, pathNumber }