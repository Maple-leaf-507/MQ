<template>
  <div class="avatar">
    <img
      src="@/assets/images/avatar.jpg"
      mode="scaleToFill"
      class="img"
    >

  </div>

  <div class="article-list">
    <div v-for="item in articleList" class="article-item">
      {{ item.title }}

      <div>
        时间：{{item.createTime}}
      </div>

      <div>
        简介：{{item.intro}}
      </div>
    </div>
  </div>
 
</template>

<script lang="ts" setup>
import { articleList } from './data'
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>