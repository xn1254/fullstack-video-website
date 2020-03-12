/*
 * @Author: your name
 * @Date: 2020-02-29 14:07:35
 * @LastEditTime: 2020-03-03 21:12:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\admin\src\router\index.ts
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    children: [
      {
        name: 'home',
        path: '/',
        component: () => import('../views/Home.vue'),
      },
      {
        name: 'courses-crud',
        path: '/:resource/list',
        component: () => import('../components/ResourceCrud.vue'),
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
