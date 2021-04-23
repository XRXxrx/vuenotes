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
            component: () =>
                import ('@/components/day07/managers/login.vue')
        },
        {
            name: 'index',
            path: '/index',
            redirect: { name: 'userManager' },
            component: () =>
                import ('@/components/day07/managers/index.vue'),
            children: [{
                    name: 'userManager',
                    path: 'userManager',
                    component: () =>
                        import ('@/components/day07/managers/userManager.vue')
                },
                {
                    name: 'roleManager',
                    path: 'roleManager',
                    component: () =>
                        import ('@/components/day07/managers/roleManager.vue')
                },
                {
                    name: 'shopManager',
                    path: 'shopManager',
                    component: () =>
                        import ('@/components/day07/managers/shopManager.vue')
                },
                {
                    name: 'ddManager',
                    path: 'ddManager',
                    component: () =>
                        import ('@/components/day07/managers/ddManager.vue')
                },
                {
                    name: 'sysManager',
                    path: 'sysManager',
                    component: () =>
                        import ('@/components/day07/managers/sysManager.vue')
                },
                {
                    name: 'userinfo',
                    // path: 'userinfo/:id',
                    path: 'userinfo',
                    component: () =>
                        import ('@/components/day07/managers/userinfo.vue')
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()
    } else {
        let token = localStorage.getItem('token');
        if (token) {
            next()
        } else {
            next({ name: 'login' })
        }
    }
})
export default router;