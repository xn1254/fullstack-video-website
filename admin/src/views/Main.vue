<!--
 * @Author: your name
 * @Date: 2020-02-29 14:19:20
 * @LastEditTime: 2020-03-01 20:04:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\admin\src\views\main.vue
 -->
<template>
  <el-container>
    <el-aside width="200px">
      <el-menu mode="vertical" style="height: 100vh" :default-active="$route.path" router>
        <el-submenu v-for="(item, index) in menu.items"
          :index="`menu-item-${index}`"
          :key="`menu-item-${index}`">
          <template slot="title">{{item.title}}</template>
          <el-menu-item v-for="(subItem, subIndex) in item.items"
            :key="`menu-item-subitem-${subIndex}`"
            :index="subItem.path">
              {{subItem.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
      
    </el-aside>
    <el-container>
      <el-header>
        <h3>后台管理界面</h3>
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts'>
import {Vue} from 'vue-property-decorator';

export default class Main extends Vue {
  public menu = {
    items: [
      {
        title: '内容管理',
        items: [
          { title: '首页', path: '/'},
          { title: '课程管理', path: '/courses/list'},
          { title: '课时管理', path: '/episodes/list'},
        ],
      },
      {
        title: '运营管理',
        items: [
          { title: '用户管理', path: '/users/list'},
        ],
      },
    ],
  };
}
</script>

<style scoped>
</style>
