/*
 * @Author: your name
 * @Date: 2020-02-29 14:07:35
 * @LastEditTime: 2020-03-01 20:07:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\admin\src\router\index.ts
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Main from '../views/Main.vue';
import Home from '../views/Home.vue';
import ResourceCrud from '../components/ResourceCrud.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      {
        name: 'home',
        path: '/',
        component: Home,
      },
      {
        name: 'courses-crud',
        path: '/:resource/list',
        component: ResourceCrud,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
