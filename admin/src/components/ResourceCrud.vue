<!--
 * @Author: your name
 * @Date: 2020-02-29 15:09:05
 * @LastEditTime: 2020-03-02 17:13:10
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
    :page="page"
    @row-save="create"
    @row-update="update"
    @row-del="remove"
    @on-load="changePage"
    @sort-change="changeSort"
    @search-change="search"
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
    public option: any = {};
    public page = {
        total: 0,
        pageSize: 2,
        pageSizes: [2, 5, 10],
    };
    public query: any = {
        limit: 2,
    };
    public async changePage({ pageSize, currentPage }) {
        this.query.page = currentPage;
        this.query.limit = pageSize;
        this.fetch();
    }
    public async changeSort({prop, order}) {
        if (!order) {
            this.query.sort === null;
        } else {
            this.query.sort = {
                [prop]: order === 'ascending' ? 1 : -1,
            };
        }
        this.fetch();
    }
    public async search(where, done) {
        for (const k of Object.keys(where)) {
            const field = this.option.column.find((item) => item.prop === k);
            if (field.regex) {
                where[k] = {
                    $regex: where[k],
                };
            }
        }
        this.query.where = where;
        await this.fetch();
        done();
    }
    public async fetch() {
        const res: any = await getResourceList(this.resource, this.query);
        this.data = res.data;
        this.page.total = res.data.total;
    }
    public async created() {
        this.fetch();
        const res = await getResourception(this.resource);
        this.option = res.data;
    }
    public async create(row, done) {
        const method = 'POST';
        await createResource(this.resource, method, row);
        this.$message.success('保存成功');
        this.fetch();
        done();
    }
    public async update(row, index, done) {
        const data = JSON.parse(JSON.stringify(row));
        delete data.$index;
        const method = 'PUT';
        await createResource(this.resource, method, data, data._id);
        this.$message.success('保存成功');
        this.fetch();
        done();
    }
    public async remove(row) {
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