<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="0"></el-col>
    <el-col :span="12" :offset="0"></el-col>
  </el-row>

  <!-- 布局 -->
  <!-- 左右两栏 -->
  <el-row :gutter="0" justify="center">
    <el-col :span="4" :offset="0">
      <el-menu router="true" default-active="/" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <!-- <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu> -->
        <el-menu-item index="/" v-on:click="">
          <el-icon>
            <setting />
          </el-icon>
          <span>概况</span>
        </el-menu-item>
        <!-- <router-link to="/pages/examine"> -->
        <el-menu-item index="/demoList">
          <el-icon><icon-menu /></el-icon>
          <span>练习demo列表</span>
        </el-menu-item>
        <!-- </router-link> -->


        <el-menu-item index="/projectList">
          <el-icon>
            <document />
          </el-icon>
          <span>工程列表</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <el-icon>
            <Location />
          </el-icon>
          <span>Undefined</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18" :offset="0">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>
<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import centent from "./components/centent.vue"
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  padding: 10px;
}
</style>