import { basicRoutes } from './routes';

import {
  createRouter,
  createWebHistory,
  RouteLocationRaw,
  RouteRecordRaw,
} from 'vue-router';

const history = createWebHistory();
// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = [];
const getRouteNames = (array: any[]) =>
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name);
    getRouteNames(item.children || []);
  });
getRouteNames(basicRoutes);

//app-router
const router = createRouter({
  history,
  routes: basicRoutes,
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export default router;
