/**
 * @file 路由配置
 * @desc 路由懒加载
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import examplePath from '@/component/example';

Vue.use(VueRouter);

const route: RouteConfig[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/App.vue')
    }
];

const routes: RouteConfig[] = route.concat(examplePath);

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;