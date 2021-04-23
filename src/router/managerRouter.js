import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    linkActiveClass: 'my-link-active',
    routes: [{
            path: '/',
            redirect: { name: 'index' }
        },
        {
            name: 'login',
            path: '/login',
            //@表示src目录
            component: () =>
                import ('@/components/day07/manager/login.vue')
        },
        {
            name: 'index',
            path: '/index',
            redirect: { name: 'userManager' },
            component: () =>
                import ('@/components/day07/manager/index.vue'),
            children: [{
                    name: 'userManager',
                    path: 'userManager',
                    component: () =>
                        import ('@/components/day07/manager/userManager.vue')
                },
                {
                    name: 'roleManager',
                    path: 'roleManager',
                    component: () =>
                        import ('@/components/day07/manager/roleManager.vue')
                },
                {
                    name: 'shopManager',
                    path: 'shopManager',
                    component: () =>
                        import ('@/components/day07/manager/shopManager.vue')
                },
                {
                    name: 'orderManager',
                    path: 'orderManager',
                    component: () =>
                        import ('@/components/day07/manager/orderManager.vue')
                },
                {
                    name: 'sysManager',
                    path: 'sysManager',
                    component: () =>
                        import ('@/components/day07/manager/sysManager.vue')
                },
                {
                    name: 'userinfo',
                    path: 'userinfo/:id',
                    component: () =>
                        import ('@/components/day07/manager/userinfo.vue')
                }
            ]
        }
    ]
})

//添加导航前置守卫
router.beforeEach((to, from, next) => {
    // console.log(to);
    if (to.path === '/login') {
        next()
    } else {
        let token = localStorage.getItem('token')
        if (token) {
            next()
        } else {
            next({ name: 'login' })
        }
    }

})
export default router;