<!--
 * @Author: your name
 * @Date: 2020-03-03 14:56:32
 * @LastEditTime: 2020-03-03 15:58:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\web\pages\courses\_id.vue
 -->
<template>
  <div>
    <h3>课程详情</h3>
    <v-select
      v-model="currentIndex"
      :items="
        courses.episode.map((item, index) => ({
          text: item.name,
          value: index
        }))
      "
    ></v-select>
    <video width="100%" :src="episode.file" controls></video>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const { id } = params
    const courses = await $axios.$get(`courses/${id}`, {
      params: {
        query: {
          populate: 'episode'
        }
      }
    })
    return {
      courses
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    episode() {
      return this.courses.episode[this.currentIndex]
    }
  }
}
</script>
<style scoped></style>
