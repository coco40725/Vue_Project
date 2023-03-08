import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        component: () => import('@/components/Home.vue'),
        children: [
            {
                path: '/home/news', // 代表的是 /home/news
                component: () => import('@/components/News.vue')
            },
            {
                path: '/home/message',
                component: () => import('@/components/Message.vue'),
                children: [
                    {
                        name: 'messageDetail',
                        path: '/home/message/detail/:idParams/:titleParams',
                        component: () => import('@/components/Detail.vue'),
                        // props 用於接受來自父層 (從 router-link 那裏) 傳入的資料
                        props($route) {
                            return{
                                id: $route.query.id,
                                title: $route.query.title,
                                idParams: $route.params.idParams,
                                titleParams: $route.params.titleParams
                            }
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '/about',
        component: () => import('@/components/About.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router