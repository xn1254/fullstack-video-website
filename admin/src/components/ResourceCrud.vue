<!--
 * @Author: your name
 * @Date: 2020-02-29 15:09:05
 * @LastEditTime: 2020-03-01 19:50:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\admin\src\views\courses\CoursesList.vue
 -->
<template>
  <div>
    <avue-crud 
    v-if="option.column"
    :data="data.data"
    :option="option"
    @row-save="create"
    @row-update="update"
    @row-del="remove"
    ></avue-crud>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { getResourceList, getResourception, createResource, deleteResource } from '@/api/courseList';

@Component({})
export default class ResourseList extends Vue {
    @Prop(String) public resource!: string;
    public data = {};
    public option = {};
    public async fetch() {
        const res: any = await getResourceList(this.resource);
        this.data = res.data;
    }
    public async created() {
        this.fetch();
        const res = await getResourception(this.resource);
        this.option = res.data;
    }
    public async create(row: any, done: any) {
        const method = 'POST';
        await createResource(this.resource, method, row);
        this.$message.success('保存成功');
        this.fetch();
        done();
    }
    public async update(row: any, index: any, done: any) {
        const data = JSON.parse(JSON.stringify(row));
        delete data.$index;
        const method = 'PUT';
        await createResource(this.resource, method, data, data._id);
        this.$message.success('保存成功');
        this.fetch();
        done();
    }
    public async remove(row: any, index: any) {
        try {
            await this.$confirm('是否确认删除?');
        } catch (e) {
            return;
        }
        await deleteResource(this.resource, row._id);
        this.$message.success('删除成功');
        this.fetch();
    }
}

</script>

<style scoped>
</style>