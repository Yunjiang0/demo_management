<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed="left" prop="ID" label="ID" width="60" />
        <el-table-column prop="date" label="日期" width="120" />
        <el-table-column prop="title" label="标题" width="250" />
        <el-table-column prop="tag" label="标签" width="150">
            <template #default="scope">
                <el-tag v-if="scope.row.tag != ''" size="normal" effect="dark">{{ scope.row.tag }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="link" label="链接" width="200">
            <template #default="scope">
                <el-link type="primary" :underline="false" :href=[scope.row.link] target="_blank">{{ scope.row.link
                }}</el-link>

            </template>
        </el-table-column>
    </el-table>
</template>
<script setup>
import { reactive } from 'vue'
let tableData = reactive([
    {
        ID: '1',
        date: '2023-10-20',
        title: '当前工程(需要有npm环境运行)',
        tag: '当前工程',
        link: 'https://github.com/Yunjiang0/demo_management',
    },
])
</script>