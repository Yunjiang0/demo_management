<!-- 主页组件 -->

<template>
  <el-row :gutter="0">
    <el-alert :title="'基于 vue ' +
      dependencies['vue'] +
      ' + vite ' +
      devDependencies['vite'] +
      ' + vue-router ' +
      dependencies['vue-router'] +
      ' + element-plus ' +
      dependencies['element-plus'] +
      ' demo页面管理系统'" type="success" show-icon />
  </el-row>

  <el-row :gutter="20">
    <el-col :span="12" :offset="0">
      <el-table :data="moduleData" stripe style="width: 100%">
        <el-table-column prop="module" label="组件" width="180" />
        <el-table-column prop="version" label="版本号" width="180" />
      </el-table>
    </el-col>
    <el-col :span="12" :offset="0">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="type" label="统计类型" width="180" />
        <el-table-column prop="content" label="内容" width="180" />
      </el-table>
    </el-col>
  </el-row>
</template>
<script setup>
import { dependencies, devDependencies } from '../../package.json'
import { pathNumber } from '../router/index.js'
const tableData = [
  {
    type: '页面数量',
    content: pathNumber,
  },
]
const moduleData = [
  {
    module: 'vue',
    version: [dependencies['vue']],
  },
  {
    module: 'vite',
    version: [devDependencies['vite']],

  },
  {
    module: 'vue-router',
    version: [dependencies['vue-router']],

  },
  {
    module: 'element-plus',
    version: [dependencies['element-plus']],
  },
]
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>