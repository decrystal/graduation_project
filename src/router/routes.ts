import {
  createRouter,
  createWebHistory,
  RouteLocationRaw,
  RouteRecordRaw,
} from 'vue-router';

import AppMain from '@/layout/components/AppMain.vue';
import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../app.vue'),
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: [
      {
        name: 'test',
        path: 'test',
        component: () => import(/* webpackChunkName: "layout" */ '@/test.vue'),
      },
      {
        name: 'productList',
        path: 'productList',
        component: () =>
          import(
            /* webpackChunkName: "layout" */ '@/layout/pages/ProductList.vue'
          ),
      },
      {
        name: 'product',
        path: 'product',
        component: () =>
          import(/* webpackChunkName: "layout" */ '@/layout/pages/Product.vue'),
      },
    ],
    meta: {
      showHeader: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../layout/pages/Login.vue'),
    meta: {
      showHeader: false,
    },
  },
  // {
  //     path: '/ProductList',
  //     name: 'ProductList',
  //     component: () => import('../layout/pages/ProductList.vue'),
  //     meta:{
  //         showHeader:true
  //     }
  // }
];

export const basicRoutes = routes;
