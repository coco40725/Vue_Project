// 該文件專門用於創建整個應用的 路由器
import { createRouter, createWebHashHistory } from 'vue-router'

// 創建路由
const routes = [
    {
        // 路徑 (不包含 ip 與 port)
        path: "/about",
        // 此路由的名稱
        name: "About",
        // 組件
        component: () => import("@/components/About.vue")

    },
    {
        // 路徑 (不包含 ip 與 port)
        path: "/home",
        // 此路由的名稱
        name: "Home",
        // 組件
        component: () => import("@/components/Home.vue")
    }
]

// 創建路由器
const router = createRouter({
    // 網址路徑模式：使用網址 hash(#/) 的形式
    // http://127.0.0.1:5501/router/vue-router.html#/
    history: createWebHashHistory(),
    routes
})

export default router