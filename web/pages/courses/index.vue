<!--
 * @Author: your name
 * @Date: 2020-03-02 21:17:01
 * @LastEditTime: 2020-03-03 15:43:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\web\pages\courses\index.vue
 -->
<template>
  <div>
    <h3 class="pa-3">热门课程</h3>
    <v-row>
      <v-col v-for="item in courses" :key="item._id" md="4">
        <v-card :to="`courses/${item._id}`" class="mx-auto" max-width="344">
          <v-img :src="item.cover" height="200px"></v-img>

          <v-card-title>
            {{ item.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ item.createdAt }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn text>Share</v-btn>

            <v-btn color="purple" text>
              Explore
            </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  // nuxt需要通过异步请求先获取数据再渲染到模板上
  async asyncData({ $axios }) {
    const data = await $axios.$get('courses')
    return {
      courses: data.data
    }
  }
}
</script>
<style lang="" scoped></style>
