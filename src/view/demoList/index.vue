<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed="left" prop="ID" label="ID" width="60" />
        <el-table-column prop="date" label="日期" width="120" />
        <el-table-column prop="title" label="标题" width="150" />
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
        <el-table-column prop="link" label="链接" width="200">
            <template #default="scope">
                <el-link type="primary" :underline="false" :href=[scope.row.Download] target="_blank">{{ scope.row.Download
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
        date: '2023-10-18',
        title: '背景图使用',
        tag: '课堂练习',
        link: '/public/demo/背景图使用/index.html',
        Download: '/public/demo/背景图使用/index.zip',
    },
    {
        ID: '2',
        date: '2023-10-20',
        title: '玻璃划过',
        tag: '',
        link: '/public/demo/玻璃划过/index.html',
        Download: '/public/demo/玻璃划过/index.zip',
    },
    {
        ID: '3',
        date: '2023-10-20',
        title: '海洋球',
        tag: '',
        link: '/public/demo/海洋球/index.html',
        Download: '/public/demo/海洋球/index.zip',
    },
    {
        ID: '4',
        date: '2023-10-20',
        title: '聚光灯',
        tag: '',
        link: '/public/demo/聚光灯/index.html',
        Download: '/public/demo/聚光灯/index.zip',
    },
    {
        ID: '5',
        date: '2023-10-20',
        title: '流光按钮',
        tag: '',
        link: '/public/demo/流光按钮/index.html',
        Download: '/public/demo/流光按钮/index.zip',
    },
    {
        ID: '6',
        date: '2023-10-20',
        title: '评价交互特效',
        tag: '',
        link: '/public/demo/评价交互特效/index.html',
        Download: '/public/demo/评价交互特效/index.zip',
    },
    {
        ID: '7',
        date: '2023-10-20',
        title: '手风琴',
        tag: '',
        link: '/public/demo/手风琴/index.html',
        Download: '/public/demo/手风琴/index.zip',
    },
    {
        ID: '8',
        date: '2023-10-20',
        title: '新拟态效果',
        tag: '',
        link: '/public/demo/新拟态效果/index.html',
        Download: '/public/demo/新拟态效果/index.zip',
    },
    {
        ID: '9',
        date: '2023-10-20',
        title: '选项卡',
        tag: '',
        link: '/public/demo/选项卡/index.html',
        Download: '/public/demo/选项卡/index.zip',
    },
    {
        ID: '10',
        date: '2023-10-20',
        title: '重力球',
        tag: '',
        link: '/public/demo/重力球/index.html',
        Download: '/public/demo/重力球/index.zip',
    },
    {
        ID: '11',
        date: '2023-10-20',
        title: '昼夜交替效果',
        tag: '',
        link: '/public/demo/昼夜交替效果/index.html',
        Download: '/public/demo/昼夜交替效果/index.zip',
    },

])
</script>