/*
 * @Author: your name
 * @Date: 2020-02-29 14:07:35
 * @LastEditTime: 2020-03-02 13:20:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\admin\src\main.ts
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.ts';
import './plugins/avue.js';
import axios from 'axios';

Vue.config.productionTip = false;
const http = axios.create({
  baseURL: 'http://localhost:3000',
});
// 修改Avue内置文件上传地址
Vue.prototype.$httpajax = http;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
