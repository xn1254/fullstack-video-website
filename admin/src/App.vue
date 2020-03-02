<!--
 * @Author: your name
 * @Date: 2020-02-29 14:07:35
 * @LastEditTime: 2020-03-02 13:27:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\admin\src\App.vue
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
}
</script>

<style>
body {
  margin: 0
}
.avue-upload_avatar{
  height: auto !important;
}
</style>
