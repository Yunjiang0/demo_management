<template>
  <!-- 布局 -->
  <el-container>
    <el-header>
      <el-menu default-active="2" class="el-menu-demo" mode="horizontal" :ellipsis="false">
        <el-menu-item index="0" style="border: none;">
          <img class="logo" src="../public/咖啡.svg" alt="">
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item @click="toRescue('http://43.143.225.216/')" index="1">导航主站</el-menu-item>
        <el-menu-item @click="toRescue('http://43.143.225.216:5736')" index="2">demo管理</el-menu-item>
        <el-menu-item index="3">
          <span @click.stop="toggleDark()">暗黑模式</span>
          <el-switch size="small" v-model="isDark" />
        </el-menu-item>
        <el-col :xs="0" :sm="0" :md="1" :lg="1" :xl="2"></el-col>

      </el-menu>

    </el-header>

    <el-container>
      <el-col :xs="0" :sm="0" :md="1" :lg="1" :xl="2"></el-col>
      <el-aside width="200px">
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
      </el-aside>
      <el-col :xs="0" :sm="0" :md="1" :lg="1" :xl="2"></el-col>

      <el-main>
        <router-view></router-view>

      </el-main>
      <el-col :xs="0" :sm="0" :md="1" :lg="1" :xl="2"></el-col>

    </el-container>
  </el-container>
  <!-- 左右两栏 -->
  <el-row :gutter="0" justify="center">


  </el-row>
</template>
<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
function toRescue(url) {
  window.location.href = url;
}
// // document.documentElement 是全局变量时
// const el = document.documentElement
// // const el = document.getElementById('xxx')

// // 获取 css 变量
// getComputedStyle(el).getPropertyValue(`--el-color-primary`)

// // 设置 css 变量
// el.style.setProperty('--el-color-primary', 'red')
</script>
<style scoped>
:root {
  --el-color-primary: green;
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  padding: 10px;
}

.flex-grow {
  flex-grow: 1
}

.logo {
  height: 50px;
}
</style>