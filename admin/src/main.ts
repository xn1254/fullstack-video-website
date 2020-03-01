/*
 * @Author: your name
 * @Date: 2020-02-29 14:07:35
 * @LastEditTime: 2020-03-01 15:52:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\admin\src\main.ts
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import EleForm from 'vue-ele-form';
import './plugins/element.ts';
import './plugins/avue.js';

Vue.config.productionTip = false;
// Vue.use(EleForm);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
