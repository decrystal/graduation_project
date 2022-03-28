import AppMain  from '@/layout/components/AppMain.vue';
import Layout from '@/layout/index.vue'
import {createRouter, createWebHistory,RouteLocationRaw,RouteRecordRaw} from 'vue-router'

const history = createWebHistory()
const routes:Array<RouteRecordRaw>  = [{
    path:'/home',
    name:'home',
    component:() => import('../app.vue')
},{
    path:'/layout',
    name:'layout',
    component: AppMain,
    // children: [
    //     {
    //         name:'test',
    //         path: '/test',
    //         component: () =>
    //         import(/* webpackChunkName: "layout" */ "./test.vue"),
    //     }
    // ]
}]

const router = createRouter({
    history,
    routes
})

export default router;