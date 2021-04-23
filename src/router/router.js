//路由管理文件

//工程化-模块化
import Vue from 'vue'
import VueRouter from 'vue-router'
//明确安装路由功能
Vue.use(VueRouter)

// 引入路由映射所需要的文件,模块一加载就渲染-浪费资源
import index from '../components/day07/router-ui/index.vue'

// 创建路由模块对象
const router = new VueRouter({
        //设置被激活链接样式的类名
        linkActiveClass: 'my-router-active',
        // 通过routers添加路由配置，他是一个数组
        routes: [
            // 添加一个一个的具体的路由配置，主要实现：url（地址）和组件的映射关系
            // 他是一个对象，常见的配置：
            // path:路由路径
            // component:所映射的组件对象，不是一个字符串
            {
                path: '/',
                redirect: { name: 'login' }
            },
            {
                name: 'login',
                path: '/login',
                component: () =>
                    import ('../components/day07/router-ui/login.vue')
            },
            {
                name: 'index',
                path: '/index',
                component: index,

            },
            {
                path: '/school/:id',
                component: () =>
                    //异步加载-延迟加载
                    import ('@/components/day07/router-ui/school.vue'),
                props: true,
                redirect: { name: 'intro' },
                //添加嵌套路由
                children: [{
                        name: 'intro',
                        path: 'intro',
                        component: () =>
                            import ('../components/day07/router-ui/intro.vue')
                    },
                    {
                        name: 'employ',
                        path: 'employ',
                        component: () =>
                            import ('../components/day07/router-ui/employ.vue')
                    }
                ]
            }
        ]
    })
    // 添加全局前置守卫，判断当前的路由跳转是否能够跳转，如果不能跳转，应该如何处理
    // beforeEach：会在每次路由跳转时触发
    // to:你要跳转的目标路由
    // from:你的路由的来源
    // next:如果没有next,则跳转会中止，意味着一定要保证会执行next,它就是指下一步操作（做什么 ）
router.beforeEach((to, from, next) => {
        // console.log(to);
        if (to.path === '/login') {
            next()
        } else {
            let token = localStorage.getItem('mytoken')
            if (token) {
                next()
            } else {
                next({ name: 'login' })
            }
        }
    })
    //暴露
export default router;